---
name: Red Medici
description: Launch page for the RM-01 earbuds, set out the way a watch manufacture presents a new calibre.
colors:
  porcelain: "#f8f8f6"
  plate: "#e9e9e7"
  graphite: "#242424"
  crimson: "#d71920"
  crimson-deep: "#b3141a"
  ink-2: "#5a5a57"
  rule: "#cfcfcb"
  on-dark-2: "#b9b9b5"
  rule-dark: "rgb(248 248 246 / 0.16)"
typography:
  display:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, 'Times New Roman', serif"
    fontSize: "clamp(2.75rem, 5.6vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4.4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  statement:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, 'Times New Roman', serif"
    fontSize: "clamp(1.625rem, 3.1vw, 2.875rem)"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, 'Times New Roman', serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, 'Times New Roman', serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, 'Times New Roman', serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
    fontFeature: "tnum"
rounded:
  none: "0"
spacing:
  margin: "clamp(1rem, 4.5vw, 4.5rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(6rem, 14vw, 12rem)"
  header: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.crimson-deep}"
  button-small:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.none}"
    padding: "0 1.125rem"
    height: "2.5rem"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "0 1.125rem"
    height: "2.5rem"
  button-quiet-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.porcelain}"
  waitlist-input:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1rem 0 0"
    height: "3.25rem"
  spec-row:
    textColor: "{colors.porcelain}"
    padding: "0.9rem 0"
  spec-sheet:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.porcelain}"
---

# Design System: Red Medici

## Overview

**Creative North Star: "The Calibre Sheet"**

The earbud is presented the way a haute-horlogerie manufacture presents a new movement: one object, a reference number (Ref. RM-01), macro plates of the real photo, and a sheet of exact figures. The ground is a porcelain dial, the plates are light grey, the ink is graphite, and one section turns over to a graphite "case back" for the specifications.

Crimson behaves like a seconds hand. It marks the one thing that is active right now (the primary CTA, the sweeping hand on the minute track, the focal tick on a ruler, the active reference, focus) and nothing else. The minute-track scale, fine ticks with every fifth one longer, is the structural device: hero timeline, loupe rulers, hairline section rules.

Density is low and deliberate: generous section padding, a 12-column grid, square corners, 1px rules. Rejected: the dark neon esports page, the split hero over feature cards, gradients, glass, glows, rounding, fake 3D.

**Key Characteristics:**
- Porcelain, plate and graphite surfaces with a single crimson accent for the active state.
- High-contrast Didone (Bodoni Moda, optical sizing) for all prose; mono only for references and measured values.
- Minute-track tick scales as the recurring structural motif.
- Square corners, hairline 1px rules, no shadows.
- Real product imagery only, multiplied onto its ground.

## Colors

A watch-dial palette: three neutrals and one red that only ever means "this one, now".

### Primary
- **Seconds-Hand Crimson** (crimson): primary buttons, the minute-track hand, the active ruler ticks and active detail reference in the loupe, focus outlines, text selection, input caret.
- **Pressed Crimson** (crimson-deep): primary button hover and form error text.

### Neutral
- **Porcelain Dial** (porcelain): page ground, solid header, text on dark and on crimson.
- **Plate Grey** (plate): hero and reserve section grounds, matching the product's studio backdrop.
- **Graphite** (graphite): ink, input underline, ruler ticks, quiet-button outline, and the ground of the specs "case back".
- **Worn Graphite** (ink-2): secondary copy, labels, inactive loupe titles, footer.
- **Hairline** (rule): 1px dividers on light grounds.
- **Case-Back Secondary** (on-dark-2) and **Case-Back Hairline** (rule-dark): secondary text and row rules inside the graphite section.

### Named Rules
**The Seconds-Hand Rule.** Crimson marks only the active element. When two crimson actions would share a viewport, one steps back: the header CTA turns into a graphite outline while the hero waitlist form is on screen.

**The One Case Back Rule.** Graphite as a ground is used for exactly one section, the specification sheet. Everything else sits on porcelain or plate.

## Typography

**Display Font:** Bodoni Moda Variable (with Bodoni 72, Didot, Times New Roman)
**Body Font:** Bodoni Moda Variable, same family
**Label/Mono Font:** Martian Mono Variable (with ui-monospace, SFMono-Regular, Menlo)

**Character:** A Didone carries every word of prose, headline to button label, with optical sizing switched on so the hairlines hold at small sizes. Martian Mono appears only where a value is a reference or a measurement.

### Hierarchy
- **Display** (500, clamp 2.75 to 5.5rem, 0.98): the hero headline, two lines, each line masked for the intro and kept on one line above 520px.
- **Headline** (500, clamp 2.25 to 4rem, 1.02): section heads (Specifications, Reserve). The loupe head runs one step smaller (clamp 2 to 3rem).
- **Statement** (400, clamp 1.625 to 2.875rem, 1.22): the single manifesto paragraph, max 30ch, starting at column 4.
- **Title** (500, 1.375rem, 1.2): loupe detail titles and spec group heads.
- **Body** (400, 1.125rem, 1.6): lede and running copy, lining numerals, max about 30rem.
- **Small** (400, 0.9375rem): labels, nav links, form messages, spec terms, footer.
- **Label** (mono 400, 0.75rem, tabular numerals): Ref. RM-01, detail reference numbers. Spec values use the same mono at 0.8125rem, line-height 1.7.

### Named Rules
**The Measured-Value Rule.** Mono is for references and figures only. Never set a sentence, heading or button in mono.

**The No-Caps Rule.** Nothing is uppercased or letter-spaced for emphasis; hierarchy comes from size and the Didone's contrast.

## Layout

