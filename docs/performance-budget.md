# Performance Budget

This document defines the performance budget for the AI创意工坊 marketing website. These budgets should be enforced in CI/CD and monitored in production.

## Bundle Size Budget

### JavaScript Bundles

| Metric | Budget | Warning Threshold | Current | Status |
|--------|--------|------------------|---------|--------|
| First Load JS (any page) | < 150 kB | 130 kB | 114-117 kB | ✅ Pass |
| Shared Bundle | < 120 kB | 100 kB | 99.7 kB | ✅ Pass |
| Individual Page Bundle | < 15 kB | 12 kB | 1-10 kB | ✅ Pass |
| Total JS (including lazy) | < 200 kB | 180 kB | ~120 kB | ✅ Pass |

### CSS Budgets

| Metric | Budget | Warning Threshold | Current | Status |
|--------|--------|------------------|---------|--------|
| Critical CSS (inlined) | < 15 kB | 12 kB | TBD | 🟡 Monitor |
| Total CSS | < 50 kB | 40 kB | ~25 kB | ✅ Pass |

### Image Budgets (per page)

| Metric | Budget | Warning Threshold | Notes |
|--------|--------|------------------|-------|
| Total Images | < 500 kB | 400 kB | After optimization |
| Hero Image | < 150 kB | 120 kB | AVIF/WebP format |
| Thumbnail Images | < 50 kB each | 40 kB | Responsive sizes |
| Number of Images | < 20 | 15 | Above the fold |

## Core Web Vitals Budget

### Target Scores (75th Percentile)

| Metric | Good | Needs Improvement | Poor | Current Target |
|--------|------|-------------------|------|----------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5s - 4.0s | > 4.0s | < 2.0s |
| **FID** (First Input Delay) | < 100ms | 100ms - 300ms | > 300ms | < 80ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1 - 0.25 | > 0.25 | < 0.05 |
| **FCP** (First Contentful Paint) | < 1.8s | 1.8s - 3.0s | > 3.0s | < 1.5s |
| **TTI** (Time to Interactive) | < 3.8s | 3.8s - 7.3s | > 7.3s | < 3.0s |
| **TBT** (Total Blocking Time) | < 200ms | 200ms - 600ms | > 600ms | < 150ms |
| **Speed Index** | < 3.4s | 3.4s - 5.8s | > 5.8s | < 2.5s |

## Lighthouse Score Budget

| Category | Minimum Score | Target Score | Current Estimate |
|----------|--------------|--------------|------------------|
| Performance | 85 | 95 | 90-95 |
| Accessibility | 95 | 100 | 95-100 |
| Best Practices | 90 | 100 | 95-100 |
| SEO | 95 | 100 | 100 |

## Network Budget

### Transfer Size (per page, gzipped)

| Resource Type | Budget | Current | Notes |
|--------------|--------|---------|-------|
| HTML | < 50 kB | ~20 kB | Gzipped |
| JavaScript | < 100 kB | ~80 kB | Gzipped, includes shared chunks |
| CSS | < 20 kB | ~10 kB | Gzipped |
| Images | < 300 kB | ~150 kB | AVIF/WebP, lazy loaded |
| Fonts | < 100 kB | ~60 kB | WOFF2, preloaded |
| **Total** | **< 600 kB** | **~320 kB** | ✅ Well within budget |

### Request Count Budget

| Metric | Budget | Warning Threshold | Notes |
|--------|--------|------------------|-------|
| Total Requests | < 50 | 40 | Per page |
| JavaScript Requests | < 10 | 8 | Includes lazy chunks |
| CSS Requests | < 5 | 3 | Critical + non-critical |
| Image Requests | < 30 | 25 | Lazy loaded |
| Font Requests | < 4 | 2 | Preloaded critical fonts |

## Connection Budget

### Network Conditions

| Profile | Budget | Target |
|---------|--------|--------|
| **Desktop (Cable)** | | |
| - FCP | < 1.0s | < 0.8s |
| - LCP | < 1.5s | < 1.2s |
| - TTI | < 2.0s | < 1.5s |
| **Mobile (4G)** | | |
| - FCP | < 2.0s | < 1.5s |
| - LCP | < 2.5s | < 2.0s |
| - TTI | < 3.8s | < 3.0s |
| **Mobile (3G)** | | |
| - FCP | < 3.0s | < 2.5s |
| - LCP | < 4.0s | < 3.5s |
| - TTI | < 7.0s | < 5.0s |

## Cache Hit Rate Budget

| Resource Type | Target Cache Hit Rate | Notes |
|--------------|---------------------|-------|
| Static Assets (_next/static/*) | > 95% | 1 year cache |
| Images | > 90% | 1 year cache, on-demand generation |
| HTML Pages | > 75% | 1 hour cache with SWR |
| API Responses (future) | > 50% | Varies by endpoint |

## Monitoring Thresholds

### Alerts

Trigger alerts when:

1. **Critical**: LCP > 3.0s (P75)
2. **Critical**: FID > 200ms (P75)
3. **Critical**: CLS > 0.15 (P75)
4. **Critical**: Lighthouse Performance < 80
5. **Warning**: First Load JS > 130 kB
6. **Warning**: Total Transfer Size > 500 kB
7. **Warning**: LCP > 2.5s (P75)
8. **Info**: Cache hit rate < 80%

### Trend Monitoring

Track week-over-week trends for:
- Average LCP, FID, CLS across all pages
- P75, P90, P95 percentiles
- Page load time by geography
- Bundle size growth
- Cache hit rates

## Enforcement

### Pre-commit Hooks
- Bundle size check (warn if > threshold)
- Image size check (error if > 3MB source)

### CI/CD Pipeline
- Run Lighthouse CI on PRs
- Fail build if Performance < 85
- Warn if bundle size increased > 10%
- Block deployment if Critical Web Vitals fail

### Production Monitoring
- Real User Monitoring (RUM) dashboard
- Daily Core Web Vitals reports
- Weekly performance review
- Monthly performance retrospective

## Budget Review Schedule

- **Weekly**: Review metrics vs budget
- **Monthly**: Adjust budgets based on features
- **Quarterly**: Major budget review and planning
- **Annually**: Comprehensive performance audit

## Exceptions

Budgets may be temporarily exceeded when:
1. New major feature is being developed (time-boxed)
2. A/B testing requiring additional code
3. Critical business requirement (requires approval)

All exceptions must:
- Be documented with justification
- Have a remediation plan
- Be resolved within 2 sprints

## Resources

### Monitoring Tools
- Google PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Chrome DevTools Performance Panel
- Lighthouse CI: https://github.com/GoogleChrome/lighthouse-ci
- Bundle Analyzer: Built-in with `ANALYZE=true npm run build`

### References
- Web Vitals: https://web.dev/vitals/
- Performance Budgets: https://web.dev/performance-budgets-101/
- Next.js Performance: https://nextjs.org/docs/pages/building-your-application/optimizing

---

**Last Updated**: November 11, 2025  
**Next Review**: December 11, 2025  
**Owner**: Engineering Team
