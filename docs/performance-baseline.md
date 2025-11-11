# Performance Baseline Report

**Date**: November 11, 2025  
**Next.js Version**: 15.4.7  
**Node Version**: 20.19.5

## Build Statistics

### Bundle Sizes (First Load JS)

| Route | Page Size | First Load JS | Revalidate |
|-------|-----------|---------------|------------|
| / (Home) | 9.32 kB | 114 kB | 1h |
| /products | 4.89 kB | 113 kB | 1h |
| /tools | 9.26 kB | 117 kB | 1h |
| /tools/[id] | 1.25 kB | 104 kB | 1h |
| /models | 3.37 kB | 106 kB | 1h |
| /company | 3.02 kB | 106 kB | 1h |
| /technology | 3.85 kB | 107 kB | 1h |

### Shared Bundle Analysis

- **Total Shared JS**: 99.7 kB
  - `chunks/4bd1b696-cf72ae8a39fa05aa.js`: 54.1 kB
  - `chunks/964-4542b6435bd81c5b.js`: 43.5 kB
  - Other shared chunks: 1.99 kB

### Performance Observations

**Strengths**:
- ✅ All routes use ISR (Incremental Static Regeneration) with 1-hour revalidation
- ✅ Static generation for all marketing pages
- ✅ Dynamic routes pre-rendered with `generateStaticParams`
- ✅ Reasonable bundle sizes (under 120 kB total)
- ✅ Cache headers configured for static assets (1 year immutable)
- ✅ Page-level cache headers with stale-while-revalidate
- ✅ Using `next/image` for optimized image delivery
- ✅ Using `next/font` (Geist) for font optimization

**Areas for Improvement**:
1. **Code Splitting**: Heavy client components (QRModal, ImageCarousel) could be lazy-loaded
2. **Font Loading**: Could add preload strategy and font-display optimization
3. **Above-the-fold JS**: Large initial JavaScript bundle on home page (9.32 kB + 114 kB)
4. **Image Optimization**: Verify all images use responsive sizing
5. **Critical CSS**: Ensure critical CSS is extracted and inlined
6. **Compression**: Add compression middleware/config
7. **Third-party Scripts**: Audit any external scripts for performance impact

### Core Web Vitals Targets

Based on Google's recommendations:

| Metric | Target | Status |
|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | 🟡 To be measured |
| FID (First Input Delay) | < 100ms | 🟡 To be measured |
| CLS (Cumulative Layout Shift) | < 0.1 | 🟡 To be measured |
| FCP (First Contentful Paint) | < 1.8s | 🟡 To be measured |
| TTI (Time to Interactive) | < 3.8s | 🟡 To be measured |

### Bundle Size Goals

- **Target**: Reduce First Load JS to < 100 kB on critical pages
- **Strategy**: Dynamic imports for non-critical components
- **Expected Improvement**: 10-20% reduction in initial bundle

### Network Performance

**Current Configuration**:
- Cache-Control headers: `public, s-maxage=3600, stale-while-revalidate=86400`
- Static assets: `public, max-age=31536000, immutable`
- Image formats: AVIF, WebP with fallbacks
- Image cache TTL: 1 year

### Font Loading Strategy

**Current**:
- Using `next/font/google` with Geist Sans and Geist Mono
- Variable fonts with CSS variables
- Subsets: `["latin"]`

**Potential Improvements**:
- Add `display: 'swap'` for faster FCP
- Preload critical font files
- Consider font subsetting for Chinese characters

## Next Steps

1. ✅ Document baseline metrics
2. 🔄 Implement code-splitting optimizations
3. 🔄 Optimize font loading strategy
4. 🔄 Review and optimize image usage
5. 🔄 Add compression configuration
6. 🔄 Validate caching strategy
7. 🔄 Run post-optimization measurements
8. 🔄 Generate performance report with recommendations

## Notes

- Lighthouse testing requires Chrome/Chromium which is not available in the current environment
- Performance measurements will be based on build analytics and bundle size comparisons
- Real-world Core Web Vitals should be measured in production with tools like:
  - Google PageSpeed Insights
  - WebPageTest
  - Chrome DevTools Performance panel
  - Real User Monitoring (RUM) tools
