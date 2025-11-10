# StructuredData Component

## Overview

The StructuredData component is a utility component that injects JSON-LD structured data (schema.org) into the document head for SEO purposes. It helps search engines understand your content better and can enhance search result appearance with rich snippets.

## Import

```typescript
import StructuredData from "@/components/StructuredData";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | `unknown \| unknown[]` | ✅ Yes | - | Single schema object or array of schema objects |

## TypeScript Interface

```typescript
interface StructuredDataProps {
  data: unknown | unknown[];
}
```

## Usage

### Single Schema

```tsx
import StructuredData from "@/components/StructuredData";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "description": "专业的AI工具平台，助力创意无限可能"
};

export default function Layout({ children }) {
  return (
    <>
      <StructuredData data={organizationSchema} />
      {children}
    </>
  );
}
```

### Multiple Schemas

```tsx
import StructuredData from "@/components/StructuredData";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI创意工坊",
    "url": "https://example.com"
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI创意工坊",
    "url": "https://example.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];

export default function RootLayout({ children }) {
  return (
    <>
      <StructuredData data={schemas} />
      {children}
    </>
  );
}
```

### Product Schema

```tsx
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AI图像处理工具",
  "description": "专业的AI驱动图像编辑和处理工具",
  "brand": {
    "@type": "Brand",
    "name": "AI创意工坊"
  },
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock"
  }
};

export default function ProductPage() {
  return (
    <>
      <StructuredData data={productSchema} />
      {/* Product content */}
    </>
  );
}
```

### Breadcrumb Schema

```tsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首页",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "AI工具",
      "item": "https://example.com/tools"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "智能抠图",
      "item": "https://example.com/tools/ai-cutout"
    }
  ]
};
```

### Article/Blog Post Schema

```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "如何使用AI工具提升工作效率",
  "description": "详细介绍AI工具在日常工作中的应用",
  "author": {
    "@type": "Person",
    "name": "张三"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI创意工坊",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20",
  "image": "https://example.com/article-image.jpg"
};
```

## Features

### Automatic Script Injection

- Injects JSON-LD scripts into document head
- Handles single or multiple schemas
- Automatic cleanup on component unmount
- No manual DOM manipulation required

### Multiple Schema Support

- Accepts single object or array of objects
- Creates separate script tags for each schema
- Maintains proper script type (`application/ld+json`)

### Lifecycle Management

- Scripts injected on component mount
- Removed on component unmount
- Re-injected if data prop changes

## SEO Benefits

### Rich Snippets

Structured data can enable:
- **Rich Cards**: Enhanced search results with images and ratings
- **Breadcrumbs**: Navigation path in search results
- **Product Info**: Price, availability, ratings
- **Organization Info**: Logo, social profiles, contact info
- **Article Metadata**: Author, publish date, headline
- **FAQ**: Frequently asked questions in search results
- **Video**: Video thumbnails and descriptions
- **Local Business**: Hours, location, reviews

### Search Engine Support

- ✅ Google Search
- ✅ Bing
- ✅ Yandex
- ✅ Baidu (partial support)

## Accessibility

This component has no accessibility impact as it:
- Renders no visible content (`return null`)
- Only injects metadata into document head
- Not exposed to screen readers or keyboard navigation

## Performance Considerations

### Optimization

- ✅ **Lightweight**: No visual rendering
- ✅ **Client-Side Only**: Runs in browser (uses `useEffect`)
- ✅ **Efficient Cleanup**: Removes scripts on unmount
- ✅ **Minimal Re-renders**: Only updates when data prop changes
- ✅ **No External Dependencies**: Pure React implementation

### Performance Impact

```typescript
// Script injection: < 1ms per schema
// Cleanup: < 1ms per schema
// No impact on initial page load
// No impact on LCP or CLS
```

### Best Practices

1. **Place in Layout**: Add to layout components for site-wide schemas
2. **Server-Side Alternative**: Consider using Next.js metadata API for SSR
3. **Limit Schemas**: Don't overload pages with too many schemas
4. **Validate Data**: Use Google's Rich Results Test to validate

## Integration Tips

### In Root Layout

```tsx
// app/layout.tsx
import StructuredData from "@/components/StructuredData";

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": "https://example.com",
  "sameAs": [
    "https://weibo.com/profile",
    "https://weixin.qq.com/profile"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <StructuredData data={organizationData} />
        {children}
      </body>
    </html>
  );
}
```

### In Dynamic Pages

```tsx
// app/tools/[id]/page.tsx
import StructuredData from "@/components/StructuredData";
import { getToolById } from "@/lib/tools";

