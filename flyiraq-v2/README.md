# Fly Iraq First — Website v2 (Alternative Professional Design)

A second, independent design for the Fly Iraq First airline website, built so it can
be shown side-by-side with the original (v1) build.

This version is intentionally **different** from v1:

| | v1 (original build) | v2 (this folder) |
|---|---|---|
| Aesthetic | Dark navy + gold, luxury serif | Light/editorial, deep teal + gold, modern sans |
| Tech | React + Vite + GSAP (compiled bundle) | Plain HTML + CSS + vanilla JS (readable source) |
| Hero | Full-dark, image only | Image + integrated **flight booking widget** |
| Fonts | Playfair Display | Sora + Manrope |
| Pricing bug | shows `from $$129` (double `$`) | fixed — correct single `$` |
| SEO/meta | missing description, favicon, OG tags | full meta description, favicon, Open Graph |

## What's inside
```
flyiraq-v2/
├─ index.html        # all page markup
├─ css/styles.css    # full design system + responsive layout
├─ js/main.js        # booking widget, mobile nav, scroll reveal, destinations
├─ images/           # airline photography (shared with v1)
└─ README.md
```

## How to run it locally

It's a static site — no build step, no npm install. Any static server works.

**Python (recommended):**
```bash
cd flyiraq-v2
python -m http.server 8090
```
Then open <http://localhost:8090>

> v1 runs on port **8098**, v2 runs on port **8090** — run both at once to compare.

**Or VS Code Live Server**, or any static host (Vercel, Netlify) — just drag the folder in.

## Sections
Sticky header · hero with live booking widget · trust strip · popular destinations ·
on-board experience (3 cabins) · fleet · Golden Wings loyalty · guest reviews ·
about/story · final CTA · full footer. Fully responsive (desktop / tablet / mobile)
with a working mobile menu.
