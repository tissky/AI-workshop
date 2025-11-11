# ⚙️ Next.js Configuration

Complete guide to Next.js settings, image optimization, caching, ISR, and build configuration.

---

## 📋 Overview

Next.js configuration is defined in **`next.config.ts`** and page-level exports. This guide covers:

1. **Image Optimization** - Modern formats, responsive sizes, caching
2. **Cache Headers** - CDN-friendly HTTP headers
3. **ISR Configuration** - Incremental Static Regeneration
4. **Bundle Analyzer** - Webpack bundle visualization
5. **Build Settings** - Production optimizations

---

## 🖼️ Image Optimization

### Configuration (`next.config.ts`)

```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year in seconds
  },
};
```

---

### Image Formats

**Automatic Format Selection:**
- **AVIF** (primary): Smallest files, best quality/size ratio
- **WebP** (fallback): Wide browser support
- **Original format** (fallback): For unsupported browsers

**Browser Support:**
| Format | Chrome | Safari | Firefox | Edge |
|--------|--------|--------|---------|------|
| AVIF | 85+ | 16.1+ | 93+ | 85+ |
| WebP | 23+ | 14+ | 65+ | 18+ |

---

### Device Sizes

**Purpose**: Responsive image breakpoints for `<Image layout="responsive" />`

```typescript
deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
```

**Mapping**:
| Size | Device | Usage |
|------|--------|-------|
| 640px | Mobile (portrait) | iPhone SE, small phones |
| 750px | Mobile (standard) | iPhone 12/13 |
| 828px | Mobile (large) | iPhone 12 Pro Max |
| 1080px | Tablet (portrait) | iPad Mini |
| 1200px | Tablet (landscape) | iPad Pro |
| 1920px | Desktop (FHD) | Standard monitors |
| 2048px | Desktop (2K) | High-res monitors |
| 3840px | Desktop (4K) | Ultra-wide, 4K displays |

---

### Image Sizes

**Purpose**: Fixed-size images for icons, avatars, thumbnails

```typescript
imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
```

**Common Uses**:
| Size | Usage |
|------|-------|
| 16px | Favicons |
| 32px | Small icons |
| 48px | Standard icons |
| 64px | Large icons |
| 96px | Small avatars |
| 128px | Standard avatars |
| 256px | Large avatars |
| 384px | Hero images (mobile) |

---

### Minimum Cache TTL

```typescript
minimumCacheTTL: 31536000  // 1 year (365 days)
```

**Purpose**: How long optimized images are cached by Next.js

**Best Practices**:
- Use long TTL for static images (logos, icons)
- Images are automatically invalidated when source changes
- Combine with CDN caching for maximum performance

---

### Image Component Usage

**Responsive Image:**
```tsx
import Image from 'next/image';
import myProduct from '@/public/images/我有产品.png';

<Image
  src={myProduct}
  alt="我有产品"
  width={1200}
  height={630}
  priority  // Load immediately (above-fold)
/>
```

**Fixed Size:**
```tsx
<Image
  src="/images/logo.png"
  alt="Logo"
  width={64}
  height={64}
/>
```

**Fill Container:**
```tsx
<div className="relative w-full h-[400px]">
  <Image
    src="/images/hero.jpg"
    alt="Hero"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
```

---

## 📦 Cache Headers

### Configuration (`next.config.ts`)

Cache headers are set via the `headers()` async function:

```typescript
async headers() {
  return [
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      ],
    },
    // ... more routes
  ];
}
```

---

### Marketing Pages

**1-hour ISR with 24-hour stale grace:**

```typescript
{
  source: "/products",
  headers: [{
    key: "Cache-Control",
    value: "public, s-maxage=3600, stale-while-revalidate=86400",
  }],
}
```

**Applied to**:
- `/` (Home)
- `/products`
- `/tools`
- `/tools/:id`
- `/models`
- `/technology`
- `/company`

**Directives**:
- `public`: Cacheable by CDNs and browsers
- `s-maxage=3600`: CDN serves cached version for 1 hour
- `stale-while-revalidate=86400`: Serve stale content while fetching fresh (24 hours)

**Behavior**:
1. First request: Generate page, cache for 1 hour
2. Requests within 1 hour: Serve from cache
3. After 1 hour, within 25 hours: Serve stale, revalidate in background
4. After 25 hours: Force revalidation

---

### Static Assets

**Immutable caching (1 year):**

