# Footer Component

## Overview

The Footer component provides a comprehensive site footer with navigation links, social media links, copyright information, and legal links. It features a dark theme with organized columns for different content categories.

## Import

```typescript
import Footer from "@/components/Footer";
```

## Props

This component does not accept any props. All content and links are internally configured.

## Usage

### Basic Usage

```tsx
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

### In Root Layout

```tsx
// app/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

## Features

### Navigation Sections

1. **Brand Section**
   - Company name (AI创意工坊)
   - Tagline
   - Social media links (WeChat, Weibo)

2. **Product Features** (产品功能)
   - Image processing (图片处理)
   - Video editing (视频编辑)
   - Content generation (文案生成)
   - AI models (AI模型)

3. **Solutions** (解决方案)
   - E-commerce operations (电商运营)
   - Content creation (内容创作)
   - Marketing promotion (营销推广)
   - Education & training (教育培训)

4. **About Us** (关于我们)
   - Technical support (技术支持)
   - Business cooperation (商务合作)
   - User feedback (用户反馈)
   - Help center (帮助中心)

### Bottom Section

- Copyright notice
- Legal links: Privacy Policy, Terms of Service, Cookie Policy

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Color Contrast**: All text meets WCAG AA standards
  - White text on gray-900: ~16:1 contrast ratio
  - Gray-300 text on gray-900: ~7:1 contrast ratio
  - Gray-400 text on gray-900: ~5.3:1 contrast ratio
- ✅ **Keyboard Navigation**: All links are keyboard accessible
- ✅ **Focus Indicators**: Links show focus state
- ✅ **Semantic HTML**: Uses `<footer>` element
- ✅ **Link Purpose**: All links have clear, descriptive text
- ✅ **Screen Reader Support**: Social icons have sr-only labels

### Accessibility Checklist

- [x] Keyboard accessible (Tab, Enter)
- [x] Screen reader friendly with semantic HTML
- [x] Color contrast meets WCAG AA (4.5:1+)
- [x] Focus visible on all links
- [x] Social media icons have text alternatives
- [x] Links have descriptive text (no "click here")
- [x] Proper heading hierarchy (h3, h4)

### Screen Reader Labels

```tsx
<span className="sr-only">微信</span>  // WeChat
<span className="sr-only">微博</span>  // Weibo
```

## Performance Considerations

### Optimization Strategies

1. **Static Component**: No client-side JavaScript required
2. **CSS Grid**: Uses CSS Grid for responsive layout
3. **Next.js Link**: Prefetches internal links for faster navigation
4. **Minimal SVG**: Lightweight inline SVG for social icons
5. **No External Assets**: All styles and icons are inline

### Best Practices

- ✅ Server-side rendered (no "use client")
- ✅ No images or external resources
- ✅ Minimal CSS footprint with Tailwind utilities
- ✅ No JavaScript overhead for static content
- ✅ Fast initial render

## Integration Tips

### Sticky Footer

To make footer stick to bottom of short pages:

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### With Contact Modal

```tsx
"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import QRModal from "@/components/QRModal";

export default function FooterWithModal() {
  // Note: Footer component would need to be modified to accept onClick handlers
  // Current implementation uses static links
  return (
    <>
      <Footer />
      {/* Add modal trigger separately if needed */}
    </>
  );
}
```

### Customizing Links

To customize footer links, modify the component directly. Links are organized in four columns starting around line 8.

### Adding Newsletter Signup

```tsx
// Modified Footer with newsletter
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">  {/* Changed to 5 columns */}
          {/* Existing columns... */}
          
          {/* New newsletter column */}
          <div>
            <h4 className="text-white font-semibold mb-4">订阅资讯</h4>
            <p className="text-sm mb-4">获取最新产品动态</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="邮箱地址"
                className="w-full px-3 py-2 rounded bg-gray-800 text-white text-sm"
              />
              <button className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                订阅
              </button>
            </form>
          </div>
        </div>
        {/* Rest of footer... */}
      </div>
    </footer>
  );
}
```

## Styling

### Color Scheme

- **Background**: `bg-gray-900` (dark background)
- **Primary Text**: `text-white` (headings)
- **Secondary Text**: `text-gray-300` (body text)
- **Link Hover**: `text-white` (on hover)
- **Tertiary Text**: `text-gray-400` (legal links)

### Layout

- **Grid**: 4-column on desktop (`md:grid-cols-4`), 1-column on mobile
- **Spacing**: `gap-8` between columns, `py-12` vertical padding
- **Max Width**: `max-w-7xl` with auto margins for centering

### Responsive Breakpoints

```css
/* Mobile: 1 column, stacked */
/* Tablet and up (md: 768px+): 4 columns */
```

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ IE11 (with Tailwind compatibility)
- ✅ Mobile browsers

## Common Issues

### Issue: Footer not sticking to bottom

**Solution**: Use flexbox layout on body:

```tsx
<body className="flex flex-col min-h-screen">
  <Header />
  <main className="flex-1">{children}</main>
  <Footer />
</body>
```

### Issue: Links not working

**Solution**: Ensure Next.js `<Link>` component is imported and used correctly. For external links, use `<a>` tags.

### Issue: Social icons not visible

**Solution**: Check that SVG paths are correct and fill color is set to `currentColor`.

### Issue: Grid not responsive

**Solution**: Ensure Tailwind's `md:` breakpoint is functioning. Check that Tailwind is properly configured.

## TypeScript

No exported types - component doesn't accept props.

## Customization Examples

### Adding More Social Links

```tsx
<div className="flex space-x-4">
  {/* Existing social links */}
  
  {/* Add LinkedIn */}
  <a href="#" className="text-gray-400 hover:text-white transition-colors">
    <span className="sr-only">LinkedIn</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
</div>
```

### Changing Column Layout

```tsx
{/* 3 columns instead of 4 */}
<div className="grid md:grid-cols-3 gap-8">
  {/* Combine some columns or remove one */}
</div>
```

### Adding Icons to Links

```tsx
<li>
  <Link href="/tools" className="hover:text-white transition-colors flex items-center">
    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path d="M..."/>
    </svg>
    图片处理
  </Link>
</li>
```

## Content Sections Detail

### Column 1: Brand & Social

```tsx
<div>
  <h3 className="text-white font-semibold mb-4">AI创意工坊</h3>
  <p className="text-sm mb-4">专业的AI工具平台，助力创意无限可能</p>
  <div className="flex space-x-4">
    {/* Social icons */}
  </div>
</div>
```

### Column 2: Product Features

All links point to `/tools` page (modify as needed for specific tool pages).

### Column 3: Solutions

Links are placeholders (`#`) - update with actual solution page URLs.

### Column 4: About

Links are placeholders (`#`) - update with actual about page URLs.

## Related Components

- [Header](./Header.md) - Site navigation header
- [QRModal](./QRModal.md) - Contact modal that could be integrated

## SEO Considerations

- Footer links help with site navigation and SEO
- Internal links should point to actual pages (not `#`)
- Consider adding schema.org structured data for organization
- Social media links should point to actual profiles

### Adding Structured Data

```tsx
import StructuredData from "@/components/StructuredData";

const orgData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": "https://example.com",
  "sameAs": [
    "https://weibo.com/yourprofile",
    "https://weixin.qq.com/yourprofile"
  ]
};

export default function Layout({ children }) {
  return (
    <>
      <StructuredData data={orgData} />
      {children}
      <Footer />
    </>
  );
}
```

## Version History

- Initial implementation with 4-column layout
- Added social media icons
- Added legal links in bottom section
- Improved responsive design
- Enhanced accessibility with sr-only labels
