# Hero Component

## Overview

Hero is a flexible, high-impact section component designed for landing pages and marketing content. Features multiple variants including gradient backgrounds, customizable alignment, and built-in support for calls-to-action following Apple's bold, minimalist design language.

## Import

```typescript
import Hero from "@/components/ui/Hero";
// or
import { Hero } from "@/components/ui";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ Yes | - | Main heading text |
| `subtitle` | `string` | ❌ No | `undefined` | Secondary heading |
| `description` | `string` | ❌ No | `undefined` | Descriptive paragraph |
| `actions` | `React.ReactNode` | ❌ No | `undefined` | Call-to-action buttons |
| `variant` | `"default"` \| `"gradient"` \| `"dark"` | ❌ No | `"default"` | Visual style variant |
| `align` | `"left"` \| `"center"` \| `"right"` | ❌ No | `"center"` | Text alignment |
| `children` | `React.ReactNode` | ❌ No | `undefined` | Additional content below actions |
| `className` | `string` | ❌ No | `""` | Additional CSS classes |

## Usage

### Basic Hero

```tsx
import Hero from "@/components/ui/Hero";

export default function Example() {
  return (
    <Hero
      title="AI创意工坊"
      subtitle="释放无限创意可能"
      description="集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域"
    />
  );
}
```

### With Actions

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function HeroWithActions() {
  return (
    <Hero
      title="AI创意工坊"
      subtitle="释放无限创意可能"
      description="集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域"
      actions={
        <>
          <Button variant="primary" size="lg">
            即刻体验
          </Button>
          <Button variant="outline" size="lg">
            了解更多
          </Button>
        </>
      }
    />
  );
}
```

### Variant Examples

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function VariantExamples() {
  return (
    <>
      {/* Default variant - Light background */}
      <Hero
        variant="default"
        title="AI创意工坊"
        subtitle="释放无限创意可能"
        actions={<Button>即刻体验</Button>}
      />

      {/* Gradient variant - Colorful background */}
      <Hero
        variant="gradient"
        title="准备好开始了？"
        subtitle="立即体验强大的AI工具"
        actions={
          <>
            <Button variant="primary">即刻体验</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              联系销售
            </Button>
          </>
        }
      />

      {/* Dark variant - Dark background */}
      <Hero
        variant="dark"
        title="企业级AI解决方案"
        subtitle="为您的业务赋能"
        actions={<Button variant="primary">预约演示</Button>}
      />
    </>
  );
}
```

### Alignment Examples

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function AlignmentExamples() {
  return (
    <>
      <Hero
        align="left"
        title="左对齐标题"
        description="适合内容较多的页面"
        actions={<Button>了解更多</Button>}
      />

      <Hero
        align="center"
        title="居中标题"
        description="经典的居中布局"
        actions={<Button>了解更多</Button>}
      />

      <Hero
        align="right"
        title="右对齐标题"
        description="独特的视觉效果"
        actions={<Button>了解更多</Button>}
      />
    </>
  );
}
```

### With Additional Content

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function HeroWithContent() {
  return (
    <Hero
      title="AI创意工坊"
      subtitle="释放无限创意可能"
      actions={
        <>
          <Button variant="primary" size="lg">即刻体验</Button>
          <Button variant="outline" size="lg">了解更多</Button>
        </>
      }
    >
      {/* Additional content below actions */}
      <div className="mt-12">
        <img 
          src="/hero-image.png" 
          alt="产品展示" 
          className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
        />
      </div>
    </Hero>
  );
}
```

### Product Launch Hero

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function ProductLaunchHero() {
  return (
    <Hero
      variant="gradient"
      title="全新 AI 模型库"
      subtitle="800+ 专业训练模型"
      description="涵盖图像处理、自然语言处理、音频处理、视频分析等多个领域"
      actions={
        <>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            立即探索
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            查看文档
          </Button>
        </>
      }
    >
      <div className="mt-8">
        <Badge variant="info" size="lg">
          🎉 新功能发布
        </Badge>
      </div>
    </Hero>
  );
}
```

### Split Hero with Image

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function SplitHero() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI创意工坊
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
              释放无限创意可能
            </h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">即刻体验</Button>
              <Button variant="outline" size="lg">了解更多</Button>
            </div>
          </div>
          <div>
            <img 
              src="/hero-product.png" 
              alt="产品展示" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML**: Uses `<section>` and heading tags
