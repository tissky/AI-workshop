# 📂 Content Management

Complete guide to content sources, data management, public assets, and update workflows.

---

## 📋 Overview

Content in the AI创意工坊 site is managed through:

1. **Centralized Data** (`lib/`) - Tool catalog, metadata, media imports
2. **Public Assets** (`public/`) - Images, icons, static files
3. **Page Content** (`app/`) - Page-specific content and layouts
4. **Configuration** - Environment-specific content

---

## 📚 Data Sources

### Tool Catalog (`lib/tools.ts`)

**Purpose**: Centralized tool definitions for entire site

**Structure**:
```typescript
export interface ToolDetail {
  name: string;           // Display name
  icon: string;           // Emoji icon
  category: string;       // Category name
  description: string;    // Short description
  features: string[];     // Feature list
  useCases: string[];     // Use case list
  steps: string[];        // Step-by-step guide
}

export const toolDetails: Record<string, ToolDetail> = {
  "background-replace": {
    name: "背景替换",
    icon: "🖼️",
    category: "图片处理",
    description: "智能识别图片主体，一键替换背景，支持多种场景和风格",
    features: [
      "智能主体识别",
      "多种背景模板",
      "自然边缘处理",
      "高质量输出"
    ],
    useCases: [
      "电商产品图制作",
      "证件照背景更换",
      "社交媒体图片美化",
      "创意设计素材制作"
    ],
    steps: [
      "上传原始图片",
      "选择背景模板或上传新背景",
      "AI自动处理图片",
      "下载处理后的图片"
    ]
  },
  // ... more tools
};
```

**Categories**:
```typescript
export const toolCategories = [
  {
    id: "image",
    name: "图片处理",
    description: "专业的图片处理AI工具，让每张图片都完美呈现",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    count: "6大功能",
    tools: [
      { id: "background-replace", name: "背景替换", desc: "...", hot: true },
      // ... more tools
    ]
  },
  // ... more categories
];
```

**Helper Functions**:
```typescript
export function getAllToolIds(): string[]
export function getToolDetail(id: string): ToolDetail
```

---

### Metadata (`lib/metadata.ts`)

**Purpose**: SEO metadata for all pages

**Constants**:
```typescript
// Site-wide
export const SITE_NAME = "AI创意工坊";
export const SITE_TAGLINE = "释放无限创意可能";
export const SITE_DESCRIPTION = "...";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "...";

// Page-specific
export const PRODUCTS_DATA = {
  title: "产品中心 - AI创意工坊",
  description: "...",
  keywords: "...",
  ogImage: `${SITE_URL}/images/我有产品.png`,
  products: [...]
};

export const TOOLS_DATA = { ... };
export const MODELS_DATA = { ... };
export const COMPANY_DATA = { ... };
export const TECHNOLOGY_DATA = { ... };
export const HOME_DATA = { ... };
```

**Helpers**:
```typescript
export function generateMetadataWithAlternates(...)
export function generateToolMetadata(toolId: string)
export function getToolById(id: string)
```

---

### Structured Data (`lib/seo.ts`)

**Purpose**: Schema.org JSON-LD generators

**Functions**:
```typescript
export function generateOrganizationSchema()
export function generateWebSiteSchema()
export function generateProductSchema(product: {...})
export function generateProductListSchema(products: [...])
export function generateSoftwareApplicationSchema(tool: {...})
export function generateToolListSchema(tools: [...])
export function generateDatasetSchema(dataset: {...})
export function generateModelListSchema(models: [...])
```

**Configuration**:
```typescript
const SITE_CONFIG = {
  name: 'AI创意工坊',
  url: 'https://ai-creative-workshop.com',
  description: '...',
  logo: 'https://ai-creative-workshop.com/logo.png',
  contactEmail: 'contact@ai-creative-workshop.com',
  contactPhone: '+86-10-12345678',
};
```

---

### Media Imports (`lib/media.ts`)

**Purpose**: Centralized image imports for Next.js optimization

**Structure**:
```typescript
import ai800 from "@/public/images/AI 800.jpg";
import myProduct from "@/public/images/我有产品.png";
// ... more imports

export const images = {
  ai800,
  myProduct,
  // ... more images
};
```

**Usage in Components**:
```tsx
import { images } from "@/lib/media";
import Image from "next/image";

<Image
  src={images.myProduct}
  alt="我有产品"
  width={1200}
  height={630}
/>
```

