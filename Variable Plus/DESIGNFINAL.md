---
version: "alpha"
name: "Plus Blueprint Schematic"
description: "A comprehensive, reusable design system for technical, blueprint-inspired interfaces across product surfaces, Figma extensions, plugins, admin dashboards, developer tools, and operational workflows. Combines schematic precision, dark-mode-first contrast, and structured token architecture for AI-ready UI generation."

colors:
  primary: "#0b1623"
  secondary: "#f0f0f0"
  tertiary: "#ff9f30"
  neutral: "#1c2b3a"
  surface: "#8b9bb4"
  accent: "#ff9f30"
  success: "#00ff9d"
  danger: "#ff6b6b"
  component: "#8fd2ff"

themes:
  dark:
    background: "#0b1623"
    surface: "#101e2c"
    surfaceHover: "#16253a"
    textPrimary: "#f0f0f0"
    textSecondary: "#8b9bb4"
    textTertiary: "#5f7187"
    textOnBrand: "#0b1623"
    border: "#1c2b3a"
    borderBrand: "#ff9f30"
    accent: "#ff9f30"
    success: "#00ff9d"
    danger: "#ff6b6b"
    component: "#8fd2ff"
    shadow: "rgba(2, 6, 23, 0.24)"
    inputShadow: "rgba(255, 159, 48, 0.14)"
  light:
    background: "#f6f7fb"
    surface: "#ffffff"
    surfaceHover: "#eef2f7"
    textPrimary: "#112033"
    textSecondary: "#4f6277"
    textTertiary: "#6b7f90"
    textOnBrand: "#ffffff"
    border: "#d6dce7"
    borderBrand: "#ff9f30"
    accent: "#ff9f30"
    success: "#0b7b4f"
    danger: "#b42318"
    component: "#2563eb"
    shadow: "rgba(15, 23, 42, 0.08)"
    inputShadow: "rgba(255, 159, 48, 0.2)"

typography:
  display:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace'
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h1:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace'
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  heading:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace'
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0em"
  body-md:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
  body:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
  label:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace'
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"
  monospace:
    fontFamily: '"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, monospace'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"

rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{themes.dark.textOnBrand}"
    borderRadius: "{rounded.none}"
    padding: "6px 12px"
    fontWeight: 600
  button-secondary:
    backgroundColor: "transparent"
    borderColor: "{themes.dark.border}"
    textColor: "{themes.dark.textPrimary}"
    borderRadius: "{rounded.none}"
    padding: "6px 12px"
    fontWeight: 500
  card-panel:
    backgroundColor: "{themes.dark.surface}"
    borderColor: "{themes.dark.border}"
    borderRadius: "{rounded.none}"
    padding: "{spacing.md}"
  input-field:
    backgroundColor: "{themes.dark.surface}"
    borderColor: "{themes.dark.border}"
    textColor: "{themes.dark.textPrimary}"
    borderRadius: "{rounded.none}"
    padding: "6px 8px"
  badge:
    backgroundColor: "{themes.dark.surfaceHover}"
    borderColor: "{themes.dark.border}"
    textColor: "{themes.dark.textSecondary}"
    borderRadius: "{rounded.full}"
    padding: "2px 6px"
---

## Overview

Plus-inspired design system for technical product interfaces, extensions, plugins, addons, dashboards, admin tools, and developer utilities. This style feels technical, deliberate, and buildable rather than decorative. It is optimized for surfaces that need to communicate competence, precision, and high-density information architecture.

Use this aesthetic for:
- Figma plugin and addon surfaces (sidebars, modals, onboarding panels, settings screens, and embedded toolbars)
- Desktop and web applications with dense data, configuration flows, developer tools, and operational workflows
- Settings panels, inspectors, internal tools, AI assistants, and technical product experiences
- Compact marketing moments and landing pages that need a structured, engineered visual identity

Blueprint aesthetics carry a specific weight in digital design. The cyanotype language of grids, technical annotations, and wireframe structure communicates competence because it visibly reflects process and system thinking.

- Density: 7/10 — Compact
- Variance: 2/10 — Structured
- Motion: 1/10 — Static

- **Style:** Technical, Precise, Engineered, Blueprint-inspired
- **Keywords:** blueprint, schematic, engineering, technical, grid, angular, wireframe, cyan, dark blue, product UI, plugin UI, dense, data-rich
- **Era:** Modern Industrial
- **Light/Dark:** ✓ Full (Dark-first default, Light-mode supported)

## Core Principles

