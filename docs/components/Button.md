# Button Component

## Overview

The Button component is a versatile, accessible button primitive with multiple variants and sizes. Built with Apple design principles, it features smooth transitions, focus management, and consistent styling across the application.

## Import

```typescript
import Button from "@/components/ui/Button";
// or
import { Button } from "@/components/ui";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `"primary"` \| `"secondary"` \| `"outline"` \| `"ghost"` | ❌ No | `"primary"` | Visual style variant |
| `size` | `"sm"` \| `"md"` \| `"lg"` | ❌ No | `"md"` | Button size |
| `disabled` | `boolean` | ❌ No | `false` | Disables the button |
| `children` | `React.ReactNode` | ✅ Yes | - | Button content |
| `className` | `string` | ❌ No | `""` | Additional CSS classes |
| ...rest | `ButtonHTMLAttributes` | ❌ No | - | All standard button HTML attributes |

### Variant Options

- **primary**: Blue background, white text (main call-to-action)
- **secondary**: Purple background, white text (alternative actions)
- **outline**: Transparent with gray border (secondary actions)
- **ghost**: Transparent with hover background (tertiary actions)

### Size Options

- **sm**: Compact size (`px-4 py-1.5 text-sm`)
- **md**: Default size (`px-6 py-2.5 text-base`)
- **lg**: Large size (`px-8 py-3 text-lg`)

## Usage

### Basic Button

```tsx
import Button from "@/components/ui/Button";

export default function Example() {
  return (
    <Button onClick={() => alert("Clicked!")}>
      即刻体验
    </Button>
  );
}
```

### Variant Examples

```tsx
import Button from "@/components/ui/Button";

export default function VariantExamples() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">主要按钮</Button>
      <Button variant="secondary">次要按钮</Button>
      <Button variant="outline">边框按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
    </div>
  );
}
```

### Size Examples

```tsx
import Button from "@/components/ui/Button";

export default function SizeExamples() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">小按钮</Button>
      <Button size="md">中等按钮</Button>
      <Button size="lg">大按钮</Button>
    </div>
  );
}
```

### Disabled State

```tsx
import Button from "@/components/ui/Button";

export default function DisabledExample() {
  return (
    <Button disabled>
      已禁用
    </Button>
  );
}
```

### With Icons

```tsx
import Button from "@/components/ui/Button";

export default function IconButton() {
  return (
    <Button>
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      添加项目
    </Button>
  );
}
```

### Form Submit Button

```tsx
import Button from "@/components/ui/Button";

export default function FormExample() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="输入内容..." />
      <Button type="submit" variant="primary">
        提交
      </Button>
    </form>
  );
}
```

### Loading State

```tsx
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <Button onClick={handleClick} disabled={loading}>
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          处理中...
        </>
      ) : (
        "点击提交"
      )}
    </Button>
  );
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Keyboard Navigation**: Fully accessible via keyboard (Tab, Enter, Space)
- ✅ **Focus Indicators**: Visible focus ring with 2px offset
- ✅ **Touch Targets**: Meets 44x44px minimum for all sizes
- ✅ **Color Contrast**: All variants meet WCAG AA contrast ratios
- ✅ **Disabled State**: Properly indicated with opacity and cursor changes
- ✅ **ARIA Attributes**: Supports all standard button ARIA attributes

### Accessibility Checklist

- [x] Keyboard accessible (Tab, Enter, Space)
- [x] Focus visible with clear outline
- [x] Touch target size adequate (≥44px)
- [x] Color contrast meets WCAG AA
- [x] Disabled state properly conveyed
- [x] Works with screen readers
- [x] Supports aria-label for icon-only buttons
- [x] Prevents interaction when disabled

### Best Practices

```tsx
// ✅ Good: Clear, descriptive text
<Button>提交表单</Button>

// ✅ Good: Icon button with aria-label
<Button aria-label="关闭对话框">
  <CloseIcon />
</Button>

// ❌ Bad: Vague text
<Button>点击这里</Button>

// ❌ Bad: Icon without label
<Button>
  <CloseIcon />
</Button>
```

## Performance Considerations

### Optimization Strategies

1. **ForwardRef**: Supports ref forwarding for advanced use cases
2. **CSS-only Animations**: Uses hardware-accelerated transitions
3. **No Runtime Style Computation**: Pre-defined Tailwind classes
4. **Tree Shaking**: Only imports what you use

### Example: Ref Usage

```tsx
"use client";

import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function RefExample() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const focusButton = () => {
    buttonRef.current?.focus();
  };

  return (
    <>
      <Button ref={buttonRef}>主按钮</Button>
      <button onClick={focusButton}>聚焦主按钮</button>
    </>
  );
}
```

## Apple Design Principles

This component embodies Apple's design philosophy:

### Clarity
- Clear visual hierarchy with distinct variants
- Consistent rounded corners (full border-radius)
- Adequate padding and spacing

### Deference
- Subtle hover effects that don't distract
- Smooth transitions (200ms default)
- Focus states that are clear but not aggressive

### Depth
- Subtle shadows and hover states
- Active states provide tactile feedback
- Gradient variants for premium feel

## Visual Reference

### Primary Button
```
┌─────────────────┐
│   即刻体验      │  ← Blue (#2563eb), White text
└─────────────────┘
     Hover: Darker blue (#1d4ed8)
```

### Outline Button
```
┌─────────────────┐
│   了解更多      │  ← Gray border, Gray text
└─────────────────┘
     Hover: Light gray background
```

### Disabled Button
```
┌─────────────────┐
│   已禁用        │  ← 50% opacity, no hover
└─────────────────┘
     Cursor: not-allowed
```

## TypeScript Support

```typescript
import { ButtonProps } from "@/components/ui/Button";

// Custom button wrapper
function CustomButton(props: ButtonProps) {
  return <Button {...props} />;
}

// Type-safe variant
const variant: ButtonProps["variant"] = "primary";
```

## Related Components

- **AppLink**: For navigation links styled as buttons
- **Badge**: For small, non-interactive status indicators
- **Card**: For containing button groups

## Common Patterns

### Button Group

```tsx
import Button from "@/components/ui/Button";

export default function ButtonGroup() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button variant="primary">即刻体验</Button>
      <Button variant="outline">了解更多</Button>
    </div>
  );
}
```

### CTA Section

```tsx
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">
        准备好开始了？
      </h2>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg">
          即刻体验
        </Button>
        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
          联系销售
        </Button>
      </div>
    </section>
  );
}
```

## Reduced Motion Support

The Button component respects user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}
```

This is automatically handled by Tailwind CSS's transition utilities.

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## Migration Guide

If you're migrating from inline button styles:

```tsx
// Before
<button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
  即刻体验
</button>

// After
<Button variant="primary" size="lg">
  即刻体验
</Button>
```
