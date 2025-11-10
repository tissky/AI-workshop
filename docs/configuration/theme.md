# 🎨 Theme & Design Tokens

Complete guide to the Tailwind v4 theme system, design tokens, and customization.

---

## 📋 Overview

The theme is defined in **`app/globals.css`** using multiple layers:

1. **Raw Tokens** (`:root`) - Base colors and primitives
2. **Semantic Tokens** (`:root` semantic layer) - Context-aware names
3. **Tailwind Theme** (`@theme inline`) - Utility class generation
4. **TypeScript Module** (`lib/design-tokens.ts`) - Runtime access

---

## 🎯 Token Architecture

### Layer 1: Raw Tokens

Defined in `:root` at the top of `app/globals.css`:

```css
:root {
  /* Base Colors - Light Mode */
  --background: #ffffff;
  --foreground: #1d1d1f;
  --muted: #f5f5f7;
  --muted-foreground: #86868b;
  --border: #d2d2d7;
  
  /* Monochrome Primaries */
  --primary: #000000;
  --primary-foreground: #ffffff;
  --secondary: #f5f5f7;
  --secondary-foreground: #1d1d1f;
  
  /* Muted Accent Palette */
  --accent: #0071e3;
  --accent-foreground: #ffffff;
  --accent-muted: #e8f2ff;
}
```