```typescript
{
  source: "/_next/static/:path*",
  headers: [{
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  }],
}
```

**Applied to**:
- `/_next/static/*` (JavaScript, CSS bundles)
- `/images/*` (Public images)

**Directives**:
- `max-age=31536000`: Cache for 1 year
- `immutable`: Never revalidate (hash-based URLs)

---

## 🔄 ISR Configuration

### Page-Level ISR

**Export from page component:**

```typescript
// app/products/page.tsx
export const revalidate = 3600;        // Revalidate every 1 hour (in seconds)
export const dynamic = "force-static"; // Force static generation

export default function ProductsPage() {
  return <main>...</main>;
}
```

---

### ISR Options

**`revalidate`**:
```typescript
export const revalidate = 3600;  // Seconds between regenerations
```

| Value | Interval | Usage |
|-------|----------|-------|
| `false` | Never | Purely static (default) |
| `0` | Always | Server-side rendering (SSR) |
| `60` | 1 minute | High-frequency updates |
| `3600` | 1 hour | Marketing pages |
| `86400` | 24 hours | Rarely-changing content |

**`dynamic`**:
```typescript
export const dynamic = "force-static";  // or "force-dynamic", "auto", "error"
```

| Value | Behavior |
|-------|----------|
| `"auto"` | Default - auto-detect based on code |
| `"force-static"` | Force static generation at build time |
| `"force-dynamic"` | Force dynamic rendering (SSR) |
| `"error"` | Throw error if dynamic rendering required |

---

### Dynamic Routes with ISR

**Generate static params:**

```typescript
// app/tools/[id]/page.tsx
import { getAllToolIds } from '@/lib/tools';

export const revalidate = 3600;
export const dynamic = "force-static";

// Generate static paths at build time
export async function generateStaticParams() {
  const toolIds = getAllToolIds();
  
  return toolIds.map((id) => ({
    id: id,
  }));
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Fetch tool data...
  
  return <main>...</main>;
}
```

**Build Output:**
```
Route (app)                              Size     First Load JS
├ ○ /                                    1.2 kB         85.3 kB
├ ○ /tools                               2.1 kB         87.4 kB
├ ● /tools/[id]                          1.8 kB         86.9 kB
│   ├ /tools/background-replace
│   ├ /tools/product-image
│   └ [+21 more paths]
```

**Legend**:
- `○` (Static): Prerendered as static HTML
- `●` (SSG): Generated via `generateStaticParams()`

---

### ISR Best Practices

**1. Choose appropriate intervals:**
```typescript
// High-frequency content (blog posts, news)
export const revalidate = 300;  // 5 minutes

// Marketing pages (product pages, landing pages)
export const revalidate = 3600;  // 1 hour

// Rarely-changing content (docs, legal pages)
export const revalidate = 86400;  // 24 hours
```

**2. Combine with CDN caching:**
- ISR handles page regeneration
- CDN cache headers handle edge caching
- Together: Fast, scalable, always fresh

**3. Use `force-static` for predictable builds:**
```typescript
export const dynamic = "force-static";
```
Ensures pages are generated at build time, not on-demand.

---

## 📊 Bundle Analyzer

### Configuration (`next.config.ts`)

```typescript
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
```

---

### Usage

**Run analysis:**
```bash
ANALYZE=true npm run build
```

**Output:**
- Opens browser at `http://localhost:8888`
- Interactive treemap of bundle sizes
- Shows all chunks, modules, and dependencies

**Analyze**:
- Largest modules (candidates for code splitting)
- Duplicate dependencies (consolidation opportunities)
- Unused code (tree-shaking issues)
- Chunk sizes (lazy loading opportunities)

---

### Interpreting Results

**Healthy Bundle:**
- Main bundle < 200 KB (gzipped)
- Page-specific bundles < 100 KB each
- No duplicate dependencies
- Third-party libraries in separate chunks

**Red Flags:**
- Large main bundle (> 300 KB)
- Duplicate dependencies (e.g., two versions of React)
- Entire libraries imported when only parts used
- Large images bundled in JavaScript

**Optimizations:**
```tsx
// ❌ Imports entire library
import _ from 'lodash';

// ✅ Import only what you need
import debounce from 'lodash/debounce';

// ❌ All icons bundled
import * as Icons from 'react-icons/fa';

// ✅ Import specific icons
import { FaHome, FaUser } from 'react-icons/fa';
```

---

## 🏗️ Build Configuration

### TypeScript Config (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

