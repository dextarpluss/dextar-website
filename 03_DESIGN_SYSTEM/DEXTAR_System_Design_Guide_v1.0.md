# DEXTAR++ --- System Design Guide for Generative AI

**Version:** 1.0\
**Purpose:** Visual system specification for AI-generated web, desktop
and mobile interfaces.

> This document is the source of truth for the visual identity of
> Dextar++ digital systems.\
> When generating a UI, preserve these rules unless a project-specific
> requirement explicitly overrides them.

------------------------------------------------------------------------

## 1. Brand direction

**Brand:** Dextar++ --- Soluções em Tecnologia\
**Brand concept:** technology, logistics, automation, data and applied
artificial intelligence.\
**Visual personality:** modern, precise, secure, innovative,
professional and sophisticated.

### Core principle

The interface must communicate:

-   security and operational reliability;
-   modern technology without looking futuristic or experimental;
-   clarity and productivity;
-   intelligence applied to real business processes;
-   generous negative space;
-   clean geometric construction;
-   strong information hierarchy.

The visual language is **Sophisticated Neo-Brutalism**: strong geometry,
clean lines, assertive typography and controlled contrast. Avoid
excessive decoration.

------------------------------------------------------------------------

## 2. Official brand colors

These colors are mandatory brand references.

  -----------------------------------------------------------------------
  Token                   HEX                     Role
  ----------------------- ----------------------- -----------------------
  `brand.navy`            `#07090E`               Security, stability,
                                                  primary dark background

  `brand.cyan`            `#06B6D4`               Primary action,
                                                  technology, AI,
                                                  innovation

  `brand.blue`            `#3B82F6`               Corporate information,
                                                  technology, data

  `brand.emerald`         `#10B981`               Success, positive
                                                  result, productivity

  `brand.purple`          `#8B5CF6`               Strategy, insights,
                                                  analytics

  `brand.amber`           `#F59E0B`               Warning, attention,
                                                  monitoring

  `brand.rose`            `#F43F5E`               Error, critical state,
                                                  destructive action

  `brand.coolGray`        `#CBD5E1`               Borders, secondary UI,
                                                  neutral elements

  `brand.white`           `#FFFFFF`               Clarity, breathing
                                                  room, primary light
                                                  surface
  -----------------------------------------------------------------------

### Mandatory rule

Do **not** invent another primary brand color.

New neutral shades may be derived when necessary for backgrounds,
borders, disabled states and text hierarchy, but the brand identity must
remain visually anchored in:

`Deep Navy + Cyan + Blue`

Emerald, Purple, Amber and Rose are primarily semantic/support colors.

------------------------------------------------------------------------

## 3. Official gradients

### Primary gradient

``` css
linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)
```

Use for: - selected premium/AI elements; - branded accents; - hero
details; - active visualization accents; - the `++` motif when
appropriate.

Do not use it as the default background for every button or card.

### Secondary gradient

``` css
linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)
```

Use sparingly for: - analytics; - strategic insights; - advanced
intelligence features.

------------------------------------------------------------------------

## 4. Semantic color system

Never use semantic colors only as decoration.

``` css
--color-action: #06B6D4;
--color-information: #3B82F6;
--color-success: #10B981;
--color-insight: #8B5CF6;
--color-warning: #F59E0B;
--color-danger: #F43F5E;
```

Meaning:

-   **Cyan:** action / AI / intelligent feature.
-   **Blue:** information / metrics / corporate data.
-   **Emerald:** success / completed / healthy / positive.
-   **Purple:** insight / analytics / strategic intelligence.
-   **Amber:** attention / pending / risk / partial state.
-   **Rose:** error / destructive / critical.

Color must be reinforced with text and/or icons. Never rely on color
alone.

------------------------------------------------------------------------

## 5. Light theme

Light mode must feel clean, technical and premium.

### Recommended tokens

``` css
:root {
  --bg-app: #F7F9FC;
  --bg-surface: #FFFFFF;
  --bg-surface-secondary: #F1F5F9;

  --text-primary: #07090E;
  --text-secondary: #475569;
  --text-muted: #64748B;

  --border-default: #CBD5E1;
  --border-subtle: #E2E8F0;

  --primary: #06B6D4;
  --primary-hover: #0891B2;
  --secondary: #3B82F6;

  --success: #10B981;
  --warning: #F59E0B;
  --danger: #F43F5E;
  --insight: #8B5CF6;
}
```

### Light theme behavior

