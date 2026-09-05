# Redesign review

## Facts and provenance

- Current appointment, qualifications and Shanghai Pulmonary Hospital training: supplied directly by Dr Pujari in the redesign brief.
- Clinical interests and phone/WhatsApp number: retained from the pre-redesign repository at b89f785. No operation counts, outcome claims, rankings or publications added.
- Educational content: short general overviews with National Cancer Institute references on each clinical page. They describe possible pathways, not personalised recommendations or confirmed local procedure availability.

## Items for Dr Pujari to verify

1. Is +91 9922001548 still the appropriate public phone and WhatsApp contact? It was already published in the repository and is retained.
2. Confirm the current Goa consultation location, outpatient schedule and booking/referral route. The old clinic address and hours were not transferred. The site asks visitors to confirm before travelling.
3. Confirm current procedure availability and referral arrangements, particularly CRS/HIPEC. The site does not claim these are available at Goa Medical College.

MRCS is displayed exactly as supplied, without inferring a Royal College, year or fellowship. No research bibliography is fabricated. Research interests were supplied directly by Dr Pujari. Verified academic records can be added in content/academics.mjs; empty categories are not shown as public placeholders.

## URL preservation

All original HTML filenames remain. blog.html and notebook.html redirect to Patient Guides at patient-resources.html; testimonials.html redirects to patient-resources.html, replacing the original placeholder testimonials. The three previously nonexistent sitemap paths now redirect to their existing canonical filenames. /contact/ remains usable as a redirect. Redirects use HTML refresh plus a visible link because branch-based GitHub Pages does not provide per-path server redirect rules. Redirects are excluded from the sitemap and use noindex,follow. index.html canonicalises to the domain root.

The original profile.png remains available for external links; displayed responsive WebP versions are 8,722 and 21,208 bytes versus 1,014,675 bytes originally. CNAME is unchanged. No changes to repository deployment settings are required.

## Deployment and maintenance

This remains a static HTML/CSS/JS site compatible with the existing GitHub Pages deployment. Generated HTML is committed at the root. A small Node build shares navigation, footer and metadata across pages, and creates a clean dist/ copy for review. No framework runtime, tracking, forms or third-party fonts are shipped. The quality workflow validates but never deploys or merges.

Person, WebSite and BreadcrumbList JSON-LD are used. Physician is not used as a substitute for a Person because it describes a medical practice/business and would imply unsupported practice details.

Real-world Core Web Vitals and search indexing require post-deployment field data; local checks do not establish field performance or ranking guarantees.

## Validation performed

- Production build passed: 15 canonical pages, seven redirects and a custom 404 page.
- HTML validator and internal crawler passed across all 23 HTML documents and 381 internal references, including image variants and fragments.
- Canonicals, JSON-LD syntax and required graph types, sitemap membership, robots.txt, CNAME, image budgets and generated-source parity passed.
- All 15 canonical pages loaded in a browser at 390px and 1440px widths with no horizontal overflow or broken images and exactly one H1.
- Desktop and mobile homepage visually inspected; mobile menu opens and Escape closes it with focus returned to the menu button.
- Static delivery uses system fonts, a small stylesheet, a small deferred menu script and dimensioned responsive images. No third-party runtime is required.
