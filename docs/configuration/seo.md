# 🔍 SEO & Metadata

Complete guide to SEO strategy, metadata generation, structured data, robots, and sitemap configuration.

---

## 📋 Overview

The SEO strategy consists of four layers:

1. **Page Metadata** (`lib/metadata.ts`) - Titles, descriptions, OpenGraph
2. **Structured Data** (`lib/seo.ts`) - Schema.org JSON-LD
3. **Robots & Sitemap** (`app/robots.ts`, `app/sitemap.ts`) - Crawlability
4. **Performance** - Core Web Vitals optimization

---

## 📄 Page Metadata

### Metadata Module (`lib/metadata.ts`)

**Centralized metadata definitions:**

```typescript
// Site-wide constants
export const SITE_NAME = "AI创意工坊";
export const SITE_TAGLINE = "释放无限创意可能";
export const SITE_DESCRIPTION = "集成30+专业AI工具...";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "...";

// Page-specific metadata
export const PRODUCTS_DATA = {
  title: "产品中心 - AI创意工坊",
  description: "探索AI创意工坊的核心产品...",
  keywords: "AI产品图,图片处理,视频生成...",
  ogImage: `${SITE_URL}/images/我有产品.png`,
};
```

---

### Page Metadata Export

**Static metadata:**

```typescript
// app/products/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品中心 - AI创意工坊",
  description: "探索AI创意工坊的核心产品与服务",
  keywords: "AI产品,产品图生成,图片修复",
  openGraph: {
    title: "产品中心 - AI创意工坊",
    description: "探索AI创意工坊的核心产品与服务",
    type: "website",
    images: [{
      url: "/images/og-products.jpg",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "产品中心 - AI创意工坊",
    description: "探索AI创意工坊的核心产品与服务",
    images: ["/images/og-products.jpg"],
  },
};

export default function ProductsPage() {
  return <main>...</main>;
}
```

---

### Dynamic Metadata

**For dynamic routes:**

```typescript
// app/tools/[id]/page.tsx
import type { Metadata } from "next";
import { getToolDetail } from "@/lib/tools";
import { generateToolMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return generateToolMetadata(id);
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tool = getToolDetail(id);
  
  return <main>...</main>;
}
```

---

### Metadata Helper (`lib/metadata.ts`)

**Generate complete metadata with alternates:**

```typescript
export function generateMetadataWithAlternates(
  title: string,
  description: string,
  path: string,
  ogImage?: string,
  keywords?: string
): Metadata {
  const url = `${SITE_URL}${path}`;
  
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        'zh-CN': url,
        'en-US': url,  // Stub for future
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{
        url: ogImage || OG_IMAGE,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: 'zh_CN',
      alternateLocale: ['en_US'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
```

---

## 🏷️ Structured Data (Schema.org)

### Structured Data Module (`lib/seo.ts`)

**Generate JSON-LD for search engines:**

---

### Organization Schema

```typescript
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI创意工坊',
    url: 'https://ai-creative-workshop.com',
    logo: 'https://ai-creative-workshop.com/logo.png',
    description: '集成30+专业AI工具...',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: '客户服务',
      telephone: '+86-10-12345678',
      email: 'contact@ai-creative-workshop.com',
      areaServed: 'CN',
      availableLanguage: ['zh-CN'],
    },
  };
}
```

**Usage**:
```tsx
// app/company/page.tsx
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema } from '@/lib/seo';

export default function CompanyPage() {
  return (
    <>
      <StructuredData data={generateOrganizationSchema()} />
      <main>...</main>
    </>
  );
}
```

---

### Website Schema

```typescript
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI创意工坊',
    url: 'https://ai-creative-workshop.com',
    description: '集成30+专业AI工具...',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ai-creative-workshop.com/tools?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}
```

**Usage**:
```tsx
// app/layout.tsx or app/page.tsx
<StructuredData data={generateWebSiteSchema()} />
```

---

### Product Schema

```typescript
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || SITE_CONFIG.logo,
    brand: {
      '@type': 'Brand',
      name: 'AI创意工坊',
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'CNY',
    },
  };
}
```