**Why centralized?**
- Next.js automatic optimization
- Type safety (compile-time errors for missing images)
- Easy refactoring (change path once)
- Preloading and lazy loading

---

## 🖼️ Public Assets

### Directory Structure

```
public/
├── images/
│   ├── AI 800.jpg
│   ├── 我有产品.png
│   ├── 图片焕新.png
│   ├── AI视频生成.png
│   ├── og-image.jpg
│   ├── qr.png
│   └── ...more images
├── favicon.ico
└── robots.txt (generated)
```

---

### Image Guidelines

**Naming**:
- Use descriptive names (Chinese or English)
- Avoid spaces (use hyphens or underscores)
- Include file type (.jpg, .png, .svg)

**Formats**:
| Format | Use Case | Max Size |
|--------|----------|----------|
| JPG | Photos, complex images | 500 KB |
| PNG | Logos, icons, transparency | 200 KB |
| SVG | Vector graphics, icons | 50 KB |
| WebP/AVIF | Auto-generated by Next.js | N/A |

**Dimensions**:
| Type | Dimensions | Ratio |
|------|------------|-------|
| Hero images | 1920×1080 | 16:9 |
| Product images | 1200×630 | 1.91:1 |
| OpenGraph | 1200×630 | 1.91:1 |
| Thumbnails | 400×300 | 4:3 |
| Icons | 64×64 | 1:1 |

---

### Serving Public Files

**Direct URLs**:
```
/images/我有产品.png → public/images/我有产品.png
/favicon.ico → public/favicon.ico
```

**In Code**:
```tsx
// Raw path (not optimized)
<img src="/images/logo.png" alt="Logo" />

// Next.js Image (optimized)
<Image src="/images/logo.png" alt="Logo" width={64} height={64} />

// Imported (best for static imports)
import logo from "@/public/images/logo.png";
<Image src={logo} alt="Logo" />
```

---

## 📝 Content Update Workflows

### Workflow 1: Add New Tool

**1. Add tool data:**
```typescript
// lib/tools.ts

// Add to toolDetails
export const toolDetails: Record<string, ToolDetail> = {
  // ... existing tools
  "new-tool": {
    name: "新工具",
    icon: "🆕",
    category: "图片处理",
    description: "新工具描述",
    features: ["特性1", "特性2"],
    useCases: ["用例1", "用例2"],
    steps: ["步骤1", "步骤2"],
  },
};

// Add to category
export const toolCategories = [
  {
    id: "image",
    // ...
    tools: [
      // ... existing tools
      { id: "new-tool", name: "新工具", desc: "简短描述", hot: false },
    ]
  },
];
```

**2. Add tool image (if applicable):**
```bash
# Add to public/images/
cp ~/new-tool.png public/images/新工具.png

# Import in lib/media.ts
import newTool from "@/public/images/新工具.png";

export const images = {
  // ... existing
  newTool,
};
```

**3. Rebuild sitemap (automatic):**
```typescript
// app/sitemap.ts automatically picks up new tool
const toolIds = getAllToolIds();  // Includes "new-tool"
```

**4. Test and deploy:**
```bash
npm run dev
# Visit http://localhost:3000/tools/new-tool
npm run build
```

---

### Workflow 2: Update Page Metadata

**1. Edit metadata:**
```typescript
// lib/metadata.ts
export const PRODUCTS_DATA = {
  title: "产品中心 - AI创意工坊",  // Update
  description: "新的产品描述...",  // Update
  keywords: "新关键词,产品,AI",     // Update
  // ...
};
```

**2. Verify in page:**
```typescript
// app/products/page.tsx
export const metadata: Metadata = {
  title: PRODUCTS_DATA.title,         // Uses updated value
  description: PRODUCTS_DATA.description,
  // ...
};
```

