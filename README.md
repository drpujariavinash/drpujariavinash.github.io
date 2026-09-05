# Dr Avinash Pujari — professional website

Static academic website deployed with the existing GitHub Pages configuration at https://drpujariavinash.com. Keep `CNAME` unchanged.

## Development

Use Node.js 24 or later. Run `npm ci`, then `npm test`. Run `npm run dev` to preview at http://127.0.0.1:4173.

Edit page content in `content/pages.mjs`, shared layout/metadata in `scripts/build.mjs`, and presentation in `style.css`. Run `npm run build` and commit the generated root HTML and sitemap together with the source. `dist/` is a clean build copy and is ignored by Git.

`npm run check` validates built HTML, every internal href/src/srcset and fragment, heading hierarchy, canonical URLs, JSON-LD, sitemap, robots, domain preservation, stale copy and image budgets. GitHub Actions runs the same checks and catches stale generated output. It does not change deployment settings.

Preserve useful legacy URLs. See `docs/REVIEW.md` for redirect behaviour, content provenance and factual verification items. Work in a branch and open a pull request; do not merge automatically.
