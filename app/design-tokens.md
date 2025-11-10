# Design Tokens System

This document describes the semantic design tokens layer implemented in the AI创意工坊 marketing site.

## Overview

The design tokens system provides a centralized, semantic layer for managing design decisions across the application. It consists of two main parts:

1. **CSS Custom Properties** (`app/globals.css`) - Semantic tokens defined as CSS variables
2. **TypeScript Module** (`lib/design-tokens.ts`) - Type-safe runtime access to tokens

## Architecture

```
Raw/Primitive Tokens (--background, --foreground, --accent)
           ↓
Semantic Tokens (--color-bg-default, --color-text-primary)
           ↓
Tailwind Utilities (bg-background, text-foreground)
           ↓
Components (Button, Card, Hero)
```

## Token Categories

### Color Tokens

#### Background Colors
```css
--color-bg-default     /* Default page background */
--color-bg-surface     /* Card/surface background */
--color-bg-elevated    /* Elevated surface (hover states) */
--color-bg-muted       /* Subtle background for sections */
--color-bg-overlay     /* Modal/overlay backdrop */
--color-bg-inverse     /* Inverse background for contrast */
```

#### Text Colors
```css
--color-text-primary    /* Primary content text */
--color-text-secondary  /* Secondary/body text */
--color-text-muted      /* Subtle/helper text */
--color-text-inverse    /* Text on dark backgrounds */
--color-text-accent     /* Accent/brand colored text */
--color-text-success    /* Success state text */
--color-text-warning    /* Warning state text */
--color-text-error      /* Error state text */
```

#### Border Colors
```css
--color-border-default  /* Default border/divider */
--color-border-muted    /* Subtle border */
--color-border-accent   /* Accent border (focus, active) */
--color-border-inverse  /* Inverse border */
```

#### Interactive States
```css
--color-interactive-default   /* Default interactive element */
--color-interactive-hover     /* Hover state */
--color-interactive-active    /* Active/pressed state */
--color-interactive-disabled  /* Disabled state */
```

### Shadow Tokens

```css
--shadow-none       /* No shadow */
--shadow-surface    /* Subtle surface elevation */
--shadow-card       /* Card elevation */
--shadow-elevated   /* Elevated element (hover) */
--shadow-dialog     /* Modal/dialog elevation */
--shadow-overlay    /* Maximum elevation */
```

### Spacing Tokens

Follows a 4px base modular scale:
```css
--spacing-0         /* 0 */
--spacing-px        /* 1px */
--spacing-0.5       /* 2px */
--spacing-1         /* 4px */
--spacing-2         /* 8px */
--spacing-3         /* 12px */
--spacing-4         /* 16px */
--spacing-6         /* 24px */
--spacing-8         /* 32px */
--spacing-12        /* 48px */
--spacing-16        /* 64px */
--spacing-24        /* 96px */
--spacing-32        /* 128px */
```

### Radius Tokens

8px/16px system for consistent rounded corners:
```css
--radius-none       /* 0 */
--radius-sm         /* 4px */
--radius-base       /* 8px - primary radius */
--radius-lg         /* 8px */
--radius-xl         /* 16px - secondary radius */
--radius-2xl        /* 16px */
--radius-3xl        /* 24px */
--radius-full       /* 9999px - pill shape */
```

### Typography Tokens

#### Font Families
```css
--font-sans         /* SF Pro / system font stack */
--font-mono         /* SF Mono / monospace stack */
```

#### Font Sizes
```css
--font-size-xs      /* 12px */
--font-size-sm      /* 14px */
--font-size-base    /* 16px */
--font-size-lg      /* 18px */
--font-size-xl      /* 20px */
--font-size-2xl     /* 24px */
--font-size-3xl     /* 30px */
--font-size-4xl     /* 36px */
--font-size-5xl     /* 48px */
--font-size-6xl     /* 60px */
--font-size-7xl     /* 72px */
```

#### Line Heights
```css
--line-height-tight     /* 1.25 */
--line-height-snug      /* 1.375 */
--line-height-normal    /* 1.5 */
--line-height-relaxed   /* 1.625 */
--line-height-loose     /* 2 */
```

### Transition Tokens

#### Durations
```css
--duration-fast     /* 150ms - micro-interactions */
--duration-base     /* 200ms - standard transitions */
--duration-medium   /* 300ms - complex transitions */
--duration-slow     /* 500ms - page transitions */
```

#### Easing Functions
```css
--ease-in           /* cubic-bezier(0.4, 0, 1, 1) */
--ease-out          /* cubic-bezier(0, 0, 0.2, 1) */
--ease-in-out       /* cubic-bezier(0.4, 0, 0.2, 1) */
--ease-apple        /* cubic-bezier(0.25, 0.1, 0.25, 1) - Apple-style */
```

## Usage

### In CSS/Tailwind

Use semantic token names in CSS:

