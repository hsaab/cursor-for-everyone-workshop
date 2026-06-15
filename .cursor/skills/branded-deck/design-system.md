# Branded deck: design system and build reference

The look is the Cursor dark brand. When in doubt, match the example deck
(https://www.figma.com/slides/rukpsn4ZqyScA0P3Ij4UTR) and pull exact values from
`design/design-tokens.json`. The build target is a widescreen `.pptx`:
13.333 x 7.5 in (16:9).

## Palette (dark, the default)

From `design-tokens.json`. Hex plus RGB for library calls.

| Role | Hex | RGB |
|---|---|---|
| Background | `#14120B` | 20, 18, 11 |
| Surface (card) | `#1B1913` | 27, 25, 19 |
| Surface raised | `#201E18` | 32, 30, 24 |
| Border / hairline | `#2B2923` | 43, 41, 35 |
| Text | `#EDECEC` | 237, 236, 236 |
| Accent | `#F54E00` | 245, 78, 0 |

Muted text is the text color lightened toward the background: about 60% for
subheads and body, about 40% for footers. `.pptx` fills are solid, so emulate these
tints with a lighter shade rather than true transparency.

GPU-type series (muted neutrals, with accent reserved for the one story):

| Type | Hex | Note |
|---|---|---|
| GB200 | `#F54E00` | accent, this is the story |
| H100 | `#C9B896` | muted |
| H200 | `#A89A86` | muted |
| L40S | `#837C70` | muted |
| A100 | `#5F5B54` | muted |

Light mode (only if asked): background `#F7F7F4`, text `#26251E`, accent `#F54E00`.

## Type

Family: Inter if available, otherwise a clean sans (Helvetica or Arial). One or two
weights only. Sizes below are points for a 13.333 in wide slide. The Figma
reference is 1920 x 1080 px, so a rough conversion is `pt = px / 2`.

| Element | Size (pt) | Weight / treatment |
|---|---|---|
| Cover headline | 54 to 60 | Regular |
| Content headline | 28 to 30 | Regular |
| Eyebrow label | 8 to 9 | Medium, UPPERCASE, accent, letter-spaced |
| Subhead / intro | 14 to 16 | Regular, text at 60% |
| Big stat | 36 to 54 | Medium, accent |
| Card title | 15 to 18 | Medium |
| Body / list | 10 to 13 | Regular, text at 60% |
| Footer micro | 7 to 9 | Medium, text at 40%, UPPERCASE |

Header on every slide: a small accent dot plus "Cursor" top-left, and a page number
top-right (right-aligned, text at 50%, format `01 / 04`).

## Layout archetypes (match the reference, vary them across the deck)

1. Cover: accent eyebrow, one huge headline (the headline number), a one-line
   subhead at 60%, a short accent hairline, and a footer micro label. Lots of top
   whitespace.
2. Bar chart (the breakdown): horizontal bars sorted descending, the key type in
   accent and the rest muted, a value label after each bar tip, and a subtle left
   axis line. The title states the takeaway ("H100 still leads. GB200 is now #2.").
3. Trend (the mix shift): grouped columns across the 6 months, two series (the riser
   in accent, the decliner muted), a small legend top-right, and value labels on the
   crossover month. The title states the shift ("GB200 overtook A100 in June.").
4. Takeaway cards: three cards (surface fill, 1 px border, ~14 px radius), each with
   an accent number, a Medium title, a short hairline, a 60% body line, and an
   accent outcome line prefixed with the arrow glyph. An optional dark CTA bar can
   sit beneath, pointing at `dashboard.html`.

Keep no two adjacent slides on the same structure.

## Chart rules

- Muted series plus one accent series. The accent is the story (GB200). Never color
  every series.
- Label the value, not the gridlines. Big readable numbers beat axis clutter.
- Sort bars by value so the eye lands on the story first.

## .pptx build mechanics

- Size: set 16:9 explicitly. python-pptx:
  `prs.slide_width = Inches(13.333)`, `prs.slide_height = Inches(7.5)`.
- Background: set each slide's background fill to `#14120B`. Do not rely on the
  default white.
- Colors: pass the palette as RGB. python-pptx: `RGBColor(0x14, 0x12, 0x0B)`.
- Charts: drawn rectangles (one shape per bar) give the most control over the
  muted-plus-accent look; native charts also work if you can set series colors.
- Fonts: set the font on every run. Stick to one or two weights.
- Spacing: keep a consistent outer margin and let related items cluster.

## No em dashes (scrub before finishing)

Replace every em dash (`\u2014`) with a period, comma, colon, or parentheses, and
reword anything that becomes a run-on. When editing text programmatically, walk
each text frame's runs and replace the character before saving.

## QA (do this before declaring done)

Your first render is rarely right. Treat QA as a bug hunt, not a confirmation step.

1. Open the `.pptx`. To inspect as images (optional, if LibreOffice and Poppler are
   installed): `soffice --headless --convert-to pdf deck.pptx` then
   `pdftoppm -jpeg -r 150 deck.pdf slide`.
2. Check each slide for text overflow or clipping, overlapping elements, low
   contrast (light text on light, dark on dark), off-canvas elements, uneven
   spacing, and leftover placeholder text.
3. Confirm every number matches the CSV and `dashboard.html`.
4. Fix, re-render, and look again. Do at least one fix-and-verify pass.
