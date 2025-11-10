# AppLink Component

## Overview

AppLink is a wrapper around Next.js's Link component with consistent styling, accessibility features, and support for external links. It follows Apple's clean design aesthetic with subtle hover effects and proper focus management.

## Import

```typescript
import AppLink from "@/components/ui/AppLink";
// or
import { AppLink } from "@/components/ui";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `href` | `string` | ✅ Yes | - | Link destination (internal or external) |
| `children` | `React.ReactNode` | ✅ Yes | - | Link content |
| `variant` | `"default"` \| `"primary"` \| `"muted"` | ❌ No | `"default"` | Visual style variant |
| `external` | `boolean` | ❌ No | `false` | Opens in new tab with security attributes |
| `underline` | `boolean` | ❌ No | `false` | Shows underline decoration |
| `className` | `string` | ❌ No | `""` | Additional CSS classes |
| ...rest | `AnchorHTMLAttributes` | ❌ No | - | All standard anchor attributes |

## Usage

### Basic Link

```tsx
import AppLink from "@/components/ui/AppLink";

export default function Example() {
  return (
    <AppLink href="/products">
      查看产品
    </AppLink>
  );
}
```

### Variant Examples

```tsx
import AppLink from "@/components/ui/AppLink";

export default function VariantExamples() {
  return (
    <nav className="flex gap-6">
      <AppLink href="/products" variant="default">
        产品
      </AppLink>
      <AppLink href="/tools" variant="primary">
        AI工具
      </AppLink>
      <AppLink href="/about" variant="muted">
        关于
      </AppLink>
    </nav>
  );
}
```

### External Link

```tsx
import AppLink from "@/components/ui/AppLink";

export default function ExternalExample() {
  return (
    <AppLink 
      href="https://example.com" 
      external
      className="flex items-center gap-1"
    >
      访问外部网站
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </AppLink>
  );
}
```

### With Underline

```tsx
import AppLink from "@/components/ui/AppLink";

export default function UnderlineExample() {
  return (
    <p className="text-gray-600">
      阅读我们的
      <AppLink href="/privacy" variant="primary" underline>
        隐私政策
      </AppLink>
      了解更多信息。
    </p>
  );
}
```

### Navigation Menu

```tsx
import AppLink from "@/components/ui/AppLink";

export default function Navigation() {
  const navItems = [
    { href: "/products", label: "产品" },
    { href: "/tools", label: "AI工具" },
    { href: "/models", label: "模型库" },
    { href: "/company", label: "关于我们" },
  ];

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <AppLink 
          key={item.href}
          href={item.href}
          variant="default"
          className="font-medium hover:text-blue-600"
        >
          {item.label}
        </AppLink>
      ))}
    </nav>
  );
}
```

### Footer Links

```tsx
import AppLink from "@/components/ui/AppLink";

export default function FooterLinks() {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
            <ul className="space-y-2">
              <li>
                <AppLink href="/products/product-1" variant="muted">
                  我有产品
                </AppLink>
              </li>
              <li>
                <AppLink href="/products/product-2" variant="muted">
                  图片焕新
                </AppLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Keyboard Navigation**: Fully accessible via Tab/Shift+Tab
- ✅ **Focus Indicators**: Clear focus ring (2px blue outline)
- ✅ **Color Contrast**: All variants meet WCAG AA standards
- ✅ **External Link Security**: `rel="noopener noreferrer"` for external links
- ✅ **Screen Reader Support**: Works with NVDA, JAWS, VoiceOver

### Best Practices

```tsx
// ✅ Good: Descriptive link text
<AppLink href="/products">查看所有产品</AppLink>

// ✅ Good: External link with indicator
<AppLink href="https://example.com" external>
  访问外部资源 ↗
</AppLink>

// ❌ Bad: Vague link text
<AppLink href="/products">点击这里</AppLink>

// ❌ Bad: Missing external indicator
<AppLink href="https://example.com" external>
  网站
</AppLink>
```

## Apple Design Principles

### Clarity
- Clear visual distinction between variants
- Consistent hover states across the application
- Proper color contrast for readability

### Deference
- Subtle transitions (200ms)
- Non-intrusive focus indicators
- Colors that complement content

### Depth
- Smooth color transitions on hover
- Active states for tactile feedback

## Visual Reference

### Default Variant
```
产品  ← Gray text (#374151)
     Hover: Darker gray (#111827)
```

### Primary Variant
```
AI工具  ← Blue text (#2563eb)
       Hover: Darker blue (#1d4ed8)
```

### Muted Variant
```
关于  ← Light gray (#6b7280)
     Hover: Medium gray (#374151)
```

## TypeScript Support

```typescript
import { AppLinkProps } from "@/components/ui/AppLink";

// Custom link wrapper
function CustomLink(props: AppLinkProps) {
  return <AppLink {...props} />;
}

// Type-safe variant
const variant: AppLinkProps["variant"] = "primary";
```

## Performance Considerations

- Uses Next.js Link for optimized client-side navigation
- Automatic prefetching for internal links in viewport
- No JavaScript required for basic functionality
- Minimal CSS footprint

## Related Components

- **Button**: For action-oriented interactions
- **Header**: Contains navigation links
- **Footer**: Contains informational links

## Migration Guide

```tsx
// Before
<Link href="/products" className="text-gray-700 hover:text-gray-900">
  产品
</Link>

// After
<AppLink href="/products" variant="default">
  产品
</AppLink>
```

## Reduced Motion Support

Respects `prefers-reduced-motion` for smooth transitions.

## Browser Support

- ✅ All modern browsers
- ✅ Works without JavaScript (progressive enhancement)
