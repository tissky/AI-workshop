# Interaction States Documentation

## Overview

This document describes the consistent interaction state patterns implemented across the AI创意工坊 marketing site. All interactive elements use semantic token-based classes for consistent hover, focus, and active states.

## Design Principles

### 1. **Apple-Inspired Subtlety**
- Subtle, refined animations that enhance rather than distract
- Consistent timing using standardized durations
- Smooth Apple-style easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`

### 2. **Accessibility First**
- All interactive elements have visible focus states
- Focus outlines use 2px solid accent color with 2px offset
- Active states provide tactile feedback
- Reduced motion support disables transforms

### 3. **Token-Based System**
All transitions use semantic tokens from `app/globals.css`:
- **Durations**: `--duration-fast` (150ms), `--duration-base` (200ms), `--duration-medium` (300ms), `--duration-slow` (500ms)
- **Easing**: `--ease-apple` (cubic-bezier(0.25, 0.1, 0.25, 1))
- **Colors**: CSS variables (`--accent`, `--foreground`, etc.)
- **Shadows**: Predefined shadow scales (`--shadow-sm`, `--shadow-md`, etc.)

## Interactive Components

### Button Patterns

#### `.btn-primary`
**Use**: Primary call-to-action buttons
**Interaction States**:
- **Hover**: Lifts -1px, adds shadow-md, brightens 105%
- **Focus**: 2px accent outline with 2px offset
- **Active**: Returns to base position, shadow-sm, darkens 95%

**Example**:
```tsx
<button className="btn-primary">即刻体验</button>
```

#### `.btn-secondary`
**Use**: Secondary actions
**Interaction States**:
- **Hover**: Background changes to muted, lifts -1px, adds shadow-sm
- **Focus**: 2px accent outline with 2px offset
- **Active**: Returns to base position, removes shadow

**Example**:
```tsx
<button className="btn-secondary">了解更多</button>
```

#### `.btn-ghost`
**Use**: Tertiary/subtle actions
**Interaction States**:
- **Hover**: Background fills with muted color, text changes to accent
- **Focus**: 2px accent outline with 2px offset
- **Active**: Background darkens to border color

**Example**:
```tsx
<button className="btn-ghost">取消</button>
```

#### `.btn-outline`
**Use**: Alternative secondary actions
**Interaction States**:
- **Hover**: Border changes to accent, background fills with accent-muted, lifts -1px
- **Focus**: 2px accent outline with 2px offset
- **Active**: Returns to base position

**Example**:
```tsx
<button className="btn-outline">查看价格</button>
```

### Card Patterns

#### `.card-interactive`
**Use**: Clickable cards with links inside
**Interaction States**:
- **Hover**: Lifts -2px, shadow increases to card shadow, border changes to accent
- **Focus-within**: 2px accent outline with 2px offset
- **Active**: Lifts -1px (intermediate state)

**Example**:
```tsx
<article className="card-interactive">
  <h3>Card Title</h3>
  <p>Card description</p>
</article>
```

#### `.card-elevated`
**Use**: Display cards with visual depth
**Interaction States**:
- **Hover**: Lifts -2px, shadow increases to card shadow
- **Active**: Lifts -1px, shadow returns to surface shadow

**Example**:
```tsx
<div className="card-elevated">
  <div className="icon-scale">🎨</div>
  <h4>Feature Name</h4>
</div>
```

### Link Patterns

#### `.link-base`
**Use**: Standard navigation links
**Interaction States**:
- **Hover**: Color changes to accent
- **Focus**: 2px accent outline with 2px offset, rounded-sm

**Example**:
```tsx
<Link href="/tools" className="link-base">AI工具</Link>
```

#### `.link-accent`
**Use**: Accent-colored links (e.g., "back" links)
**Interaction States**:
- **Hover**: Brightens 110%
- **Focus**: 2px accent outline with 2px offset, rounded-sm
- **Active**: Darkens 90%

**Example**:
```tsx
<Link href="/tools" className="link-accent">← 返回工具库</Link>
```

### Micro-interactions

#### `.icon-scale`
**Use**: Icons that scale on hover
**Interaction States**:
- **Hover**: Scales to 110%
- Uses base duration (200ms) with apple easing

**Example**:
```tsx
<div className="icon-scale">
  🎨
