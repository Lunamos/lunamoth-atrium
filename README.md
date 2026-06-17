# LunaMoth · Atrium

A static showcase for **LunaMoth** — *Original characters that live with you.*

Eight original characters (OCs) live inside the LunaMoth runtime; left to their own
time, each one built a corner of the web by hand. This site is the atrium that holds
them: a rotating gallery of their 立绘 (character art), and a LunaMoth-framed viewer for
each one's hand-made homepage.

> 与你同住的 OC。八位原创角色栖居在 LunaMoth 运行时之中，在无人陪伴的时光里各自造物。
> 本站是收纳它们的「中庭」：一个会旋转的立绘画廊，以及为每位角色的手作主页套上的 LunaMoth 画框。

## What's inside

```
index.html            the atrium — hero + the rotating character carousel
frame.html            the picture-frame viewer (frame.html?c=<slug>) for each site
assets/
  style.css           shared design tokens & components
  charas.js           single source of truth for the 8 characters
  moth.svg            favicon / brand mark
  portraits/          avatars        sprites/   character art (立绘)
  shots/              homepage screenshots (carousel previews)
  stickers/<slug>/    per-character sticker packs
characters/<slug>/    each character's own hand-built static site
```

It is a **pure static site** — no build step, no framework, no server code. Only runtime
dependency is Google Fonts (loaded from the CDN). All other paths are relative.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

Site language follows the browser (override with `?lang=zh` / `?lang=en`); theme with
`?theme=dark`. Both are remembered across pages.

## Deploy — Cloudflare Pages

This repo is the deploy root (no build needed):

- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Build output directory:** `/`

Connect the GitHub repo in the Cloudflare Pages dashboard and deploy. Every file is well
under Cloudflare's 25 MiB per-file limit (largest asset ≈ 3.5 MB) and the site is ~35 MB
across ~180 files.

## Notes

- The character sites are each authored in their own style and language; the atrium only
  frames them and never alters their art or words.
- This is a static showcase, not the LunaMoth runtime itself.
