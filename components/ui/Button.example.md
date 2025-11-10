# Button Component Usage Examples

A reusable, accessible button component with variants, sizes, and full keyboard navigation support.

## Basic Usage

```tsx
import Button from "@/components/ui/Button";

export default function MyComponent() {
  return (
    <Button onClick={() => console.log("Clicked!")}>
      点击我
    </Button>
  );
}
```

## Variants

```tsx
// Primary button (default)
<Button variant="primary" onClick={handleClick}>
  主要操作
</Button>

// Secondary button
<Button variant="secondary" onClick={handleClick}>
  次要操作
</Button>

// Outline button
<Button variant="outline" onClick={handleClick}>
  了解更多
</Button>
```

## Sizes

```tsx
// Small
<Button size="sm" onClick={handleClick}>
  小按钮
</Button>

// Medium (default)
<Button size="md" onClick={handleClick}>
  中等按钮
</Button>

// Large
<Button size="lg" onClick={handleClick}>
  大按钮
</Button>
```

## Full Width

```tsx
<Button fullWidth onClick={handleClick}>
  全宽按钮
</Button>
```

## With ARIA Label

```tsx
<Button
  onClick={() => window.open("https://example.com", "_blank")}
  aria-label="打开外部网站（在新标签页中打开）"
>
  访问网站
</Button>
```

## Disabled State

```tsx
<Button disabled onClick={handleClick}>
  禁用按钮
</Button>
```

## Custom Styling

```tsx
<Button
  variant="primary"
  className="bg-gradient-to-r from-accent to-purple-600"
  onClick={handleClick}
>
  渐变按钮
</Button>
```

## Common Patterns

### Navigation Button

```tsx
<Button
  onClick={() => window.location.href = "/products"}
  aria-label="前往产品页面"
>
  查看产品
</Button>
```

### External Link Button

```tsx
<Button
  onClick={() => window.open("https://example.com", "_blank", "noopener,noreferrer")}
  aria-label="在新窗口打开示例网站"
>
  外部链接
</Button>
```

### Form Submit Button

```tsx
<Button
  type="submit"
  onClick={handleSubmit}
  aria-label="提交表单"
>
  提交
</Button>
```

### CTA Button Pair

```tsx
<div className="flex flex-col sm:flex-row gap-4">
  <Button
    variant="primary"
    onClick={handlePrimaryAction}
    aria-label="开始免费试用"
  >
    免费试用
  </Button>
  <Button
    variant="outline"
    onClick={handleSecondaryAction}
    aria-label="了解更多信息"
  >
    了解更多
  </Button>
</div>
```

## Props Reference

### ButtonProps

Extends `ButtonHTMLAttributes<HTMLButtonElement>`, so all standard button attributes are supported.

- `variant?: "primary" | "secondary" | "outline"` - Visual style (default: "primary")
- `size?: "sm" | "md" | "lg"` - Button size (default: "md")
- `fullWidth?: boolean` - Whether button should take full width (default: false)
- `children: React.ReactNode` - Button content (required)
- `className?: string` - Additional CSS classes
- `disabled?: boolean` - Disabled state
- `onClick?: () => void` - Click handler
- `aria-label?: string` - Accessibility label (recommended for all buttons)
- Plus all standard HTML button attributes (`type`, `form`, etc.)

## Accessibility Features

- Full keyboard navigation support
- Focus visible indicator (2px accent outline)
- ARIA label support for screen readers
- Disabled state properly communicated to assistive technology
- Respects `prefers-reduced-motion` (scale animations only when motion is preferred)

## Design Tokens

The Button component uses semantic tokens from the global theme:

### Variants
- **Primary**: Uses `primary` and `primary-foreground` colors
- **Secondary**: Uses `secondary` and `secondary-foreground` colors
- **Outline**: Uses `border`, `foreground`, and `muted` colors

### Sizes
- **Small**: `px-5 py-2 text-sm`
- **Medium**: `px-8 py-3 text-lg`
- **Large**: `px-10 py-4 text-xl`

### Transitions
- Uses `--ease-apple` easing function
- Hover scale: `1.02`
- Active scale: `0.98`
- All transitions disabled when `prefers-reduced-motion` is set

## Examples in Context

### Hero Section CTAs

```tsx
import Hero, { HeroCTA } from "@/components/sections/Hero";

const ctas: HeroCTA[] = [
  {
    label: "即刻体验",
    onClick: () => window.open(url, "_blank"),
    variant: "primary",
    ariaLabel: "即刻体验AI创意工坊"
  },
  {
    label: "了解更多",
    onClick: () => setShowModal(true),
    variant: "outline",
    ariaLabel: "了解更多关于AI创意工坊"
  }
];

<Hero title="欢迎" ctas={ctas} />
```

### Modal Actions

```tsx
<div className="flex justify-end gap-3 mt-6">
  <Button
    variant="outline"
    onClick={onCancel}
    aria-label="取消操作"
  >
    取消
  </Button>
  <Button
    variant="primary"
    onClick={onConfirm}
    aria-label="确认操作"
  >
    确认
  </Button>
</div>
```

### Loading State (Custom Implementation)

```tsx
<Button
  disabled={isLoading}
  onClick={handleSubmit}
  aria-label={isLoading ? "正在提交..." : "提交表单"}
>
  {isLoading ? "提交中..." : "提交"}
</Button>
```