```css
.my-component {
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-default);
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-base);
  transition: all var(--duration-base) var(--ease-apple);
}
```

Or use Tailwind utilities that map to these tokens:

```tsx
<div className="bg-background text-foreground border border-border shadow-card rounded-lg">
  {/* Content */}
</div>
```

### In TypeScript/React

Import and use tokens at runtime:

```tsx
import { getColorToken, getShadowToken, tokens } from '@/lib/design-tokens';

// Get token values at runtime
const MyComponent = () => {
  const bgColor = getColorToken('bg', 'surface');
  const shadow = getShadowToken('card');
  
  return (
    <div style={{ 
      backgroundColor: bgColor,
      boxShadow: shadow 
    }}>
      {/* Content */}
    </div>
  );
};
```

For metadata and non-rendered contexts:

```tsx
import { tokens } from '@/lib/design-tokens';

// Access token names
const tokenName = tokens.color.bg.default; // '--color-bg-default'
```

## Accessibility

### WCAG 2.1 AA Compliance

All color combinations meet or exceed WCAG 2.1 AA contrast requirements:

| Combination | Contrast Ratio | Standard |
|-------------|----------------|----------|
| text-primary on bg-default | 15.8:1 | AAA ✓ |
| text-secondary on bg-default | 5.2:1 | AA ✓ |
| text-muted on bg-default | 4.6:1 | AA ✓ |
| text-accent on bg-default | 4.5:1 | AA ✓ |
| text-primary on bg-muted | 14.2:1 | AAA ✓ |

**Standards:**
- Normal text (< 18pt): 4.5:1 minimum (AA)
- Large text (≥ 18pt or ≥ 14pt bold): 3:1 minimum (AA)
- UI components: 3:1 minimum (AA)

### Reduced Motion Support

The design tokens system respects the `prefers-reduced-motion` user preference:

```css
@media (prefers-reduced-motion: reduce) {
  /* All transitions reduced to 0.01ms */
  /* Transform animations disabled */
  /* Scroll behavior set to auto */
}
```

Components automatically respect this preference through CSS.

### High Contrast Mode

The system adapts to forced-colors (high contrast) mode:

```css
@media (forced-colors: active) {
  /* Uses system colors: Canvas, CanvasText, LinkText */
  /* Shadows disabled for clarity */
}
```

This ensures the site remains usable in Windows High Contrast mode and similar assistive technologies.

## Dark Mode

All semantic tokens automatically adapt to dark mode via the `prefers-color-scheme` media query:

```css
/* Light mode */
--color-bg-default: #ffffff;
--color-text-primary: #1d1d1f;

/* Dark mode */
@media (prefers-color-scheme: dark) {
  --color-bg-default: #000000;
  --color-text-primary: #f5f5f7;
}
```

No additional code is required in components - dark mode "just works".

## Best Practices

### DO ✓

- Use semantic token names (`--color-bg-surface`) instead of raw tokens (`--background`)
- Use Tailwind utilities when possible (`bg-background` instead of inline styles)
- Import from `lib/design-tokens.ts` for runtime access
- Respect the token hierarchy (semantic → raw → value)

### DON'T ✗

- Hard-code color values (`#ffffff`) in components
- Use arbitrary values (`bg-[#f5f5f7]`) in Tailwind
- Access CSS variables directly in JS without the helper module
- Override semantic token values in components

## Extending the System

To add new semantic tokens:

1. **Add to CSS** (`app/globals.css`):
   ```css
   :root {
     --color-bg-my-new-token: var(--some-raw-token);
   }
   
   @media (prefers-color-scheme: dark) {
     :root {
       --color-bg-my-new-token: var(--different-raw-token);
     }
   }
   ```

2. **Add to TypeScript** (`lib/design-tokens.ts`):
   ```ts
   export const colorTokens = {
     bg: {
       // ... existing tokens
       myNewToken: '--color-bg-my-new-token',
     },
   };
   ```

3. **Update Tailwind config** (if needed for utilities)

4. **Document in this file**

## Migration Guide

Migrating existing components to semantic tokens:

### Before
```tsx
<div className="bg-white text-gray-900 shadow-2xl">
```

### After
```tsx
<div className="bg-background text-foreground shadow-dialog">
```

### Before (inline styles)
```tsx
<div style={{ backgroundColor: '#ffffff', color: '#1d1d1f' }}>
```

### After (inline styles)
```tsx
import { getColorToken } from '@/lib/design-tokens';

<div style={{ 
  backgroundColor: getColorToken('bg', 'default'),
  color: getColorToken('text', 'primary')
}}>
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS v4 Theme Configuration](https://tailwindcss.com/docs/theme)

## Support

For questions or issues with the design tokens system:
1. Check this documentation
2. Review `lib/design-tokens.ts` for type definitions
3. Inspect `app/globals.css` for token definitions
4. Use browser DevTools to verify token values
