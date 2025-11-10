# TestimonialCard Component

## Overview

TestimonialCard displays customer testimonials, reviews, and feedback in a polished, professional format. Features avatar support, star ratings, and multiple visual variants following Apple's clean testimonial design patterns.

## Import

```typescript
import TestimonialCard from "@/components/ui/TestimonialCard";
// or
import { TestimonialCard } from "@/components/ui";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `quote` | `string` | ✅ Yes | - | Testimonial text/quote |
| `author` | `string` | ✅ Yes | - | Author's name |
| `role` | `string` | ❌ No | `undefined` | Author's job title |
| `company` | `string` | ❌ No | `undefined` | Author's company |
| `avatar` | `string` | ❌ No | `undefined` | Avatar image URL |
| `rating` | `number` | ❌ No | `undefined` | Star rating (1-5) |
| `variant` | `"default"` \| `"bordered"` \| `"gradient"` | ❌ No | `"default"` | Visual style variant |
| `className` | `string` | ❌ No | `""` | Additional CSS classes |

## Usage

### Basic Testimonial

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Example() {
  return (
    <TestimonialCard
      quote="AI创意工坊彻底改变了我们的工作流程，效率提升了3倍！"
      author="张明"
      role="产品经理"
      company="科技公司"
    />
  );
}
```

### With Avatar

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimonialWithAvatar() {
  return (
    <TestimonialCard
      quote="强大的AI工具，使用简单，效果显著。团队都很满意！"
      author="李华"
      role="创意总监"
      company="设计工作室"
      avatar="/avatars/lihua.jpg"
    />
  );
}
```

### With Rating

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimonialWithRating() {
  return (
    <TestimonialCard
      quote="最好的AI创意工具平台，没有之一。五星推荐！"
      author="王芳"
      role="市场经理"
      company="电商平台"
      rating={5}
    />
  );
}
```

### Variant Examples

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function VariantExamples() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <TestimonialCard
        variant="default"
        quote="Default variant with shadow"
        author="张三"
        role="开发者"
      />
      
      <TestimonialCard
        variant="bordered"
        quote="Bordered variant"
        author="李四"
        role="设计师"
      />
      
      <TestimonialCard
        variant="gradient"
        quote="Gradient background variant"
        author="王五"
        role="产品经理"
      />
    </div>
  );
}
```

### Complete Example

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function CompleteTestimonial() {
  return (
    <TestimonialCard
      quote="AI创意工坊的产品图处理功能太强大了！我们的电商转化率提升了40%，客服咨询量也显著减少。团队现在可以专注于更重要的工作。"
      author="陈晓明"
      role="电商运营总监"
      company="某知名电商平台"
      avatar="/avatars/chen.jpg"
      rating={5}
      variant="gradient"
    />
  );
}
```

