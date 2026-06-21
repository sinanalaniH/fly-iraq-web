# Fly Iraq First — Website

Two design versions of the **Fly Iraq First** airline website.

## Versions

| Version | Folder | Description | Run on |
|---------|--------|-------------|--------|
| **v1** | [`flyiraq-v1/`](flyiraq-v1/) | Original design — dark navy + gold, luxury serif. A compiled **React + Vite** build (production output). | port **8098** |
| **v2** | [`flyiraq-v2/`](flyiraq-v2/) | New alternative design — light/editorial, deep teal + gold, modern sans. Hand-written **HTML + CSS + JS** source with a live flight-booking widget. | port **8090** |

See [`flyiraq-v2/README.md`](flyiraq-v2/README.md) for a full feature comparison.

## How to run

Both are static sites — no build step required. Serve each folder with any static server.

```bash
# v1 (must be served over HTTP — it's a React build, won't work via file://)
python -m http.server 8098 -d flyiraq-v1

# v2
python -m http.server 8090 -d flyiraq-v2
```

Then open <http://localhost:8098> (v1) and <http://localhost:8090> (v2).

## Notes
- v2 fixes issues found in the v1 build: corrected currency formatting (single `$`),
  added SEO meta description, Open Graph tags, and a favicon.
- v1 is the compiled bundle (minified JS/CSS); its original React source is not included here.
