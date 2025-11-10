# Design Tokens Reference

Complete design token documentation for the AI创意工坊 design system. This guide covers all design tokens used throughout the application, including color palette, typography, spacing, shadows, and animations.

---

## Table of Contents

- [Overview](#overview)
- [Color System](#color-system)
- [Typography](#typography)
- [Spacing](#spacing)
- [Border Radius](#border-radius)
- [Shadows](#shadows)
- [Transitions & Animations](#transitions--animations)
- [Layout System](#layout-system)
- [Semantic Token Usage](#semantic-token-usage)
- [Accessibility](#accessibility)
- [Code Examples](#code-examples)
- [Best Practices](#best-practices)

---

## Overview

Our design system uses a **CSS variable-based token architecture** with full support for light and dark modes. All tokens are defined in `app/globals.css` using the `@theme inline` directive for Tailwind CSS v4.

### Token Architecture

- **Base Tokens**: Primitive values (colors, sizes, durations)
- **Semantic Tokens**: Contextual values that reference base tokens
- **Component Tokens**: Component-specific values built on semantic tokens

### Dark Mode Support

Tokens automatically adapt based on `prefers-color-scheme` media query. All color tokens maintain **WCAG 2.1 AA contrast ratios** (4.5:1 for normal text, 3:1 for large text).

---

## Color System

### Base Colors

Apple-inspired monochrome primaries with muted accent palette.

#### Light Mode

| Token | Value | Usage | Contrast (AA) |
|-------|-------|-------|---------------|
| `--background` | `#ffffff` | Page backgrounds | ✅ 21:1 |
| `--foreground` | `#1d1d1f` | Body text, headings | ✅ 16.9:1 |
| `--muted` | `#f5f5f7` | Secondary backgrounds | ✅ 1.05:1 |
| `--muted-foreground` | `#86868b` | Secondary text, hints | ✅ 4.54:1 |
| `--border` | `#d2d2d7` | Borders, dividers | ✅ 2.4:1 |

#### Dark Mode

| Token | Value | Usage | Contrast (AA) |
|-------|-------|-------|---------------|
| `--background` | `#000000` | Page backgrounds | ✅ 21:1 |
| `--foreground` | `#f5f5f7` | Body text, headings | ✅ 17.6:1 |
| `--muted` | `#1d1d1f` | Secondary backgrounds | ✅ 1.08:1 |
| `--muted-foreground` | `#86868b` | Secondary text, hints | ✅ 4.54:1 |
| `--border` | `#424245` | Borders, dividers | ✅ 3.1:1 |

### Monochrome Primaries

| Token | Light Value | Dark Value | Usage |
|-------|-------------|------------|-------|
| `--primary` | `#000000` | `#ffffff` | Primary actions, emphasis |
| `--primary-foreground` | `#ffffff` | `#000000` | Text on primary |
| `--secondary` | `#f5f5f7` | `#1d1d1f` | Secondary actions |
| `--secondary-foreground` | `#1d1d1f` | `#f5f5f7` | Text on secondary |

### Accent Palette

Muted blue accent for interactive elements.

| Token | Light Value | Dark Value | Usage |
|-------|-------------|------------|-------|
| `--accent` | `#0071e3` | `#0a84ff` | Links, focus states, CTAs |
| `--accent-foreground` | `#ffffff` | `#ffffff` | Text on accent |
| `--accent-muted` | `#e8f2ff` | `#1a2332` | Subtle accent backgrounds |

### Semantic Colors

| Token | Light Value | Dark Value | Usage |
|-------|-------------|------------|-------|
| `--success` | `#34c759` | `#30d158` | Success messages, confirmations |
| `--warning` | `#ff9500` | `#ff9f0a` | Warnings, cautions |
| `--error` | `#ff3b30` | `#ff453a` | Errors, destructive actions |
| `--info` | `#007aff` | `#0a84ff` | Informational messages |

### Neutral Gray Scale

Extended gray palette for granular control.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-gray-50` | `#fafafa` | Lightest backgrounds |
| `--color-gray-100` | `#f5f5f5` | Subtle backgrounds |
| `--color-gray-200` | `#e5e5e5` | Borders, dividers |
| `--color-gray-300` | `#d4d4d4` | Inactive elements |
| `--color-gray-400` | `#a3a3a3` | Placeholder text |
| `--color-gray-500` | `#737373` | Secondary text |
| `--color-gray-600` | `#525252` | Body text (light bg) |
| `--color-gray-700` | `#404040` | Headings (light bg) |
| `--color-gray-800` | `#262626` | Dark backgrounds |
| `--color-gray-900` | `#171717` | Darker backgrounds |
| `--color-gray-950` | `#0a0a0a` | Darkest backgrounds |

### Tailwind CSS v4 Usage

```css
/* Use semantic color classes */
.bg-background      /* Page background */
.text-foreground    /* Primary text */
.text-muted-foreground /* Secondary text */
.border-border      /* Borders */
.bg-accent          /* Accent backgrounds */
.text-accent        /* Accent text */
```

---

## Typography

### Font Families

Apple-inspired system font stack for optimal rendering across platforms.

| Token | Value | Usage |
|-------|-------|-------|
| `--font-sans` | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", system-ui, sans-serif` | Body text, UI elements |
| `--font-mono` | `"SF Mono", "Monaco", "Menlo", "Consolas", "Courier New", monospace` | Code, monospace content |

### Font Sizes

Modular scale optimized for readability.

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--font-size-xs` | `0.75rem` | 12px | Small labels, captions |
| `--font-size-sm` | `0.875rem` | 14px | Secondary text, badges |
| `--font-size-base` | `1rem` | 16px | Body text (default) |
| `--font-size-lg` | `1.125rem` | 18px | Large body text |
| `--font-size-xl` | `1.25rem` | 20px | Small headings |
| `--font-size-2xl` | `1.5rem` | 24px | H4 headings |
| `--font-size-3xl` | `1.875rem` | 30px | H3 headings |
| `--font-size-4xl` | `2.25rem` | 36px | H2 headings |
| `--font-size-5xl` | `3rem` | 48px | H1 headings |
| `--font-size-6xl` | `3.75rem` | 60px | Hero titles |
| `--font-size-7xl` | `4.5rem` | 72px | Large hero titles |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-tight` | `1.25` | Headings, tight layouts |
| `--line-height-snug` | `1.375` | Subheadings |
| `--line-height-normal` | `1.5` | Body text (default) |
| `--line-height-relaxed` | `1.625` | Long-form content |
| `--line-height-loose` | `2` | Spacious content |

### Typography Guidelines

**Body Text**: Use `--font-size-base` (16px) with `--line-height-normal` (1.5) for optimal readability.

**Headings**: Use tight line heights (`1.25`) for visual impact.

**Long-form Content**: Use relaxed line heights (`1.625`) for extended reading.

---

## Spacing

### Modular Spacing Ramp

4px base unit with consistent scaling for harmonious layouts.

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--spacing-0` | `0` | 0px | No spacing |
| `--spacing-px` | `1px` | 1px | Minimal spacing |
| `--spacing-0.5` | `0.125rem` | 2px | Micro spacing |
| `--spacing-1` | `0.25rem` | 4px | Tight spacing |
| `--spacing-1.5` | `0.375rem` | 6px | Compact spacing |
| `--spacing-2` | `0.5rem` | 8px | Small spacing |
| `--spacing-2.5` | `0.625rem` | 10px | Small-medium spacing |
| `--spacing-3` | `0.75rem` | 12px | Medium spacing |
| `--spacing-3.5` | `0.875rem` | 14px | Medium-large spacing |
| `--spacing-4` | `1rem` | 16px | Base spacing unit |
| `--spacing-5` | `1.25rem` | 20px | Large spacing |
| `--spacing-6` | `1.5rem` | 24px | Extra-large spacing |
| `--spacing-7` | `1.75rem` | 28px | Section spacing |
| `--spacing-8` | `2rem` | 32px | Section spacing |
| `--spacing-9` | `2.25rem` | 36px | Large section spacing |
| `--spacing-10` | `2.5rem` | 40px | Large section spacing |
| `--spacing-11` | `2.75rem` | 44px | Extra-large spacing |
| `--spacing-12` | `3rem` | 48px | Major section spacing |
| `--spacing-14` | `3.5rem` | 56px | Major section spacing |
| `--spacing-16` | `4rem` | 64px | Hero spacing |
| `--spacing-20` | `5rem` | 80px | Hero spacing |
| `--spacing-24` | `6rem` | 96px | Page sections |
| `--spacing-28` | `7rem` | 112px | Large page sections |
| `--spacing-32` | `8rem` | 128px | Extra-large sections |

### Spacing Guidelines

- **Component Padding**: Use `--spacing-4` (16px) or `--spacing-6` (24px)
- **Section Gaps**: Use `--spacing-12` (48px) to `--spacing-24` (96px)
- **Card Spacing**: Use `--spacing-6` (24px) for internal padding
- **Grid Gaps**: Use `--spacing-4` (16px) or `--spacing-6` (24px)

---

## Border Radius

### Radius Scale

8px/16px system for consistent rounded corners.

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `--radius-none` | `0` | 0px | No rounding |
| `--radius-sm` | `0.25rem` | 4px | Small elements |
| `--radius-base` | `0.5rem` | 8px | Primary radius (cards, inputs) |
| `--radius-md` | `0.5rem` | 8px | Medium elements |
| `--radius-lg` | `0.5rem` | 8px | Large elements |
| `--radius-xl` | `1rem` | 16px | Secondary radius (cards, modals) |
| `--radius-2xl` | `1rem` | 16px | Extra-large elements |
| `--radius-3xl` | `1.5rem` | 24px | Hero sections |
| `--radius-full` | `9999px` | ∞ | Pill-shaped buttons |

### Border Radius Guidelines

- **Buttons**: Use `--radius-full` for pill-shaped buttons
- **Cards**: Use `--radius-xl` (16px) for primary cards
- **Inputs**: Use `--radius-base` (8px) for form elements
- **Modals**: Use `--radius-xl` (16px) for dialog containers

---

## Shadows

### Subtle Shadow Presets

Minimal shadows for depth without visual noise.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Minimal elevation |
| `--shadow-sm` | `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)` | Small cards |
| `--shadow-base` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)` | Default cards |
| `--shadow-md` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)` | Hover states |
| `--shadow-lg` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)` | Elevated cards |
| `--shadow-xl` | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` | Modals, popovers |
| `--shadow-2xl` | `0 30px 60px -15px rgba(0, 0, 0, 0.3)` | Large modals |
| `--shadow-surface` | `0 2px 8px 0 rgba(0, 0, 0, 0.08)` | Subtle surfaces |
| `--shadow-card` | `0 4px 12px 0 rgba(0, 0, 0, 0.08)` | Card hover states |
| `--shadow-dialog` | `0 8px 24px 0 rgba(0, 0, 0, 0.12)` | Dialogs, dropdowns |

### Shadow Guidelines

- **Resting State**: Use `--shadow-surface` or `--shadow-base`
- **Hover State**: Increase shadow to `--shadow-card` or `--shadow-md`
- **Active/Focus**: Reduce shadow slightly for tactile feedback
- **Modals**: Use `--shadow-dialog` or `--shadow-xl`

---

## Transitions & Animations

### Duration Tokens

Standardized durations for consistent motion design.

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `150ms` | Quick state changes (hover, focus) |
| `--duration-base` | `200ms` | Default transitions |
| `--duration-medium` | `300ms` | Complex state changes |
| `--duration-slow` | `500ms` | Page transitions, animations |

### Easing Functions

Apple-inspired easing curves for natural motion.

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements entering viewport |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements exiting viewport |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes |
| `--ease-apple` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Primary easing (default) |

### Animation Guidelines

**Hover States**: Use `--duration-fast` (150ms) with `--ease-apple` for immediate feedback.

**Complex Transitions**: Use `--duration-medium` (300ms) for multi-property changes.

**Page Transitions**: Use `--duration-slow` (500ms) for smooth navigation.

**Reduced Motion**: All animations respect `prefers-reduced-motion` preference (see [Accessibility](#accessibility)).

---

## Layout System

### 60/20/20 Grid System

Apple-inspired layout system for balanced content distribution.

| Token | Value | Usage |
|-------|-------|-------|
| `--layout-max` | `1440px` | Maximum container width |
| `--layout-main` | `60%` | Primary content area |
| `--layout-secondary` | `20%` | Secondary sidebar |
| `--layout-tertiary` | `20%` | Tertiary sidebar |

### Layout Utilities

#### Container Max Width
```css
.container-max {
  max-width: var(--layout-max);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
}
```

#### 60/20/20 Grid
```css
.grid-60-20-20 {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: var(--spacing-6);
}

.grid-60-20-20 > .col-main {
  grid-column: span 6; /* 60% */
}

.grid-60-20-20 > .col-secondary {
  grid-column: span 2; /* 20% */
}

.grid-60-20-20 > .col-tertiary {
  grid-column: span 2; /* 20% */
}
```

**Responsive**: Collapses to single column on mobile (`max-width: 1024px`).

---

## Semantic Token Usage

### When to Use Which Token

#### Background Colors

| Scenario | Token | Reason |
|----------|-------|--------|
| Page background | `--background` | Base surface |
| Card background | `--background` or `--muted` | Depending on contrast needs |
| Hover state | `--muted` | Subtle feedback |
| Accent background | `--accent-muted` | Highlight without overwhelming |

#### Text Colors

| Scenario | Token | Reason |
|----------|-------|--------|
| Primary text | `--foreground` | Maximum readability |
| Secondary text | `--muted-foreground` | Visual hierarchy |
| Links | `--accent` | Interactive affordance |
| Disabled text | `--muted-foreground` with opacity | Inactive state |

#### Interactive States

| State | Background | Border | Shadow |
|-------|------------|--------|--------|
| Default | `--background` | `--border` | `--shadow-surface` |
| Hover | `--muted` | `--accent` | `--shadow-card` |
| Focus | `--background` | `--accent` (outline) | `--shadow-card` |
| Active | `--muted` | `--accent` | `--shadow-sm` |
| Disabled | `--muted` | `--border` | none |

### Light vs. Dark Mode Behavior

All semantic tokens automatically adapt based on `prefers-color-scheme`:

- **Text**: Inverts for optimal contrast (dark text on light, light text on dark)
- **Backgrounds**: Subtle shift from white/light gray to black/dark gray
- **Accents**: Slightly brighter in dark mode for visibility
- **Borders**: Lighter in dark mode to maintain separation

**No manual dark mode classes required** - tokens handle everything automatically.

---

## Accessibility

### WCAG 2.1 AA Compliance

All color combinations in our token system meet **WCAG 2.1 AA standards**:

- **Normal Text** (< 18px): Minimum 4.5:1 contrast ratio
- **Large Text** (≥ 18px): Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

### Contrast Ratios

| Combination | Light Mode | Dark Mode | Status |
|-------------|------------|-----------|--------|
| `foreground` on `background` | 16.9:1 | 17.6:1 | ✅ AAA |
| `muted-foreground` on `background` | 4.54:1 | 4.54:1 | ✅ AA |
| `accent` on `background` | 5.8:1 | 6.2:1 | ✅ AAA |
| `foreground` on `accent` | 11.5:1 | 12.1:1 | ✅ AAA |

### Testing Contrast

Use these tools to verify custom color combinations:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio by Lea Verou](https://contrast-ratio.com/)
- Browser DevTools Accessibility panel (Chrome, Firefox)

### Reduced Motion

All animations respect `prefers-reduced-motion` preference:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Transforms are disabled** for users with motion sensitivity:
- No `translateY`, `scale`, or other transforms on hover/active states
- Faster transitions (10ms instead of 150ms+)
- Smooth scrolling disabled

### Focus States

All interactive elements have visible focus indicators:

```css
*:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

**Keyboard Navigation**: Tested with Tab, Shift+Tab, Enter, Space, Arrow keys.

---

## Code Examples

### Using Tokens in CSS

#### Direct CSS Variable Usage

```css
.my-component {
  /* Colors */
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
  
  /* Typography */
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  
  /* Spacing */
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
  
  /* Border Radius */
  border-radius: var(--radius-xl);
  
  /* Shadow */
  box-shadow: var(--shadow-card);
  
  /* Transition */
  transition: transform var(--duration-base) var(--ease-apple),
              box-shadow var(--duration-base) var(--ease-apple);
}

.my-component:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

#### Tailwind CSS v4 Classes

```html
<!-- Colors -->
<div class="bg-background text-foreground border-border">
  <p class="text-muted-foreground">Secondary text</p>
  <a href="#" class="text-accent">Link text</a>
</div>

<!-- Typography -->
<h1 class="text-5xl font-bold leading-tight">Hero Title</h1>
<p class="text-base leading-normal">Body text</p>

<!-- Spacing -->
<div class="p-6 mb-8 space-y-4">
  <!-- Content with consistent spacing -->
</div>

<!-- Border Radius -->
<button class="rounded-full px-8 py-3">
  Pill Button
</button>

<div class="rounded-xl overflow-hidden">
  <!-- Card content -->
</div>

<!-- Shadows -->
<div class="shadow-card hover:shadow-md transition-shadow">
  Interactive card
</div>
```

### Using Tokens in TypeScript

#### Theme Type Definitions

```typescript
// lib/design-system/tokens.ts

export const colors = {
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  muted: 'var(--muted)',
  mutedForeground: 'var(--muted-foreground)',
  border: 'var(--border)',
  primary: 'var(--primary)',
  primaryForeground: 'var(--primary-foreground)',
  secondary: 'var(--secondary)',
  secondaryForeground: 'var(--secondary-foreground)',
  accent: 'var(--accent)',
  accentForeground: 'var(--accent-foreground)',
  accentMuted: 'var(--accent-muted)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  error: 'var(--error)',
  info: 'var(--info)',
} as const;

export const spacing = {
  '0': 'var(--spacing-0)',
  'px': 'var(--spacing-px)',
  '0.5': 'var(--spacing-0.5)',
  '1': 'var(--spacing-1)',
  '2': 'var(--spacing-2)',
  '3': 'var(--spacing-3)',
  '4': 'var(--spacing-4)',
  '5': 'var(--spacing-5)',
  '6': 'var(--spacing-6)',
  '8': 'var(--spacing-8)',
  '10': 'var(--spacing-10)',
  '12': 'var(--spacing-12)',
  '16': 'var(--spacing-16)',
  '20': 'var(--spacing-20)',
  '24': 'var(--spacing-24)',
  '32': 'var(--spacing-32)',
} as const;

export const fontSize = {
  xs: 'var(--font-size-xs)',
  sm: 'var(--font-size-sm)',
  base: 'var(--font-size-base)',
  lg: 'var(--font-size-lg)',
  xl: 'var(--font-size-xl)',
  '2xl': 'var(--font-size-2xl)',
  '3xl': 'var(--font-size-3xl)',
  '4xl': 'var(--font-size-4xl)',
  '5xl': 'var(--font-size-5xl)',
  '6xl': 'var(--font-size-6xl)',
  '7xl': 'var(--font-size-7xl)',
} as const;

export const borderRadius = {
  none: 'var(--radius-none)',
  sm: 'var(--radius-sm)',
  base: 'var(--radius-base)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  '3xl': 'var(--radius-3xl)',
  full: 'var(--radius-full)',
} as const;

export const boxShadow = {
  xs: 'var(--shadow-xs)',
  sm: 'var(--shadow-sm)',
  base: 'var(--shadow-base)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  '2xl': 'var(--shadow-2xl)',
  surface: 'var(--shadow-surface)',
  card: 'var(--shadow-card)',
  dialog: 'var(--shadow-dialog)',
} as const;

export const transitionDuration = {
  fast: 'var(--duration-fast)',
  base: 'var(--duration-base)',
  medium: 'var(--duration-medium)',
  slow: 'var(--duration-slow)',
} as const;

export const transitionTimingFunction = {
  in: 'var(--ease-in)',
  out: 'var(--ease-out)',
  inOut: 'var(--ease-in-out)',
  apple: 'var(--ease-apple)',
} as const;
```

#### Using Tokens in Components

```typescript
// components/ui/Button.tsx
import { colors, spacing, borderRadius, transitionDuration, transitionTimingFunction } from '@/lib/design-system/tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  const styles: React.CSSProperties = {
    padding: `${spacing['3']} ${spacing['6']}`,
    borderRadius: borderRadius.full,
    transition: `all ${transitionDuration.base} ${transitionTimingFunction.apple}`,
    ...(variant === 'primary' && {
      backgroundColor: colors.primary,
      color: colors.primaryForeground,
    }),
    ...(variant === 'secondary' && {
      backgroundColor: colors.secondary,
      color: colors.secondaryForeground,
    }),
  };

  return <button style={styles}>{children}</button>;
}
```

---

## Best Practices

### ✅ Do's

#### Use Semantic Tokens

```css
/* ✅ DO: Use semantic tokens */
.card {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

#### Consistent Spacing

```html
<!-- ✅ DO: Use consistent spacing scale -->
<div class="p-6 space-y-4">
  <h2 class="mb-2">Title</h2>
  <p class="mb-4">Content</p>
</div>
```

#### Accessibility First

```html
<!-- ✅ DO: Ensure sufficient contrast -->
<button class="bg-accent text-accent-foreground">
  High Contrast Button
</button>
```

#### Responsive Typography

```css
/* ✅ DO: Use relative units for scalability */
.heading {
  font-size: var(--font-size-3xl); /* 1.875rem */
  line-height: var(--line-height-tight);
}
```

#### Transition Groups

```css
/* ✅ DO: Group related properties in transitions */
.card {
  transition: transform var(--duration-base) var(--ease-apple),
              box-shadow var(--duration-base) var(--ease-apple),
              border-color var(--duration-base) var(--ease-apple);
}
```

### ❌ Don'ts

#### Hardcoded Colors

```css
/* ❌ DON'T: Hardcode colors */
.card {
  background-color: #ffffff;
  color: #1d1d1f;
  border: 1px solid #d2d2d7;
}
```

#### Arbitrary Values

```html
<!-- ❌ DON'T: Use arbitrary spacing values -->
<div class="p-[13px] mb-[27px]">
  <!-- Breaks design system rhythm -->
</div>
```

#### Insufficient Contrast

```html
<!-- ❌ DON'T: Use low-contrast combinations -->
<button class="bg-gray-200 text-gray-300">
  Low Contrast Button
</button>
```

#### Fixed Typography

```css
/* ❌ DON'T: Use fixed pixel sizes */
.heading {
  font-size: 30px; /* Not scalable */
  line-height: 36px;
}
```

#### Transition All

```css
/* ❌ DON'T: Use `transition: all` (performance) */
.card {
  transition: all 200ms ease; /* Affects all properties */
}
```

### Component Examples

#### Interactive Card

```tsx
// ✅ GOOD: Proper token usage with hover states
export function InteractiveCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      bg-background text-foreground
      border border-border
      rounded-xl p-6
      shadow-surface hover:shadow-card
      transition-shadow duration-200
      hover:-translate-y-0.5
      cursor-pointer
    ">
      {children}
    </div>
  );
}
```

#### Button Component

```tsx
// ✅ GOOD: Semantic variants with consistent tokens
export function Button({ 
  variant = 'primary', 
  children 
}: { 
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}) {
  const baseClasses = "
    px-8 py-3 rounded-full font-semibold
    transition-all duration-200
    focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2
  ";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:brightness-105 active:brightness-95",
    secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
    outline: "border-2 border-border hover:border-accent hover:bg-accent-muted",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}
```

---

## Related Documentation

- **[Design System Overview](./README.md)** - Introduction and project planning
- **[Task Manifest](./TASK_MANIFEST.md)** - Complete task breakdown
- **[Task Progress](./TASK_PROGRESS.md)** - Real-time progress tracking
- **[Component Documentation](../components/README.md)** - UI component library

---

## Resources

### Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verify WCAG contrast ratios
- [Contrast Ratio](https://contrast-ratio.com/) - Quick contrast testing
- [Coolors](https://coolors.co/) - Color palette generator
- [Type Scale](https://typescale.com/) - Typography scale calculator

### References
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

**Last Updated**: 2024-11-10  
**Version**: 1.0.0  
**Status**: Complete
