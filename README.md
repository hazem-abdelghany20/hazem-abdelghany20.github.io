# hazemabdelghany.com

Hazem's personal site — bilingual (Egyptian Arabic + English) essays across five threads: Building · Faith · Body · Mind · Perspective.

Design: **Warm Editorial** (Newsreader + Amiri, paper tones) in light mode; dark mode wears the **Black Card** palette (warm black, burnt-orange accent). Chosen from the direction canvas on 2026-08-31.

## Stack

Astro 5, static output, no framework JS beyond the theme toggle. Essays are markdown files in `src/content/essays/` — publishing = add a file, commit, deploy.

## Writing an essay

Create `src/content/essays/<slug>.md`:

```yaml
---
title: "..."
date: 2026-09-01
lang: ar            # ar | en — sets RTL + Amiri vs LTR + Newsreader
thread: mind        # building | faith | body | mind | perspective
minutes: 6          # optional read time
description: "..."  # optional, used for meta description
draft: false        # true hides it everywhere
translationOf: other-slug   # optional — links the AR/EN versions to each other
---
```

Body is plain markdown. Conventions: `> quote` renders as the accent pull-quote; backticked terms inside Arabic prose (`` `CBT` ``) render as inline Latin technical terms; `##` for section headings.

## Commands

- `npm run dev` — dev server at localhost:4321
- `npm run build` — static build to `dist/`

## Deploy

Not wired yet. Plan: GitHub repo → Vercel (or Cloudflare Pages) → point hazemabdelghany.com DNS at it.
