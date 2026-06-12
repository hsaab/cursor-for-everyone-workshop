---
name: branded-deck
description: Create sleek, on-brand leadership slide decks from the dashboard analysis. Follows the Cursor brand rule and uses the built-in slide-generation skill to build the .pptx. Use when the user asks for slides, a deck, or a presentation.
disable-model-invocation: false
---

# Branded deck

Build a polished, leadership-ready deck that looks like the rest of this Cursor demo.

## How
1. Follow `.cursor/rules/cursor-brand.mdc` for Cursor orange `#F54E00` accent on a
   clean/dark background, minimal, one idea per slide. Pull exact colors from
   `design/design-tokens.json`.
2. Read the built dashboard at `dashboard.html` for layout, labels, and the story
   Cursor surfaced (fastest-growing GPU, crossover points, callouts).
3. Pull every figure from `data/revenue_by_gpu_type.csv`. Never invent numbers.
4. Do not pull from Slack, Linear, Notion, or other internal tools. This repo has
   everything you need.
5. Use the built-in slide-generation skill (`/create-slides`) to produce the
   actual `.pptx`.

## Default outline
1. **Title**: headline revenue (latest month + MoM change).
2. **Revenue by GPU type**: latest-month breakdown.
3. **The mix shift**: 6-month trend; the GB200 ramp overtaking A100.
4. **Takeaways**: 3 crisp, decision-oriented bullets for leadership.

## Checklist
- [ ] Accent color used only for the one thing that should stand out per slide.
- [ ] Big numbers, short labels, no clip art or stock photos.
- [ ] Every figure traceable to `dashboard.html` and the CSV.