A 12-column grid with `gutter` column gaps inside a fluid `margin` (1rem to 4.5rem); sections breathe on `section` padding (6rem to 12rem). The fixed header is 4.5rem (4rem below 860px) and is transparent until 24px of scroll, then porcelain with a 1px rule beneath.

- Hero: full viewport on plate grey; video masked by a soft radial ellipse on the right, copy anchored lower left (max about 42rem), minute track along the bottom edge.
- Statement: text spans columns 4 to 12.
- Loupe: frame on columns 1 to 8, captions on 9 to 12 (7 / 5 under 1100px). Pinned and scroll-driven above 860px with motion allowed; otherwise static per-detail plates (two columns from 600px).
- Specs: sticky intro on columns 1 to 4, sheet on 6 to 12 (5 / 6 under 1100px); stacked under 860px.
- Breakpoints: 1100px, 860px, 600px, 520px. At 520px the waitlist stacks with a full-width button and the scale halves its tick count.

## Elevation & Depth

Flat. There are no shadows; depth comes from tonal grounds (porcelain, plate, graphite) and real photography multiplied onto them. The only box-shadows in the build are 1px lines used as rules (the solid header's underline, the input's focus underline, the quiet button's inset outline).

**The Hairline-Not-Shadow Rule.** If something needs separating, give it a 1px rule, never a blur.

## Shapes

Square everywhere (0 radius): buttons, inputs, plates, frames. The only circle is the loupe reticle, a 72px hairline ring with crosshair stubs, because a loupe is round. Rules are 1px. Tick scales are drawn with repeating linear gradients, never images.

## Components

### Buttons
Solid, square, quietly confident.
- **Shape:** square corners (0).
- **Primary:** crimson ground, porcelain text, Bodoni 600 at 1rem, letter-spacing 0.01em, 3.25rem tall, 1.5rem side padding.
- **Hover / Active:** darkens to crimson-deep over 180ms; presses down 1px on active. Focus is the global 2px crimson outline offset 3px (porcelain outline inside the specs section).
- **Small:** 2.5rem tall, 0.9375rem text; the header Reserve button.
- **Quiet:** the small button with a transparent ground and 1px graphite inset outline; fills graphite on hover. Applied automatically while the hero form is visible.

### Waitlist form
- **Style:** label above in small Worn Graphite; a borderless input with only a 1px graphite underline, Bodoni body size, crimson caret; the primary button sits on the same baseline to the right (stacks under 520px).
- **Focus:** underline turns crimson and doubles to 2px.
- **Error / Done:** invalid input keeps a crimson underline and the message turns crimson-deep; on success the row is removed and the message reads in body size and full ink. The message line doubles as the price and release note before submission.

### Navigation
Wordmark (crimson faceted glyph plus Bodoni 600 name), a mono "Ref." label after a 1px rule, then small text links whose underline draws in from the left over 240ms. Below 860px only the Reserve button remains.

### Minute-track scale
The hero timeline: 60 fine ticks (6px) with 12 majors (14px) in 55% graphite, every fifth tick longer. A 2px x 20px crimson hand travels its width in step with the hero video's playback. A Pause motion / Play motion control sits beside it. Under 520px: 30 and 6 ticks.

### Loupe frame with rulers
A 3:2 porcelain window holding the real photo, with a horizontal ruler above and a vertical ruler at left (12px, graphite, 60% opacity at rest, full when pinned; fine ticks with every fifth longer). While pinned, scrolling moves the photo to each focal point; a crimson tick on each ruler marks the focal coordinate and the hairline reticle fades in with magnification. Captions list numbered details: inactive titles in Worn Graphite, the active one in full ink with a crimson reference number and its body expanded (420ms). Titles become buttons that jump to their detail.

### Spec sheet rows
On the graphite case back: groups headed in Title size, each row a two-column definition (term 1fr, value 1.15fr) between 1px case-back hairlines, 0.9rem vertical padding. Terms in small Bodoni, Case-Back Secondary; values in mono with tabular numerals. The intro (head, price in large Didone, primary button, note) stays sticky beside the sheet.

### Motion (applies to the hero, loupe and header components)

- **One orchestrated load:** media fades and settles from 1.04 scale (1.8s), the scale wipes in left to right (1.4s), headline lines unmask from below with a 0.1s stagger, lede and form rise 14px. Expo-out easing. Skipped entirely for reduced motion or a background tab.
- **Scroll scrub only in the loupe:** pinned for 3.4 viewport heights, scrub 0.7, snapping to each detail, power2.inOut.
- **State transitions:** `cubic-bezier(0.16, 1, 0.3, 1)` at 180ms (buttons) or 240ms (header, links, titles).
- The hero video pauses off-screen; reduced motion starts it paused and collapses all transitions.

## Do's and Don'ts

### Do:
- **Do** keep crimson to one active element per viewport; quiet any competing CTA to a graphite outline.
- **Do** use the minute-track tick scale (every fifth tick longer) for rulers, timelines and measured indices.
- **Do** set references and measured figures in Martian Mono with tabular numerals, and everything else in Bodoni Moda.
- **Do** separate with 1px rules (rule on light, rule-dark on graphite) and keep every corner square.
- **Do** multiply real product photography onto plate or porcelain grounds.
- **Do** give every motion a reduced-motion fallback: static plates, a paused video, no intro.

### Don't:
- **Don't** use crimson for decoration, headings or backgrounds; the wordmark glyph is the one fixed brand exception.
- **Don't** add shadows, gradients, glass, glows, blobs or rounded corners.
- **Don't** set prose, headings or buttons in mono, or uppercase anything for emphasis.
- **Don't** use graphite as a section ground beyond the single specification sheet.
- **Don't** add scroll-driven motion outside the loupe, or a second load sequence.
- **Don't** build fake 3D renders or a feature-card grid.
