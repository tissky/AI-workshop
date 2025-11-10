# TestimonialCard Component

## Overview

The TestimonialCard component displays customer testimonials in an Apple-inspired elevated card design. It uses semantic tokens for all styling and includes proper semantic HTML with `blockquote` and `cite` elements.

## Import

```typescript
import TestimonialCard from "@/components/sections/TestimonialCard";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `quote` | `string` | ✅ Yes | - | The testimonial quote text |
| `author` | `string` | ✅ Yes | - | Name of the person giving the testimonial |
| `role` | `string` | ❌ No | - | Job title or role of the author |
| `avatar` | `string` | ❌ No | - | URL to author's avatar image |

## Usage

### Basic Usage

```tsx
import TestimonialCard from "@/components/sections/TestimonialCard";

export default function Testimonials() {
  return (
    <TestimonialCard
      quote="这个AI工具完全改变了我们的工作流程，效率提升了300%！"
      author="张伟"
      role="产品经理"
    />
  );
}
```

### With Avatar

```tsx
<TestimonialCard
  quote="界面设计精美，功能强大，是我用过最好的AI工具平台。"
  author="李明"
  role="UI设计师 @ 字节跳动"
  avatar="/images/testimonials/liming.jpg"
/>
```

### Without Role

```tsx
<TestimonialCard
  quote="超级好用，强烈推荐！"
  author="王小明"
/>
```

### In a Grid Layout

```tsx
import TestimonialCard from "@/components/sections/TestimonialCard";

const testimonials = [
  {
    quote: "这个平台让我的创意工作变得简单高效，节省了大量时间。",
    author: "陈晨",
    role: "自由设计师"
  },
  {
    quote: "AI模型库非常全面，满足了我们公司所有的图像处理需求。",
    author: "刘强",
    role: "技术总监 @ 美图科技"
  },
  {
    quote: "客服响应快，功能更新频繁，是值得信赖的AI工具平台。",
    author: "赵敏",
    role: "运营经理"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container-max">
        <h2 className="text-5xl font-bold text-center mb-12">
          用户评价
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Features

- ✅ **Semantic Tokens**: Uses only semantic tokens (background, foreground, border, muted-foreground, shadow-card)
- ✅ **Semantic HTML**: Proper use of `<blockquote>`, `<cite>`, and `<footer>` elements
- ✅ **Accessibility**: Proper alt text for avatars, semantic structure
- ✅ **Avatar Fallback**: Shows first letter of author name when no avatar provided
- ✅ **Hover Effects**: Subtle shadow elevation on hover
- ✅ **60/20/20 Spacing**: Uses standardized spacing tokens
- ✅ **Lazy Loading**: Avatar images use `loading="lazy"`

## Accessibility

### Semantic HTML Structure

```html
<article>
  <blockquote>
    <p>"Quote text"</p>
  </blockquote>
  <footer>
    <img alt="Author's avatar" />
    <cite>Author Name</cite>
    <p>Author Role</p>
  </footer>
</article>
```

### Screen Reader Experience

```
Article
Blockquote
"这个AI工具完全改变了我们的工作流程，效率提升了300%！"
Image: 张伟的头像
张伟
产品经理
```

## Styling

All styles use semantic tokens:
- Background: `bg-background`, `bg-muted` (fallback avatar)
- Border: `border-border`
- Shadow: `shadow-card` → `shadow-lg` on hover
- Text: `text-foreground`, `text-muted-foreground`
- Spacing: `p-8`, `gap-4`, `gap-6`, `mb-6`
- Typography: Uses typographic scale (`text-lg`, `text-sm`)

## Examples

### Server Component

```tsx
// app/testimonials/page.tsx
import TestimonialCard from "@/components/sections/TestimonialCard";

export const revalidate = 3600;
export const dynamic = "force-static";

async function getTestimonials() {
  // Fetch from CMS or database
  return [
    {
      quote: "Outstanding platform!",
      author: "John Doe",
      role: "CEO @ TechCorp",
      avatar: "/avatars/john.jpg"
    }
  ];
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  
  return (
    <main className="py-20">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </main>
  );
}
```

### With TypeScript Types

```typescript
import TestimonialCard, { TestimonialProps } from "@/components/sections/TestimonialCard";

const testimonials: TestimonialProps[] = [
  {
    quote: "Amazing experience!",
    author: "Jane Smith",
    role: "Designer",
    avatar: "/avatars/jane.jpg"
  }
];

export default function TestimonialsList() {
  return (
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}
```

### Carousel Integration

```tsx
"use client";

import { useState } from "react";
import TestimonialCard from "@/components/sections/TestimonialCard";

export default function TestimonialCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  
  return (
    <div className="relative">
      <TestimonialCard {...testimonials[current]} />
      
      <div className="flex gap-4 justify-center mt-8">
        <button
          onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
          className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
        >
          ← 上一个
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
          className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
        >
          下一个 →
        </button>
      </div>
    </div>
  );
}
```