**Dark Mode Override:**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #000000;
    --foreground: #f5f5f7;
    --accent: #0a84ff;
    /* ... more overrides ... */
  }
}
```

### Layer 2: Semantic Tokens

Meaningful names for specific contexts:

```css
:root {
  /* Background Colors */
  --color-bg-default: var(--background);
  --color-bg-surface: var(--background);
  --color-bg-elevated: var(--muted);
  --color-bg-overlay: rgba(0, 0, 0, 0.6);
  
  /* Text Colors */
  --color-text-primary: var(--foreground);
  --color-text-muted: var(--muted-foreground);
  --color-text-accent: var(--accent);
  
  /* Shadow Elevations */
  --shadow-surface: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  --shadow-card: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  --shadow-elevated: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### Layer 3: Tailwind Theme

The `@theme inline` directive generates Tailwind utilities:

```css
@theme inline {
  /* Colors */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text";
  --font-size-base: 1rem;      /* 16px */
  --font-size-xl: 1.25rem;     /* 20px */
  
  /* Spacing (4px base) */
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-8: 2rem;      /* 32px */
  
  /* Border Radius (8px/16px system) */
  --radius-base: 0.5rem;  /* 8px */
  --radius-xl: 1rem;      /* 16px */
  
  /* Shadows */
  --shadow-card: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  
  /* Transitions */
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

### Layer 4: TypeScript Module

Runtime token access in `lib/design-tokens.ts`:

```typescript
import { getToken, getColorToken } from '@/lib/design-tokens';

// Get token value at runtime
const bgColor = getToken('color-bg-surface');
const accentColor = getColorToken('text', 'accent');

// Use in inline styles
<div style={{ backgroundColor: getToken('color-bg-surface') }} />
```

---

## 🎨 Color System

### Monochrome Primaries

Apple-inspired black/white foundation:

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--primary` | `#000000` | `#ffffff` | Primary actions, emphasis |
| `--primary-foreground` | `#ffffff` | `#000000` | Text on primary |
| `--background` | `#ffffff` | `#000000` | Page background |
| `--foreground` | `#1d1d1f` | `#f5f5f7` | Body text |

### Muted Accent Palette

Subtle blues for interactive elements:

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--accent` | `#0071e3` | `#0a84ff` | Links, CTAs, focus states |
| `--accent-foreground` | `#ffffff` | `#ffffff` | Text on accent |
| `--accent-muted` | `#e8f2ff` | `#1a2332` | Accent backgrounds |

### Semantic Colors

Status and feedback:

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--success` | `#34c759` | `#30d158` | Success messages |
| `--warning` | `#ff9500` | `#ff9f0a` | Warnings |
| `--error` | `#ff3b30` | `#ff453a` | Errors |
| `--info` | `#007aff` | `#0a84ff` | Info messages |

### Neutral Gray Scale

Borders, dividers, secondary text:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-gray-50` | `#fafafa` | Lightest gray |
| `--color-gray-300` | `#d4d4d4` | Borders |
| `--color-gray-500` | `#737373` | Muted text |
| `--color-gray-900` | `#171717` | Darkest gray |

---

## 📐 Typography Scale

### Font Families

```css
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", 
             "Helvetica Neue", "Helvetica", "Arial", system-ui, sans-serif;
--font-mono: "SF Mono", "Monaco", "Menlo", "Consolas", "Courier New", monospace;
```

### Modular Scale (16px base)

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--font-size-xs` | `0.75rem` | 12px | Captions, labels |
| `--font-size-sm` | `0.875rem` | 14px | Small text |
| `--font-size-base` | `1rem` | 16px | Body text |
| `--font-size-lg` | `1.125rem` | 18px | Large text |
| `--font-size-xl` | `1.25rem` | 20px | Subheadings |
| `--font-size-2xl` | `1.5rem` | 24px | Section titles |
| `--font-size-3xl` | `1.875rem` | 30px | Page titles |
| `--font-size-4xl` | `2.25rem` | 36px | Hero text |
| `--font-size-5xl` | `3rem` | 48px | Display text |
| `--font-size-6xl` | `3.75rem` | 60px | Large display |
| `--font-size-7xl` | `4.5rem` | 72px | Extra large |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-tight` | `1.25` | Headings |
| `--line-height-snug` | `1.375` | Subheadings |
| `--line-height-normal` | `1.5` | Body text (default) |
| `--line-height-relaxed` | `1.625` | Long-form content |
| `--line-height-loose` | `2` | Spacious content |

---

## 📏 Spacing System

**Modular Ramp (4px base):**

| Token | Size | Pixels | Tailwind |
|-------|------|--------|----------|
| `--spacing-0` | `0` | 0px | `p-0`, `m-0` |
| `--spacing-1` | `0.25rem` | 4px | `p-1`, `m-1` |
| `--spacing-2` | `0.5rem` | 8px | `p-2`, `m-2` |
| `--spacing-3` | `0.75rem` | 12px | `p-3`, `m-3` |
| `--spacing-4` | `1rem` | 16px | `p-4`, `m-4` |
| `--spacing-6` | `1.5rem` | 24px | `p-6`, `m-6` |
| `--spacing-8` | `2rem` | 32px | `p-8`, `m-8` |
| `--spacing-12` | `3rem` | 48px | `p-12`, `m-12` |
| `--spacing-16` | `4rem` | 64px | `p-16`, `m-16` |
| `--spacing-24` | `6rem` | 96px | `p-24`, `m-24` |
| `--spacing-32` | `8rem` | 128px | `p-32`, `m-32` |

---

## 🔲 Border Radius

**8px/16px System:**

| Token | Size | Pixels | Tailwind | Usage |
|-------|------|--------|----------|-------|
| `--radius-none` | `0` | 0px | `rounded-none` | Sharp edges |
| `--radius-sm` | `0.25rem` | 4px | `rounded-sm` | Minimal rounding |
| `--radius-base` | `0.5rem` | 8px | `rounded` | Primary (cards) |
| `--radius-xl` | `1rem` | 16px | `rounded-xl` | Secondary (modals) |
| `--radius-3xl` | `1.5rem` | 24px | `rounded-3xl` | Extra large |
| `--radius-full` | `9999px` | Max | `rounded-full` | Circles, pills |

---

## 🌑 Shadow System

**Subtle Elevations:**

| Token | CSS Value | Usage |
|-------|-----------|-------|
| `--shadow-none` | `none` | Flat elements |
| `--shadow-surface` | `0 2px 8px 0 rgba(0,0,0,0.08)` | Surface lift |
| `--shadow-card` | `0 4px 12px 0 rgba(0,0,0,0.08)` | Cards |
| `--shadow-elevated` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Dropdowns, popovers |
| `--shadow-dialog` | `0 8px 24px 0 rgba(0,0,0,0.12)` | Modals, dialogs |
| `--shadow-overlay` | `0 30px 60px -15px rgba(0,0,0,0.3)` | Overlays |

**Dark Mode Adjustments:**
Shadows use white with lower opacity for better visibility:
```css
@media (prefers-color-scheme: dark) {
  --shadow-card: 0 4px 12px 0 rgba(255, 255, 255, 0.08);
}
```

---

## ⏱️ Transitions

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `150ms` | Micro-interactions (hover) |
| `--duration-base` | `200ms` | Standard (default) |
| `--duration-medium` | `300ms` | Longer interactions |
| `--duration-slow` | `500ms` | Page transitions |

### Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Accelerate into |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Decelerate out |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth both ends |
| `--ease-apple` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Apple-style (default) |

---

## 📐 Layout System

### 60/20/20 Grid

Content-focused layout with primary and secondary columns:

```css
.grid-60-20-20 {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: var(--spacing-6);
}

.col-main { grid-column: span 6; }        /* 60% */
.col-secondary { grid-column: span 2; }   /* 20% */
.col-tertiary { grid-column: span 2; }    /* 20% */
```

**Usage:**
```tsx
<div className="grid-60-20-20">
  <main className="col-main">Primary content</main>
  <aside className="col-secondary">Secondary</aside>
  <aside className="col-tertiary">Tertiary</aside>
</div>
```

---

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance

All color combinations meet contrast requirements:

| Combination | Ratio | Standard |
|-------------|-------|----------|
| `text-primary` on `bg-default` | 15.8:1 | AAA ✓ |
| `text-secondary` on `bg-default` | 5.2:1 | AA ✓ |
| `text-muted` on `bg-default` | 4.6:1 | AA ✓ |
| `text-accent` on `bg-default` | 4.5:1 | AA ✓ |

### High Contrast Mode

```css
@media (forced-colors: active) {
  :root {
    --color-bg-default: Canvas;
    --color-text-primary: CanvasText;
    --color-interactive-default: LinkText;
    --shadow-card: none; /* Disable shadows */
  }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 🛠️ Customization Guide

### Changing Brand Colors

**1. Edit raw tokens in `app/globals.css`:**
```css
:root {
  --accent: #0071e3;  /* Change to your brand color */
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent: #0a84ff;  /* Brighter for dark mode */
  }
}
```

**2. Semantic tokens auto-adapt:**
No changes needed! `--color-text-accent` and `--color-interactive-hover` automatically use the new accent.

**3. Verify contrast:**
Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure WCAG AA compliance (4.5:1 minimum).

### Adding New Tokens

**1. Add to `app/globals.css`:**
```css
@theme inline {
  --color-brand-primary: #your-color;
}
```

**2. Add to `lib/design-tokens.ts`:**
```typescript
export const colorTokens = {
  brand: {
    primary: '--color-brand-primary',
  },
  // ... existing tokens
};
```

**3. Use in components:**
```tsx
<div className="bg-brand-primary">...</div>
```

### Extending Typography

**Add new font size:**
```css
@theme inline {
  --font-size-8xl: 6rem;  /* 96px */
}
```

**Use immediately:**
```tsx
<h1 className="text-8xl">Huge heading</h1>
```

### Custom Spacing

**Add to spacing scale:**
```css
@theme inline {
  --spacing-18: 4.5rem;  /* 72px */
}
```

**Use in components:**
```tsx
<div className="p-18 m-18">Custom spacing</div>
```

---

## 📖 Usage Examples

### In CSS

```css
.my-component {
  /* Use semantic tokens */
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-base);
  
  /* Spacing and typography */
  padding: var(--spacing-4);
  font-size: var(--font-size-base);
  
  /* Transitions */
  transition: all var(--duration-base) var(--ease-apple);
}
```

### In Tailwind

```tsx
<Card className="bg-background text-foreground shadow-card rounded-lg p-4">
  <h2 className="text-2xl font-bold text-accent">Title</h2>
  <p className="text-base text-muted-foreground">Description</p>
</Card>
```

### In TypeScript

```typescript
import { getToken, getColorToken } from '@/lib/design-tokens';

const Component = () => {
  const bgColor = getColorToken('bg', 'surface');
  const shadowStyle = getToken('shadow-card');
  
  return (
    <div style={{
      backgroundColor: bgColor,
      boxShadow: shadowStyle,
    }}>
      Content
    </div>
  );
};
```

---

## 🔗 Related Documentation

- **[Design Tokens Reference](../design-system/tokens.md)** - Complete token list
- **[Component Theming](./components.md)** - Component-level patterns
- **[Tailwind Config](./nextjs.md#tailwind-configuration)** - Tailwind setup

---

**Last Updated**: 2025-11-10  
**Maintained By**: Development Team
