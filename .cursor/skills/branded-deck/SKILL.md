---
name: branded-deck
description: Create sleek, on-brand leadership slide decks (.pptx) from the dashboard analysis. Follows the Cursor brand rule, reads the real numbers from this repo, and is fully self-contained (no external accounts or tools). Use when the user asks for slides, a deck, or a presentation.
disable-model-invocation: false
---

# Branded deck

Build a polished, leadership-ready `.pptx` that looks like the rest of this Cursor
demo. Everything you need is already in this repo: no external accounts, no other
skills, no internet.

Read [design-system.md](design-system.md) before building. It has the exact dark
palette, the type scale, the per-slide layout archetypes, the chart rules, and the
`.pptx` build plus QA mechanics.

## Golden rules

1. One idea per slide. Generous whitespace, big numbers, short labels. More slides
  beat one crowded slide.
2. One accent, used once. Cursor orange `#F54E00` marks the single thing that
  should stand out on each slide (usually the GB200 story). Everything else uses
   the muted neutral palette.
3. Charts over bullets. If a number is clearer shown than told (a breakdown, a
  trend, a crossover), draw a chart with muted series and a single accent series,
   not a bullet list.
4. Never invent numbers. Every figure traces to `dashboard.html` and
  `data/revenue_by_gpu_type.csv`. If you cannot source it, cut it.
5. No em dashes. Anywhere. Use periods, commas, colons, or parentheses, and scrub
  the whole deck before finishing (see design-system.md).
6. Self-contained. Do not pull from Slack, Linear, Notion, Figma, or any external
  tool. This repo plus a local `.pptx` library is all you need.
7. Match the reference. Inherit the look of the example deck below. Do not invent a
  new style.

## Inputs (read these first)

- `.cursor/rules/cursor-brand.mdc`: the brand rules. Dark mode is the default.
- `design/design-tokens.json`: the exact hex values. Reuse them, never invent colors.
- `dashboard.html`: the layout, labels, and story Cursor surfaced.
- `data/revenue_by_gpu_type.csv`: the source of every figure in the deck.

## Default outline

1. Title: the headline revenue (latest month plus month-over-month change).
2. Revenue by GPU type: the latest-month breakdown as a horizontal bar chart, GB200
  in accent, the rest in muted neutrals.
3. The mix shift: the 6-month trend showing the GB200 ramp overtaking A100.
4. Takeaways: 3 crisp, decision-oriented points for leadership.

## Build

Generate a real `.pptx` with a local library (python-pptx is recommended;
pptxgenjs works if you prefer Node). Use widescreen 16:9. Follow design-system.md
for sizes, colors, and the per-slide archetypes, and pull every number from the CSV.

## Pre-finish checklist

- [ ] `.pptx`, 16:9, dark Cursor brand pulled from `design-tokens.json`.
- [ ] One idea per slide, big numbers, short labels, varied layouts.
- [ ] Accent used only for the one thing that should stand out per slide.
- [ ] The breakdown and the trend are charts (muted series plus one accent), not bullets.
- [ ] Every figure traceable to `dashboard.html` and the CSV.
- [ ] Zero em dashes (scrub the whole deck).
- [ ] Opened or rendered the final deck and eyeballed every slide (see design-system.md QA).