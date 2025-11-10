# StatsGrid Component

## Overview

StatsGrid displays key metrics and statistics in a visually appealing grid layout. Perfect for showcasing achievements, product features, or company milestones with Apple's clean, data-focused design aesthetic.

## Import

```typescript
import StatsGrid from "@/components/ui/StatsGrid";
// or
import { StatsGrid, type Stat } from "@/components/ui";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `stats` | `Stat[]` | ✅ Yes | - | Array of statistics to display |
| `columns` | `2` \| `3` \| `4` | ❌ No | `4` | Number of columns in grid |
| `variant` | `"default"` \| `"gradient"` \| `"cards"` | ❌ No | `"gradient"` | Visual style variant |
| `align` | `"left"` \| `"center"` \| `"right"` | ❌ No | `"center"` | Text alignment |
| `className` | `string` | ❌ No | `""` | Additional CSS classes |

### Stat Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | ✅ Yes | Stat label/description |
| `value` | `string` | ✅ Yes | Stat value (e.g., "800+", "95%") |
| `description` | `string` | ❌ No | Additional context |
| `icon` | `React.ReactNode` | ❌ No | Optional icon |

## Usage

### Basic Stats Grid

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function Example() {
  const stats = [
    { label: "训练模型", value: "800+" },
    { label: "平均准确率", value: "95%" },
    { label: "用户使用", value: "500K+" },
    { label: "在线服务", value: "24/7" },
  ];

  return <StatsGrid stats={stats} />;
}
```

### With Descriptions

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function StatsWithDesc() {
  const stats = [
    { 
      label: "训练模型", 
      value: "800+",
      description: "覆盖多个AI应用领域"
    },
    { 
      label: "平均准确率", 
      value: "95%",
      description: "行业领先水平"
    },
    { 
      label: "用户使用", 
      value: "500K+",
      description: "月活跃用户"
    },
    { 
      label: "在线服务", 
      value: "24/7",
      description: "全天候技术支持"
    },
  ];

  return <StatsGrid stats={stats} />;
}
```

### Variant Examples

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function VariantExamples() {
  const stats = [
    { label: "用户", value: "10K+" },
    { label: "项目", value: "500+" },
    { label: "满意度", value: "98%" },
  ];

  return (
    <div className="space-y-12">
      {/* Gradient variant (default) */}
      <StatsGrid 
        stats={stats} 
        variant="gradient"
        columns={3}
      />

      {/* Default variant */}
      <StatsGrid 
        stats={stats} 
        variant="default"
        columns={3}
      />

      {/* Cards variant */}
      <StatsGrid 
        stats={stats} 
        variant="cards"
        columns={3}
      />
    </div>
  );
}
```

### Column Examples

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function ColumnExamples() {
  return (
    <>
      {/* 2 columns */}
      <StatsGrid
        columns={2}
        stats={[
          { label: "模型", value: "800+" },
          { label: "用户", value: "500K+" },
        ]}
      />

      {/* 3 columns */}
      <StatsGrid
        columns={3}
        stats={[
          { label: "模型", value: "800+" },
          { label: "准确率", value: "95%" },
          { label: "用户", value: "500K+" },
        ]}
      />

      {/* 4 columns */}
      <StatsGrid
        columns={4}
        stats={[
          { label: "模型", value: "800+" },
          { label: "准确率", value: "95%" },
          { label: "用户", value: "500K+" },
          { label: "服务", value: "24/7" },
        ]}
      />
    </>
  );
}
```

### With Icons

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function StatsWithIcons() {
  const stats = [
    { 
      label: "训练模型",
      value: "800+",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
        </svg>
      )
    },
    { 
      label: "用户使用",
      value: "500K+",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      )
    },
  ];

  return <StatsGrid stats={stats} columns={2} variant="cards" />;
}
```

### Models Page Stats

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function ModelsPageStats() {
  const stats = [
    { 
      label: "训练模型", 
      value: "800+",
      description: "覆盖各行各业"
    },
    { 
      label: "平均准确率", 
      value: "95%",
      description: "行业领先"
    },
    { 
      label: "用户使用", 
      value: "500K+",
      description: "月活跃"
    },
    { 
      label: "在线服务", 
      value: "24/7",
      description: "全天候支持"
    },
  ];

  return (
    <div className="py-12">
      <StatsGrid stats={stats} variant="gradient" />
    </div>
  );
}
```

### Company Stats

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function CompanyStats() {
  const stats = [
    { 
      label: "成立年份",
      value: "2020",
      description: "专注AI技术"
    },
    { 
      label: "团队成员",
      value: "100+",
      description: "AI专家"
    },
    { 
      label: "服务客户",
      value: "1000+",
      description: "遍布全球"
    },
    { 
      label: "专利数量",
      value: "50+",
      description: "技术创新"
    },
  ];

  return <StatsGrid stats={stats} variant="cards" />;
}
```

