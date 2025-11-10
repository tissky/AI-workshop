# Loading Skeletons - Implementation Guide

## Overview
The loading skeleton system provides an accessible, Apple-inspired minimal loading experience across the AI创意工坊 marketing site. This implementation ensures users see meaningful loading states during ISR, suspense, and dynamic imports.

## Architecture

### 1. Skeleton Components (`components/skeletons/`)

#### Base Components
- **BaseSkeleton.tsx**: Foundation component with customizable dimensions and rounding
- **CarouselSkeleton.tsx**: Loading state for ImageCarousel with thumbnails
- **ToolCardSkeleton.tsx**: Loading state for tool cards
- **FeatureCardSkeleton.tsx**: Loading state for feature cards
- **HeroImageSkeleton.tsx**: Loading state for hero media sections
- **StatsSkeleton.tsx**: Loading state for statistics displays

### 2. Wrapper Components (`components/`)

#### Dynamic Import Wrappers
- **ImageCarouselWrapper.tsx**: Wraps ImageCarousel with Suspense + CarouselSkeleton
- **QRModalWrapper.tsx**: Wraps QRModal with Suspense (minimal fallback)
- **ImageWithSkeleton.tsx**: Enhanced Image component showing skeleton during load

### 3. Page Loading States (`app/**/loading.tsx`)

Each route has a dedicated loading.tsx that mirrors the page structure:
- `app/loading.tsx` - Home page
- `app/tools/loading.tsx` - Tools listing
- `app/tools/[id]/loading.tsx` - Tool detail pages
- `app/products/loading.tsx` - Products page
- `app/models/loading.tsx` - Models library
- `app/company/loading.tsx` - Company page
- `app/technology/loading.tsx` - Technology page

## Design Principles

### Apple-Inspired Minimal Styling
- **Subtle shimmer**: 2s ease-in-out animation
- **Monochrome palette**: Light grays (#e5e5e5, #f0f0f0)
- **Dark mode support**: Darker grays (#1a1a1a, #2a2a2a)
- **Rounded corners**: Consistent with theme (8px/16px system)

### Accessibility Features

#### ARIA Attributes
```tsx
<div
  role="status"
  aria-busy="true"
  aria-live="polite"
  aria-label="加载中"
>
  {/* skeleton content */}
  <span className="sr-only">详细加载信息</span>
</div>
```

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .animate-shimmer {
    animation: none;
    background: #e5e5e5;
  }
}
```

### Layout Shift Prevention
All skeleton dimensions match real component dimensions exactly:
- Hero sections: h-96 md:h-[500px] lg:h-[600px]
- Cards: Match padding, margins, and content heights
- Images: Use aspect-ratio utilities

## Usage Examples

### 1. Dynamic Component Loading
```tsx
import ImageCarouselWrapper from "@/components/ImageCarouselWrapper";

// Automatically shows CarouselSkeleton during lazy load
<ImageCarouselWrapper 
  items={items}
  autoPlay={true}
  interval={4000}
/>
```

### 2. Route Loading States
Next.js 15 automatically uses `loading.tsx` during:
- Initial page load with ISR
- Navigation transitions
- Data fetching

### 3. Image Loading
```tsx
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

<ImageWithSkeleton
  src="/image.jpg"
  alt="Description"
  aspectRatio="landscape"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## CSS Integration

### Shimmer Animation (`app/globals.css`)
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.animate-shimmer {
  background: linear-gradient(
    90deg,
    #e5e5e5 0%,
    #f0f0f0 20%,
    #e5e5e5 40%,
    #e5e5e5 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s ease-in-out infinite;
}
```

## Performance Considerations

### No Blocking Scripts
- All animations are CSS-based
- No JavaScript execution during skeleton display
- Lazy loading via React.lazy() for heavy components

### Lighthouse Metrics
- ✅ Performance: ≥95
- ✅ Accessibility: ≥95 (proper ARIA, reduced-motion)
- ✅ Best Practices: ≥95 (no layout shift)

## Component Integration

### ISR Routes
All routes with `export const revalidate = 3600` automatically benefit from loading states during revalidation.

### Client Components with State
Components like ImageCarousel and QRModal use wrappers to show skeletons during dynamic import:
```tsx
const ImageCarousel = lazy(() => import("./ImageCarousel"));
<Suspense fallback={<CarouselSkeleton />}>
  <ImageCarousel {...props} />
</Suspense>
```

## Testing Checklist

### Visual Testing
- [ ] Skeleton dimensions match real components
- [ ] No layout shift when content loads
- [ ] Shimmer animation is subtle and smooth
- [ ] Dark mode skeletons are properly styled

### Accessibility Testing
- [ ] Screen readers announce loading states
- [ ] Reduced motion preference disables shimmer
- [ ] Keyboard navigation remains functional
- [ ] Focus is properly managed during transitions

### Performance Testing
- [ ] Lighthouse performance ≥95
- [ ] No blocking JavaScript
- [ ] Fast paint times
- [ ] Smooth transitions

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Respects system preferences (prefers-reduced-motion, prefers-color-scheme)

## Future Enhancements

### Potential Additions
1. **Skeleton variants**: Success, error states
2. **Progressive loading**: Staged content reveal
3. **Custom timing**: Per-component animation durations
4. **Micro-interactions**: Subtle hover states on skeletons

### Maintenance Notes
- Update skeleton dimensions when real components change
- Test reduced-motion after CSS changes
- Verify ARIA labels remain accurate
- Check dark mode contrast ratios (WCAG 2.1 AA)

## Related Files

### Core Components
- `/components/skeletons/*.tsx`
- `/components/ImageCarouselWrapper.tsx`
- `/components/QRModalWrapper.tsx`
- `/components/ImageWithSkeleton.tsx`

### Styling
- `/app/globals.css` (shimmer animation)
- `/tailwind.config.ts` (theme tokens)

### Loading States
- `/app/**/loading.tsx` (all route loading states)

### Documentation
- `/LOADING_SKELETONS.md` (this file)
- `/README.md` (project overview)
