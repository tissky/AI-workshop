# Components Directory

This directory contains all reusable React components for the AI创意工坊 marketing site.

## Directory Structure

```
components/
├── ui/                    # Primitive UI components
│   ├── Button.tsx         # Reusable button component
│   └── Button.example.md  # Button usage documentation
├── sections/              # Page section components
│   ├── Hero.tsx          # Reusable hero section
│   └── Hero.example.md   # Hero usage documentation
├── Footer.tsx            # Site footer
├── Header.tsx            # Site header
├── HomeHero.tsx          # Home page hero (uses Hero component)
├── HomeCTA.tsx           # Home page CTA section
├── HomeNav.tsx           # Home page navigation
├── ToolsCTA.tsx          # Tools page CTA section
├── QRModal.tsx           # QR code modal
├── ImageCarousel.tsx     # Auto-playing image carousel
├── ModelsFilter.tsx      # Models page filter tabs
├── ModelFilter.tsx       # Alternative model filter
├── ToolCard.tsx          # Tool card component
├── FeatureCard.tsx       # Feature card component
├── SkipLink.tsx          # Accessibility skip link
├── StructuredData.tsx    # Schema.org structured data
└── README.md             # This file
```

## Component Categories

### 🎨 Primitive UI Components (`ui/`)

These are the foundational building blocks that can be used throughout the site.

#### Button
Reusable button component with variants, sizes, and accessibility features.
- See: `ui/Button.tsx`
- Docs: `ui/Button.example.md`

**Quick Example:**
```tsx
import Button from "@/components/ui/Button";

<Button variant="primary" onClick={handleClick} aria-label="Start now">
  开始使用
</Button>
```

### 📐 Section Components (`sections/`)

Larger, composed components that represent full page sections.

#### Hero
Reusable hero section following Apple's minimal design principles.
- See: `sections/Hero.tsx`
- Docs: `sections/Hero.example.md`

**Quick Example:**
```tsx
import Hero from "@/components/sections/Hero";

<Hero
  title="AI创意工坊"
  subtitle="释放无限创意可能"
  description="集成30+专业AI工具"
  ctas={[
    { label: "即刻体验", onClick: handleTry, ariaLabel: "Try now" }
  ]}
/>
```

### 🧩 Page-Specific Components

Components designed for specific pages but can be adapted for reuse.

- **HomeHero**: Home page hero section (wraps Hero component)
- **HomeCTA**: Home page call-to-action section
- **HomeNav**: Home page navigation (interactive)
- **ToolsCTA**: Tools page call-to-action section

### 🎡 Interactive Components

Components with client-side state and interactivity.

- **QRModal**: Modal displaying QR code
- **ImageCarousel**: Auto-playing image carousel with controls
- **ModelsFilter/ModelFilter**: Filter tabs with state management

### 🏗️ Layout Components

- **Header**: Site-wide header navigation
- **Footer**: Site-wide footer with links
- **SkipLink**: Accessibility skip-to-content link

### 📇 Content Components

- **ToolCard**: Card for displaying tool information
- **FeatureCard**: Card for displaying feature highlights

### 🔍 SEO Components

- **StructuredData**: Renders Schema.org JSON-LD for SEO

## Component Guidelines

### Server vs. Client Components

**Server Components** (default):
- No `"use client"` directive
- Can use async/await
- Can export ISR config (`revalidate`, `dynamic`)
- Cannot use hooks or browser APIs

**Client Components**:
- Must have `"use client"` directive at the top
- Can use hooks (useState, useEffect, etc.)
- Can access browser APIs
- Cannot export ISR config

**Rule of Thumb**: 
- Use server components by default
- Only add `"use client"` when you need interactivity

### Using the New Components

#### When to Use Hero Component:
- ✅ Landing sections on any page
- ✅ Product showcase sections
- ✅ Feature highlight sections
- ✅ Any section with a headline + CTAs

