import { readFile, readdir, stat } from "node:fs/promises";
import { parse } from "parse5";
import { HtmlValidate } from "html-validate";
import assert from "node:assert/strict";
import { pages } from "../content/pages.mjs";
const root = "dist",
  origin = "https://drpujariavinash.com";
const files = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? files(dir + "/" + e.name) : dir + "/" + e.name,
      ),
    )
  ).flat();
};
const all = await files(root),
  htmls = all.filter((f) => f.endsWith(".html")),
  docs = new Map();
const walk = (n) => [n, ...(n.childNodes || []).flatMap(walk)];
const attr = (n, key) => n.attrs?.find((a) => a.name === key)?.value;
const validator = new HtmlValidate({
  extends: ["html-validate:recommended"],
  rules: {
    "void-style": ["error", { style: "omit" }],
    "no-trailing-whitespace": "off",
    "long-title": "off",
    "prefer-native-element": "off",
  },
});
let count = 0;
for (const file of htmls) {
  const html = await readFile(file, "utf8");
  const result = await validator.validateString(html, file);
  assert(
    result.valid,
    JSON.stringify(
      result.results.flatMap((r) => r.messages),
      null,
      2,
    ),
  );
  const nodes = walk(parse(html));
  docs.set(file, nodes);
  assert.equal(
    nodes.filter((n) => n.tagName === "h1").length,
    1,
    file + " requires one H1",
  );
  assert(
    attr(
      nodes.find((n) => n.tagName === "html"),
      "lang",
    ),
    file + " language",
  );
  assert(
    nodes.some((n) => n.tagName === "meta" && attr(n, "name") === "viewport"),
    file + " viewport",
  );
  assert(
    !/Apple Cancer Institute|Kolhapur|500\+|coming soon|placeholder|onclick=|href="#"/i.test(
      html,
    ),
    file + " stale content",
  );
  const ids = nodes.map((n) => attr(n, "id")).filter(Boolean);
  assert.equal(ids.length, new Set(ids).size, file + " duplicate ids");
  for (const n of nodes.filter((n) => n.tagName === "img")) {
    assert(attr(n, "alt"));
    assert(attr(n, "width"));
    assert(attr(n, "height"));
  }
  let level = 0;
  for (const n of nodes.filter((n) => /^h[1-6]$/.test(n.tagName || ""))) {
    const next = Number(n.tagName[1]);
    assert(next <= level + 1, file + " heading skip");
    level = next;
  }
}
for (const [file, nodes] of docs) {
  for (const n of nodes) {
    const refs = [
      attr(n, "href"),
      attr(n, "src"),
      ...(attr(n, "srcset") || "")
        .split(",")
        .filter(Boolean)
        .map((s) => s.trim().split(/\s+/)[0]),
    ].filter(Boolean);
    for (const ref of refs) {
      if (/^(tel:|mailto:|data:)/.test(ref)) continue;
      const u = new URL(ref, origin + "/" + file.slice(root.length + 1));
      if (u.origin !== origin) continue;
      const target =
        root +
        decodeURIComponent(u.pathname) +
        (u.pathname.endsWith("/") ? "index.html" : "");
      assert(all.includes(target), `${file}: broken link ${ref}`);
      if (u.hash && docs.has(target))
        assert(
          docs
            .get(target)
            .some((n) => attr(n, "id") === decodeURIComponent(u.hash.slice(1))),
          `${file}: missing fragment ${ref}`,
        );
      count++;
    }
  }
}
const canonicalUrls = [];
for (const p of pages) {
  const file = root + "/" + p.file,
    nodes = docs.get(file);
  const expected = origin + (p.file === "index.html" ? "/" : "/" + p.file);
  const canonical = nodes.filter(
    (n) => n.tagName === "link" && attr(n, "rel") === "canonical",
  );
  assert.equal(canonical.length, 1);
  assert.equal(attr(canonical[0], "href"), expected);
  canonicalUrls.push(expected);
  assert(
    nodes.some(
      (n) =>
        n.tagName === "meta" &&
        attr(n, "name") === "description" &&
        attr(n, "content"),
    ),
  );
  for (const key of ["og:title", "og:description", "og:url"])
    assert(nodes.some((n) => attr(n, "property") === key));
  for (const key of ["twitter:card", "twitter:title", "twitter:description"])
    assert(nodes.some((n) => attr(n, "name") === key));
  const scripts = nodes.filter(
    (n) => n.tagName === "script" && attr(n, "type") === "application/ld+json",
  );
  assert.equal(scripts.length, 1);
  const schema = JSON.parse(
    scripts[0].childNodes.map((n) => n.value || "").join(""),
  );
  assert.equal(schema["@context"], "https://schema.org");
  assert(schema["@graph"].some((x) => x["@type"] === "Person"));
  assert(schema["@graph"].some((x) => x["@type"] === "WebSite"));
  if (p.file !== "index.html") {
    const crumbs = schema["@graph"].find(
      (x) => x["@type"] === "BreadcrumbList",
    );
    assert(crumbs);
    crumbs.itemListElement.forEach((x, i) => assert.equal(x.position, i + 1));
    assert.equal(crumbs.itemListElement.at(-1).item, expected);
  }
}
const sitemap = await readFile(root + "/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
assert.deepEqual(urls.sort(), canonicalUrls.sort());
assert.equal(new Set(urls).size, urls.length);
assert.equal(
  (await readFile(root + "/CNAME", "utf8")).trim(),
  "drpujariavinash.com",
);
assert.equal(
  await readFile("CNAME", "utf8"),
  await readFile(root + "/CNAME", "utf8"),
);
const robots = await readFile(root + "/robots.txt", "utf8");
assert(robots.includes("Sitemap: " + origin + "/sitemap.xml"));
assert(!/Disallow:\s*\//.test(robots));
assert(all.includes(root + "/.nojekyll"));
for (const f of ["assets/profile-400.webp", "assets/profile-800.webp"])
  assert((await stat(root + "/" + f)).size < 50000);
for (const file of htmls)
  assert.equal(
    await readFile(file, "utf8"),
    await readFile(file.slice(root.length + 1), "utf8"),
  );
console.log(
  `PASS: ${htmls.length} HTML documents; ${count} internal references; ${pages.length} canonicals, sitemap entries and JSON-LD graphs; HTML semantics, headings, assets, domain and stale-copy checks.`,
);
