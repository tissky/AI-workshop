# StatsGrid Component

## Overview

The StatsGrid component displays statistics in an Apple-inspired elevated card grid layout. It uses semantic tokens only and includes proper accessibility support with `aria-describedby` attributes.

## Import

```typescript
import StatsGrid from "@/components/sections/StatsGrid";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `stats` | `Stat[]` | ✅ Yes | - | Array of statistics to display |
| `columns` | `2 \| 3 \| 4` | ❌ No | `4` | Number of columns in the grid |

### Stat Interface

```typescript
interface Stat {
  label: string;         // Label for the statistic (e.g., "AI工具")
  value: string;         // Value to display (e.g., "30+")
  description?: string;  // Optional description text
}
```

## Usage

### Basic Usage

```tsx
import StatsGrid from "@/components/sections/StatsGrid";

const stats = [
  { label: "AI工具", value: "30+" },
  { label: "专业模型", value: "800+" },
  { label: "服务用户", value: "100万+" },
  { label: "日处理量", value: "500万+" }
];

export default function MyPage() {
  return <StatsGrid stats={stats} />;
}
```

### With Descriptions

```tsx
const stats = [
  {
    label: "用户满意度",
    value: "98%",
    description: "超过10万用户的真实评价"
  },
  {
    label: "处理速度",
    value: "< 1秒",
    description: "平均响应时间"
  },
  {
    label: "模型准确率",
    value: "99.5%",
    description: "AI识别准确率"
  }
];

export default function MyPage() {
  return <StatsGrid stats={stats} columns={3} />;
}
```

### Custom Columns

```tsx
// 2 columns on mobile, 2 on desktop
<StatsGrid stats={stats} columns={2} />

// 2 columns on mobile, 3 on desktop
<StatsGrid stats={stats} columns={3} />

// 2 columns on mobile, 4 on desktop (default)
<StatsGrid stats={stats} columns={4} />
```

## Features

- ✅ **Semantic Tokens**: Uses only semantic tokens (background, foreground, border, muted-foreground, shadow-card)
- ✅ **Accessibility**: Each stat has `aria-describedby` linking to its label
- ✅ **Responsive**: Adapts grid columns based on screen size
- ✅ **Hover Effects**: Subtle shadow elevation on hover
- ✅ **60/20/20 Spacing**: Uses standardized gap spacing (gap-6 md:gap-8)

## Accessibility

### ARIA Attributes

Each stat card includes:
- `role="article"` for semantic structure
- `aria-describedby` pointing to the stat label for screen readers

### Screen Reader Experience

```
Article, described by stat-0-label
"30+"
"AI工具"
```

## Styling

All styles use semantic tokens:
- Background: `bg-background`
- Border: `border-border`
- Shadow: `shadow-card` → `shadow-lg` on hover
- Text: `text-foreground` and `text-muted-foreground`
- Spacing: `p-6`, `gap-6`, `gap-8`, `mb-2`, `mt-2`

## Examples

### In a Hero Section

```tsx
import StatsGrid from "@/components/sections/StatsGrid";

export default function HeroSection() {
  const stats = [
    { label: "Active Users", value: "1M+" },
    { label: "Daily Requests", value: "5M+" },
    { label: "Models", value: "800+" },
    { label: "Uptime", value: "99.9%" }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container-max">
        <h2 className="text-5xl font-bold text-center mb-12">
          Platform Stats
        </h2>
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}
```

### Server Component with ISR

```tsx
// app/stats/page.tsx
import StatsGrid from "@/components/sections/StatsGrid";

export const revalidate = 3600;
export const dynamic = "force-static";

async function getStats() {
  // Fetch from API or database
  return [
    { label: "Total Users", value: "1.2M" },
    { label: "Countries", value: "150+" },
    { label: "Languages", value: "30" }
  ];
}

export default async function StatsPage() {
  const stats = await getStats();
  
  return (
    <main className="py-20">
      <div className="container-max">
        <StatsGrid stats={stats} columns={3} />
      </div>
    </main>
  );
}
```