**Key Settings**:
- `strict: true`: Strict type checking
- `paths: { "@/*": ["./*"] }`: Absolute imports (`@/lib/tools`)
- `incremental: true`: Faster rebuilds

---

### Tailwind Config (`tailwind.config.ts`)

```typescript
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
};
```

**Content Paths**: Tells Tailwind where to look for class names

---

### PostCSS Config (`postcss.config.mjs`)

```javascript
export default {
  plugins: {
    tailwindcss: {},
  },
};
```

**Minimal config**: Next.js handles most PostCSS setup automatically

---

## 🚀 Build & Deployment

### Development Build

```bash
npm run dev
```

**Features**:
- Fast Refresh (instant updates)
- Source maps (debugging)
- Verbose errors
- No optimizations

**Port**: `http://localhost:3000`

---

### Production Build

```bash
npm run build
```

**Optimizations**:
- Minification (JavaScript, CSS)
- Tree shaking (remove unused code)
- Image optimization
- Bundle splitting
- Static page generation (ISR)

**Output**: `.next/` directory

**Build Log**:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    1.2 kB         85.3 kB
├ ○ /products                            2.4 kB         87.7 kB
├ ○ /tools                               2.1 kB         87.4 kB
└ ● /tools/[id] (ISR: 3600 Seconds)      1.8 kB         86.9 kB
    ├ /tools/background-replace
    └ [+22 more paths]

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
```

---

### Production Server

```bash
npm start
```

**Serves**: Optimized production build from `.next/`

**Port**: `http://localhost:3000`

---

### Deployment Platforms

**Vercel (Recommended)**:
```bash
vercel deploy
```
- Automatic builds on Git push
- ISR support out-of-the-box
- Global CDN
- Zero configuration

**Netlify**:
```bash
netlify deploy --prod
```
- Supports Next.js ISR
- Environment variables UI
- Build plugins

**Docker**:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "start"]
```

---

## 🛠️ Common Tasks

### Change ISR Interval

**1. Edit page file:**
```typescript
// Change from 1 hour to 5 minutes
export const revalidate = 300;  // 300 seconds = 5 minutes
```

**2. Rebuild and deploy:**
```bash
npm run build
npm start  # or deploy
```

---

### Add New Dynamic Route

**1. Create page file:**
```typescript
// app/blog/[slug]/page.tsx
export const revalidate = 3600;
export const dynamic = "force-static";

export async function generateStaticParams() {
  // Fetch all blog slugs
  const slugs = await fetchAllBlogSlugs();
  
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Render blog post...
}
```

**2. Add cache headers:**
```typescript
// next.config.ts
{
  source: "/blog/:slug",
  headers: [{
    key: "Cache-Control",
    value: "public, s-maxage=3600, stale-while-revalidate=86400",
  }],
}
```

---

### Optimize Bundle Size

**1. Run analyzer:**
```bash
ANALYZE=true npm run build
```

**2. Identify large modules**

**3. Optimize imports:**
```tsx
// Before (imports entire library)
import _ from 'lodash';
const result = _.debounce(fn, 300);

// After (imports only debounce)
import debounce from 'lodash/debounce';
const result = debounce(fn, 300);
```

**4. Lazy load components:**
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  ssr: false,  // Don't render on server
  loading: () => <div>Loading...</div>,
});
```

**5. Rebuild and compare:**
```bash
npm run build
```

---

## 🐛 Troubleshooting

### Build Fails with Type Errors

**Solution**: Fix TypeScript errors or temporarily disable:
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // NOT recommended for production
  },
};
```

---

### Images Not Optimizing

**Check**:
1. Using `<Image>` component (not `<img>`)
2. Width/height provided (or `fill` prop)
3. Image formats configured in `next.config.ts`

---

### ISR Not Revalidating

**Check**:
1. `revalidate` exported from page component
2. Cache headers configured in `next.config.ts`
3. CDN cache cleared (may need manual purge)

---

### Large Bundle Size

**Solutions**:
1. Run `ANALYZE=true npm run build`
2. Use dynamic imports for heavy components
3. Import only what you need from libraries
4. Enable tree shaking (automatic in production)

---

## 🔗 Related Documentation

- **[Environment Variables](./environment.md)** - Environment configuration
- **[SEO & Metadata](./seo.md)** - Metadata generation
- **[Next.js Docs](https://nextjs.org/docs)** - Official documentation

---

**Last Updated**: 2025-11-10  
**Maintained By**: Development Team
