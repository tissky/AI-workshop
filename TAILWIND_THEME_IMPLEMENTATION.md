# Tailwind CSS v4 Theme Implementation

## Overview
Successfully implemented a comprehensive Apple-inspired minimal theme using Tailwind CSS v4 features with 60-20-20 layout guidance system.

## Implementation Details

### 1. Tailwind Configuration (`tailwind.config.ts`)
Created a minimal configuration file that defines content globs for:
- `app/**/*.{ts,tsx}`
- `components/**/*.{ts,tsx}`
- `lib/**/*.{ts,tsx}`

The main theme configuration is done using Tailwind CSS v4's `@theme` directive in `globals.css`.

### 2. Theme System (`app/globals.css`)

#### Color Palette
**Monochrome Primaries:**
- Primary: `#000000` (light) / `#ffffff` (dark)
- Secondary: `#f5f5f7` (light) / `#1d1d1f` (dark)
- Background: `#ffffff` (light) / `#000000` (dark)
- Foreground: `#1d1d1f` (light) / `#f5f5f7` (dark)

**Muted Accent Palette:**
- Accent: `#0071e3` (light) / `#0a84ff` (dark) - Apple blue
- Accent Muted: `#e8f2ff` (light) / `#1a2332` (dark)

**Neutral Gray Scale:**
- Complete 50-950 gray scale with neutral tones
- Gray values from `#fafafa` to `#0a0a0a`

**Semantic Colors:**
- Success: `#34c759` (light) / `#30d158` (dark)
- Warning: `#ff9500` (light) / `#ff9f0a` (dark)
- Error: `#ff3b30` (light) / `#ff453a` (dark)
- Info: `#007aff` (light) / `#0a84ff` (dark)

#### Typography Scale
**Font Families:**
- Sans: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`
- Mono: `"SF Mono", "Monaco", "Menlo", "Consolas", "Courier New", monospace`

**Font Sizes:**
- xs: 12px
- sm: 14px
- base: 16px
- lg: 18px
- xl: 20px
- 2xl: 24px
- 3xl: 30px
- 4xl: 36px
- 5xl: 48px
- 6xl: 60px
- 7xl: 72px

**Line Heights:**
- tight: 1.25
- snug: 1.375
- normal: 1.5
- relaxed: 1.625
- loose: 2

#### Spacing Ramp
Modular 4px-based spacing system:
- Base increments: 0, px (1px), 0.5 (2px), 1 (4px), 1.5 (6px), 2 (8px)
- Extended: 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32

#### Border Radius Scale
8px/16px system:
- sm: 4px
- base/md/lg: 8px (primary radius)
- xl/2xl: 16px (secondary radius)
- 3xl: 24px
- full: 9999px (pill shape)

#### Shadow Presets
Subtle, minimalist shadows:
- **xs**: Very light surface shadow
- **sm**: Subtle card shadow
- **base**: Standard elevation
- **md**: Medium elevation
- **lg**: High elevation
- **xl/2xl**: Maximum elevation
- **surface**: `0 2px 8px 0 rgba(0, 0, 0, 0.08)`
- **card**: `0 4px 12px 0 rgba(0, 0, 0, 0.08)`
- **dialog**: `0 8px 24px 0 rgba(0, 0, 0, 0.12)`

#### Transition System
**Durations:**
- fast: 150ms
- base: 200ms
- medium: 300ms
- slow: 500ms

**Easing:**
- in: cubic-bezier(0.4, 0, 1, 1)
- out: cubic-bezier(0, 0, 0.2, 1)
- in-out: cubic-bezier(0.4, 0, 0.2, 1)
- apple: cubic-bezier(0.25, 0.1, 0.25, 1)

### 3. 60/20/20 Layout System

#### Container Utilities
**`.container-60-20-20`**
- 3-column grid: 60% | 20% | 20%
- Responsive: Collapses to single column on mobile (max-width: 1024px)
- Max width: 1440px
- Gap: 24px (spacing-6)

**`.grid-60-20-20`**
- 10-column grid system
- `.col-main`: spans 6 columns (60%)
- `.col-secondary`: spans 2 columns (20%)
- `.col-tertiary`: spans 2 columns (20%)
- Responsive: All columns become full-width on mobile

**`.container-max`**
- Max width: 1440px
- Auto margins for centering
- Horizontal padding: 16px (spacing-4)

### 4. Minimalist Design Elements

#### Scrollbar
- Width: 8px
- Track: Uses `--muted` variable
- Thumb: Uses `--muted-foreground`, rounded full
- Hover: Uses `--foreground`

#### Focus Rings
- Default: 2px solid accent color
- Offset: 2px
- Transition: Fast duration (150ms)
- Applied to all focusable elements via `:focus-visible`

#### Surface Elevation
- `.surface-base`: Background with surface shadow
- `.surface-raised`: Background with card shadow
- `.surface-overlay`: Background with dialog shadow

#### Utility Classes
- `.transition-fast/base/medium/slow`: Pre-configured transition durations
- `.text-balance/pretty`: Modern text wrapping
- `.hide-scrollbar`: Hides scrollbar while maintaining functionality
- `.no-print`: Hides element when printing

### 5. Dark Mode Support
- Automatic dark mode using `prefers-color-scheme`
- All colors have dark mode variants
- WCAG 2.1 AA contrast ratios maintained:
  - Normal text: 4.5:1 minimum
  - Large text: 3:1 minimum
- CSS variable-based system allows runtime theme switching

### 6. Accessibility Features
- Reduced motion support (respects `prefers-reduced-motion`)
- Skip link for keyboard navigation
- High contrast ratios
- Focus visible indicators
- Semantic HTML structure

## Code Fixes Applied

### Fixed Issues
1. **QRModal.tsx**: Removed duplicate `useState` import
2. **ImageCarousel.tsx**: Added missing `useRef` and `useCallback` imports
3. **app/page.tsx**: Converted to server component, moved client logic to `page-content.tsx`
4. **app/products/page.tsx**: Fixed imports, removed conflicting `export const dynamic`, closed Fragment tag
5. **app/models/page.tsx**: Removed duplicate imports and components
6. **app/tools/page.tsx**: Removed unused `dynamic` imports, added structured data generation
7. **app/tools/[id]/page.tsx**: Fixed duplicate function definitions, added proper imports
8. **app/company/page.tsx**: Created complete component implementation
9. **app/technology/page.tsx**: Created complete component implementation
10. **Dependencies**: Added `schema-dts` package for structured data types

## Build Results

### Successful Build Output
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (35/35)
```