-   Use white for primary cards and work surfaces.
-   Use very light cool-gray backgrounds for page structure.
-   Use Deep Navy for high-emphasis typography.
-   Cyan is the preferred primary interaction color.
-   Blue supports information hierarchy.
-   Avoid large areas of saturated Cyan or Blue.

------------------------------------------------------------------------

## 6. Dark theme

Dark mode is a first-class Dextar++ theme, not an inverted light theme.

### Recommended tokens

``` css
[data-theme="dark"] {
  --bg-app: #07090E;
  --bg-surface: #0D1726;
  --bg-surface-secondary: #111F33;
  --bg-elevated: #16263D;

  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;

  --border-default: #24364D;
  --border-subtle: #18283D;

  --primary: #06B6D4;
  --primary-hover: #22D3EE;
  --secondary: #3B82F6;

  --success: #10B981;
  --warning: #F59E0B;
  --danger: #F43F5E;
  --insight: #8B5CF6;
}
```

### Dark Glass language

Dark interfaces may use controlled translucent surfaces:

``` css
.glass-panel {
  background: rgba(17, 31, 51, 0.72);
  border: 1px solid rgba(203, 213, 225, 0.12);
  backdrop-filter: blur(14px);
}
```

Use glass effects only for elevated or special surfaces. Do not make
every component transparent.

------------------------------------------------------------------------

## 7. Typography

### Preferred font

**Inter** is the default digital typeface.

Recommended hierarchy:

``` css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

If available, use **Inter Display** for large headings.

### Weights

-   400 --- body text;
-   500 --- controls, labels;
-   600 --- subtitles, navigation, cards;
-   700 --- page titles and major numbers.

Avoid excessive use of 800/900 weights.

### Suggested scale

``` css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-md: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

Large marketing headings may exceed this scale.

Use open spacing and short headings. Avoid dense all-uppercase
paragraphs.

------------------------------------------------------------------------

## 8. Spacing system

Use an 8px structural grid with 4px micro-adjustments.

``` css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
```

Prefer generous whitespace.

Do not compress dashboards simply to display more information.

------------------------------------------------------------------------

## 9. Border radius

Dextar++ is geometric and precise. Avoid excessively rounded "bubble
UI".

``` css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 18px;
--radius-pill: 999px;
```

Usage:

-   Inputs: `8–10px`
-   Buttons: `8–10px`
-   Cards: `10–14px`
-   Modals: `14–18px`
-   Pills/badges: pill radius only when semantically appropriate.

------------------------------------------------------------------------

## 10. Shadows

Use subtle elevation.

### Light

``` css
--shadow-sm: 0 1px 2px rgba(7, 9, 14, 0.06);
--shadow-md: 0 8px 24px rgba(7, 9, 14, 0.08);
--shadow-lg: 0 20px 50px rgba(7, 9, 14, 0.12);
```

### Dark

Prefer borders and tonal elevation over heavy shadows.

Do not use strong black drop shadows around every component.

------------------------------------------------------------------------

## 11. Buttons

### Primary

-   background: Cyan `#06B6D4`
-   foreground: Deep Navy `#07090E` or white according to accessible
    contrast;
-   medium/semi-bold label;
-   radius around 8--10px.

### Secondary

Use Blue or a neutral outlined style.

### Destructive

Use Rose only for destructive actions.

### AI / intelligent action

Cyan is preferred. A subtle Cyan → Blue gradient may be used for a
high-value AI action, but not globally.

Buttons require:

-   default;
-   hover;
-   focus;
-   pressed;
-   disabled;
-   loading.

Focus state must remain visible.

------------------------------------------------------------------------

## 12. Cards and panels

Cards must communicate hierarchy, not merely create boxes.

Recommended structure:

1.  optional eyebrow/label;
2.  title;
3.  primary value or content;
4.  contextual information;
5.  optional action.

Rules:

-   avoid nesting many bordered cards;
-   use whitespace before adding borders;
-   keep borders subtle;
-   KPI cards may use a thin Cyan/Blue top or side accent;
-   status color should only appear when it carries meaning.

------------------------------------------------------------------------

## 13. Forms

Forms should feel operational and precise.

-   Labels above inputs.
-   Keep placeholder text secondary.
-   Always show visible focus state.
-   Error text uses Rose.
-   Success validation uses Emerald.
-   Warning uses Amber.
-   Required fields must not depend only on color.
-   Group related fields into clear sections.
-   Prefer one primary action per form.

------------------------------------------------------------------------

## 14. Tables

Tables are important for Dextar++ operational systems.

Rules:

