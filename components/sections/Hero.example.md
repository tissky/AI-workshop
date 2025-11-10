# Hero Component Usage Examples

The Hero component is a reusable, accessible hero section following Apple's minimal design principles.

## Basic Usage

```tsx
import Hero from "@/components/sections/Hero";

export default function MyPage() {
  return (
    <Hero
      title="AI创意工坊"
      subtitle="释放无限创意可能"
      description="集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域"
    />
  );
}
```

## With CTAs

```tsx
import Hero, { HeroCTA } from "@/components/sections/Hero";

export default function MyPage() {
  const ctas: HeroCTA[] = [
    {
      label: "即刻体验",
      onClick: () => window.open("https://example.com", "_blank"),
      variant: "primary",
      ariaLabel: "即刻体验AI创意工坊"
    },
    {
      label: "了解更多",
      onClick: () => console.log("Learn more"),
      variant: "outline",
      ariaLabel: "了解更多关于AI创意工坊"
    }
  ];

  return (
    <Hero
      title="AI创意工坊"
      subtitle="释放无限创意可能"
      ctas={ctas}
    />
  );
}
```

## With Eyebrow Text

```tsx
<Hero
  eyebrow="新功能上线"
  title="AI创意工坊 2.0"
  subtitle="全新体验，更强大的功能"
  description="我们带来了全新的AI工具和更流畅的用户体验"
/>
```

## With Media Slot

```tsx
<Hero
  title="AI创意工坊"
  subtitle="释放无限创意可能"
  description="集成30+专业AI工具"
  media={
    <img
      src="/hero-image.png"
      alt="AI Creative Workshop"
      className="w-full h-auto rounded-2xl shadow-2xl"
    />
  }
/>
```

## Left-Aligned Hero

```tsx
<Hero
  title="AI创意工坊"
  subtitle="释放无限创意可能"
  alignment="left"
  background="muted"
/>
```

## Full Example with All Props

```tsx
import Hero, { HeroCTA } from "@/components/sections/Hero";

export default function ProductPage() {
  const ctas: HeroCTA[] = [
    {
      label: "开始免费试用",
      onClick: () => window.location.href = "/signup",
      variant: "primary",
      ariaLabel: "开始免费试用AI创意工坊"
    },
    {
      label: "查看演示",
      onClick: () => window.location.href = "/demo",
      variant: "secondary",
      ariaLabel: "查看产品演示"
    }
  ];

  return (
    <Hero
      eyebrow="现已推出"
      title="下一代AI创意平台"
      subtitle="让创意工作更简单、更高效"
      description="集成最先进的AI模型，为您提供专业级的图片处理、视频编辑和文案创作工具"
      ctas={ctas}
      alignment="center"
      background="gradient"
      media={
        <div className="relative aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      }
    />
  );
}
```

## Props Reference

### Hero Props

- `eyebrow?: string` - Optional eyebrow text displayed above the title
- `title: string` - Main heading (required)
- `subtitle?: string` - Secondary heading
- `description?: string` - Descriptive paragraph
- `ctas?: HeroCTA[]` - Array of call-to-action buttons
- `media?: ReactNode` - Optional media content (images, videos, etc.)
- `alignment?: "center" | "left"` - Content alignment (default: "center")
- `background?: "default" | "gradient" | "muted"` - Background style (default: "default")

### HeroCTA Props

- `label: string` - Button text
- `onClick: () => void` - Click handler
- `variant?: "primary" | "secondary" | "outline"` - Button style (default: first CTA is "primary", rest are "outline")
- `ariaLabel?: string` - Accessibility label (defaults to label if not provided)

## Accessibility Features

- Proper heading hierarchy (h1 for title, h2 for subtitle)
- ARIA labels for all CTAs
- Respects `prefers-reduced-motion` for animations
- Keyboard navigation support
- Focus indicators on interactive elements

## Responsive Behavior

- **Desktop (lg+)**: Side-by-side layout when media is present
- **Tablet (md)**: Optimized spacing and font sizes
- **Mobile (sm)**: Stacked layout with adjusted typography
- Media content automatically reorders on mobile (appears first)

## Design Tokens

The Hero component uses semantic tokens from the global theme:
- Colors: `foreground`, `muted-foreground`, `background`, `muted`
- Typography: Font scale from `text-4xl` to `text-7xl`
- Spacing: Consistent spacing scale (`pt-20` to `pb-24`)
- Transitions: Apple-style easing with reduced motion support
