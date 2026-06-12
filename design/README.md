# MCP demos — keep a local copy, pull the live one too

This folder is the first example of a pattern we use for **every MCP** in this
workshop kit:

> **Ship whatever the MCP would give you as a file in the repo, _and_ be able to
> pull the same thing live through the MCP.**

Why both?

- **Local copy** → the workshop always works. No accounts, no auth, no network —
  everyone follows along from the repo. **This is the default for everyone.**
- **Live MCP pull (optional)** → the "wow" moment. The host pulls the _same_
  artifact straight from the real tool to show it isn't a mock. If you happen to
  have the MCP connected you can try it too — most won't today, and that's fine.

So the local file is what you actually use; the live pull is an optional bonus.

---

## This folder: the Figma MCP

The "new addition" to the dashboard — the **Revenue by GPU type** card — was
designed in Figma. Here's the same design, both ways:

| | Local copy (in this repo) | Live via the Figma MCP (optional) |
|---|---|---|
| **Visual** | [`revenue-by-gpu-type.png`](./revenue-by-gpu-type.png) | `get_screenshot` on the file/node |
| **Spec** | [`gpu-section-spec.md`](./gpu-section-spec.md) | `get_design_context` (returns code + annotations) |
| **Tokens** | [`design-tokens.json`](./design-tokens.json) | `get_variable_defs` |

The live design lives in **your host's own Figma file** — it's grabbed through the
Figma MCP at demo time, not committed here. (Nothing to copy in; that's the point.)

### Optional: try the live pull

Only works if you have the Figma MCP connected (mostly the host). In Agent mode,
paste the host's Figma link and ask:

```
Pull this "Revenue by GPU type" design from Figma via the Figma MCP:
<paste the host's Figma file link>
Use it as the spec for the new dashboard section. If Figma isn't available,
fall back to design/gpu-section-spec.md and design/revenue-by-gpu-type.png.
```

Cursor fetches the screenshot, design context, and tokens through the MCP — same
result as the local files, just live. No MCP? The local files have you covered.

---

## Adding another MCP demo

Use the same shape for any other tool. Drop the local artifact in the repo and
note the live MCP call that produces it:

| MCP | Local copy to commit | Live pull (optional) |
|-----|----------------------|-----------|
| Figma | design export + spec + tokens (this folder) | `get_design_context` / `get_screenshot` |
| Slack | a saved thread / message as `.md` | search + read messages |
| Linear / Jira | the issue as `.md` | fetch issue by id |
| Notion / Confluence | the page as `.md` | fetch page by id |
| Database (Postgres, etc.) | a `.csv` sample (e.g. `data/revenue_by_gpu_type.csv`) | live query |

The CSV in [`../data`](../data) is the same idea: a local sample that could just
as easily be pulled live from a warehouse MCP.
