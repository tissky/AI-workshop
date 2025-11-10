# Component Documentation

Comprehensive documentation for all components in the AI创意工坊 (AI Creative Workshop) platform.

## Overview

This directory contains detailed documentation for each component, including:
- **Props Tables**: Complete list of props with types and descriptions
- **Usage Examples**: Code snippets showing how to use each component
- **TypeScript Types**: Full type definitions
- **Accessibility Guidelines**: WCAG 2.1 AA compliance details
- **Performance Considerations**: Optimization tips and best practices
- **Integration Tips**: How to use components with other parts of the app

## Component Categories

### Navigation & Layout

#### [Header](./Header.md)
Sticky navigation bar with responsive mobile menu and keyboard support.

**Key Features:**
- Sticky positioning with backdrop blur
- Mobile hamburger menu
- Keyboard navigation (Escape to close)
- ARIA attributes for accessibility

**Quick Start:**
```tsx
import Header from "@/components/Header";

<Header />
```

---

#### [Footer](./Footer.md)
Site-wide footer with navigation links, social media, and legal links.

**Key Features:**
- 4-column responsive grid layout
- Social media icon links
- Copyright and legal links
- Dark theme with high contrast

**Quick Start:**
```tsx
import Footer from "@/components/Footer";

<Footer />
```

---

#### [SkipLink](./SkipLink.md)
Accessibility-first skip navigation link for keyboard and screen reader users.

**Key Features:**
- Hidden until keyboard focused
- First element in tab order
- Bypasses repetitive navigation
- WCAG 2.4.1 compliance

**Quick Start:**
```tsx
import SkipLink from "@/components/SkipLink";

<SkipLink />
<Header />
<main id="main-content">{children}</main>
```

---

### Content Display

#### [ImageCarousel](./ImageCarousel.md)
Feature-rich image carousel with autoplay, navigation controls, and thumbnails.

**Key Features:**
- Autoplay with pause on hover/focus
- Keyboard navigation (Arrow keys)
- Thumbnail preview strip
- Next.js Image optimization
- Responsive height

**Quick Start:**
```tsx
import ImageCarousel from "@/components/ImageCarousel";

const items = [
  {
    id: "1",
    image: "/images/slide1.jpg",
    title: "智能抠图",
    description: "AI驱动的精准抠图"
  }
];

<ImageCarousel items={items} autoPlay={true} interval={5000} />
```

---

#### [FeatureCard](./FeatureCard.md)
Presentational card for displaying features with icon, title, description, and bullet points.

**Key Features:**
- Emoji/icon support
- Optional gradient background
- Bullet list with gradient dots
- Hover effects (shadow, translate)

**Quick Start:**
```tsx
import FeatureCard from "@/components/FeatureCard";

<FeatureCard
  icon="🎨"
  title="AI图像处理"
  description="强大的AI驱动图像编辑工具"
  items={["智能抠图", "背景替换", "图像增强"]}
  gradient={true}
/>
```

---

#### [ToolCard](./ToolCard.md)
Card component for displaying AI tools with category, features, and links.

**Key Features:**
- Gradient icon backgrounds
- Category badges
- Feature list (max 3 displayed)
- Link to tool detail page
- Hover effects and animations

**Quick Start:**
```tsx
import ToolCard from "@/components/ToolCard";

<ToolCard
  id="ai-cutout"
  name="智能抠图"
  description="AI驱动的精准抠图工具"
  icon="✂️"
  category="图片处理"
  gradientColor="from-blue-500 to-cyan-500"
  features={["自动识别主体", "精确边缘处理"]}
/>
```

---

### Modals & Overlays

#### [QRModal](./QRModal.md)
Accessible modal dialog for displaying QR code contact information.

**Key Features:**
- Standalone or controlled mode
- Focus trap with keyboard navigation
- Escape key to close
- Focus management (returns to trigger)
- Backdrop click to close

**Quick Start:**
```tsx
import QRModal from "@/components/QRModal";

// Standalone mode (with built-in button)
<QRModal />

// Controlled mode
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(true)}>联系我们</button>
<QRModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
```

---

### Utility Components

#### [StructuredData](./StructuredData.md)
SEO utility for injecting JSON-LD structured data into document head.