- **Precision over decoration:** Every line, border, and pixel serves layout structure or data legibility.
- **Clarity over spectacle:** Prioritize immediate scanning and unambiguous hierarchy over visual novelty.
- **Utility over visual noise:** Avoid non-functional animations, heavy drop shadows, or decorative gradients.
- **Structured hierarchy over freeform layout:** Use modular grid rhythm and consistent panel bounding boxes.
- **Strong contrast for technical confidence:** Crisp separation between background, surfaces, borders, and text tiers.
- **Compact density for tools:** Maximize vertical and horizontal real estate for information-rich workflows.

## Design Intent

This system translates controlled engineering blueprints and drafting schematics into modern digital UI. The goal is not literal vintage skeuomorphism; it is preserving the clarity, structural order, and confidence of engineered documentation while keeping interfaces ergonomic, accessible, and fast to operate.

## Colors

### Dark Theme (Default)
- **Background** (`#0b1623`) — Primary canvas surface for application shells, main window backgrounds, and root containers.
- **Surface** (`#101e2c`) — Container background for cards, panels, list sections, modals, and toolbars.
- **Surface Hover** (`#16253a`) — Interactive hover feedback for list rows, menu items, and clickable cards.
- **Text Primary** (`#f0f0f0`) — Primary headings, active labels, input text, and high-emphasis data.
- **Text Secondary** (`#8b9bb4`) — Subtitles, section descriptions, inactive control labels, and metadata.
- **Text Tertiary** (`#5f7187`) — Disabled values, placeholders, subtle timestamps, and structural annotations.
- **Text On Brand** (`#0b1623`) — Text displayed directly on top of vibrant brand accent fills.
- **Border / Grid Lines** (`#1c2b3a`) — Structural boundaries, dividers, table grid lines, and panel frames.
- **Border Brand** (`#ff9f30`) — Focus rings, active container outlines, and highlighted schematic links.
- **Accent** (`#ff9f30`) — Primary CTA fills, selection indicators, active tab markers, and critical toggles.
- **Success** (`#00ff9d`) — Positive feedback, completed states, valid inputs, and online status pills.
- **Danger** (`#ff6b6b`) — Destructive actions, validation errors, conflict alerts, and deleted states.
- **Component Text / Marker** (`#8fd2ff`) — Figma component references, variable tags, code keywords, and technical tokens.

### Light Theme
- **Background** (`#f6f7fb`) — Neutral canvas background for light mode.
- **Surface** (`#ffffff`) — Crisp white container surface for panels and toolbars.
- **Surface Hover** (`#eef2f7`) — Soft hover highlight for list items and cards.
- **Text Primary** (`#112033`) — High-contrast dark text for headings and primary content.
- **Text Secondary** (`#4f6277`) — Medium-contrast text for labels and secondary descriptions.
- **Text Tertiary** (`#6b7f90`) — Muted text for disabled states and placeholders.
- **Text On Brand** (`#ffffff`) — Text on accent fills.
- **Border** (`#d6dce7`) — Crisp gray dividers and structural frames.
- **Border Brand** (`#ff9f30`) — Active/focused brand outline.
- **Accent** (`#ff9f30`) — Primary action color.
- **Success** (`#0b7b4f`) — Accessible green for positive confirmations in light mode.
- **Danger** (`#b42318`) — Accessible deep red for errors and destructive actions.
- **Component Text / Marker** (`#2563eb`) — Vibrant blue for technical tokens and component names.

### Palette Usage Rules
- Use **Accent (`#ff9f30`)** with restraint: reserve for primary CTAs, active selection tabs, and keyboard focus outlines. Never use it as a large background fill.
- Use **Component Blue (`#8fd2ff` / `#2563eb`)** specifically for semantic technical elements (variables, token paths, component names, code values).
- Keep **Success** and **Danger** strictly functional for system status and input validation.

## Typography

### Font Family
- **Interface & Code:** `"JetBrains Mono", "SFMono-Regular", Consolas, Menlo, Roboto, monospace`
- Always use monospace styling for technical editorial clarity, aligning numerical data, code snippets, metadata, and token variables.

### Scale & Hierarchy
- **Display / Hero:** 2.5rem (40px) / Weight 700 / Line-height 1.2 — Used for landing titles or large hero displays.
- **H1 (View Header):** 1.5rem (24px) / Weight 700 / Line-height 1.3 — Primary plugin/app screen titles.
- **Heading (Section / Subhead):** 14px (0.875rem) / Weight 600 / Line-height 1.3 — Panel titles, modal headers, group section names.
- **Body-MD:** 13px / Weight 400 / Line-height 1.4 — Standard body paragraphs, modal descriptions, onboarding text.
- **Body (Default UI):** 12px / Weight 400 / Line-height 1.4 — Table text, list values, form fields, inspector inputs.
- **Label / Caption:** 11px / Weight 500 / Line-height 1.3 / Letter-spacing 0.02em — Form field labels, column headers, metadata tags, badges.
- **Monospace Code:** 12px / Weight 400 / Line-height 1.4 — Variable names, JSON values, hex codes, dimensions.