</div>
```

#### `.icon-slide`
**Use**: Arrow icons that slide on hover
**Interaction States**:
- **Hover**: Translates 4px to the right
- Uses base duration (200ms) with apple easing

**Example**:
```tsx
<span className="icon-slide">→</span>
```

#### `.filter-btn`
**Use**: Filter and tab buttons
**Interaction States**:
- **Hover**: Lifts -1px
- **Focus**: 2px accent outline with 2px offset
- **Active**: Returns to base position

**Example**:
```tsx
<button className={`filter-btn ${active ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
  全部
</button>
```

## Reduced Motion Support

All transform-based animations are disabled when `prefers-reduced-motion: reduce` is detected:

```css
@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover,
  .card-interactive:hover,
  .icon-scale:hover,
  .icon-slide:hover {
    transform: none;
  }
  
  /* Transitions remain but are faster */
  transition: background-color var(--duration-fast) var(--ease-apple),
              color var(--duration-fast) var(--ease-apple);
}
```

## Component Updates

### Components Updated with New Patterns

1. **Header.tsx**: Navigation links now use `.link-base`, CTA button uses `.btn-primary`
2. **Footer.tsx**: All footer links use consistent transition tokens with focus states
3. **FeatureCard.tsx**: Uses `.card-elevated` for consistent hover behavior
4. **ToolCard.tsx**: Uses `.card-elevated` with `.icon-scale` for tool icons
5. **ModelsFilter.tsx**: Filter buttons use `.filter-btn`, model cards use `.card-elevated`
6. **HomeNav.tsx**: Button includes focus and active states with token-based transitions
7. **HomeCTA.tsx**: CTAs use consistent lift animations with token-based durations
8. **ToolsCTA.tsx**: Both buttons have consistent token-based transitions
9. **QRModal.tsx**: Modal trigger and close buttons have proper focus/active states
10. **Tool Detail Page**: Breadcrumb uses `.link-accent`, CTAs use `.btn-primary` and `.btn-outline`
11. **Home Page Content**: All interactive elements updated with consistent patterns

## Best Practices

### When to Use Which Pattern

- **Primary actions** (Sign up, Buy, Try): `.btn-primary`
- **Secondary actions** (Learn more, View details): `.btn-secondary` or `.btn-outline`
- **Tertiary actions** (Cancel, Skip): `.btn-ghost`
- **Navigation links**: `.link-base`
- **Back/Return links**: `.link-accent`
- **Interactive cards**: `.card-interactive` (with links) or `.card-elevated` (display only)
- **Icons in cards**: `.icon-scale` for centered icons, `.icon-slide` for arrows
- **Filter/Tab buttons**: `.filter-btn`

### Custom Inline Transitions

For one-off transitions that don't fit patterns, always include:
1. Duration from token system: `duration-200`
2. Easing: `ease-apple`
3. Focus state: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`
4. Active state: `active:...` with appropriate feedback

**Example**:
```tsx
<button className="px-4 py-2 bg-blue-600 text-white rounded-full transition-all duration-200 ease-apple hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:bg-blue-800">
  Custom Button
</button>
```

## Testing Interaction States

### Manual Testing Checklist

For each interactive element, verify:
- [ ] Hover state is visible and smooth
- [ ] Focus state is clearly visible (use Tab key)
- [ ] Active state provides immediate feedback (click and hold)
- [ ] Transitions feel smooth and consistent with other elements
- [ ] Reduced motion setting disables transform animations

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (especially for Apple easing)
- Mobile browsers (touch states)

### Accessibility Testing

- [ ] Keyboard navigation works (Tab, Shift+Tab, Enter, Space)
- [ ] Focus indicators are visible at all times
- [ ] Color contrast meets WCAG 2.1 AA standards
- [ ] Screen reader announces interactive elements correctly
- [ ] Reduced motion preference is respected

## Migration Notes

### Removed Legacy Patterns

No legacy utility classes (`.btn-hover-scale`, `.card-hover`) were found in the codebase. All components previously used inline Tailwind utilities.

### Breaking Changes

None - all changes are additive. Existing inline transition classes still work but should be migrated to semantic patterns for consistency.

## Future Enhancements

Potential improvements for future iterations:
1. Add loading states for async buttons
2. Implement skeleton states for loading cards
3. Add toast/notification animations
4. Create staggered animation utilities for lists
5. Add page transition animations

## Questions or Issues?

For questions about interaction states or to report inconsistencies, please refer to:
- This documentation
- `app/globals.css` (lines 404-684) for implementation details
- Design system tokens (lines 68-185 in globals.css)
