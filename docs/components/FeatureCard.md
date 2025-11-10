# FeatureCard Component

## Overview

The FeatureCard component is a presentational card that displays a feature with an icon, title, description, and a list of items. It uses Apple's elevated card design with semantic tokens only - no gradient backgrounds.

**Updated in Content Blocks Refresh**: This component now uses semantic tokens exclusively, with monochrome iconography and subtle depth instead of colorful gradients.

## Import

```typescript
import FeatureCard from "@/components/FeatureCard";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `string` | ✅ Yes | - | Emoji or icon character to display |
| `title` | `string` | ✅ Yes | - | Card heading/title |
| `description` | `string` | ✅ Yes | - | Brief description of the feature |
| `items` | `string[]` | ✅ Yes | - | Array of bullet points/features |

## TypeScript Interface

```typescript
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
}
```

## Usage

### Basic Usage

```tsx
import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  return (
    <FeatureCard
      icon="🎨"
      title="AI图像处理"
      description="强大的AI驱动图像编辑工具"
      items={[
        "智能抠图",
        "背景替换",
        "图像增强",
        "风格迁移"
      ]}
    />
  );
}
```

### In a Grid Layout

```tsx
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: "🎨",
    title: "AI图像处理",
    description: "强大的AI驱动图像编辑工具",
    items: ["智能抠图", "背景替换", "图像增强"]
  },
  {
    icon: "📝",
    title: "智能文案",
    description: "AI生成高质量营销文案",
    items: ["标题优化", "产品描述", "广告文案"]
  },
  {
    icon: "🎬",
    title: "视频编辑",
    description: "专业的视频剪辑工具",
    items: ["自动剪辑", "特效添加", "字幕生成"]
  }
];

export default function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          items={feature.items}
        />
      ))}
    </div>
  );
}
```

### With Dynamic Data

```tsx
"use client";

import { useState, useEffect } from "react";
import FeatureCard from "@/components/FeatureCard";

export default function DynamicFeatures() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/api/features")
      .then(res => res.json())
      .then(data => setFeatures(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          items={feature.items}
        />
      ))}
    </div>
  );
}
```

## Features

### Design & Visual Elements

- **Apple-Style Elevated Card**: Light surface with subtle border and shadow
- **Monochrome Iconography**: Simple filled circles (no colorful gradients)
- **Semantic Tokens**: All styling uses semantic tokens (background, foreground, border, muted-foreground)
- **Icon Display**: Large emoji/icon at the top (text-4xl)
- **Title**: Semibold heading with semantic foreground color
- **Description**: Small text with muted foreground for hierarchy
- **Bullet List**: Items with simple monochrome dot indicators
- **Hover Effects**: 
  - Shadow expansion (shadow-card → shadow-lg)
  - Subtle upward movement (hover:-translate-y-0.5)
  - Respects prefers-reduced-motion

### Styling Details

- **Background**: `bg-background` (semantic token)
- **Border**: `border-border` (thin, subtle)
- **Shadow**: `shadow-card` with hover → `shadow-lg`
- **Rounded Corners**: `rounded-xl` (16px)
- **Padding**: `p-6` (24px)
- **Transitions**: Smooth 300ms animations
- **Bullet Dots**: Monochrome `bg-foreground` circles (1.5px × 1.5px)

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Semantic Tokens**: Ensures proper contrast in light and dark modes
- ✅ **Semantic HTML**: Uses proper heading hierarchy (h3)
- ✅ **List Semantics**: Uses `<ul>` and `<li>` for items with `aria-label`
- ✅ **Readable Text**: Minimum font size is text-sm (14px)
- ✅ **Focus States**: Card shows focus indicators when interactive
- ✅ **Motion**: Respects `prefers-reduced-motion` via motion-safe utilities

### Accessibility Checklist

- [x] Semantic HTML structure (`<article>`)
- [x] Proper heading levels (h3 for title)
- [x] List markup with aria-label for items
- [x] Sufficient color contrast via semantic tokens
- [x] Readable font sizes (14px minimum)
- [x] Icon has decorative role (aria-hidden)
- [x] Hover effects respect motion preferences

### Screen Reader Experience

```
Article
Heading level 3: "AI图像处理"
Text: "强大的AI驱动图像编辑工具"
List "功能列表" of 4 items:
- 智能抠图
- 背景替换
- 图像增强
- 风格迁移
```

## Performance Considerations

### Optimization Strategies

1. **Client Component**: Uses `"use client"` for hover effects
2. **CSS-Only Animations**: No JavaScript for hover/transitions
3. **Hardware Acceleration**: Uses `transform` for smooth animations
4. **Minimal Re-renders**: Static component with no internal state
5. **Lightweight**: No external dependencies or images

### Best Practices

- ✅ Pure CSS transitions for performance
- ✅ No images - uses emoji/text icons
- ✅ Tailwind utilities for minimal CSS
- ✅ Static rendering when possible
- ✅ List rendering optimized with key prop
- ✅ Semantic tokens enable easy theme switching

## Integration Tips

### In Features Section

```tsx
import FeatureCard from "@/components/FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-center mb-12">
          核心功能
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="精准定位"
            description="AI智能分析目标受众"
            items={["用户画像", "行为分析", "需求预测"]}
          />
          {/* More cards */}
        </div>
      </div>
    </section>
  );
}
```

### With CMS Data (Server Component)

```tsx
import FeatureCard from "@/components/FeatureCard";
import { getFeatures } from "@/lib/cms";