-   strong header hierarchy;
-   subtle row separators;
-   adequate vertical padding;
-   sticky headers for long tables;
-   hover state on interactive rows;
-   numbers aligned consistently;
-   status represented with semantic badges;
-   filters must be clearly separated from data;
-   do not use zebra striping unless it materially improves readability.

For dense enterprise tables, preserve readability over visual
decoration.

------------------------------------------------------------------------

## 15. Navigation

### Sidebar

Recommended for enterprise/operational systems.

-   Deep Navy works well for persistent navigation.
-   Active item: Cyan or Blue indicator.
-   Do not highlight many items simultaneously.
-   Use consistent line-style icons.
-   Keep labels short.

### Topbar

Use for: - page context; - search; - notifications; - profile; - theme
switch; - global actions.

------------------------------------------------------------------------

## 16. Icons

Use one consistent icon family throughout a product.

Preferred characteristics:

-   geometric;
-   clean;
-   medium stroke;
-   no cartoon aesthetic;
-   no mixed filled/outlined families without a reason.

Suggested libraries when available: - Lucide; - Phosphor; - Material
Symbols Rounded only if used consistently.

Do not use emoji as production UI icons.

------------------------------------------------------------------------

## 17. Data visualization

Recommended color order:

1.  Blue `#3B82F6`
2.  Cyan `#06B6D4`
3.  Emerald `#10B981`
4.  Purple `#8B5CF6`
5.  Amber `#F59E0B`
6.  Rose `#F43F5E`

Meaning overrides sequence.

For example, a negative series must use the negative semantic color
rather than the next decorative palette color.

Charts must: - prioritize comparison; - show units; - have legible
axes; - use tooltips when interactive; - avoid unnecessary 3D effects; -
avoid rainbow palettes.

------------------------------------------------------------------------

## 18. The `++` brand element

The `++` is a proprietary brand motif representing:

**Inteligência aumentada + produtividade aumentada.**

It may appear as:

-   a subtle graphic element;
-   AI feature marker;
-   branded empty state;
-   section accent;
-   loading/processing motif;
-   premium intelligence indicator.

### Correct examples

-   `Insights++`
-   `Monitoramento++`
-   `Produtividade++`

Only use this naming when the feature actually has an
intelligent/augmented capability.

### Do not

-   append `++` to every menu item;
-   use it as random decoration everywhere;
-   make it more visually dominant than the actual task;
-   imply AI where no AI capability exists.

------------------------------------------------------------------------

## 19. AI-specific UI

Dextar AI should look like part of Dextar++, not a separate sci-fi
product.

Distinguish:

### Data

> Estoque atual: 1.248 unidades

### Information

> Estoque aumentou 12% nesta semana.

### Insight++

> O aumento está concentrado em itens de baixa rotação.

### Recommendation++

> Considere reduzir o próximo lote de reposição em 15%.

For AI-generated content, whenever relevant expose:

-   type: insight / recommendation / anomaly / prediction;
-   source/context;
-   confidence when meaningful and technically available;
-   timestamp;
-   user action;
-   ability to review before applying consequential actions.

Do not visually present AI output as unquestionable truth.

------------------------------------------------------------------------

## 20. Accessibility

Minimum requirements:

-   WCAG-aware contrast;
-   keyboard navigation;
-   visible focus;
-   semantic HTML where applicable;
-   labels for form controls;
-   accessible names for icon-only buttons;
-   color is never the only status indicator;
-   responsive text sizing;
-   touch targets suitable for mobile/tablet use.

Accessibility overrides decorative preference.

------------------------------------------------------------------------

## 21. Responsive behavior

### Desktop

Designed for information density, dashboards and multi-column workflows.

### Tablet

Reduce columns; prioritize operational actions and touch interaction.

### Mobile

Prioritize: - current task; - alerts; - essential KPIs; -
scanning/search; - primary action.

Do not simply shrink the desktop layout.

------------------------------------------------------------------------

## 22. Logo usage in systems

Use the approved **Dextar++** logo assets supplied with the project.

Do not redraw the logo with text/CSS.

Do not: - change logo colors arbitrarily; - distort proportions; -
remove the `++` from the approved Dextar++ identity; - add shadows/glows
to the logo; - place it on low-contrast backgrounds.

If a full logo does not fit, use an approved compact/icon version.

The UI color system may use the values in this document, but the actual
logo should come from the official asset file.

------------------------------------------------------------------------

## 23. Design tokens --- reference

