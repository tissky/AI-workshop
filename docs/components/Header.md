# Header Component

## Overview

The Header component is a sticky navigation bar that provides site-wide navigation with responsive mobile menu support. It features a gradient logo, desktop navigation links, and a hamburger menu for mobile devices.

## Import

```typescript
import Header from "@/components/Header";
```

## Props

This component does not accept any props. All navigation links and behavior are internally configured.

## Usage

### Basic Usage

```tsx
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
```

## Features

- **Sticky Positioning**: Header remains visible at the top when scrolling
- **Responsive Design**: Automatically switches between desktop and mobile layouts
- **Mobile Menu**: Hamburger menu with slide-down navigation on mobile devices
- **Keyboard Navigation**: Full keyboard support with Escape key to close menu
- **Gradient Branding**: Blue-to-purple gradient text for the logo
- **Semi-transparent Background**: Uses backdrop blur for modern glass effect

## Navigation Links

### Desktop Navigation
- 功能特色 (Features) - `#features`
- AI工具 (AI Tools) - `/tools`
- 模型库 (Model Library) - `#models`
- 价格方案 (Pricing) - `#pricing`
- 开始使用 (Get Started) - Button with gradient background

### Mobile Navigation
Same navigation links as desktop, but displayed in a vertical layout with full-width button.

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Keyboard Navigation**: Menu can be opened/closed with Enter/Space keys
- ✅ **Escape Key Support**: Press Escape to close mobile menu
- ✅ **ARIA Attributes**: Menu button includes `aria-expanded` and `aria-label`
- ✅ **Focus Management**: Proper focus indicators on all interactive elements
- ✅ **Semantic HTML**: Uses `<header>`, `<nav>`, and appropriate elements
- ✅ **Color Contrast**: Text colors meet WCAG AA standards (4.5:1 minimum)
- ✅ **Touch Targets**: Mobile menu button is at least 44x44px

### Accessibility Checklist

- [x] Keyboard accessible (Tab, Enter, Space, Escape)
- [x] Screen reader friendly with semantic markup
- [x] ARIA labels for menu button
- [x] Sufficient color contrast on all text
- [x] Focus visible on all interactive elements
- [x] Mobile menu toggle is keyboard accessible
- [x] Role and aria-label for mobile navigation

## Performance Considerations

### Optimization Strategies

1. **Client Component**: Uses `"use client"` directive for interactivity
2. **Event Cleanup**: Properly removes event listeners on unmount
3. **Conditional Rendering**: Mobile menu only renders when open
4. **CSS Transitions**: Uses hardware-accelerated CSS for smooth animations
5. **Sticky Positioning**: Uses CSS `position: sticky` instead of JavaScript scroll listeners

### Best Practices

- ✅ Minimal JavaScript - only used for menu toggle state
- ✅ No layout shift - sticky header has fixed height
- ✅ Lightweight - no external dependencies beyond Next.js/React
- ✅ Efficient re-renders - state changes only affect menu visibility

## Integration Tips

### Adding to Layout

Place the Header in your root layout for site-wide navigation:

```tsx
// app/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### Skip Link Integration

For better accessibility, add a skip link before the header:

```tsx
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">{children}</main>
    </>
  );
}
```

### Customizing Navigation Links

To customize navigation links, modify the component directly. The links are hardcoded in two locations:

1. Desktop navigation (`nav` element around line 44)
2. Mobile navigation (conditional render around line 69)

### Styling Considerations

The Header uses these key Tailwind classes:
- `sticky top-0 z-50` - Keeps header at top with high z-index
- `backdrop-blur-sm` - Creates glass effect
- `bg-white/80` - Semi-transparent white background
- `border-b` - Subtle bottom border

To customize, adjust these classes or extend with additional utility classes.

## State Management

### Internal State

The component manages one piece of state:

```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

This controls the visibility of the mobile menu.

### Effects

1. **Keyboard Handler**: Listens for Escape key when menu is open
2. **Cleanup**: Removes event listeners when menu closes or component unmounts

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Backdrop blur may fallback gracefully on older browsers

## Common Issues

### Issue: Mobile menu doesn't close on navigation

**Solution**: Add `onClick={() => setIsMenuOpen(false)}` to each mobile navigation link, or implement route change detection.

### Issue: Header overlaps content

**Solution**: Add `pt-16` (or equivalent padding) to the main content area to account for header height.

### Issue: Z-index conflicts

**Solution**: The header uses `z-50`. Ensure other fixed/sticky elements use lower z-index values.

## TypeScript

No exported types - component doesn't accept props.

### Internal Types

```typescript
// Event handlers
const handleMenuToggle = () => void;
const handleMenuKeyDown = (e: React.KeyboardEvent) => void;
```

## Related Components

- [SkipLink](./SkipLink.md) - Accessibility skip navigation
- [Footer](./Footer.md) - Site footer navigation
- [QRModal](./QRModal.md) - Contact modal that can be triggered from header

## Examples

### With Custom Button Action

Modify the "开始使用" button to open a modal:

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ... existing code ...

  return (
    <>
      <header>
        {/* ... existing header code ... */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full"
        >
          开始使用
        </button>
      </header>
      <QRModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
```

## Version History

- Initial implementation with responsive mobile menu
- Added keyboard navigation support
- Added ARIA attributes for accessibility
- Implemented backdrop blur effect