export const revalidate = 3600;

export default async function CMSFeatures() {
  const features = await getFeatures();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.iconEmoji}
          title={feature.heading}
          description={feature.subheading}
          items={feature.bulletPoints}
        />
      ))}
    </div>
  );
}
```

### As Interactive Cards (with Next.js Link)

```tsx
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

export default function InteractiveFeatures() {
  return (
    <Link href="/features/ai-image" className="block focus:outline-none focus:ring-2 focus:ring-accent">
      <FeatureCard
        icon="🎨"
        title="AI图像处理"
        description="强大的AI驱动图像编辑工具"
        items={["智能抠图", "背景替换", "图像增强"]}
      />
    </Link>
  );
}
```

## Related Components

- [StatsGrid](../sections/StatsGrid.example.md) - Display statistics in elevated cards
- [TestimonialCard](../sections/TestimonialCard.example.md) - Display testimonials
- [Hero](../sections/Hero.example.md) - Hero sections with CTAs
- [ToolCard](./ToolCard.md) - Similar card for tool listings

## Data Structure Examples

### TypeScript Type for Features Array

```typescript
interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
}

const features: Feature[] = [
  {
    id: "feature-1",
    icon: "🎨",
    title: "AI图像处理",
    description: "强大的AI驱动图像编辑工具",
    items: ["智能抠图", "背景替换", "图像增强", "风格迁移"]
  },
  // More features...
];
```

### JSON Structure

```json
{
  "features": [
    {
      "icon": "🎨",
      "title": "AI图像处理",
      "description": "强大的AI驱动图像编辑工具",
      "items": [
        "智能抠图",
        "背景替换",
        "图像增强",
        "风格迁移"
      ]
    }
  ]
}
```

## Migration from Legacy FeatureCard

If upgrading from the previous version with gradient support:

### Before (with gradient prop)

```tsx
<FeatureCard
  icon="🎨"
  title="Feature"
  description="Description"
  items={["Item 1"]}
  gradient={true}  // ❌ No longer supported
/>
```

### After (semantic tokens only)

```tsx
<FeatureCard
  icon="🎨"
  title="Feature"
  description="Description"
  items={["Item 1"]}
  // ✅ gradient prop removed - uses semantic tokens automatically
/>
```

## Version History

- **v2.0.0** (Content Blocks Refresh): Removed gradient prop, uses semantic tokens only, monochrome bullet dots
- **v1.0.0**: Initial release with gradient backgrounds