``` css
:root {
  /* Brand */
  --brand-navy: #07090E;
  --brand-cyan: #06B6D4;
  --brand-blue: #3B82F6;
  --brand-emerald: #10B981;
  --brand-purple: #8B5CF6;
  --brand-amber: #F59E0B;
  --brand-rose: #F43F5E;
  --brand-cool-gray: #CBD5E1;
  --brand-white: #FFFFFF;

  /* Light surfaces */
  --background: #F7F9FC;
  --surface: #FFFFFF;
  --surface-secondary: #F1F5F9;

  /* Light text */
  --text-primary: #07090E;
  --text-secondary: #475569;
  --text-muted: #64748B;

  /* Borders */
  --border: #CBD5E1;
  --border-subtle: #E2E8F0;

  /* Semantic */
  --action: #06B6D4;
  --info: #3B82F6;
  --success: #10B981;
  --insight: #8B5CF6;
  --warning: #F59E0B;
  --danger: #F43F5E;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 18px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  /* Gradient */
  --gradient-primary: linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%);
  --gradient-insight: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
}
```

------------------------------------------------------------------------

## 24. Tailwind reference

When using Tailwind, extend the theme rather than scattering arbitrary
HEX values through components.

``` js
colors: {
  dextar: {
    navy: "#07090E",
    cyan: "#06B6D4",
    blue: "#3B82F6",
    emerald: "#10B981",
    purple: "#8B5CF6",
    amber: "#F59E0B",
    rose: "#F43F5E",
    gray: "#CBD5E1",
    white: "#FFFFFF",
  }
}
```

Prefer semantic aliases at application level:

``` js
primary: dextar.cyan
information: dextar.blue
success: dextar.emerald
insight: dextar.purple
warning: dextar.amber
danger: dextar.rose
```

------------------------------------------------------------------------

## 25. Rules for generative AI

When an AI generates a Dextar++ interface, it MUST:

1.  Use this design system as the visual source of truth.
2.  Support both Light and Dark themes when the application requires
    theme switching.
3.  Use Inter as the default interface typeface.
4.  Use Deep Navy, Cyan and Blue as the dominant brand identity.
5.  Use semantic colors according to their documented meaning.
6.  Keep layouts clean, modern and enterprise-oriented.
7.  Preserve generous whitespace.
8.  Build reusable components rather than page-specific styling.
9.  Centralize colors, typography, spacing and radii as design tokens.
10. Use responsive layouts.
11. Include hover, focus, active, disabled, loading, empty and error
    states when relevant.
12. Maintain accessibility.
13. Use the official logo asset instead of recreating the logo.
14. Use `++` intentionally, especially around intelligent features.
15. Avoid visual clichés of artificial intelligence.
16. Avoid excessive gradients, glows, neon effects and glassmorphism.
17. Avoid generic Bootstrap-like appearance.
18. Avoid excessive rounded cards.
19. Avoid introducing colors that compete with the official palette.
20. Prefer functional clarity over decorative complexity.

------------------------------------------------------------------------

## 26. Visual anti-patterns

Do NOT generate Dextar++ systems with:

-   rainbow dashboards;
-   neon cyberpunk aesthetics;
-   excessive purple AI gradients;
-   giant blurred glow backgrounds;
-   every surface inside a rounded card;
-   excessive glassmorphism;
-   tiny low-contrast gray text;
-   excessive shadows;
-   emoji used as interface icons;
-   arbitrary colors;
-   inconsistent icon families;
-   inconsistent border radius;
-   excessive uppercase;
-   crowded screens with no whitespace;
-   fake AI indicators;
-   the old Dextar identity when the approved Dextar++ identity is
    available.

------------------------------------------------------------------------

## 27. AI implementation instruction

Use the following instruction when generating a new screen:

> Build this interface using the Dextar++ Design System defined in this
> document. Treat its colors, typography, spacing, semantic states,
> Light/Dark themes, component behavior and brand rules as mandatory
> design constraints. Use reusable design tokens and components. Do not
> invent a new visual language. Prioritize enterprise usability,
> clarity, accessibility, responsive behavior and visual consistency
> with Dextar++.

------------------------------------------------------------------------

## 28. Brand summary

The final interface should feel:

**Secure. Modern. Precise. Intelligent. Operational. Professional.**

It should not feel:

**Generic. Experimental. Neon. Futuristic for its own sake. Decorative.
Overloaded.**

### Dextar++ visual formula

**Deep Navy = confidence**\
**Cyan = action + intelligence**\
**Blue = technology + information**\
**Emerald = results**\
**Purple = insights**\
**Amber = attention**\
**Rose = critical states**\
**White + negative space = clarity**

------------------------------------------------------------------------

**DEXTAR++ --- Soluções em Tecnologia**\
*Tecnologia para operações mais inteligentes.*
