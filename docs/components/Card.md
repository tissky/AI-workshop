# Card Component

## Overview

Card is a versatile container component that provides a clean, Apple-inspired surface for displaying content. Features multiple variants for different use cases, from simple bordered cards to interactive, elevated designs.

## Import

```typescript
import Card from "@/components/ui/Card";
// or
import { Card } from "@/components/ui";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `"default"` \| `"bordered"` \| `"elevated"` \| `"interactive"` | ❌ No | `"default"` | Visual style variant |
| `padding` | `"none"` \| `"sm"` \| `"md"` \| `"lg"` | ❌ No | `"md"` | Internal padding size |
| `children` | `React.ReactNode` | ✅ Yes | - | Card content |
| `className` | `string` | ❌ No | `""` | Additional CSS classes |
| ...rest | `HTMLAttributes<HTMLDivElement>` | ❌ No | - | All standard div attributes |

## Usage

### Basic Card

```tsx
import Card from "@/components/ui/Card";

export default function Example() {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-2">卡片标题</h3>
      <p className="text-gray-600">卡片内容描述</p>
    </Card>
  );
}
```

### Variant Examples

```tsx
import Card from "@/components/ui/Card";

export default function VariantExamples() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card variant="default">
        <h3 className="font-semibold mb-2">Default Card</h3>
        <p className="text-gray-600">Medium shadow</p>
      </Card>
      
      <Card variant="bordered">
        <h3 className="font-semibold mb-2">Bordered Card</h3>
        <p className="text-gray-600">Simple border</p>
      </Card>
      
      <Card variant="elevated">
        <h3 className="font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">Larger shadow with hover effect</p>
      </Card>
      
      <Card variant="interactive">
        <h3 className="font-semibold mb-2">Interactive Card</h3>
        <p className="text-gray-600">Hover to see lift effect</p>
      </Card>
    </div>
  );
}
```

### Padding Examples

```tsx
import Card from "@/components/ui/Card";

export default function PaddingExamples() {
  return (
    <div className="space-y-4">
      <Card padding="none">
        <img src="/image.jpg" alt="Full bleed image" className="w-full" />
      </Card>
      
      <Card padding="sm">
        <p>Small padding (16px)</p>
      </Card>
      
      <Card padding="md">
        <p>Medium padding (24px)</p>
      </Card>
      
      <Card padding="lg">
        <p>Large padding (32px)</p>
      </Card>
    </div>
  );
}
```

### Feature Card

```tsx
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function FeatureCard() {
  return (
    <Card variant="elevated">
      <div className="text-4xl mb-4">🎨</div>
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-xl font-bold">图片处理</h3>
        <Badge variant="primary" size="sm">6大功能</Badge>
      </div>
      <p className="text-gray-600 mb-4">
        背景替换、产品图处理、图片变高清、去水印、图片去人等
      </p>
      <ul className="space-y-2">
        <li className="flex items-center text-sm text-gray-600">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          智能抠图
        </li>
        <li className="flex items-center text-sm text-gray-600">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          背景替换
        </li>
      </ul>
    </Card>
  );
}
```

### Product Card

```tsx
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ProductCard() {
  return (
    <Card variant="interactive" padding="none">
      <img 
        src="/product.jpg" 
        alt="Product" 
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">我有产品</h3>
        <p className="text-gray-600 mb-4">
          智能产品图生成与优化
        </p>
        <Button variant="primary" className="w-full">
          立即使用
        </Button>
      </div>
    </Card>
  );
}
```

### Stats Card

```tsx
import Card from "@/components/ui/Card";

export default function StatsCard() {
  return (
    <Card variant="elevated" className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="text-4xl font-bold mb-2">800+</div>
      <div className="text-blue-100">专业训练模型</div>
      <p className="text-sm text-blue-200 mt-2">
        涵盖多个AI应用领域
      </p>
    </Card>
  );
}
```

### Team Member Card

```tsx
import Card from "@/components/ui/Card";

