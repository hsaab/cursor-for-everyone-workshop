---
name: verify-dashboard
description: Check the built "Revenue by GPU type" dashboard section against the workshop's acceptance criteria. Reads the local files (read-only) and reports a short pass/fail list. Use when asked to verify, QA, or check the dashboard.
disable-model-invocation: false
---

# Verify dashboard

A quick, read-only quality check for the "Revenue by GPU type" section after it is
built. Read the files, confirm each item below, and report a short PASS or FAIL list
with one line of evidence each. Do not edit any code; this skill only inspects and
reports.

## Files to read
- `dashboard.html`
- `data.js`
- `styles.css`
- `data/revenue_by_gpu_type.csv`

## Checks
1. **Section exists:** there is a "Revenue by GPU type" card in `dashboard.html`.
2. **All five GPU types appear:** A100, L40S, H100, H200, GB200.
3. **June total matches:** the GPU revenue for June 2026 sums to $415M, the same as
   the existing "Revenue trend" card.
4. **Latest-month numbers match the CSV:** H100 $180M, GB200 $80M, H200 $66M,
   A100 $62M, L40S $27M.
5. **The story is called out:** GB200 is flagged as the fastest grower (about
   +1,233% from Jan to Jun) and the GB200-overtakes-A100 crossover in June is shown.
6. **Six-month trend is present:** Jan through Jun all appear so the mix shift is
   visible.
7. **Brand colors come from tokens:** GB200 uses the accent (`--accent` / `#F54E00`),
   the other types use muted neutrals, and colors reference CSS variables rather than
   hardcoded hex in the markup.
8. **No runtime fetch:** the data is inlined in `data.js` and there is no `fetch(` of
   the CSV (the page opens directly from a file).

## Report format
List each check on its own line with a clear PASS or FAIL marker and one line of
evidence, for example:

```
PASS  Section exists: found "Revenue by GPU type" card
PASS  June total: $415M, matches Revenue trend
FAIL  No runtime fetch: found fetch("data/revenue_by_gpu_type.csv") in dashboard.js
```

End with a one-line summary (for example, "7 of 8 passed"). For any FAIL, suggest a
one-line prompt the user could paste to fix it, but do not make the edit yourself.