#### When to Use Button Component:
- ✅ All clickable actions (not links)
- ✅ Form submissions
- ✅ Modal triggers
- ✅ Any button that needs consistent styling

#### When NOT to Use:
- ❌ Navigation links (use Next.js `<Link>`)
- ❌ Text links in paragraphs (use `<a>`)
- ❌ Icon-only buttons (Button expects text children)

### Accessibility Best Practices

1. **Always provide ARIA labels**:
   ```tsx
   <Button onClick={handleClick} aria-label="Close modal">
     ✕
   </Button>
   ```

2. **Maintain heading hierarchy**:
   - Only one `<h1>` per page
   - Don't skip heading levels
   - Hero component handles this automatically

3. **Use semantic HTML**:
   - `<button>` for actions
   - `<a>` for navigation
   - `<section>` for major content areas

4. **Test keyboard navigation**:
   - All interactive elements reachable via Tab
   - Enter/Space activate buttons
   - Escape closes modals

### Styling Guidelines

1. **Use Tailwind utilities**: Prefer Tailwind classes over custom CSS
2. **Use semantic tokens**: Use theme variables (e.g., `bg-primary`, `text-accent`)
3. **Respect motion preferences**: Use `motion-safe:` prefix for animations
4. **Follow spacing scale**: Use 4px-based spacing units (4, 8, 12, 16, etc.)
5. **Maintain consistency**: Refer to existing components for patterns

### Performance Tips

1. **Import only what you need**:
   ```tsx
   // ✅ Good
   import Button from "@/components/ui/Button";
   
   // ❌ Bad (if barrel export existed)
   import { Button } from "@/components";
   ```

2. **Use Next.js Image component** for images:
   ```tsx
   import Image from "next/image";
   
   <Image src="/image.png" alt="..." width={800} height={600} />
   ```

3. **Lazy load heavy components**:
   ```tsx
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <Spinner />
   });
   ```

## Common Patterns

### Modal with Button
```tsx
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/Modal";

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)} aria-label="Open dialog">
        打开对话框
      </Button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}
```

### Hero with Multiple CTAs
```tsx
import Hero, { HeroCTA } from "@/components/sections/Hero";

const ctas: HeroCTA[] = [
  {
    label: "主要操作",
    onClick: () => console.log("Primary"),
    variant: "primary",
    ariaLabel: "Execute primary action"
  },
  {
    label: "次要操作",
    onClick: () => console.log("Secondary"),
    variant: "secondary",
    ariaLabel: "Execute secondary action"
  },
  {
    label: "了解更多",
    onClick: () => console.log("Learn more"),
    variant: "outline",
    ariaLabel: "Learn more about this feature"
  }
];

<Hero title="欢迎" ctas={ctas} />
```

### Split Server/Client Pattern
```tsx
// page.tsx (Server Component)
import PageContent from "./page-content";

export const revalidate = 3600;

export default function MyPage() {
  return <PageContent />;
}

// page-content.tsx (Client Component)
"use client";

import Button from "@/components/ui/Button";

export default function PageContent() {
  return (
    <div>
      <Button onClick={() => console.log("Click")}>
        Click me
      </Button>
    </div>
  );
}
```

## Testing Your Components

1. **Build test**: Run `npm run build` to catch type errors
2. **Lint test**: Run `npm run lint` to catch code issues
3. **Visual test**: Run `npm run dev` and check in browser
4. **Accessibility test**: Use keyboard navigation and screen reader
5. **Responsive test**: Test on mobile, tablet, and desktop sizes

## Need Help?

- Check the `.example.md` files for detailed usage examples
- Refer to existing components for patterns
- Review `app/globals.css` for available utility classes
- See `HERO_REDESIGN_SUMMARY.md` for implementation details

## Contributing

When adding new components:

1. Place in appropriate directory (`ui/`, `sections/`, or root)
2. Add TypeScript types for all props
3. Include accessibility features (ARIA labels, keyboard support)
4. Create `.example.md` documentation
5. Test build and lint before committing
6. Follow existing patterns and conventions
