# Cursor for Everyone — Follow Along

We'll take a real-feeling internal request and turn it into a shipped dashboard
feature **and** a board-ready slide — without writing code by hand.

The whole loop: **listen → structure → build → verify → present** — then make it
repeatable with rules and skills.

---

## The setup (you're role-playing)

For the next hour you're on the team that owns a company's internal **revenue
dashboard** — no coding background assumed. A messy leadership call just landed a
familiar ask in your lap, and your job is to turn it into real deliverables.
**Your goal:** ship a dashboard feature *and* a board-ready slide deck. **Why it
matters:** this is the everyday work of turning vague requests into results — and
you're about to do it in minutes, then learn to repeat it on your own stuff.

---

## Before we start (2-minute check)

1. **Cursor is installed** and you're signed in.
2. **You have a GitHub account** — this is how your work gets saved and how
   Cursor connects to your tools. You won't touch it directly today.
3. **You downloaded this folder** and opened it in Cursor
   (File → Open Folder).
4. **Open the dashboard:** double-click `dashboard.html` so it opens in your
   browser. This is our starting point — notice "Revenue by GPU type" is empty.

> Tip: type `@` in the chat to point Cursor at a specific file.

---

## The story

The internal revenue dashboard shows total revenue and a regional split, but
leadership keeps asking **which GPU types drive the revenue and how the mix is
shifting** (the Blackwell / GB200 ramp). The granular data already exists in
`data/revenue_by_gpu_type.csv` — it just isn't in the dashboard yet.

---

## A note on connected tools (MCPs)

Cursor connects to the tools you already use — Figma, Granola, Slack, Jira,
Notion — through **MCPs**. **You don't need any accounts today.** Here's the deal:

- **You** do every step from the files already in this repo.
- **Your host** runs the live MCP version on screen — the same result, pulled
  straight from the real tool — just so you can see it's possible.

| What you need | You use (in this repo) | Host shows live (MCP) |
|---------------|------------------------|------------------------|
| The call notes | `transcript.md` | Granola |
| The design | `design/` folder | Figma |
| The work ticket | your Step 1 spec | Linear / Jira |

The rule never changes: **anything your host does through an MCP, you can do right
here from the repo.**

---

## Step 1 — Turn the messy call into a clear spec (Plan mode)

Switch to **Plan** mode and paste:

```
@transcript.md Read this internal revenue review call and list exactly what
they're asking for as a short, concrete spec. Group it into "dashboard changes"
and "slides". Keep it to bullet points.
```

You'll watch Cursor turn a rambling conversation into a structured list.

---

## Step 2 — Build the feature (Agent mode)

> **There's a design for this.** A designer mocked up the new section — you have
> it locally at `design/gpu-section-mock.svg` and `design/gpu-section-spec.md`
> (with `design/design-tokens.json`). Add them to the prompt so your build matches
> the design. *(Your host will pull the same design straight from Figma via the
> Figma MCP — same design, just live.)*

Switch to **Agent** mode and paste:

```
@data/revenue_by_gpu_type.csv @design/gpu-section-spec.md @design/design-tokens.json @dashboard.js @data.js @styles.css
Add a "Revenue by GPU type" section to the dashboard using this CSV, matching the
design spec and tokens. Read the CSV and inline the data into the app (do NOT fetch
it at runtime, since the page is opened directly from a file). Show revenue by GPU
type for the latest month, plus a 6-month trend that makes the mix shift obvious.
Use the GPU-type colors from the tokens. Call out the fastest-growing GPU type and
flag where GB200 overtakes A100.
```

---

## Step 3 — Verify it yourself

Go back to your browser and **refresh** `dashboard.html`.
The "Revenue by GPU type" card should now be filled in. You just shipped a
feature — did the new chart appear?

**If you're ahead, try one of these:**

```
Change the GPU-type chart to a stacked view so I can see the mix each month.
```

```
Recolor the chart so GB200 stands out and the legacy A100 is muted.
```

---

## Step 4 — Set the house rules (a rule)

**Rules** are standing instructions Cursor follows automatically, so you never
repeat a preference. This repo already ships two in `.cursor/rules/`:

- `cursor-brand.mdc` — Cursor's colors + a clean, sleek style (this is *why* the
  dashboard and your slides stay on-brand).
- `dashboard-html.mdc` — how to format the dashboard's HTML/CSS.

Open one — they're tiny. Then make your own: type **`/create-rule`** and describe
what Cursor should always do, e.g.

```
/create-rule Every chart on the dashboard needs labeled axes and a one-line
"so what?" caption underneath. Apply it to *.html.
```

Cursor saves it to `.cursor/rules/` and follows it from then on.

---

## Step 5 — Package the slides as a skill, then run it

**Skills** are reusable workflows you trigger by name. This repo ships one —
`.cursor/skills/branded-deck/` — created with **`/create-skill`**. It follows the
brand rule and calls the built-in slide generator, so the deck always comes out
sleek. *(To build your own, type `/create-skill` and describe the workflow.)*

Run it — type **`/branded-deck`**:

```
/branded-deck Summarize this for leadership: headline revenue, revenue by GPU
type, the 6-month mix shift toward GB200, and 3 takeaways. Use the numbers in
data/revenue_by_gpu_type.csv.
```

Behind the scenes it applies `.cursor/rules/cursor-brand.mdc` and uses the
built-in slide-generation skill (`/create-slides`) to produce the `.pptx`.

---

## What just happened

You turned an unstructured call into two real deliverables — a working dashboard
feature and a leadership deck — and you taught Cursor your **rules** and a reusable
**skill**, so the next person gets the same result for free. Swap in *your* docs,
*your* spreadsheet, *your* tools — the loop is the same.