**Key Features:**
- Single or multiple schemas
- Automatic script injection/cleanup
- Schema.org support
- Rich snippets for search results

**Quick Start:**
```tsx
import StructuredData from "@/components/StructuredData";

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": "https://example.com"
};

<StructuredData data={schema} />
```

---

## Accessibility Guidelines

All components follow **WCAG 2.1 AA** standards. Key accessibility features include:

### Color Contrast
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3.0:1 contrast ratio
- White text on dark gradients for readability
- Avoid low-contrast color combinations

### Keyboard Navigation
- All interactive elements accessible via keyboard
- Visible focus indicators on all focusable elements
- Logical tab order
- Escape key support for modals and menus

### Screen Readers
- Semantic HTML (header, nav, main, footer, etc.)
- ARIA labels and attributes where needed
- Alternative text for images
- Screen reader-only text for icons

### Motion
- Respects `prefers-reduced-motion` media query
- CSS transitions can be disabled by user preference
- No auto-playing animations that can't be paused

### Common Accessibility Patterns

#### Focus Management
```tsx
// Return focus to trigger after modal closes
const triggerRef = useRef<HTMLButtonElement>(null);

const closeModal = () => {
  setIsOpen(false);
  triggerRef.current?.focus();
};
```

#### ARIA Labels
```tsx
// Descriptive labels for icon buttons
<button aria-label="关闭菜单">
  <CloseIcon />
</button>
```

#### Keyboard Support
```tsx
// Handle Escape key
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  
  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, []);
```

## Performance Best Practices

### Component Optimization

1. **Use Client Components Sparingly**
   - Only add `"use client"` when needed for interactivity
   - Keep server components for static content

2. **Image Optimization**
   - Use Next.js Image component
   - Add blur placeholders for static imports
   - Specify appropriate sizes

3. **Lazy Loading**
   - Use dynamic imports for heavy components
   - Implement code splitting at route level

4. **Minimize Re-renders**
   - Use React.memo for expensive components
   - Optimize state management
   - Use proper keys in lists

### Example: Lazy Loading

```tsx
import dynamic from 'next/dynamic';

const ImageCarousel = dynamic(() => import('@/components/ImageCarousel'), {
  loading: () => <div>加载中...</div>,
  ssr: false
});
```

### Example: Memoization

```tsx
import { memo } from 'react';

const ToolCard = memo(({ id, name, description, ...props }) => {
  // Component logic
});

export default ToolCard;
```

## Common Integration Patterns

### Layout Setup

```tsx
// app/layout.tsx
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI创意工坊",
  "url": "https://example.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="flex flex-col min-h-screen">
        <SkipLink />
        <StructuredData data={organizationSchema} />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### Features Section

```tsx
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: "🎨",
    title: "AI图像处理",
    description: "强大的AI驱动图像编辑工具",
    items: ["智能抠图", "背景替换", "图像增强"]
  },
  // More features...
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          核心功能
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Tools Grid

```tsx
import ToolCard from "@/components/ToolCard";

const tools = [
  {
    id: "ai-cutout",
    name: "智能抠图",
    description: "AI驱动的精准抠图工具",
    icon: "✂️",
    category: "图片处理",
    gradientColor: "from-blue-500 to-cyan-500",
    features: ["自动识别", "精确处理", "批量支持"]
  },
  // More tools...
];

export default function ToolsPage() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} {...tool} />
      ))}
    </div>
  );
}
```

### Hero with Carousel and Modal

```tsx
import ImageCarousel from "@/components/ImageCarousel";
import QRModal from "@/components/QRModal";

export default function Hero() {
  const carouselItems = [
    {
      id: "1",
      image: "/images/hero1.jpg",
      title: "AI创意工坊",
      description: "专业的AI工具平台"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          欢迎使用AI创意工坊
        </h1>
        <ImageCarousel items={carouselItems} />
        <div className="text-center mt-8">
          <QRModal />
        </div>
      </div>
    </section>
  );
}
```

## TypeScript Support

All components are written in TypeScript with exported interfaces:

```typescript
// Component props
import { FeatureCardProps } from "@/components/FeatureCard";
import { ToolCardProps } from "@/components/ToolCard";
import { ImageCarouselProps, CarouselItem } from "@/components/ImageCarousel";
import { QRModalProps } from "@/components/QRModal";
import { StructuredDataProps } from "@/components/StructuredData";

// Usage with types
const tool: ToolCardProps = {
  id: "ai-cutout",
  name: "智能抠图",
  description: "AI驱动的精准抠图工具",
  icon: "✂️",
  gradientColor: "from-blue-500 to-cyan-500"
};
```

## Testing Guidelines

### Unit Testing

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToolCard from "@/components/ToolCard";

describe("ToolCard", () => {
  it("renders tool information", () => {
    render(
      <ToolCard
        id="test-tool"
        name="测试工具"
        description="测试描述"
        icon="🔧"
        gradientColor="from-blue-500 to-cyan-500"
      />
    );
    
    expect(screen.getByText("测试工具")).toBeInTheDocument();
    expect(screen.getByText("测试描述")).toBeInTheDocument();
  });
  
  it("navigates to tool page when clicked", async () => {
    const user = userEvent.setup();
    render(<ToolCard {...props} />);
    
    const link = screen.getByRole("link");
    await user.click(link);
    
    expect(window.location.pathname).toBe("/tools/test-tool");
  });
});
```

### Accessibility Testing

```tsx
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Header accessibility", () => {
  it("should not have any accessibility violations", async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Styling Guide

### Tailwind Conventions

All components use Tailwind CSS utilities. Common patterns:

#### Gradients
```tsx
// Blue to purple (primary brand gradient)
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Subtle background gradient
className="bg-gradient-to-br from-white to-gray-50"
```

#### Shadows & Hover Effects
```tsx
// Standard shadow progression
className="shadow-md hover:shadow-lg transition-all"

// Elevation with translate
className="hover:shadow-xl hover:-translate-y-1 transition-all"
```

#### Text Hierarchy
```tsx
// Headings
className="text-4xl font-bold text-gray-900"
className="text-2xl font-semibold text-gray-900"

// Body text
className="text-gray-600 text-base"
className="text-gray-500 text-sm"
```

#### Responsive Design
```tsx
// Mobile-first approach
className="text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Component Relationships

```
Layout Components
├── SkipLink (accessibility)
├── Header (navigation)
│   └── Can integrate QRModal
├── Main Content
│   ├── ImageCarousel (hero/gallery)
│   ├── FeatureCard (features grid)
│   └── ToolCard (tools listing)
└── Footer (site info)

Utility Components
├── StructuredData (SEO)
└── QRModal (call-to-action)
```

## Migration & Updates

When updating components:

1. **Check Dependencies**: Review component relationships
2. **Test Accessibility**: Run axe tests
3. **Validate TypeScript**: Ensure types are correct
4. **Update Documentation**: Keep this guide in sync
5. **Test Integrations**: Check usage in pages
6. **Review Performance**: Monitor bundle size

## Troubleshooting

### Common Issues

#### Component not rendering
- Check that all required props are provided
- Verify imports are correct
- Check for TypeScript errors

#### Styles not applying
- Ensure Tailwind classes are not purged
- Check for conflicting CSS
- Verify class names are correct

#### Accessibility issues
- Run axe DevTools in browser
- Test with keyboard navigation
- Verify ARIA attributes

#### Performance issues
- Check for unnecessary re-renders
- Optimize images and assets
- Use React DevTools Profiler

## Resources

### Internal Documentation
- [Accessibility Guidelines](../ACCESSIBILITY_IMPROVEMENTS.md)
- [Image Optimization](../IMAGE_OPTIMIZATION_SUMMARY.md)
- [Structured Data Validation](../STRUCTURED_DATA_VALIDATION.md)

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org](https://schema.org)

## Contributing

When adding new components:

1. Follow existing patterns and conventions
2. Include TypeScript types
3. Add accessibility features
4. Write comprehensive documentation
5. Include usage examples
6. Add performance considerations
7. Test across browsers
8. Run `npm run lint` before committing

## License

This documentation is part of the AI创意工坊 project. All rights reserved.

---

**Last Updated**: 2024
**Maintained By**: AI创意工坊 Development Team