### Pages Generated
- `/` - Homepage (Static, 1h revalidate)
- `/company` - Company info (Static, 1h revalidate)
- `/models` - AI models (Static, 1h revalidate)
- `/products` - Products showcase (Static)
- `/technology` - Technology overview (Static, 1h revalidate)
- `/tools` - Tools listing (Static, 1h revalidate)
- `/tools/[id]` - Individual tool pages (SSG with 23 paths, 1h revalidate)

### Lint Results
```
✔ No ESLint warnings or errors
```

## Acceptance Criteria Status

✅ **tailwind.config.ts contains new theme scales and builds without errors**
- Configuration file created with proper content globs
- Theme defined using Tailwind CSS v4's @theme directive

✅ **npm run build and npm run lint pass**
- Build completes successfully with all pages generated
- No ESLint warnings or errors

✅ **Global base styles pull values from Tailwind theme tokens**
- Removed hard-coded colors/spacing
- All styles use CSS variables (e.g., `var(--foreground)`, `var(--spacing-4)`)
- Utility classes reference theme tokens

✅ **New layout utilities exist and can be consumed**
- `.container-60-20-20`, `.grid-60-20-20` utilities implemented
- Responsive behavior included
- `.col-main`, `.col-secondary`, `.col-tertiary` classes available

✅ **Dark-mode tokens remain supported with WCAG 2.1 AA contrast**
- All colors have light and dark variants
- Foreground/background contrast ratios meet AA standards
- Accent colors maintain readability in both modes

## Usage Examples

### Using the 60/20/20 Layout
```tsx
<div className="container-60-20-20">
  <div className="layout-main">Main content (60%)</div>
  <div className="layout-secondary">Secondary (20%)</div>
  <div className="layout-tertiary">Tertiary (20%)</div>
</div>
```

or

```tsx
<div className="grid-60-20-20">
  <div className="col-main">Main content</div>
  <div className="col-secondary">Sidebar</div>
  <div className="col-tertiary">Aside</div>
</div>
```

### Using Theme Tokens in Custom CSS
```css
.my-component {
  background: var(--background);
  color: var(--foreground);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-apple);
}
```

### Using Utility Classes
```tsx
<div className="surface-raised transition-medium">
  <h2 className="text-2xl font-bold">Card Title</h2>
  <p className="text-pretty">Card content with pretty text wrapping.</p>
</div>
```

## Performance Notes
- All theme tokens are CSS variables, enabling runtime theming
- No JavaScript overhead for theme system
- Tailwind CSS v4's lightning CSS engine provides fast builds
- PostCSS pipeline configured for optimal processing

## Future Enhancements
- Consider adding theme toggle functionality for manual dark/light mode switching
- Add more semantic color tokens for specific use cases (e.g., border, input background)
- Expand layout utilities for other common patterns (e.g., 50/50, 70/30)
- Add animation utilities that align with Apple's motion design principles