### Performance Stats

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function PerformanceStats() {
  const stats = [
    { 
      label: "响应时间",
      value: "<100ms",
      description: "毫秒级响应"
    },
    { 
      label: "系统可用性",
      value: "99.9%",
      description: "高可用保障"
    },
    { 
      label: "并发处理",
      value: "10K+",
      description: "同时处理请求"
    },
  ];

  return <StatsGrid stats={stats} columns={3} variant="gradient" />;
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Color Contrast**: All text meets WCAG AA standards
- ✅ **Semantic HTML**: Proper structure with divs
- ✅ **Screen Reader**: Stats properly announced
- ✅ **Responsive**: Adapts to all screen sizes

### Best Practices

```tsx
// ✅ Good: Clear, concise labels
<StatsGrid stats={[
  { label: "用户", value: "500K+" }
]} />

// ✅ Good: Meaningful descriptions
<StatsGrid stats={[
  { 
    label: "准确率", 
    value: "95%",
    description: "行业领先水平"
  }
]} />

// ❌ Bad: Too much text in value
<StatsGrid stats={[
  { label: "用户", value: "Over 500,000 active monthly users" }
]} />

// ❌ Bad: Unclear labels
<StatsGrid stats={[
  { label: "数字", value: "800" }  // What does this represent?
]} />
```

## Apple Design Principles

### Clarity
- Large, bold numbers (text-4xl)
- Clear labels and descriptions
- High contrast text

### Deference
- Clean backgrounds
- Generous spacing
- Minimal distractions

### Depth
- Gradient backgrounds (for gradient variant)
- Subtle shadows (for cards variant)
- Layered information hierarchy

## Visual Reference

### Gradient Variant
```
┌────────────────────────────────────────────────┐
│  🌈 Blue-purple gradient background            │
│                                                │
│    800+          95%        500K+      24/7   │
│  训练模型      平均准确率    用户使用   在线服务 │
│                                                │
└────────────────────────────────────────────────┘
```

### Cards Variant
```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   800+   │  │   95%    │  │  500K+   │  │   24/7   │
│ 训练模型  │  │ 平均准确率│  │ 用户使用  │  │ 在线服务  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
  White cards with shadows
```

## TypeScript Support

```typescript
import { StatsGridProps, Stat } from "@/components/ui/StatsGrid";

// Type-safe stats array
const stats: Stat[] = [
  { label: "模型", value: "800+" },
  { label: "用户", value: "500K+" },
];

// Custom wrapper
function CustomStatsGrid(props: StatsGridProps) {
  return <StatsGrid {...props} />;
}
```

## Performance Considerations

- Pure presentational component
- No JavaScript overhead
- CSS Grid for efficient layout
- Responsive by default

## Related Components

- **Hero**: Often used together with StatsGrid
- **Card**: Cards variant creates individual cards
- **Badge**: Can be used within stat descriptions

## Common Patterns

### Hero + Stats Combo

```tsx
import Hero from "@/components/ui/Hero";
import StatsGrid from "@/components/ui/StatsGrid";
import Button from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <>
      <Hero
        title="AI创意工坊"
        subtitle="释放无限创意可能"
        actions={<Button>即刻体验</Button>}
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <StatsGrid
            stats={[
              { label: "训练模型", value: "800+" },
              { label: "平均准确率", value: "95%" },
              { label: "用户使用", value: "500K+" },
              { label: "在线服务", value: "24/7" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
```

### Stats Section

```tsx
import StatsGrid from "@/components/ui/StatsGrid";

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          数据说话
        </h2>
        <StatsGrid
          stats={[
            { label: "客户满意度", value: "98%" },
            { label: "项目成功率", value: "95%" },
            { label: "平均响应时间", value: "<1h" },
          ]}
          columns={3}
          variant="cards"
        />
      </div>
    </section>
  );
}
```

## Reduced Motion Support

No animations - static presentation respects all user preferences.

## Browser Support

- ✅ All modern browsers
- ✅ CSS Grid support required
- ✅ Graceful degradation for older browsers

## Migration Guide

```tsx
// Before (inline stats)
<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
  <div className="grid md:grid-cols-4 gap-8 text-center text-white">
    <div>
      <div className="text-4xl font-bold mb-2">800+</div>
      <div className="text-blue-100">训练模型</div>
    </div>
    {/* ... */}
  </div>
</div>

// After
<StatsGrid
  stats={[
    { label: "训练模型", value: "800+" },
    { label: "平均准确率", value: "95%" },
    { label: "用户使用", value: "500K+" },
    { label: "在线服务", value: "24/7" },
  ]}
  variant="gradient"
/>
```
