// Add only verified records with a title, a short description and an optional
// source URL. Empty categories do not create placeholders on the public page.
export const academicRecords = {
  Publications: [],
  Presentations: [],
  "Research projects": [],
  "Teaching activities": [],
  "Faculty invitations": [],
};
const escape = (s) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
export function academicSections() {
  return Object.entries(academicRecords)
    .filter(([, entries]) => entries.length)
    .map(
      ([heading, entries]) =>
        `<section><h2>${heading}</h2><ul>${entries.map((entry) => `<li>${entry.url ? `<a href="${escape(entry.url)}">${escape(entry.title)}</a>` : escape(entry.title)}${entry.description ? ` — ${escape(entry.description)}` : ""}</li>`).join("")}</ul></section>`,
    )
    .join("");
}