### Typography Rules
- Tight line-heights (1.3 to 1.4) are mandatory to support high-density workflows.
- Sentence case is preferred for all headers and labels. Uppercase should be reserved strictly for small badge indicators or column header keys.
- Max reading length for descriptive text: 64ch–72ch.

## Layout

- **Modular Grid:** CSS Grid and Flexbox alignment. Align all components to a 4px baseline sub-grid.
- **Max-width containment:** 
  - Standard Web / Dashboard: `1280px` centered with `1.5rem` (24px) side padding.
  - Plugin / Sidebar / Compact Panels: `100%` fluid width within the host frame (e.g., 280px–400px fixed extension windows) with `8px`–`12px` interior padding.
- **Spatial Rhythm:**
  - `xxs` (`4px`) — Tight gaps between icon and text, inline tags, input internal margins.
  - `xs` (`8px`) — Standard compact gap between related form fields, segmented control items, button padding.
  - `sm` (`12px`) — Panel internal padding, list item horizontal padding, component group spacing.
  - `md` (`16px`) — Section separation, modal interior padding, card container margins.
  - `lg` (`24px`) — Major block separation, empty state vertical breathing room.
  - `xl` (`32px`+) — Page-level spacing and marketing breaks.
- **Multi-column Collapse:** All multi-column panels stack vertically below `768px`. Zero horizontal overflow.
- **z-index Contract:**
  - `base`: `0`
  - `dropdown / popover`: `50`
  - `sticky-nav / toolbar`: `100`
  - `overlay / scrim`: `200`
  - `modal / dialog`: `300`
  - `toast / notification`: `500`

## Elevation & Depth

- **Tonal Layering over Heavy Shadows:** Depth is primarily established through background luminosity shifts (`#0b1623` base canvas → `#101e2c` panel surface → `#16253a` hovered card) and 1px borders (`#1c2b3a`), rather than heavy blurred drop shadows.
- **Drafting Grid & Leader Lines:** Use subtle 1px structural grid lines and angular leader lines to demarcate sections and indicate parenting relationships between tree nodes or inspector items.
- **Shadow Tokens:**
  - Panel Elevation: `0 2px 8px rgba(2, 6, 23, 0.24)`
  - Active Input Glow: `0 0 0 2px rgba(255, 159, 48, 0.2)`
- **Motion & Transition Spec:**
  - Interaction style: Instant, utilitarian, zero decorative overhead.
  - Hover transitions: `150ms–180ms ease` for background color and border color only.
  - Active press: `-1px` translate for tactile response.
  - No slow entry animations or bouncing layout transitions.

## Shapes

- **Sharp Edge Philosophy:** Base corner radius is `0px` (`rounded.none`) for primary application shells, top-level panels, window containers, and table layouts to maintain an engineered drafting aesthetic.
- **Radius Tokens:**
  - `none` (`0px`) — Primary panels, inspector groups, main buttons, inputs, table rows.
  - `sm` (`4px`) — Tooltips, context menus, compact form controls when slight tactile softening is required.
  - `md` (`8px`) — Modal dialogs and floating toast notifications.
  - `full` (`999px`) — Status badges, count pills, and toggle indicators only.

## Components

### Buttons
- **Primary Button:** Sharp edges (`0px`), solid Accent (`#ff9f30`) fill, dark text (`#0b1623`), weight 600. Hover: 8% darkened fill. Active: `-1px` tactile press. Focus: 2px offset brand ring.
- **Secondary / Outline Button:** 1px border (`#1c2b3a`), transparent background, Text Primary (`#f0f0f0`). Hover: `#16253a` fill.
- **Ghost / Icon Button:** Transparent background, muted text (`#8b9bb4`). Hover: `#16253a` surface, Text Primary.
- **Destructive Button:** Danger outline or red fill for irreversible actions (e.g. Bulk Delete).

### Inputs & Form Controls
- **Text & Number Inputs:** 1px border (`#1c2b3a`), Surface background (`#101e2c`), Text Primary (`#f0f0f0`). Padding: `6px 8px`. Focus: 2px Accent border (`#ff9f30`) with `0 0 0 2px rgba(255,159,48,0.15)`. No floating labels; place 11px labels above inputs.
- **Select / Dropdown:** Custom chevron, monospace font, matching input height and border.
- **Checkbox / Switch:** Sharp rectangular checkbox (`0px` radius) or compact pill switch (`999px` radius) with high-contrast active fill.

