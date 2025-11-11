# 🧩 Component Theming

Guide to component patterns, UI primitives, and design system integration.

---

## 📋 Overview

The component system follows a **three-tier architecture**:

1. **UI Primitives** (`components/ui/`) - Reusable design system components
2. **Feature Components** (`components/`) - Page-specific interactive components
3. **Page Components** (`app/**/*`) - Server components with ISR configuration

---

## 🎨 Design System Components

### Core Principles

- **Semantic tokens first**: Use `bg-background`, `text-foreground` instead of raw colors
- **Accessibility**: ARIA labels, keyboard navigation, focus states
- **Flexibility**: Support variants, sizes, custom props
- **Type safety**: Full TypeScript support with prop interfaces

---

## 🔧 UI Primitives

### Button

**Location**: `components/ui/Button.tsx`

**Variants**:
```tsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outlined</Button>
<Button variant="ghost">Ghost</Button>
```

**Sizes**:
```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

**Theme Integration**:
```tsx
const variants = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-muted',
  outline: 'border-2 border-border hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};
```

---

### Card

**Location**: `components/Card.tsx`

**Basic Usage**:
```tsx
<Card>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

**Interactive Card**:
```tsx
<Card
  as={Link}
  href="/tools/background-replace"
  role="button"
  tabIndex={0}
  className="hover:shadow-elevated hover:border-accent"
>
  Interactive content
</Card>
```

**Theme Integration**:
```css
.card {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-base);
  box-shadow: var(--shadow-card);
  transition: all var(--duration-base) var(--ease-apple);
}

.card:hover {
  box-shadow: var(--shadow-elevated);
  border-color: var(--color-border-accent);
}
```

---

### Badge

**Location**: `components/Badge.tsx`

**Variants**:
```tsx
<Badge>Default</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="hot">🔥 Hot</Badge>
```

**Theme Integration**:
```tsx
const variants = {
  default: 'bg-muted text-foreground',
  accent: 'bg-accent text-accent-foreground',
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  error: 'bg-error text-white',
  hot: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
};
```

---

### Breadcrumb

**Location**: `components/Breadcrumb.tsx`

**Usage**:
```tsx
<Breadcrumb
  items={[
    { label: '首页', href: '/' },
    { label: 'AI工具库', href: '/tools' },
    { label: '背景替换' },  // Current page (no href)
  ]}
/>
```

**Theme Integration**:
- Uses `text-muted-foreground` for non-active links
- Uses `text-foreground` for current page
- Hover states with `text-accent`
- Semantic HTML: `<nav aria-label="面包屑导航">`

---

### Tabs

**Location**: `components/ui/Tabs.tsx`

**Usage**:
```tsx
<Tabs defaultValue="all">
  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="image">Images</TabsTrigger>
    <TabsTrigger value="video">Videos</TabsTrigger>
  </TabsList>
  <TabsContent value="all">All content</TabsContent>
  <TabsContent value="image">Image content</TabsContent>
  <TabsContent value="video">Video content</TabsContent>
</Tabs>
```

**Keyboard Navigation**:
- Arrow keys (left/right) to switch tabs
- Home/End to jump to first/last
- Automatic ARIA attributes (`role="tablist"`, `aria-selected`)

**Theme Integration**:
```tsx
const tabTrigger = clsx(
  'px-4 py-2 rounded-lg transition-all',
  'hover:bg-muted',
  'data-[state=active]:bg-accent data-[state=active]:text-accent-foreground',
  'focus-visible:outline-2 focus-visible:outline-accent'
);
```

---

### Hero

**Location**: `components/ui/Hero.tsx`

**Usage**:
```tsx
<Hero
  title="AI创意工坊"
  subtitle="释放无限创意可能"
  description="集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域"
  actions={
    <>
      <Button variant="primary" size="lg">开始使用</Button>
      <Button variant="outline" size="lg">了解更多</Button>
    </>
  }
  variant="gradient"
/>
```

