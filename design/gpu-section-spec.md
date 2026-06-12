# Design handoff — "Revenue by GPU type" section

> This is the **local copy** of the design for the new dashboard section, so you
> can follow along without a Figma account. In the workshop your host will pull
> the **same** design straight from Figma using the Figma MCP — see
> [`design/README.md`](./README.md) for how the local + live-MCP pattern works.

**Component:** `Revenue by GPU type` card (adds to the existing dashboard)
**Source data:** [`data/revenue_by_gpu_type.csv`](../data/revenue_by_gpu_type.csv)
**Visual reference:** [`design/revenue-by-gpu-type.png`](./revenue-by-gpu-type.png) (exported from Figma)
**Tokens:** [`design/design-tokens.json`](./design-tokens.json)
**Figma file:** https://www.figma.com/design/<your-figma-file-key> (frame `Revenue by GPU type`, node `1:2`)

---

## Layout

A single card that matches the existing dashboard cards (dark surface, 14px
radius, 28px padding). Top to bottom:

1. **Header** — title `Revenue by GPU type` + muted subtitle
   `Monthly revenue by GPU type · $M · Jan–Jun 2026`.
2. **Insight callouts** — two accent-tinted pills that summarize the story:
   `GB200 fastest-growing · +1,233%` and `GB200 overtakes A100 in June`.
3. **6-month mix shift** — stacked vertical bars, one column per month, with the
   monthly total above each column (June highlighted in accent) and the month
   label below.
4. **Legend** — one swatch + label per GPU type.

## Color (use the tokens, not raw hex)

Each GPU type has a fixed color. **GB200 is the only warm/accent color** so the
Blackwell ramp visibly takes over; everything else is a muted neutral.

| GPU type | Token | Hex | Role |
|----------|-------|-----|------|
| GB200 | `gpuType.GB200` | `#F54E00` | Cursor accent — the standout |
| H100  | `gpuType.H100`  | `#C9B896` | Largest earner — light tan |
| H200  | `gpuType.H200`  | `#A89A86` | Warm gray |
| L40S  | `gpuType.L40S`  | `#837C70` | Taupe |
| A100  | `gpuType.A100`  | `#5F5B54` | Legacy — dark, muted |

Surfaces/text come from the same tokens as the dashboard: `color.surface`,
`color.border`, `color.text`, `color.textMuted`, `color.accentSoft`.

## Typography

- Section title: 18px / 600
- Subtitle & labels: 12–13px, muted
- Column totals: 12px / 500 (June total in `color.accent`)

## Data (from the CSV)

**Latest month — June 2026** (share of the $415M total):

| GPU type | Revenue | Share |
|----------|--------:|------:|
| H100  | $180M | 43% |
| GB200 | $80M  | 19% |
| H200  | $66M  | 16% |
| A100  | $62M  | 15% |
| L40S  | $27M  | 7%  |

**Monthly totals ($M):** Jan 284 · Feb 302 · Mar 324 · Apr 347 · May 378 · Jun 415.

Story to surface: **GB200 grows from $6M → $80M (+1,233%) Jan→Jun and overtakes
A100 ($62M) in June**, while A100 declines.

## States

- **Empty state** (before the data is wired): the dashed placeholder in
  `dashboard.html` that points to `data/revenue_by_gpu_type.csv`. This is the
  starting point in the repo.
- **Loaded state**: the card described above.

## Acceptance criteria

- [ ] GPU-type colors match the tokens exactly; GB200 is the only warm color.
- [ ] Stacked trend shows all 6 months; monthly totals match the existing
      "Revenue trend" card (Jun = $415M).
- [ ] The latest-month story (fastest grower + A100→GB200 crossover) is called out.
- [ ] Matches the existing dark theme, card radius, and padding.
