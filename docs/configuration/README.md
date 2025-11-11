# ⚙️ Configuration Guide

Complete guide to configuring and customizing the AI创意工坊 marketing site.

---

## 📚 Table of Contents

1. **[Theme & Design Tokens](./theme.md)** - Tailwind v4 theme tokens, color system, typography, spacing
2. **[Component Theming](./components.md)** - Component patterns, UI primitives, design system usage
3. **[Environment Variables](./environment.md)** - Environment configuration, secrets, defaults
4. **[Next.js Configuration](./nextjs.md)** - Images, caching, ISR, bundle analyzer
5. **[SEO & Metadata](./seo.md)** - Metadata strategy, structured data, robots, sitemap
6. **[Content Management](./content.md)** - Data sources, public assets, update workflows

---

## 🚀 Quick Start

### Essential Configuration Files

```
project/
├── app/
│   ├── globals.css          # Tailwind theme tokens (@theme inline)
│   ├── robots.ts            # Search engine directives
│   └── sitemap.ts           # URL structure for crawlers
├── lib/
│   ├── design-tokens.ts     # TypeScript token helpers
│   ├── metadata.ts          # Page metadata definitions
│   ├── seo.ts               # Structured data generators
│   ├── tools.ts             # Tool catalog data
│   └── media.ts             # Image imports
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind content paths
└── .env.local               # Environment variables (create this)
```

### First-Time Setup

1. **Create environment file:**
   ```bash
   cp .env.example .env.local  # or create manually
   ```

2. **Set required variables:**
   ```bash
   # .env.local
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development:**
   ```bash
   npm run dev
   ```

---

## 🎨 Design System Overview

The project uses a **layered design token system** with Apple-inspired aesthetics:

### Token Layers

1. **Raw Tokens** (`:root` in `app/globals.css`)
   - Base colors, primitives, light/dark mode values
   
2. **Semantic Tokens** (`:root` semantic layer)
   - Meaningful names: `--color-bg-surface`, `--color-text-primary`
   - Auto-adapts to light/dark mode and high-contrast
   
3. **Tailwind Utilities** (`@theme inline`)
   - Generates Tailwind classes from tokens
   - Used in components: `bg-background`, `text-foreground`
   
4. **TypeScript Module** (`lib/design-tokens.ts`)
   - Runtime token access: `getToken('bg.surface')`
   - Type-safe helpers for JavaScript/React

### Key Principles

- **Monochrome Primaries**: Black/white base with muted accent colors
- **60/20/20 Layout**: Content-focused grid system
- **WCAG 2.1 AA**: All color combinations meet accessibility standards
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Dark Mode**: CSS variable-based, automatic switching

---

## 🧩 Component System

The project uses a **three-tier component architecture**:

### 1. UI Primitives (`components/ui/`)
Reusable, design-system-aware building blocks:
- `Button`, `Card`, `Badge`, `Tabs`
- `Hero`, `StatsGrid`, `TestimonialCard`
- `Breadcrumb`, `ToolsHero`

### 2. Feature Components (`components/`)
Page-specific interactive components:
- `Header`, `Footer`, `ImageCarousel`
- `QRModal`, `ModelsFilter`, `FeatureCard`

### 3. Page Components (`app/**/*`)
Server components with ISR configuration:
- All marketing routes export `revalidate = 3600`
- Dynamic routes use `generateStaticParams()`
- Metadata exports for SEO

---

## 🌍 Environment Configuration

### Required Variables

| Variable | Purpose | Default | Example |
|----------|---------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | `https://ai-workshop.example.com` | `https://example.com` |

### Optional Variables

| Variable | Purpose | Default | Example |
|----------|---------|---------|---------|
| `ANALYZE` | Enable bundle analyzer | `false` | `true` |

**Note:** Only `NEXT_PUBLIC_*` variables are exposed to the browser.

---

## 📦 Next.js Configuration

### Key Features

- **Image Optimization**: AVIF/WebP, responsive sizes, long-term caching
- **ISR (Incremental Static Regeneration)**: 1-hour revalidation for all pages
- **Cache Headers**: CDN-friendly with stale-while-revalidate
- **Bundle Analyzer**: Optional webpack analysis

---

## 🔍 SEO Strategy

### Metadata Layers

1. **Page Metadata** (`lib/metadata.ts`)
   - Title templates, descriptions, keywords
   - OpenGraph and Twitter cards
   
2. **Structured Data** (`lib/seo.ts`)
   - Schema.org JSON-LD generators
   - Organization, Product, SoftwareApplication types
   
3. **Crawlability** (`app/robots.ts`, `app/sitemap.ts`)
   - Search engine directives
   - Dynamic sitemap generation

---

## 📂 Content Sources

### Centralized Data

- **`lib/tools.ts`**: Tool catalog (30+ tools, categories, details)
- **`lib/media.ts`**: Image imports for Next.js optimization
- **`public/images/`**: Static assets served at `/images/*`

### Update Workflow

1. **Add new tool**: Update `lib/tools.ts` → `toolDetails` and `toolCategories`
2. **Add new image**: Place in `public/images/` → Import in `lib/media.ts`
3. **Update metadata**: Modify `lib/metadata.ts` constants
4. **Rebuild sitemap**: Auto-regenerated on build from `lib/tools.ts`

---

## 📖 Detailed Guides

### For Developers
- Start with [Theme & Design Tokens](./theme.md) to understand the token system
- Review [Component Theming](./components.md) for UI patterns
- Check [Next.js Configuration](./nextjs.md) for build and deployment

### For Designers
- See [Theme & Design Tokens](./theme.md) for color, typography, spacing
- Review component designs in [Component Theming](./components.md)
- Understand accessibility in [SEO & Metadata](./seo.md)

### For Content Editors
- Start with [Content Management](./content.md) for data sources
- See [SEO & Metadata](./seo.md) for metadata best practices

---

## 🔗 Related Documentation

- **[Component Library](../components/README.md)** - Individual component docs
- **[Design System Status](../design-system/QUICK_STATUS.md)** - Implementation progress
- **[Design Tokens Reference](../design-system/tokens.md)** - Complete token reference

---

## ❓ Common Tasks

### Change Site Colors

1. Edit `app/globals.css` → `:root` variables
2. Update `--accent` for primary brand color
3. Light/dark variants auto-adapt via semantic tokens

### Add New Tool

1. Add entry to `lib/tools.ts` → `toolDetails`
2. Add to category in `toolCategories`
3. Add image to `public/images/` and `lib/media.ts`
4. Sitemap auto-updates on next build

### Configure ISR

1. Open page file (e.g., `app/products/page.tsx`)
2. Adjust `export const revalidate = 3600` (in seconds)
3. Set `export const dynamic = "force-static"` for static generation

### Enable Bundle Analysis

```bash
ANALYZE=true npm run build
```

Opens interactive treemap of bundle sizes.

---

## 🛠️ Troubleshooting

### Styles Not Updating

1. Check if changes are in `app/globals.css` (Tailwind source)
2. Restart dev server: `npm run dev`
3. Clear `.next` cache: `rm -rf .next`

### Environment Variables Not Working

1. Restart dev server after `.env.local` changes
2. Verify variable starts with `NEXT_PUBLIC_` for client-side access
3. Check `next.config.ts` for server-side access

### ISR Not Revalidating

1. Verify `revalidate` export in page component
2. Check cache headers in `next.config.ts`
3. CDN may need purging for immediate updates

---

**Last Updated**: 2025-11-10  
**Maintained By**: Development Team  
**Version**: 1.0.0