**Variants**:
- `default`: Clean white background
- `gradient`: Subtle gradient background
- `dark`: Dark background with light text

**Theme Integration**:
```tsx
const variants = {
  default: 'bg-background text-foreground',
  gradient: 'bg-gradient-to-b from-muted to-background text-foreground',
  dark: 'bg-foreground text-background',
};
```

---

### StatsGrid

**Location**: `components/ui/StatsGrid.tsx`

**Usage**:
```tsx
<StatsGrid
  stats={[
    { label: 'AI工具', value: '30+' },
    { label: '训练模型', value: '800+' },
    { label: '用户', value: '10万+' },
    { label: '满意度', value: '98%' },
  ]}
  columns={4}
  variant="gradient"
/>
```

**Variants**:
- `default`: Flat background
- `gradient`: Subtle gradient on each stat
- `cards`: Individual cards with shadows

**Theme Integration**:
- Uses `text-accent` for values
- Uses `text-muted-foreground` for labels
- Responsive columns (auto-collapses on mobile)

---

### TestimonialCard

**Location**: `components/ui/TestimonialCard.tsx`

**Usage**:
```tsx
<TestimonialCard
  quote="This tool has transformed our workflow!"
  author="张三"
  role="产品经理"
  company="某科技公司"
  rating={5}
  avatar="/images/avatar.jpg"
/>
```

**Theme Integration**:
- Card background: `bg-surface`
- Quote text: `text-foreground`
- Author info: `text-muted-foreground`
- Rating stars: `text-warning` (yellow)

---

## 🎭 Feature Components

### ImageCarousel

**Location**: `components/ImageCarousel.tsx`

**Client Component** (uses `useState`, `useEffect` for auto-play)

**Usage**:
```tsx
<ImageCarousel
  images={[
    { src: '/images/1.jpg', alt: 'Image 1' },
    { src: '/images/2.jpg', alt: 'Image 2' },
  ]}
  interval={3000}
  showIndicators={true}
/>
```

**Theme Integration**:
- Navigation buttons: `bg-foreground/80` with hover states
- Indicators: `bg-border` inactive, `bg-accent` active
- Respects `prefers-reduced-motion` (disables auto-play)

---

### QRModal

**Location**: `components/QRModal.tsx`

**Client Component** (modal state management)

**Usage**:
```tsx
<QRModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  qrCodeUrl="/images/qr.png"
  title="扫码下载"
  description="使用微信扫码即可下载"
/>
```

**Theme Integration**:
- Overlay: `bg-overlay` (semi-transparent)
- Modal: `bg-surface` with `shadow-dialog`
- Close button: `hover:bg-muted` with focus ring
- Smooth animations: `transition-opacity duration-300`

---

### ModelsFilter

**Location**: `components/ModelsFilter.tsx`

**Client Component** (filter state)

**Usage**:
```tsx
<ModelsFilter
  categories={['全部', '图像处理', '视频处理', '文本生成']}
  activeCategory={activeCategory}
  onCategoryChange={setActiveCategory}
/>
```

**Theme Integration**:
- Tab buttons: `hover:bg-muted`
- Active tab: `bg-accent text-accent-foreground`
- Smooth transitions: `transition-colors duration-200`

---

## 📄 Page Components

### ISR Configuration

All page components export ISR configuration:

```tsx
// app/products/page.tsx
export const revalidate = 3600;        // Revalidate every 1 hour
export const dynamic = "force-static"; // Generate at build time

export default function ProductsPage() {
  return (
    <main>
      {/* Page content */}
    </main>
  );
}
```

### Metadata Exports

Pages export metadata for SEO:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品中心 - AI创意工坊",
  description: "探索AI创意工坊的核心产品与服务",
  keywords: "AI产品,产品图生成,图片修复",
  openGraph: {
    title: "产品中心 - AI创意工坊",
    description: "探索AI创意工坊的核心产品与服务",
    type: "website",
  },
};
```

---

## 🎨 Theming Patterns

### Pattern 1: Semantic Color Classes

**❌ Avoid raw colors:**
```tsx
<div className="bg-white text-black border-gray-300">
  Content