**Usage**:
```tsx
// app/products/page.tsx
<StructuredData data={generateProductSchema({
  name: "我有产品",
  description: "智能产品图生成与优化",
  image: "/images/我有产品.png",
  category: "AI工具",
})} />
```

---

### Software Application Schema

**For AI tools:**

```typescript
export function generateSoftwareApplicationSchema(tool: {
  name: string;
  description: string;
  category: string;
  features?: string[];
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: tool.category,
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    url: tool.url,
    featureList: tool.features?.join(', '),
    provider: {
      '@type': 'Organization',
      name: 'AI创意工坊',
    },
  };
}
```

**Usage**:
```tsx
// app/tools/[id]/page.tsx
<StructuredData data={generateSoftwareApplicationSchema({
  name: "背景替换",
  description: "智能识别图片主体，一键替换背景",
  category: "图片处理",
  features: ["智能主体识别", "多种背景模板"],
  url: `${SITE_URL}/tools/background-replace`,
})} />
```

---

### Item List Schema

**For product/tool listings:**

```typescript
export function generateToolListSchema(tools: Array<{
  name: string;
  description: string;
  url: string;
  category: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: tool.name,
        description: tool.description,
        url: tool.url,
        applicationCategory: tool.category,
      },
    })),
  };
}
```

---

### StructuredData Component

**Renders JSON-LD script tag:**

```tsx
// components/StructuredData.tsx
interface StructuredDataProps {
  data: unknown;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
```

---

## 🤖 Robots.txt

### Configuration (`app/robots.ts`)

```typescript
import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
```

**Generated `/robots.txt`:**
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/

Sitemap: https://example.com/sitemap.xml
```

---

### Custom Rules

**Block specific crawlers:**
```typescript
{
  userAgent: 'BadBot',
  disallow: '/',
}
```

**Allow specific paths only:**
```typescript
{
  userAgent: 'Googlebot',
  allow: '/products',
  disallow: '/',
}
```

---

## 🗺️ Sitemap

### Configuration (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next'
import { getAllToolIds } from '@/lib/tools'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Static routes
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // ... more static routes
  ]

  // Dynamic routes (tools)
  const toolIds = getAllToolIds()
  const toolRoutes = toolIds.map((toolId) => ({
    url: `${siteUrl}/tools/${toolId}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...toolRoutes]
}
```

**Generated `/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com</loc>
    <lastmod>2025-11-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/products</loc>
    <lastmod>2025-11-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... more URLs -->
</urlset>
```

---

### Sitemap Fields

| Field | Type | Purpose | Values |
|-------|------|---------|--------|
| `url` | String | Page URL | Full URL with protocol |
| `lastModified` | Date | Last update | ISO 8601 date |
| `changeFrequency` | String | Update frequency | `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, `never` |
| `priority` | Number | Relative priority | `0.0` to `1.0` |

---

### Priority Guidelines

| Priority | Usage |
|----------|-------|
| `1.0` | Homepage |
| `0.9` | Major sections (Products, Tools) |
| `0.8` | Individual items (Tool pages) |
| `0.7` | Secondary pages (Technology) |
| `0.6` | Low-priority (Company, Legal) |

---

### Change Frequency Guidelines

| Frequency | Usage |
|-----------|-------|
| `always` | Real-time data (dashboards) |
| `hourly` | High-frequency updates (news) |
| `daily` | Daily updates (blog) |
| `weekly` | Weekly updates (marketing pages) |
| `monthly` | Monthly updates (docs) |
| `yearly` | Rare updates (legal pages) |
| `never` | Static content (archives) |

---

## 🎯 SEO Best Practices

### 1. Title Tags

**Format**: `[Page Title] - [Brand Name]`

**Length**: 50-60 characters (including brand)

**Examples**:
```typescript
"产品中心 - AI创意工坊"          // 12 chars (Chinese)
"Background Replacement Tool"     // 27 chars (English)
```

**Avoid**:
- Keyword stuffing: ❌ "AI工具 AI产品 AI处理 - AI创意工坊"
- Generic titles: ❌ "Home - AI创意工坊"
- Missing brand: ❌ "产品中心"

---

### 2. Meta Descriptions

**Length**: 150-160 characters

**Include**:
- Primary keyword
- Value proposition
- Call to action

