# Fly Iraq First — Website

Four website design concepts for the **Fly Iraq First** airline, all hand-coded in
plain HTML + CSS + JavaScript (fully editable, no build step).

🌍 **Live:** https://sinanalanih.github.io/fly-iraq-web/

## Versions

| Version | Folder | Type | Description | Local port |
|---------|--------|------|-------------|-----------|
| **v1** | [`flyiraq-v1/`](flyiraq-v1/) | Full site | **Luxury Dark** — deep navy + gold, elegant serif. Booking widget, destinations, fleet, loyalty. | 8098 |
| **v2** | [`flyiraq-v2/`](flyiraq-v2/) | Full site | **Modern Editorial** — light teal + gold, modern sans. Live flight-booking widget + full features. | 8090 |
| **v3** | [`flyiraq-v3/`](flyiraq-v3/) | Info site | **Corporate** — clean & professional. About us, destinations, fleet, contact. *No booking.* | 8091 |
| **v4** | [`flyiraq-v4/`](flyiraq-v4/) | Info site | **Warm Editorial** — magazine-style, sand + maroon, large serif. Story-led info site. *No booking.* | 8092 |

## How to run locally

All four are static sites — no build step. Serve any folder with a static server:

```bash
python -m http.server 8098 -d flyiraq-v1
python -m http.server 8090 -d flyiraq-v2
python -m http.server 8091 -d flyiraq-v3
python -m http.server 8092 -d flyiraq-v4
```

Then open the matching `http://localhost:<port>`.

## Editing the info sites (v3 & v4)

v3 and v4 are designed to be easy to edit. Each is a **single `index.html` file**.
Open it in any text editor and look for the comments marked `✏️ EDIT`:

- **Contact details** (email, phone, address) — in the `CONTACT` section.
- **About Us text** — in the `ABOUT` / `OUR STORY` section.

Change the text between the tags, save, and re-run (or push to update the live site).

## Notes
- All versions use **relative image paths**, so they work both locally and on GitHub Pages.
- The real Fly Iraq First logo is used throughout, with the white background removed (`logo-transparent.png` / transparent `logo-main.png`).
