# Third-party licenses and motion provenance

## What was actually reused

| Source | Usage in this project | License handling |
|---|---|---|
| [opengeos/maplibre-gl-storymaps](https://github.com/opengeos/maplibre-gl-storymaps) | Adapted MapLibre + Scrollama story engine in `atlas.html`, `app.js`, `config.js`, `site.css` | MIT copyright notice retained in root `LICENSE` |
| [erlandv/case](https://github.com/erlandv/case) | Editorial case-study **concept** only; no theme code or bundled assets copied | Upstream MIT; source acknowledged, not bundled |
| [A Quiet Publication](https://astro.build/themes/details/a-quiet-publication/) | Publication/research-note **information architecture** only; no theme code or bundled assets copied | No theme source bundled; no license claim made |
| Research Journal motion (`journal.css` + `journal.js`) | Original code written for this project: progressive reveal, stagger, progress line, hover treatments | No copied animation library, assets, or source code |

## Motion implementation

- Hero text and dossier entrance animation (CSS).
- Research sections reveal progressively as scrolled into view (IntersectionObserver).
- Case study and source cards use staggered reveal and restrained hover response.
- Reading progress bar follows document scroll (requestAnimationFrame).
- Existing MapLibre + Scrollama story is retained at `/atlas.html`.

## Accessibility and limitations

- `prefers-reduced-motion: reduce` disables decorative animations; content is never removed.
- IntersectionObserver effects are only enabled when the API exists and motion is permitted.
- Content is visible by default before JS enhancement.
- No external animation library, no GSAP dependency, no additional runtime network requirement.
- Desktop/mobile visual QA and performance measurements remain to be completed.

## Licensing cautions

The MIT notice in `LICENSE` belongs to the upstream map storytelling project; it is not a blanket declaration that every photograph, font, or document on the site is MIT licensed. Map tiles, Google Fonts and any photography have separate rights and terms. Do not copy upstream theme assets without confirming their own license and attribution requirements.