**Example**:
```typescript
"集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域，提供一站式AI创意解决方案"
// 48 Chinese characters ≈ 144 English characters
```

---

### 3. Keywords

**Format**: Comma-separated list

**Include**:
- Primary keyword
- Secondary keywords
- Long-tail keywords
- Brand name

**Example**:
```typescript
"AI工具,图片处理,视频编辑,文案生成,背景替换,去水印,产品图优化,视频制作"
```

---

### 4. OpenGraph Images

**Dimensions**: 1200×630px (1.91:1 ratio)

**Format**: JPG or PNG

**Size**: < 1 MB

**Content**:
- Branding (logo, colors)
- Page title (large, readable)
- Visual representation

**Example**:
```typescript
openGraph: {
  images: [{
    url: `${SITE_URL}/images/og-products.jpg`,
    width: 1200,
    height: 630,
    alt: "产品中心 - AI创意工坊",
  }],
}
```

---

### 5. Canonical URLs

**Purpose**: Prevent duplicate content

**Always specify**:
```typescript
alternates: {
  canonical: `${SITE_URL}/products`,
}
```

---

### 6. Structured Data

**Include on every page type**:
- Homepage: `Organization`, `WebSite`
- Product pages: `Product`, `ItemList`
- Tool pages: `SoftwareApplication`
- Company page: `Organization`

**Validate**:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

---

## 📊 Performance & Core Web Vitals

### Largest Contentful Paint (LCP)

**Target**: < 2.5 seconds

**Optimizations**:
- Use `priority` on above-fold images
- Preload critical assets
- Optimize image formats (AVIF, WebP)

```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  priority  // Load immediately
/>
```

---

### First Input Delay (FID)

**Target**: < 100 milliseconds

**Optimizations**:
- Minimize JavaScript execution
- Use code splitting
- Defer non-critical scripts

---

### Cumulative Layout Shift (CLS)

**Target**: < 0.1

**Optimizations**:
- Always specify image dimensions
- Reserve space for dynamic content
- Avoid ads/embeds that push content

```tsx
<Image
  src="/image.jpg"
  alt="Image"
  width={800}
  height={600}  // Prevents layout shift
/>
```

---

## 🛠️ Common Tasks

### Add New Page Metadata

**1. Define in `lib/metadata.ts`:**
```typescript
export const NEW_PAGE_DATA = {
  title: "新页面 - AI创意工坊",
  description: "页面描述...",
  keywords: "关键词1,关键词2",
};
```

**2. Export from page:**
```typescript
// app/new-page/page.tsx
export const metadata: Metadata = {
  title: NEW_PAGE_DATA.title,
  description: NEW_PAGE_DATA.description,
  keywords: NEW_PAGE_DATA.keywords,
};
```

**3. Add to sitemap:**
```typescript
// app/sitemap.ts
{
  url: `${siteUrl}/new-page`,
  lastModified: currentDate,
  changeFrequency: 'weekly' as const,
  priority: 0.8,
}
```

---

### Add Structured Data

**1. Generate schema:**
```typescript
// lib/seo.ts
export function generateNewSchema(data: { ... }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'YourType',
    // ... schema fields
  };
}
```

**2. Add to page:**
```tsx
import StructuredData from '@/components/StructuredData';
import { generateNewSchema } from '@/lib/seo';

<StructuredData data={generateNewSchema({...})} />
```

**3. Validate:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

### Update Sitemap for New Content

**Dynamic content (tools, products):**
```typescript
// app/sitemap.ts
const toolIds = getAllToolIds();  // Auto-updates from lib/tools.ts

const toolRoutes = toolIds.map((id) => ({
  url: `${siteUrl}/tools/${id}`,
  // ...
}));
```

**Rebuild**: Sitemap regenerates on every build

---

## 🔗 Related Documentation

- **[Environment Variables](./environment.md)** - `NEXT_PUBLIC_SITE_URL` configuration
- **[Next.js Configuration](./nextjs.md)** - ISR and caching
- **[Content Management](./content.md)** - Data sources for metadata

---

## 📚 External Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [OpenGraph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

**Last Updated**: 2025-11-10  
**Maintained By**: Development Team
