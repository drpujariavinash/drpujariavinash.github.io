import { mkdir, writeFile, readFile, copyFile } from "node:fs/promises";
import { pages, topics } from "../content/pages.mjs";
const base = "https://drpujariavinash.com";
const esc = (s) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const nav = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["specialities.html", "Cancer Surgery"],
  ["patient-resources.html", "Patient Guides"],
  ["research-academics.html", "Research & Academics"],
  ["contact.html", "Contact"],
];
const url = (f) => base + (f === "index.html" ? "/" : "/" + f);
const person = {
  "@type": "Person",
  "@id": base + "/#person",
  name: "Dr Avinash Pujari",
  url: base + "/",
  jobTitle: "Assistant Professor, Surgical Oncology",
  worksFor: { "@type": "CollegeOrUniversity", name: "Goa Medical College" },
  alumniOf: [
    { "@type": "Organization", name: "Tata Memorial Hospital, Mumbai" },
    { "@type": "CollegeOrUniversity", name: "Goa Medical College" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "MCh Surgical Oncology",
    },
    { "@type": "EducationalOccupationalCredential", name: "MRCS" },
    {
      "@type": "EducationalOccupationalCredential",
      name: "MS General Surgery — Gold Medalist",
    },
  ],
  image: base + "/assets/profile-800.webp",
};
export const topicLinks = () =>
  topics
    .map(
      (p, i) =>
        `<a class="speciality" href="/${p.file}"><span class="number">0${i + 1}</span><div><h3>${p.title}</h3><p>${p.short}</p></div><span aria-hidden="true">↗</span></a>`,
    )
    .join("");