export default async function ToolPage({ params }) {
  const tool = await getToolById(params.id);
  
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CNY"
    }
  };
  
  return (
    <>
      <StructuredData data={toolSchema} />
      <h1>{tool.name}</h1>
      {/* Tool content */}
    </>
  );
}
```

### With CMS

```tsx
import StructuredData from "@/components/StructuredData";
import { getPageSchema } from "@/lib/cms";

export default async function CMSPage({ params }) {
  const schema = await getPageSchema(params.slug);
  
  return (
    <>
      <StructuredData data={schema} />
      {/* Page content */}
    </>
  );
}
```

### Multiple Pages, Multiple Schemas

```tsx
// lib/schemas.ts
export const getPageSchemas = (pageType: string, data: any) => {
  const schemas = [];
  
  // Always include organization
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI创意工坊"
  });
  
  // Add page-specific schema
  if (pageType === "tool") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": data.name,
      "description": data.description
    });
  }
  
  return schemas;
};

// In component
import { getPageSchemas } from "@/lib/schemas";

const schemas = getPageSchemas("tool", toolData);
<StructuredData data={schemas} />
```

## Common Schema Types

### Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-10-12345678",
    "contactType": "customer service",
    "areaServed": "CN",
    "availableLanguage": "Chinese"
  }
}
```

### WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI创意工坊",
  "url": "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://example.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### FAQ Page

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "如何使用AI抠图工具？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "上传图片后，AI会自动识别主体并去除背景..."
      }
    }
  ]
}
```

### Software Application

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI图像处理工具",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  }
}
```

## Validation & Testing

### Google Tools

1. **Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor rich results performance

### Testing Example

```typescript
// Test in browser console
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
scripts.forEach(script => {
  console.log(JSON.parse(script.textContent));
});
```

## Common Issues

### Issue: Schema not appearing in Google Search Console

**Solution**: 
1. Check that schema is valid using validator
2. Wait for Google to re-crawl the page (can take days/weeks)
3. Submit URL for indexing in Search Console

### Issue: Multiple scripts with same data

**Solution**: Ensure component isn't rendering multiple times. Check component tree.

### Issue: Schema not removed on navigation

**Solution**: This is expected in client-side navigation. Scripts will be cleaned up when component unmounts.

### Issue: Invalid JSON in output

**Solution**: Ensure your schema object is valid JavaScript. Use JSON.stringify() to test:

```typescript
try {
  JSON.stringify(yourSchema);
} catch (e) {
  console.error("Invalid schema:", e);
}
```

## Advanced Examples

### With TypeScript Validation

```typescript
import { Organization, WithContext } from "schema-dts";

const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": "https://example.com"
};

<StructuredData data={organizationSchema} />
```

Install `schema-dts` for type safety:
```bash
npm install schema-dts
```

### With Environment Variables

```tsx
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
};
```

### Conditional Schemas

```tsx
export default function Page({ isProduct, data }) {
  const schema = isProduct 
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": data.name
      }
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title
      };
  
  return <StructuredData data={schema} />;
}
```

## Related Components

This is a utility component with no related UI components.

## Alternative: Next.js Metadata API

For Next.js 13+, consider using the built-in metadata API:

```tsx
// app/layout.tsx or page.tsx
export const metadata = {
  openGraph: {
    title: "AI创意工坊",
    description: "专业的AI工具平台"
  }
};
```

Or use `generateMetadata` for dynamic data:

```tsx
export async function generateMetadata({ params }) {
  const tool = await getToolById(params.id);
  
  return {
    title: tool.name,
    description: tool.description
  };
}
```

## Best Practices

1. ✅ **Validate Schemas**: Use Google's Rich Results Test
2. ✅ **Use Specific Types**: Use most specific schema type (e.g., SoftwareApplication vs Thing)
3. ✅ **Include Required Properties**: Each type has required properties
4. ✅ **Keep Updated**: Schema.org updates regularly
5. ✅ **Don't Spam**: Only add relevant, accurate data
6. ✅ **Test in Multiple Tools**: Google, Bing, Schema.org validator
7. ✅ **Monitor Performance**: Use Search Console to track rich results

## Resources

- **Schema.org**: https://schema.org/
- **Google Search Central**: https://developers.google.com/search/docs/advanced/structured-data
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Schema Markup Generator**: https://technicalseo.com/tools/schema-markup-generator/

## Version History

- Initial implementation with single schema support
- Added support for multiple schemas (array)
- Improved cleanup on component unmount
- Added TypeScript types
- Enhanced with proper script type attribute
