# MCP demos — keep a local copy, pull the live one too

This folder is the first example of a pattern we use for **every MCP** in this
workshop kit:

> **Ship whatever the MCP would give you as a file in the repo, _and_ be able to
> pull the same thing live through the MCP.**

Why both?

- **Local copy** → the workshop always works. No accounts, no auth, no network —
  everyone can follow along even if a tool isn't connected.
- **Live MCP pull** → the "wow" moment. The host pulls the _same_ artifact
  straight from the real tool to show it isn't a mock — it's the actual
  integration.

So the local file is the fallback and the script; the live pull is the proof.

---

## This folder: the Figma MCP

The "new addition" to the dashboard — the **Revenue by GPU type** card — was
designed in Figma. Here's the same design, both ways:

| | Local copy (in this repo) | Live via the Figma MCP |
|---|---|---|
| **Visual** | [`revenue-by-gpu-type.png`](./revenue-by-gpu-type.png) | `get_screenshot` on the file/node |
| **Spec** | [`gpu-section-spec.md`](./gpu-section-spec.md) | `get_design_context` (returns code + annotations) |
| **Tokens** | [`design-tokens.json`](./design-tokens.json) | `get_variable_defs` |

**Figma file:** https://www.figma.com/design/<your-figma-file-key>
(frame `Revenue by GPU type`, node id `1:2`).

### Try the live pull in the workshop

In Agent mode, paste something like:

```
Pull the "Revenue by GPU type" design from Figma:
https://www.figma.com/design/<your-figma-file-key>?node-id=1-2
Use it as the spec for the new dashboard section. If Figma isn't available,
fall back to design/gpu-section-spec.md and design/revenue-by-gpu-type.png.
```

Cursor uses the Figma MCP to fetch the screenshot, design context, and tokens —
then builds the section. Same result as reading the local files, just live.

---

## Adding another MCP demo

Use the same shape for any other tool. Drop the local artifact in the repo and
note the live MCP call that produces it:

| MCP | Local copy to commit | Live pull |
|-----|----------------------|-----------|
| Figma | design export + spec + tokens (this folder) | `get_design_context` / `get_screenshot` |
| Slack | a saved thread / message as `.md` | search + read messages |
| Linear / Jira | the issue as `.md` | fetch issue by id |
| Notion / Confluence | the page as `.md` | fetch page by id |
| Database (Postgres, etc.) | a `.csv` sample (e.g. `data/revenue_by_gpu_type.csv`) | live query |

The CSV in [`../data`](../data) is the same idea: a local sample that could just
as easily be pulled live from a warehouse MCP.