</div>
```

**✅ Use semantic tokens:**
```tsx
<div className="bg-background text-foreground border-border">
  Content
</div>
```

**Why?** Automatically adapts to light/dark mode and high-contrast.

---

### Pattern 2: Interactive States

**Standard hover pattern:**
```tsx
<button className="
  bg-accent text-accent-foreground
  hover:opacity-90
  active:scale-95
  focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
  transition-all duration-200
">
  Click me
</button>
```

**Card lift pattern:**
```tsx
<Card className="
  hover:shadow-elevated
  hover:border-accent
  hover:-translate-y-1
  transition-all duration-300
">
  Content
</Card>
```

---

### Pattern 3: Responsive Design

**Mobile-first approach:**
```tsx
<div className="
  grid grid-cols-1           /* 1 column on mobile */
  md:grid-cols-2             /* 2 columns on tablet */
  lg:grid-cols-3             /* 3 columns on desktop */
  gap-4 md:gap-6             /* Larger gaps on bigger screens */
">
  {items.map(item => <Card key={item.id} />)}
</div>
```

**60/20/20 layout:**
```tsx
<div className="grid-60-20-20">
  <main className="col-main">{/* 60% width */}</main>
  <aside className="col-secondary">{/* 20% width */}</aside>
  <aside className="col-tertiary">{/* 20% width */}</aside>
</div>
```

---

### Pattern 4: Animation & Motion

**Respect reduced motion:**
```tsx
<div className="
  motion-safe:transition-transform
  motion-safe:hover:scale-105
">
  Content
</div>
```

**Page transition:**
```tsx
<section className="
  motion-safe:animate-in
  motion-safe:fade-in
  motion-safe:slide-in-from-bottom-4
  motion-safe:duration-700
">
  Content
</section>
```

---

### Pattern 5: Focus Management

**Visible focus indicators:**
```tsx
<Link
  href="/tools"
  className="
    focus-visible:outline-2
    focus-visible:outline-accent
    focus-visible:outline-offset-2
    focus-visible:rounded
  "
>
  Navigate
</Link>
```

**Custom focus styles:**
```css
.custom-focus:focus-visible {
  outline: 2px solid var(--color-interactive-hover);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

---

## 🛠️ Helper Functions

### Runtime Token Access

From `lib/design-tokens.ts`:

```typescript
import {
  getToken,
  getColorToken,
  getShadowToken,
  getSpacingToken,
  getRadiusToken,
} from '@/lib/design-tokens';

// Get any token
const bgColor = getToken('color-bg-surface');

// Get specific token types
const textColor = getColorToken('text', 'primary');
const cardShadow = getShadowToken('card');
const padding = getSpacingToken('4');
const borderRadius = getRadiusToken('base');
```

---

## 📖 Component Checklist

When creating new components:

- [ ] Use semantic color tokens (`bg-background`, `text-foreground`)
- [ ] Add hover states with smooth transitions
- [ ] Include focus-visible styles (2px accent outline, 2px offset)
- [ ] Add ARIA labels for screen readers
- [ ] Support keyboard navigation where applicable
- [ ] Respect `prefers-reduced-motion` for animations
- [ ] Test in both light and dark modes
- [ ] Verify WCAG AA contrast ratios
- [ ] Add TypeScript prop interfaces
- [ ] Document usage examples

---

## 🔗 Related Documentation

- **[Theme & Design Tokens](./theme.md)** - Token system reference
- **[Component Documentation](../components/README.md)** - Individual component docs
- **[Accessibility Best Practices](../../ACCESSIBILITY_IMPROVEMENTS.md)** - A11y guide

---

**Last Updated**: 2025-11-10  
**Maintained By**: Development Team