- ✅ **Heading Hierarchy**: Proper h1, h2 structure
- ✅ **Color Contrast**: All text meets WCAG AA standards
- ✅ **Focus Management**: Action buttons are keyboard accessible
- ✅ **Responsive**: Adapts to all screen sizes

### Best Practices

```tsx
// ✅ Good: Clear, descriptive heading
<Hero title="AI创意工坊" subtitle="释放无限创意可能" />

// ✅ Good: Proper button labels
<Hero 
  title="Get Started"
  actions={
    <Button aria-label="开始使用AI创意工坊">即刻体验</Button>
  }
/>

// ❌ Bad: Too much text
<Hero 
  title="This is a very long title that goes on and on..."
  description="And this is an even longer description..."
/>

// ❌ Bad: Poor contrast on gradient
<Hero 
  variant="gradient"
  className="text-gray-400"  // Low contrast on gradient
/>
```

## Apple Design Principles

### Clarity
- Large, bold typography (text-6xl, text-7xl)
- Clear visual hierarchy (title > subtitle > description)
- Generous spacing and padding

### Deference
- Minimal distractions
- Focus on content
- Subtle background gradients

### Depth
- Layered gradients
- Strategic use of white space
- Visual weight through typography

## Visual Reference

### Default Variant
```
┌───────────────────────────────────┐
│                                   │
│       AI创意工坊 (72px, bold)      │
│   释放无限创意可能 (36px, medium)  │
│                                   │
│   集成30+专业AI工具... (20px)     │
│                                   │
│   [即刻体验] [了解更多]            │
│                                   │
└───────────────────────────────────┘
  Background: Gradient gray-50 to white
```

### Gradient Variant
```
┌───────────────────────────────────┐
│   🌈 Colorful gradient background  │
│                                   │
│       准备好开始了？ (white)       │
│    立即体验强大的AI工具 (white)    │
│                                   │
│   [White Button] [Outline Button] │
│                                   │
└───────────────────────────────────┘
  Background: Gradient blue-purple-indigo
```

## TypeScript Support

```typescript
import { HeroProps } from "@/components/ui/Hero";

// Custom hero wrapper
function CustomHero(props: HeroProps) {
  return <Hero {...props} />;
}

// Type-safe variant
const variant: HeroProps["variant"] = "gradient";
```

## Performance Considerations

- Server-side rendering compatible
- No client-side JavaScript required (unless actions use it)
- Optimized image loading with Next.js Image
- CSS-only gradients (hardware-accelerated)

## Related Components

- **Button**: Used for hero actions
- **Badge**: Can be used for announcements
- **Card**: For features below hero
- **HomeHero**: Previous specialized implementation

## Common Patterns

### Landing Page Hero

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import StatsGrid from "@/components/ui/StatsGrid";

export default function LandingPage() {
  return (
    <>
      <Hero
        title="AI创意工坊"
        subtitle="释放无限创意可能"
        description="集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域"
        actions={
          <>
            <Button variant="primary" size="lg">即刻体验</Button>
            <Button variant="outline" size="lg">了解更多</Button>
          </>
        }
      />
      
      <StatsGrid
        stats={[
          { value: "800+", label: "训练模型" },
          { value: "95%", label: "平均准确率" },
          { value: "500K+", label: "用户使用" },
        ]}
      />
    </>
  );
}
```

### CTA Section

```tsx
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <Hero
      variant="gradient"
      title="准备好开始了？"
      subtitle="立即体验强大的AI工具，让创意无限延伸"
      actions={
        <>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            即刻体验
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            联系销售
          </Button>
        </>
      }
    />
  );
}
```

## Reduced Motion Support

Respects `prefers-reduced-motion` for any animations in child components.

## Browser Support

- ✅ All modern browsers
- ✅ Graceful degradation for gradients

## Migration Guide

```tsx
// Before (inline section)
<section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-[980px] mx-auto px-4">
    <div className="text-center">
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
        AI创意工坊
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
        释放无限创意可能
      </h2>
      {/* ... */}
    </div>
  </div>
</section>

// After
<Hero
  title="AI创意工坊"
  subtitle="释放无限创意可能"
  description="集成30+专业AI工具..."
  actions={
    <>
      <Button variant="primary" size="lg">即刻体验</Button>
      <Button variant="outline" size="lg">了解更多</Button>
    </>
  }
/>
```