await mkdir("dist", { recursive: true });
for (const p of pages) {
  const home = p.file === "index.html";
  const graph = [
    person,
    {
      "@type": "WebSite",
      "@id": base + "/#website",
      url: base + "/",
      name: "Dr Avinash Pujari",
      inLanguage: "en-IN",
      publisher: { "@id": base + "/#person" },
    },
  ];
  if (!home)
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
        ...(p.topic
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: "Cancer Surgery",
                item: base + "/specialities.html",
              },
            ]
          : []),
        {
          "@type": "ListItem",
          position: p.topic ? 3 : 2,
          name: p.title,
          item: url(p.file),
        },
      ],
    });
  const content = p.body.replaceAll("{{TOPICS}}", topicLinks());
  let html = `<!DOCTYPE html>
<html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(p.seo || p.title + " | Dr Avinash Pujari, Goa")}</title><meta name="description" content="${esc(p.description)}"><link rel="canonical" href="${url(p.file)}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(p.seo || p.title + " | Dr Avinash Pujari")}"><meta property="og:description" content="${esc(p.description)}"><meta property="og:url" content="${url(p.file)}"><meta property="og:site_name" content="Dr Avinash Pujari"><meta property="og:locale" content="en_IN"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${esc(p.title + " | Dr Avinash Pujari")}"><meta name="twitter:description" content="${esc(p.description)}"><meta name="theme-color" content="#203e38"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/style.css"><script src="/menu.js" defer></script><script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c")}</script></head>
<body><a class="skip" href="#main">Skip to content</a><header class="masthead"><nav class="nav wrap" aria-label="Main navigation"><a class="brand" href="/" aria-label="Dr Avinash Pujari — home"><strong>Dr Avinash Pujari</strong><span>Surgical Oncology · Goa</span></a><button class="menu" type="button" aria-expanded="false" aria-controls="navigation">Menu</button><div class="links" id="navigation" data-open="false">${nav.map(([file, label]) => `<a href="/${file}"${file === p.file ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</div></nav></header>
<main id="main">${home ? content : `<div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li>${p.topic ? '<li><a href="/specialities.html">Cancer Surgery</a></li>' : ""}<li aria-current="page">${p.title}</li></ol></nav><header class="page-head"><p class="eyebrow">${p.label || "Surgical Oncology · Goa"}</p><h1>${p.title}</h1><p class="lead">${p.description}</p></header><div class="article-layout"><div class="prose">${content}</div><aside class="aside"><p class="eyebrow">Plan your visit</p><h2>A clearer conversation</h2><p>Bring your reports, a treatment summary and the questions that matter to you.</p><a href="/patient-resources.html">Prepare for a consultation →</a><a href="/second-opinion.html">Understanding a second opinion →</a><a href="/contact.html">Contact details →</a></aside></div></div>`}</main>
<footer class="footer"><div class="wrap"><div class="footer-top"><div><div class="footer-title">Dr Avinash Pujari</div><p>Assistant Professor, Surgical Oncology<br>Goa Medical College</p></div><div><a href="/contact.html">Contact &amp; consultation</a><br><a href="/for-doctors.html">Information for referring doctors</a></div><div><a href="/patient-resources.html">Patient Guides</a><br><a href="/research-academics.html">Research &amp; Academics</a></div></div><div class="footer-bottom"><span>© 2026 Dr Avinash Pujari</span><span>General information. This website does not replace an individual medical consultation.</span></div></div></footer></body></html>\n`;
  html = html.replace(
    /<script[\s\S]*?<\/script>|&(?![a-zA-Z]+;|#\d+;|#x[0-9a-fA-F]+;)/g,
    (m) => (m === "&" ? "&amp;" : m),
  );
  await writeFile(p.file, html);
  await writeFile("dist/" + p.file, html);
}
const redirects = {
  "crs-hipec.html": "peritoneal-cancers-hipec.html",
  "head-neck.html": "head-neck-cancers.html",
  "gynecologic-cancers.html": "gynec-cancers.html",
  "blog.html": "patient-resources.html",
  "notebook.html": "patient-resources.html",
  "testimonials.html": "patient-resources.html",
  "contact/index.html": "contact.html",
};
for (const [file, target] of Object.entries(redirects)) {
  const html = `<!DOCTYPE html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page moved | Dr Avinash Pujari</title><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=/${target}"><link rel="canonical" href="${url(target)}"><link rel="stylesheet" href="/style.css"></head><body><main class="wrap section"><h1>This page has moved</h1><p><a href="/${target}">Continue to ${esc(pages.find((p) => p.file === target).title)}</a>.</p></main></body></html>\n`;
  if (file.includes("/")) {
    await mkdir("contact", { recursive: true });
    await mkdir("dist/contact", { recursive: true });
  }
  await writeFile(file, html);
  await writeFile("dist/" + file, html);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${url(p.file)}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile("sitemap.xml", sitemap);
await writeFile("dist/sitemap.xml", sitemap);
await writeFile(
  "404.html",
  '<!DOCTYPE html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | Dr Avinash Pujari</title><link rel="stylesheet" href="/style.css"></head><body><main class="wrap section"><p class="eyebrow">Dr Avinash Pujari</p><h1>Page not found</h1><p>The address may have changed. You can return to the homepage or browse Patient Guides.</p><div class="actions"><a class="button" href="/">Return home</a><a href="/patient-resources.html">Patient Guides</a></div></main></body></html>',
);
await writeFile(
  "contact-old.txt",
  "Contact information has moved to https://drpujariavinash.com/contact.html\n",
);
await writeFile(".nojekyll", "");
for (const file of [
  "style.css",
  "menu.js",
  "favicon.svg",
  "robots.txt",
  "CNAME",
  ".nojekyll",
  "404.html",
  "contact-old.txt",
  "profile.png",
])
  await copyFile(file, "dist/" + file);
await mkdir("dist/assets", { recursive: true });
for (const width of [400, 800])
  await copyFile(
    `assets/profile-${width}.webp`,
    `dist/assets/profile-${width}.webp`,
  );
console.log(
  `Built ${pages.length} canonical pages, ${Object.keys(redirects).length} legacy redirects, and 404 page. CNAME: ${(await readFile("CNAME", "utf8")).trim()}`,
);
