# Badge Component

## Overview

Badge is a small, non-interactive status indicator component used to display categories, counts, or status information. Designed with Apple's attention to detail, featuring rounded corners and subtle color schemes.

## Import

```typescript
import Badge from "@/components/ui/Badge";
// or
import { Badge } from "@/components/ui";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `"default"` \| `"primary"` \| `"success"` \| `"warning"` \| `"error"` \| `"info"` | ❌ No | `"default"` | Color scheme variant |
| `size` | `"sm"` \| `"md"` \| `"lg"` | ❌ No | `"md"` | Badge size |
| `children` | `React.ReactNode` | ✅ Yes | - | Badge content |
| `className` | `string` | ❌ No | `""` | Additional CSS classes |

## Usage

### Basic Badge

```tsx
import Badge from "@/components/ui/Badge";

export default function Example() {
  return (
    <Badge>新功能</Badge>
  );
}
```

### Variant Examples

```tsx
import Badge from "@/components/ui/Badge";

export default function VariantExamples() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">默认</Badge>
      <Badge variant="primary">主要</Badge>
      <Badge variant="success">成功</Badge>
      <Badge variant="warning">警告</Badge>
      <Badge variant="error">错误</Badge>
      <Badge variant="info">信息</Badge>
    </div>
  );
}
```

### Size Examples

```tsx
import Badge from "@/components/ui/Badge";

export default function SizeExamples() {
  return (
    <div className="flex items-center gap-3">
      <Badge size="sm">小号</Badge>
      <Badge size="md">中号</Badge>
      <Badge size="lg">大号</Badge>
    </div>
  );
}
```

### With Icons

```tsx
import Badge from "@/components/ui/Badge";

export default function BadgeWithIcon() {
  return (
    <Badge variant="success" className="flex items-center gap-1">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      已验证
    </Badge>
  );
}
```

### Tool Category Badge

```tsx
import Badge from "@/components/ui/Badge";

export default function ToolCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <Badge variant="primary" size="sm">
        图片处理
      </Badge>
      <h3 className="text-xl font-semibold mt-3">智能抠图</h3>
      <p className="text-gray-600 mt-2">AI驱动的精准抠图工具</p>
    </div>
  );
}
```

### Count Badge

```tsx
import Badge from "@/components/ui/Badge";

export default function NotificationBadge() {
  return (
    <button className="relative p-2">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <Badge 
        variant="error" 
        size="sm"
        className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center"
      >
        5
      </Badge>
    </button>
  );
}
```

### Status Indicators

```tsx
import Badge from "@/components/ui/Badge";

export default function StatusList() {
  const items = [
    { id: 1, name: "API服务", status: "运行中", variant: "success" },
    { id: 2, name: "数据库", status: "维护中", variant: "warning" },
    { id: 3, name: "邮件服务", status: "离线", variant: "error" },
  ];

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg">
          <span className="font-medium">{item.name}</span>
          <Badge variant={item.variant as any}>
            {item.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Color Contrast**: All variants meet WCAG AA standards
- ✅ **Screen Reader Support**: Content is properly announced
- ✅ **Non-Interactive**: Badges are not focusable (use buttons for interactive elements)

### Best Practices

```tsx
// ✅ Good: Clear, concise text
<Badge variant="success">已完成</Badge>

// ✅ Good: With icon for clarity
<Badge variant="error">
  <AlertIcon className="w-3 h-3 mr-1" />
  错误
</Badge>

// ❌ Bad: Too much text
<Badge>This is a very long badge text that should be shorter</Badge>

// ❌ Bad: Using badge as button
<Badge onClick={handleClick}>点击我</Badge>  // Use Button instead
```

## Apple Design Principles

### Clarity
- High contrast between background and text
- Clear, readable typography
- Appropriate sizing for context

### Deference
- Subtle background colors
- Non-intrusive presence
- Complements content without overwhelming

### Depth
- Soft, rounded corners (full border-radius)
- Light background tints
- Clean, minimalist aesthetic

## Visual Reference

### Color Variants

```
┌──────────┐
│ default  │  Gray: #f3f4f6 bg, #374151 text
└──────────┘

┌──────────┐
│ primary  │  Blue: #dbeafe bg, #1d4ed8 text
└──────────┘

┌──────────┐
│ success  │  Green: #d1fae5 bg, #059669 text
└──────────┘

┌──────────┐
│ warning  │  Orange: #fed7aa bg, #c2410c text
└──────────┘

┌──────────┐
│  error   │  Red: #fee2e2 bg, #dc2626 text
└──────────┘

┌──────────┐
│   info   │  Purple: #e9d5ff bg, #7c3aed text
└──────────┘
```

## TypeScript Support

```typescript
import { BadgeProps } from "@/components/ui/Badge";

// Custom badge wrapper
function CustomBadge(props: BadgeProps) {
  return <Badge {...props} />;
}

// Type-safe variant
const variant: BadgeProps["variant"] = "success";
```

## Performance Considerations

- Pure presentational component (no JavaScript overhead)
- Minimal CSS footprint
- No re-render optimization needed (stateless)

## Related Components

- **Button**: For interactive actions
- **Card**: Often contains badges for categorization
- **ToolCard**: Uses badges for category display

## Common Patterns

### Feature Badge on Card

```tsx
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

export default function FeatureCard() {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-4">
        <Badge variant="info">19种风格</Badge>
        <Badge variant="success">AI驱动</Badge>
      </div>
      <h3 className="text-xl font-semibold">文案创作</h3>
      <p className="text-gray-600 mt-2">
        19种风格文案生成、手写签名、SOP模板
      </p>
    </Card>
  );
}
```

### Accuracy Badge

```tsx
import Badge from "@/components/ui/Badge";

export default function ModelCard() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">图像增强模型</h3>
        <Badge variant="success" size="sm">98%</Badge>
      </div>
      <p className="text-gray-600 text-sm">
        高质量图像超分辨率增强
      </p>
    </div>
  );
}
```

## Migration Guide

```tsx
// Before
<span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
  图片处理
</span>

// After
<Badge variant="primary" size="sm">
  图片处理
</Badge>
```

## Browser Support

- ✅ All modern browsers
- ✅ No JavaScript required