**3. Test SEO:**
- Check `<head>` in browser DevTools
- Validate OpenGraph: [OpenGraph Preview](https://www.opengraph.xyz/)
- Validate Twitter Card: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

### Workflow 3: Add New Image

**1. Optimize image:**
```bash
# Resize to appropriate dimensions
# Compress (aim for < 500 KB for JPG, < 200 KB for PNG)
# Convert to WebP/AVIF for even smaller size (optional - Next.js does this)
```

**2. Add to public:**
```bash
cp ~/optimized-image.jpg public/images/new-image.jpg
```

**3. Import in media.ts:**
```typescript
// lib/media.ts
import newImage from "@/public/images/new-image.jpg";

export const images = {
  // ... existing
  newImage,
};
```

**4. Use in component:**
```tsx
import { images } from "@/lib/media";
import Image from "next/image";

<Image
  src={images.newImage}
  alt="New Image"
  width={1200}
  height={630}
/>
```

---

### Workflow 4: Update Tool Category

**1. Edit category:**
```typescript
// lib/tools.ts
export const toolCategories = [
  {
    id: "image",
    name: "图片处理",         // Update
    description: "新描述...", // Update
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",  // Update colors
    bgColor: "bg-blue-50",
    count: "7大功能",  // Update count
    tools: [
      // Add/remove tools
    ]
  },
];
```

**2. Update components (if needed):**
```tsx
// app/tools/page.tsx automatically uses updated categories
```

**3. Test:**
```bash
npm run dev
# Visit http://localhost:3000/tools
```

---

### Workflow 5: Bulk Content Update

**For multiple tools/products:**

**1. Prepare data file:**
```typescript
// data/tools-update.ts
export const toolUpdates = [
  { id: "tool-1", updates: { description: "..." } },
  { id: "tool-2", updates: { features: [...] } },
];
```

**2. Run update script:**
```typescript
// scripts/update-tools.ts
import { toolUpdates } from "./data/tools-update";
// ... merge updates into lib/tools.ts
```

**3. Verify changes:**
```bash
git diff lib/tools.ts
```

**4. Build and test:**
```bash
npm run build
npm start
```

---

## 🔍 Content Validation

### Pre-commit Checklist

- [ ] All images < 500 KB (JPG) or < 200 KB (PNG)
- [ ] All images have `alt` text
- [ ] Tool IDs are kebab-case (e.g., `background-replace`)
- [ ] Metadata descriptions < 160 characters
- [ ] OpenGraph images are 1200×630px
- [ ] No hardcoded URLs (use `SITE_URL` from env)
- [ ] Chinese text is properly encoded (UTF-8)

---

### Build-time Validation

**Check for missing images:**
```bash
npm run build
# Look for errors: "Module not found: Can't resolve '@/public/images/...'"
```

**Check for broken tool links:**
```bash
# All tool IDs in toolCategories must exist in toolDetails
# TypeScript will catch this if properly typed
```

---

### Runtime Validation

**404 for missing tools:**
```typescript
// app/tools/[id]/page.tsx
const tool = getToolDetail(id);

if (!tool) {
  notFound();  // Shows 404 page
}
```

---

## 🛠️ Content Management Tools

### VS Code Extensions

**Recommended**:
- **Chinese (Simplified) Language Pack**: Better Chinese support
- **Image Preview**: Inline image previews
- **Path Intellisense**: Autocomplete file paths
- **ESLint**: Catch errors in data files

---

### Image Optimization Tools

**Online**:
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

**CLI**:
```bash
# ImageMagick (resize and compress)
magick convert input.jpg -resize 1200x630 -quality 85 output.jpg

# OptiPNG (lossless PNG compression)
optipng -o7 input.png
```

---

## 📊 Content Audit

### Regular Checks

**Monthly**:
- Review tool descriptions for accuracy
- Update statistics (user counts, tool counts)
- Check for outdated images
- Verify external links (if any)

**Quarterly**:
- Full content audit (grammar, tone, clarity)
- Image optimization pass (replace large images)
- SEO review (keywords, meta descriptions)

---

### Audit Script

```bash
#!/bin/bash
# scripts/content-audit.sh

# Check for large images
echo "Images > 500 KB:"
find public/images -type f -size +500k

# Check for missing alt text
echo "Images without alt text:"
grep -rn 'src="/images' app/ components/ | grep -v 'alt='

# List all tools
echo "Total tools:"
grep -o '"[a-z-]*":' lib/tools.ts | wc -l
```

---

## 🔗 Related Documentation

- **[SEO & Metadata](./seo.md)** - Metadata strategy
- **[Next.js Configuration](./nextjs.md)** - Image optimization
- **[Environment Variables](./environment.md)** - `SITE_URL` configuration

---

## 📚 External Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Schema.org](https://schema.org/) - Structured data reference
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)

---

**Last Updated**: 2025-11-10  
**Maintained By**: Development Team
