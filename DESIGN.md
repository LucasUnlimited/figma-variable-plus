---
version: "alpha"
name: "Plus Blueprint Schematic"
description: "Plus-inspired design system for product interfaces, extensions, plugins, addons, dashboards, and marketing experiences. Uses a schematic blueprint aesthetic with dark blue surfaces, cyan structure lines, technical precision, and wireframe clarity for AI-ready UI generation."
colors:
  primary: "#0b1623"
  secondary: "#f0f0f0"
  tertiary: "#ff9f30"
  neutral: "#1c2b3a"
  surface: "#8b9bb4"
  accent: "#00ff9d"
themes:
  dark:
    background: "#0b1623"
    surface: "#101e2c"
    text: "#f0f0f0"
    muted: "#8b9bb4"
    border: "#1c2b3a"
    accent: "#ff9f30"
  light:
    background: "#f6f7fb"
    surface: "#ffffff"
    text: "#112033"
    muted: "#4f6277"
    border: "#d6dce7"
    accent: "#ff9f30"
typography:
  h1:
    fontFamily: JetBrains Mono
    fontSize: 2.5rem
    fontWeight: 700
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    padding: 12px
---

## Overview

Plus-inspired design system for product interfaces, extensions, plugins, addons, dashboards, admin tools, and marketing experiences. This style should feel technical, deliberate, and buildable rather than decorative. It is especially effective for tools that need to communicate competence, precision, and system clarity.

Use this aesthetic for:
- plugin and addon surfaces such as sidebars, modals, onboarding panels, settings screens, and embedded toolbars
- desktop and web applications with dense data, configuration flows, developer tools, and operational workflows
- internal tools, AI assistants, dashboards, and technical product experiences
- lightweight marketing moments that need a structured, engineered visual identity

Blueprint aesthetics carry a specific weight in digital design. The cyanotype language of grids, annotations, and wireframe structure communicates competence because it visibly reflects process and system thinking. In modern product design, that clarity can be as important as visual polish.

- Density: 7/10 — Compact
- Variance: 2/10 — Structured
- Motion: 1/10 — Static

- **Style:** Technical, Precise, Engineered
- **Keywords:** blueprint, schematic, engineering, technical, grid, angular, wireframe, cyan, dark blue, product UI, plugin UI
- **Era:** Modern Industrial
- **Light/Dark:** ✗ No / ✓ Full

## Design Intent

This system should look like a controlled technical drawing translated into digital UI. The goal is not to imitate a literal blueprint; it is to preserve the clarity, order, and confidence of engineered documentation while making interfaces usable and approachable.

## Colors

- **Background** (#0b1623) — Primary background surface for full-screen layouts and panels
- **Text** (#f0f0f0) — Primary text color for interfaces, labels, and headings
- **Accent** (#ff9f30) — Primary accent for CTAs, active states, and interactive highlights
- **Grid Lines** (#1c2b3a) — Structural lines, panel separators, and schematic details
- **Dim Text** (#8b9bb4) — Secondary copy, metadata, muted status text
- **Success** (#00ff9d) — Positive states, confirmation, completion indicators
- **Warning** (#ff9f30) — Attention states, caution messaging, validation emphasis

## Typography

- **Display / Hero:** JetBrains Mono — Weight 700, tight tracking, used for headline impact or primary app titles
- **Body:** JetBrains Mono — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** JetBrains Mono — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, configuration values, and technical data

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem

## Layout

- **Grid:** CSS Grid or equivalent layout system. Use a structured, modular grid rather than freeform composition.
- **Max-width containment:** 1280px centered with 1.5rem side padding for broad web experiences; use tighter padding for embedded surfaces.
- **Spacing rhythm:** Balanced. Use spacing token sm (8px) for compact gaps and spacing token md (16px) for standard section or component spacing. Base unit remains 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem) for marketing sections; tighter spacing for tool panels and application views.
- **Primary patterns:** Split-screen hero, stacked content panels, side-by-side inspector/detail layouts, and compact settings or configuration flows.
- **Feature sections:** Zig-zag alternating text+image rows for marketing; use logical grouping, cards, and dense panels for apps.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Exploded view wireframes, angular leader lines, drafting grid background, technical iconography, and neon-like line visibility should define the visual hierarchy.

- Minimal motion design. Hover states use color transitions only (150ms).
- No entry animations. No page transitions. Instant, utilitarian feedback.
- Performance: No animation overhead. Static-first approach.
- For tools and plugins, keep interactive feedback subtle and task-focused rather than decorative.

## Shapes

Base corner radius: 0px for primary surfaces. Use rounded.sm (4px) and rounded.md (8px) sparingly for secondary elements only when a subtle tactile treatment is needed. The system should feel precise and engineered rather than soft or consumer-oriented.

## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards / Panels:** Sharp edges (0px) corners for primary containers. Use rounded.sm (4px) or rounded.md (8px) only for lightweight secondary surfaces or compact controls. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs / Form Fields:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Sidebar / Inspector:** Compact vertical structure for settings, configuration, or inspection workflows.
- **Tabs / Segmented Controls:** Clear grouping for alternate views, modes, or states.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## States & Interaction Guidance

Use the visual language to reinforce clarity and confidence across all states:
- Default, hover, active, focus, disabled, and error states should all remain legible and structured.
- For plugins and addons, prioritize compact information density and fast task completion over decorative animation.
- Use accent color sparingly to direct attention to the current action, selection, or validation state.
- Support both light and dark environments without losing the schematic contrast.

## Do's and Don'ts

- Do keep grid background visible where it strengthens the technical identity.
- Do use monospace typography for technical values, metadata, code snippets, and configuration details.
- Do preserve high-contrast schematic lines and angular connectors between elements.
- Do use technical icons such as cogs, rulers, panels, and status indicators where appropriate.
- Do keep the layout orderly and system-visible, especially in tools and plugin surfaces.

- Do not use emojis as primary UI affordances.
- Do not use pure white (#FFFFFF) backgrounds for core surfaces.
- Do not oversaturate the accent color beyond the defined palette.
- Do not use 3-column equal-width feature layouts unless the interface truly benefits from it.
- Do not use generic marketing clichés such as "Elevate", "Seamless", "Unleash", or "Next-Gen".
- Do not rely on decorative gradients or soft rounded surfaces when the interface should feel precise and technical.
- Do not use broken external image links; prefer inline SVG or controlled local assets.
- Do not use generic lorem ipsum in demos or product examples.

## Use Cases

Landing pages, modern websites, plugin and addon panels, desktop and web applications, internal tools, developer utilities, configuration flows, AI assistants, dashboards, and other product experiences that benefit from a precise, engineered aesthetic.
