# PR: Route Code Splitting Implementation

## Summary

Implemented code splitting optimizations across the marketing site to reduce initial JavaScript payload by dynamically importing heavy/conditional components and converting static pages to server components.

## Key Changes

### 1. Dynamic Component Imports
- ✅ **QRModal**: Dynamically imported in `/` and `/tools` with `ssr: false` (~1.6 KB chunk)
- ✅ **ImageCarousel**: Dynamically imported in `/products` with loading fallback (~3 KB chunk)

### 2. Server Component Conversions
- ✅ `/company` - Converted to server component (4.4 KB → 166 B page JS)
- ✅ `/technology` - Converted to server component (4.4 KB → 166 B page JS)
- ✅ `/tools/[id]` - Converted to async server component (4.4 KB → 166 B page JS)
- ✅ `/models` - Extracted `ModelFilter` client component, main page is server component

### 3. Bundle Analyzer Integration
- ✅ Added `@next/bundle-analyzer` package
- ✅ Added `npm run build:analyze` script
- ✅ Configured `next.config.ts` for optional bundle analysis

## Build Output

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    4.56 kB         108 kB
├ ○ /_not-found                            992 B         101 kB
├ ○ /company                               166 B         103 kB ⭐ Server Component
├ ○ /models                                845 B         104 kB ⭐ Mostly Server
├ ○ /products                            3.67 kB         107 kB ⭐ Dynamic Import
├ ○ /technology                            166 B         103 kB ⭐ Server Component
├ ○ /tools                                4.6 kB         108 kB ⭐ Dynamic Import
└ ƒ /tools/[id]                            166 B         103 kB ⭐ Server Component
```

**Dynamic Chunks Created:**
- `216.js` - ImageCarousel component (~3 KB)
- `765.js` - QRModal component (~1.6 KB)
- `874.js` - Next.js Link utilities (~8.5 KB, shared)

## Performance Impact

### JavaScript Reduction
- **Server component pages**: 96% reduction in page-specific JS (4.4 KB → 166 B)
- **Dynamic imports**: Components load on-demand only when needed
- **Better tree-shaking**: Next.js can optimize unused code paths more effectively

### Expected Web Vitals Improvements
- **Time to Interactive (TTI)**: Less JS parsing on initial load
- **First Contentful Paint (FCP)**: Faster for server component pages
- **Total Blocking Time (TBT)**: Reduced blocking time from deferred component loading

## Testing

### Build Verification
- ✅ `npm run build` - Successful with code-split chunks
- ✅ `npm run lint` - No ESLint warnings or errors
- ✅ `npm run dev` - Dev server starts correctly

### Functional Testing
Manual verification needed for:
- [ ] QRModal opens/closes on home and tools pages
- [ ] ImageCarousel displays and auto-plays on products page
- [ ] Model filtering works correctly on models page
- [ ] All navigation links work
- [ ] No hydration errors in browser console

### Bundle Analysis
Run `npm run build:analyze` to view detailed bundle composition:
```bash
npm run build:analyze
# Open .next/analyze/client.html in browser
```

## Technical Notes

### Next.js 15 Compatibility
- Dynamic route params are now async Promises
- Used `async function` and `await params` in `/tools/[id]`

### Loading States
- **QRModal**: No loading state (renders only on interaction)
- **ImageCarousel**: Shows "加载中..." placeholder while loading

### SSR Disabled for Interactive Components
Both QRModal and ImageCarousel use `ssr: false` because:
- They manage client-side state (useState, useEffect)
- They're conditionally rendered based on user interaction
- No SEO benefit from server-rendering these components

## Documentation

- **CODE_SPLITTING_REPORT.md**: Comprehensive implementation details and analysis
- **This file**: Quick reference for PR reviewers

## Recommendations for Follow-up

1. **Real User Monitoring**: Add Core Web Vitals tracking
2. **Image Optimization**: Convert to Next.js Image component
3. **Font Optimization**: Implement `next/font` for automatic optimization
4. **Further Splitting**: Consider splitting large feature grids on home page
5. **Lazy Images**: Add intersection observer for below-the-fold images

## Breaking Changes

None - all existing functionality maintained.

## Migration Notes

If adding new pages:
- Use server components by default
- Only add `"use client"` when absolutely necessary
- Extract minimal client components for interactive features
- Use `next/dynamic` for heavy/conditional components