### Cards & Panels
- **Container Surfaces:** `#101e2c` background, 1px `#1c2b3a` border, `0px` radius.
- **Panel Header Rhythm:** 11px/12px uppercase or bold section headers with bottom 1px divider and compact trailing actions.
- **Collapsible Groups:** Expand/collapse chevron with immediate state toggle and persistent scroll position.

### Rows & List Items
- **Structure:** 28px–34px compact height, Flexbox layout with icon/tag, title, metadata badge, and trailing action button.
- **States:** Hover background (`#16253a`), Selected background (`#1a2d42` with 2px solid `#ff9f30` left border indicator).

### Tabs & Segmented Navigation
- **Segmented Bar:** Contained toolbar with `#101e2c` background. Active tab: `#1c2b3a` surface or bottom 2px Accent bar with Text Primary. Inactive tabs: Text Secondary.

### Badges & Status Tags
- **Pill Shape:** `rounded.full` (999px), `2px 6px` padding, 11px font.
- **Status Variants:**
  - Neutral: `#16253a` background, `#8b9bb4` text.
  - Active / Brand: `rgba(255,159,48,0.15)` background, `#ff9f30` text.
  - Success: `rgba(0,255,157,0.12)` background, `#00ff9d` text.
  - Danger: `rgba(255,107,107,0.15)` background, `#ff6b6b` text.
  - Component Token: `rgba(143,210,255,0.12)` background, `#8fd2ff` text.

### Skeletons & Empty States
- **Skeletons:** Subtle pulse or shimmer on `#16253a` matching exact component bounding boxes. No circular spinners.
- **Empty States:** Schematic wireframe icon, concise 13px explanation, and clear single CTA button.

## States & Interaction Guidance

- **Default State:** High legibility, crisp 1px borders, clear separation between foreground and background.
- **Hover State:** Immediate 150ms surface shift (`#16253a`) and text brightness increase.
- **Focus State:** Unambiguous 2px Accent outline (`#ff9f30`) with 2px offset. Never remove focus outlines without a keyboard replacement.
- **Active / Pressed State:** `-1px` transform and slightly darkened background for tactile confirmation.
- **Disabled State:** Opacity reduced to `40%`, cursor `not-allowed`, no hover background triggers.
- **Validation & Error States:** Red border (`#ff6b6b`), 11px error helper text directly below the field, distinct error icon.

## Do's and Don'ts

### Do's
- **Do** preserve the dark-first schematic look with deep blue `#0b1623` and `#101e2c` surfaces.
- **Do** use monospace typography (`JetBrains Mono`) for all interface labels, values, and tokens.
- **Do** keep corner radius sharp (`0px`) for containers, panels, and primary inputs.
- **Do** maintain a strict 4px/8px spatial rhythm for compact information density.
- **Do** use the Accent color (`#ff9f30`) sparingly to direct attention to key actions and active states.
- **Do** use Component Blue (`#8fd2ff`) for token names, Figma variables, and technical identifiers.
- **Do** provide instant, utilitarian feedback (150ms transitions, no heavy animation overhead).
- **Do** support both Dark and Light themes with identical semantic contrast and hierarchy.

### Don'ts
- **Don't** use emojis as primary UI affordances or status icons (use inline SVG technical iconography).
- **Don't** use pure white (`#FFFFFF`) or pure black (`#000000`) for canvas backgrounds.
- **Don't** use soft consumer-style rounded corners (`16px`–`24px` radius) or bubbly pill buttons for primary actions.
- **Don't** rely on heavy drop shadows or decorative gradients to create depth.
- **Don't** oversaturate layouts with multiple competing accent colors.
- **Don't** use marketing buzzwords ("Elevate", "Seamless", "Unleash", "Next-Gen") in interface copy.
- **Don't** use generic Lorem Ipsum in mockups or UI previews.
- **Don't** introduce slow, bouncing page transitions or decorative entrance animations.

## Adaptation Guidance & Use Cases

When adapting this system to different surfaces or project scopes, calibrate the following parameters:

- **Density:** Maintain `7/10` (Compact) for Figma plugins, sidebars, and admin grids; relax to `5/10` (Standard) for documentation and marketing views by scaling padding from `xs` (8px) to `md` (16px).
- **Corner Radius:** Keep `0px` for technical tools; allow `rounded.sm` (4px) for standalone web apps if a softer tactile finish is desired.
- **Accent Intensity:** Use single-point accent highlights for dense tools; allow larger CTA buttons for onboarding flows.
- **Motion Level:** Keep at `1/10` (Static/Utilitarian) for productivity tools; allow subtle fade-ins for marketing landing pages.

### Target Surfaces
Figma plugins, Variable Plus extensions, developer consoles, configuration panels, data inspectors, internal admin dashboards, operational tools, AI assistant sidebars, and technical design system documentation.
