---
version: "alpha"
name: "Plus Blueprint Schematic - Reusable System Guide"
description: "A reusable design system guide for technical, blueprint-inspired interfaces across products, including plugins, dashboards, admin tools, developer surfaces, and compact product experiences."

system:
  style: "technical, precise, engineered, blueprint-inspired"
  mood: "compact, structured, utilitarian, high-clarity"
  useCases:
    - plugin and addon surfaces
    - settings panels and inspector views
    - developer tools and admin interfaces
    - dashboards and technical product experiences

colors:
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
  fontFamily: '"JetBrains Mono", "SFMono-Regular", Roboto, monospace'
  body: "12px / 1.4"
  bodyMd: "13px / 1.4"
  label: "11px / 1.3"
  heading: "14px / 1.3"
  weightRegular: 400
  weightMedium: 500
  weightSemibold: 600

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"

radius:
  pill: "999px"
  sm: "6px"
  md: "10px"
  lg: "14px"

motion:
  hoverDuration: "0.18s"
  hoverEasing: "ease"
  interactionStyle: "subtle, functional, no decorative animation"

---

## Overview

This document defines a reusable visual language for technical and product-oriented interfaces. It is intended to support a wide range of experiences, from plugins and internal tools to dashboards, admin surfaces, and compact application panels.

**Use this guide as a foundation**, not as a rigid final implementation. **Adapt the density, emphasis, and scale** to fit the product context while preserving the system's core character.

## Design Intent

The system should feel like a controlled technical drawing translated into digital UI: organized, legible, and confident. It should communicate competence through structure, rhythm, and clarity rather than ornament.

**Prioritize clarity, structure, and trustworthy interaction over visual decoration.**

## Core Principles

- **Precision over decoration**
- **Clarity over spectacle**
- **Utility over visual noise**
- **Structured hierarchy over freeform layout**
- **Strong contrast for readability and technical confidence**
- **Compact density for tools and information-rich surfaces**

## Visual Language

### Surface model
- **Primary surfaces** use deep blue-gray backgrounds that feel grounded and technical.
- **Secondary surfaces** provide separation for panels, headers, and content blocks.
- **Hover states** should be subtle and functional rather than dramatic.
- **Borders** should be visible but restrained, creating schematic separation without visual heaviness.

### Type style
- **JetBrains Mono** is the preferred interface font for a technical editorial tone.
- **Labels, metadata, and technical values** should remain concise and readable.
- **Typography** should feel direct and structured rather than decorative.

### Interaction style
- **Hover feedback** should be immediate and understated.
- **Focus states** should be visible and clear.
- **Active and selected states** should use accent color sparingly and consistently.
- **Motion** should stay subtle, fast, and functional.

## Color System

### Dark theme
- **Background:** #0b1623
- **Surface:** #101e2c
- **Surface hover:** #16253a
- **Text primary:** #f0f0f0
- **Text secondary:** #8b9bb4
- **Text tertiary:** #5f7187
- **Border:** #1c2b3a
- **Accent:** #ff9f30
- **Success:** #00ff9d
- **Danger:** #ff6b6b
- **Component text:** #8fd2ff

### Light theme
- **Background:** #f6f7fb
- **Surface:** #ffffff
- **Surface hover:** #eef2f7
- **Text primary:** #112033
- **Text secondary:** #4f6277
- **Text tertiary:** #6b7f90
- **Border:** #d6dce7
- **Accent:** #ff9f30
- **Success:** #0b7b4f
- **Danger:** #b42318
- **Component text:** #2563eb

### Usage rules
- **Accent color** should guide attention for primary actions, active selections, and important state emphasis.
- **Success and danger colors** should remain reserved for feedback and validation states.
- **Supporting metadata** can use the component blue to reinforce technical structure.

## Typography Rules

- **Body text** should be compact, readable, and consistent across interfaces.
- **Labels and captions** should stay small and purposeful for dense layouts.
- **Section headings** should feel confident and direct without becoming overly prominent.
- **Line-height** should remain tight and efficient for technical surfaces.
- **Uppercase** should be used sparingly; sentence case is preferred for clarity.

## Layout and Spacing

- **Layout** should feel modular and structured rather than freeform.
- **Vertical spacing** should support clear grouping without wasting space.
- **Horizontal overflow** should be avoided in compact interfaces.
- **Panels and groups** should feel like connected blocks within a coherent workspace.

### Suggested spatial rhythm
- **4px** for tight spacing and compact alignment
- **8px** for standard component gaps
- **12px** for internal spacing within controls and sections
- **16px** for section separation
- **24px** for larger content blocks and empty states

## Component Guidance

### Tabs and navigation
- **Tabs** should appear as compact, structured controls with clear active states.
- **Active items** should feel more prominent without becoming visually loud.
- **Navigation** should support quick scanning and efficient movement through the interface.

### Panels and groups
- **Containers** should use visible boundaries and a clear header rhythm.
- **Groupings** should feel orderly and modular.
- **Collapsible sections** should remain easy to parse and consistent in behavior.

### Buttons
- **Buttons** should be compact, readable, and direct.
- **Primary actions** should use the accent color with restraint.
- **Secondary actions** should rely on border-based treatment and clear hierarchy.

### Inputs and controls
- **Inputs** should use a visible border and a clear focus state.
- **Forms** should feel efficient and technical rather than playful or ornamental.
- **Control styling** should remain consistent across similar UI patterns.

### Rows and list items
- **Rows** should support selection, badges, metadata, and compact actions.
- **List structure** should remain easy to scan at a glance.
- **Density** should support information-rich interfaces without feeling crowded.

### Badges and tags
- **Badges** should be small, legible, and purposeful.
- **Status and count indicators** should reinforce meaning without overwhelming the content.

## Interaction and State Guidance

### Hover
- **Hover states** should use a subtle surface change that maintains clarity and contrast.

### Active and selected
- **Active states** should feel intentional and readable without overusing accent color.

### Focus
- **Focus states** should be clearly visible and consistent across controls.

### Disabled
- **Disabled states** should feel subdued and non-interactive without becoming ambiguous.

## Theme Rules

- **Dark mode** should remain the default visual environment for technical surfaces.
- **Light mode** should preserve the same structure, hierarchy, and system logic.
- **Both themes** should maintain the same rhythm, contrast, and component behavior.

## Do’s

- **Keep the interface structured and readable.**
- **Use monospace typography for technical values and metadata.**
- **Preserve clear separation between panels and content areas.**
- **Favor compact, information-rich layouts for tool-like experiences.**
- **Use accent color sparingly to guide attention.**

## Don’ts

- **Do not rely on decorative gradients or soft consumer-style surfaces.**
- **Do not overuse the accent color or let it become visual noise.**
- **Do not introduce generic marketing language or overly playful visual cues.**
- **Do not make the interface feel ornamental, overly rounded, or visually loose.**

## Adaptation Guidance

Use this system as a reusable foundation for new products and experiences. When applying it to a different project, adjust the following as needed:

- **Density** for more compact or more spacious interfaces
- **Corner radius** for softer or stricter visual tone
- **Accent intensity** for lighter or stronger emphasis
- **Component scale** for product surfaces that need more or less detail
- **Motion level** for environments that require a more static or more responsive feel

**The goal is to preserve the system's technical character while adapting it to the needs of the product.**