export default function TeamCard() {
  return (
    <Card variant="elevated" className="text-center">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
        研
      </div>
      <h3 className="text-xl font-semibold mb-2">研发团队</h3>
      <p className="text-gray-600 mb-4">
        来自清华、北大、斯坦福等知名院校
      </p>
      <ul className="text-sm text-gray-500 space-y-1">
        <li>• 深度学习专家</li>
        <li>• 算法工程师</li>
        <li>• 模型训练师</li>
      </ul>
    </Card>
  );
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Color Contrast**: Content maintains proper contrast
- ✅ **Focus Management**: Interactive cards support keyboard focus
- ✅ **Screen Reader**: Semantic HTML structure
- ✅ **Touch Targets**: Interactive cards have adequate size

### Best Practices

```tsx
// ✅ Good: Semantic heading structure
<Card>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>

// ✅ Good: Interactive card as button/link
<Card variant="interactive" as="button" onClick={handleClick}>
  <h3>Clickable Card</h3>
</Card>

// ❌ Bad: Missing semantic structure
<Card>
  <div className="font-bold">Title</div>  {/* Use heading tags */}
  <div>Content</div>
</Card>
```

## Apple Design Principles

### Clarity
- Clean white backgrounds
- Adequate padding and spacing
- Clear visual hierarchy

### Deference
- Subtle shadows that don't overwhelm
- Smooth transitions (300ms)
- Content-first approach

### Depth
- Layered shadow system
- Hover effects for interactive variants
- Rounded corners (12px radius)

## Visual Reference

### Default Card
```
┌─────────────────────────────┐
│                             │
│  Card content goes here     │
│                             │
└─────────────────────────────┘
  Shadow: 0 4px 6px rgba(0,0,0,0.1)
```

### Interactive Card
```
┌─────────────────────────────┐
│                             │
│  Hover to see lift effect   │
│                             │  ← Transforms -4px on hover
└─────────────────────────────┘
  Shadow increases on hover
```

## TypeScript Support

```typescript
import { CardProps } from "@/components/ui/Card";

// Custom card wrapper
function CustomCard(props: CardProps) {
  return <Card {...props} />;
}

// Type-safe variant
const variant: CardProps["variant"] = "elevated";
```

## Performance Considerations

- CSS-only animations (hardware-accelerated)
- No JavaScript overhead for static cards
- Minimal re-renders (pure presentational)

## Related Components

- **Badge**: Often used inside cards for categorization
- **Button**: Commonly placed in card footers
- **FeatureCard**: Specialized card for features
- **ToolCard**: Specialized card for tools

## Common Patterns

### Card Grid

```tsx
import Card from "@/components/ui/Card";

export default function CardGrid() {
  const features = [
    { icon: "🎨", title: "图片处理", description: "AI驱动的图像编辑" },
    { icon: "🎬", title: "视频处理", description: "智能视频编辑工具" },
    { icon: "✍️", title: "文案创作", description: "19种风格文案生成" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} variant="elevated">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
```

### Image Card with Overlay

```tsx
import Card from "@/components/ui/Card";

export default function ImageCard() {
  return (
    <Card variant="interactive" padding="none" className="relative overflow-hidden h-64">
      <img 
        src="/image.jpg" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">创意生成</h3>
          <p className="text-white/90 text-sm">激发无限创意可能</p>
        </div>
      </div>
    </Card>
  );
}
```

## Reduced Motion Support

Respects `prefers-reduced-motion` for all transitions and transforms.

## Browser Support

- ✅ All modern browsers
- ✅ Graceful degradation for older browsers

## Migration Guide

```tsx
// Before
<div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
  <h3>Title</h3>
  <p>Content</p>
</div>

// After
<Card variant="elevated">
  <h3>Title</h3>
  <p>Content</p>
</Card>
```