### Testimonial Grid

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimonialGrid() {
  const testimonials = [
    {
      quote: "AI创意工坊帮助我们节省了大量时间，产品图质量大幅提升。",
      author: "张伟",
      role: "产品经理",
      company: "电商公司A",
      rating: 5,
    },
    {
      quote: "功能强大，操作简单，团队很快就上手了。推荐！",
      author: "李娜",
      role: "设计主管",
      company: "设计公司B",
      rating: 5,
    },
    {
      quote: "客户服务响应快，技术支持专业，使用体验很好。",
      author: "王强",
      role: "技术总监",
      company: "科技公司C",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          客户评价
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          听听我们的客户怎么说
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              variant="default"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Without Avatar (Fallback Initial)

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimonialNoAvatar() {
  return (
    <TestimonialCard
      quote="没有头像时，会自动显示姓名首字母的圆形占位符。"
      author="赵丽"
      role="营销经理"
      company="广告公司"
      rating={5}
    />
  );
}
```

### Carousel of Testimonials

```tsx
"use client";

import { useState } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Button from "@/components/ui/Button";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "第一个评价...",
      author: "客户A",
      role: "职位A",
      company: "公司A",
      rating: 5,
    },
    {
      quote: "第二个评价...",
      author: "客户B",
      role: "职位B",
      company: "公司B",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-3xl mx-auto">
      <TestimonialCard {...testimonials[current]} />
      
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
        >
          ← 上一个
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrent((current + 1) % testimonials.length)}
        >
          下一个 →
        </Button>
      </div>
    </div>
  );
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Semantic HTML**: Uses `<article>` and `<blockquote>`
- ✅ **Color Contrast**: All text meets WCAG AA standards
- ✅ **Screen Reader**: Quote icon marked as decorative
- ✅ **Star Ratings**: Proper aria-label for rating value
- ✅ **Alternative Text**: Avatar has descriptive alt text

### Best Practices

```tsx
// ✅ Good: Complete information
<TestimonialCard
  quote="Helpful and detailed quote"
  author="Full Name"
  role="Job Title"
  company="Company Name"
/>

// ✅ Good: Meaningful rating
<TestimonialCard
  quote="Great product!"
  author="Customer"
  rating={5}  // 5 stars
/>

// ❌ Bad: Too short or generic
<TestimonialCard
  quote="Good"  // Too short
  author="User"  // Too generic
/>

// ❌ Bad: Missing context
<TestimonialCard
  quote="Love it!"
  author="Someone"  // Who is this person?
/>
```

## Apple Design Principles

### Clarity
- Large quote marks for emphasis
- Clear visual hierarchy (quote > rating > author)
- Readable typography

### Deference
- Subtle backgrounds and borders
- Focus on testimonial content
- Non-intrusive styling

### Depth
- Layered shadow effects
- Rounded corners (16px)
- Gradient backgrounds (optional)

## Visual Reference

### Default Variant
```
┌─────────────────────────────────────┐
│  "                                  │
│  "AI创意工坊彻底改变了我们的         │
│   工作流程，效率提升了3倍！"        │
│                                     │
│  ⭐⭐⭐⭐⭐                          │
│                                     │
│  ─────────────────────────────────  │
│  👤  张明                           │
│      产品经理 • 科技公司             │
└─────────────────────────────────────┘
  White background with shadow
```

### Avatar Display
```
┌──────────┐
│   [📷]   │  ← Avatar image (48x48px)
└──────────┘

or

┌──────────┐
│    张     │  ← First character of name
└──────────┘     (gradient background)
```

## TypeScript Support

```typescript
import { TestimonialCardProps } from "@/components/ui/TestimonialCard";

// Type-safe testimonial object
const testimonial: TestimonialCardProps = {
  quote: "Great product!",
  author: "John Doe",
  role: "CEO",
  company: "Tech Corp",
  rating: 5,
};

// Custom wrapper
function CustomTestimonial(props: TestimonialCardProps) {
  return <TestimonialCard {...props} />;
}
```

## Performance Considerations

- Pure presentational component
- No JavaScript required (unless in carousel)
- Optimized image loading for avatars
- Minimal re-renders

## Related Components

- **Card**: TestimonialCard extends Card principles
- **Badge**: Can be used for additional tags
- **StatsGrid**: Often used together for social proof

## Common Patterns

### Landing Page Testimonials

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function LandingTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            他们都在使用AI创意工坊
          </h2>
          <p className="text-xl text-gray-600">
            超过500,000+用户的信赖之选
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Multiple testimonials */}
        </div>
      </div>
    </section>
  );
}
```

### Featured Testimonial

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function FeaturedTestimonial() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4">
        <TestimonialCard
          variant="bordered"
          quote="使用AI创意工坊后，我们的工作效率提升了300%。产品图质量显著改善，客户满意度大幅提高。这是我用过最好的AI工具平台！"
          author="李明"
          role="电商运营总监"
          company="某知名电商平台"
          avatar="/avatars/liming.jpg"
          rating={5}
          className="bg-white"
        />
      </div>
    </section>
  );
}
```

### Testimonial with Stats

```tsx
import TestimonialCard from "@/components/ui/TestimonialCard";
import StatsGrid from "@/components/ui/StatsGrid";

export default function TestimonialWithStats() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <TestimonialCard
        quote="AI创意工坊帮助我们实现了惊人的增长。"
        author="王芳"
        role="CEO"
        company="电商公司"
        rating={5}
      />
      
      <StatsGrid
        stats={[
          { label: "转化率提升", value: "+40%" },
          { label: "效率提升", value: "3x" },
          { label: "成本节省", value: "50%" },
        ]}
        columns={3}
        variant="cards"
      />
    </div>
  );
}
```

## Reduced Motion Support

Respects `prefers-reduced-motion` for hover transitions.

## Browser Support

- ✅ All modern browsers
- ✅ Graceful degradation for SVG quote marks

## Migration Guide

```tsx
// Before (custom testimonial markup)
<div className="bg-white p-8 rounded-2xl shadow-lg">
  <blockquote className="text-gray-700 mb-4">
    "Great product!"
  </blockquote>
  <div className="flex items-center gap-4">
    <img src="/avatar.jpg" className="w-12 h-12 rounded-full" />
    <div>
      <div className="font-semibold">John Doe</div>
      <div className="text-sm text-gray-600">CEO • Tech Corp</div>
    </div>
  </div>
</div>

// After
<TestimonialCard
  quote="Great product!"
  author="John Doe"
  role="CEO"
  company="Tech Corp"
  avatar="/avatar.jpg"
  rating={5}
/>
```

## Rating Display

The component displays star ratings visually:

- **Filled stars**: Yellow (#fbbf24)
- **Empty stars**: Gray (#d1d5db)
- **Accessible label**: "评分: X 星（满分5星）"

## Notes

- If no `avatar` is provided, displays the first character of `author` name in a gradient circle
- Quote marks are purely decorative (aria-hidden="true")
- Component is responsive and adapts to mobile screens
- Testimonials should be authentic and verifiable
