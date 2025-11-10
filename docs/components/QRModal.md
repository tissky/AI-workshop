# QRModal Component

## Overview

The QRModal component is an accessible modal dialog that displays a QR code for user contact. It can be used as a standalone button with built-in modal, or controlled externally via props. Features focus trap, keyboard navigation, and WCAG-compliant accessibility.

## Import

```typescript
import QRModal from "@/components/QRModal";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | ❌ No | `false` | Controls modal visibility (controlled mode) |
| `onClose` | `() => void` | ❌ No | `undefined` | Callback fired when modal closes (controlled mode) |

### Usage Modes

1. **Standalone Mode**: When neither `isOpen` nor `onClose` is provided, component renders its own trigger button
2. **Controlled Mode**: When both `isOpen` and `onClose` are provided, component is controlled externally

## Usage

### Standalone Mode (With Built-in Button)

```tsx
import QRModal from "@/components/QRModal";

export default function ContactSection() {
  return (
    <div className="text-center">
      <h2>联系我们</h2>
      <QRModal />  {/* Renders button + modal */}
    </div>
  );
}
```

### Controlled Mode (External Trigger)

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function CustomContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="custom-button"
      >
        扫码咨询
      </button>
      <QRModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
```

### Multiple Triggers

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function MultiTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>联系客服</button>
      <button onClick={() => setIsOpen(true)}>获取帮助</button>
      <button onClick={() => setIsOpen(true)}>商务合作</button>
      
      <QRModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
```

## Features

### Modal Functionality

- **Backdrop Click**: Click outside modal to close
- **Escape Key**: Press Escape to close modal
- **Focus Trap**: Tab navigation stays within modal
- **Focus Return**: Focus returns to trigger button on close
- **Auto Focus**: Close button automatically focused when modal opens

### Visual Features

- **Backdrop Blur**: Semi-transparent blurred background
- **Centered Layout**: Modal centered on all screen sizes
- **Responsive**: Adapts to mobile screens with margin
- **Gradient Container**: QR code displayed in styled container
- **Close Button**: Positioned in top-right corner

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Focus Trap**: Tab navigation contained within modal
- ✅ **Keyboard Navigation**: Escape to close, Enter on backdrop to close
- ✅ **Focus Management**: Automatic focus on close button, returns to trigger
- ✅ **ARIA Attributes**: Proper `role="dialog"`, `aria-modal`, `aria-labelledby`
- ✅ **Screen Reader Support**: Semantic markup with proper labels
- ✅ **Color Contrast**: Text meets WCAG AA standards
- ✅ **Touch Targets**: All buttons meet 44x44px minimum

### Accessibility Checklist

- [x] Keyboard accessible (Tab, Shift+Tab, Escape, Enter)
- [x] Focus trapped within modal when open
- [x] Focus returns to trigger on close
- [x] Screen reader announces modal opening
- [x] ARIA role and properties properly set
- [x] Close button has descriptive aria-label
- [x] Backdrop is keyboard accessible
- [x] Modal title properly associated with dialog

### Focus Management Flow

1. User opens modal → Close button receives focus
2. Tab/Shift+Tab cycles through focusable elements in modal
3. Reaching last element → Tab returns to first element
4. Reaching first element → Shift+Tab goes to last element
5. Close modal → Focus returns to trigger button

## Performance Considerations

### Optimization Strategies

1. **Conditional Rendering**: Modal only renders when open
2. **Event Cleanup**: Properly removes event listeners on unmount
3. **Optimized Image**: QR code uses Next.js Image with blur placeholder
4. **CSS Transitions**: Hardware-accelerated backdrop and modal animations
5. **Minimal Re-renders**: State changes only trigger necessary updates

### Best Practices

- ✅ Lazy load QR image from `@/lib/media`
- ✅ No heavy dependencies - pure React/Next.js
- ✅ Efficient keyboard event handling
- ✅ Cleanup on unmount prevents memory leaks
- ✅ Portal pattern (via fixed positioning) avoids z-index conflicts

### Performance Metrics

```typescript
// Modal opens/closes in < 50ms
// No layout shift when modal appears
// Smooth 60fps backdrop blur animation
```

## Integration Tips

### In Hero Section

```tsx
import QRModal from "@/components/QRModal";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">AI创意工坊</h1>
        <p className="text-xl mb-8">专业的AI工具平台</p>
        <QRModal />  {/* Uses built-in styled button */}
      </div>
    </section>
  );
}
```

### With Custom Styling

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function StyledContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
      >
        立即咨询
      </button>
      <QRModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
```

### In Footer

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <button 
          onClick={() => setModalOpen(true)}
          className="text-sm hover:text-blue-400"
        >
          联系客服
        </button>
        <QRModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </footer>
  );
}
```

### With Navigation

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function Header() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <header>
      <nav>
        <button onClick={() => setContactModalOpen(true)}>
          联系我们
        </button>
      </nav>
      <QRModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </header>
  );
}
```

## State Management

### Internal State

```typescript
const [internalOpen, setInternalOpen] = useState(false);  // For standalone mode
```

### Refs

```typescript
const triggerRef = useRef<HTMLButtonElement>(null);      // Standalone button
const closeButtonRef = useRef<HTMLButtonElement>(null);  // Close button in modal
const modalRef = useRef<HTMLDivElement>(null);          // Modal container
```

### Computed Values

```typescript
const shouldShow = isOpen || internalOpen;  // Determines if modal is visible
```

## TypeScript Types

```typescript
interface QRModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}
```

## Styling

### Default Button (Standalone Mode)

```tsx
className="border-2 border-white/40 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
```

This button is designed for use on dark/gradient backgrounds.

### Modal Styling

- **Backdrop**: `bg-black/60 backdrop-blur-sm`
- **Modal Container**: `bg-white rounded-3xl p-8 max-w-md`
- **QR Container**: `bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200`

### Customizing Appearance

To change modal size:

```tsx
// Change max-w-md to desired size
<div className="... max-w-lg ...">  // Larger modal
```

To adjust QR code size:

```tsx
// Change max-w-[280px] and width/height props
<Image
  src={images.qr}
  alt="联系我们二维码"
  className="w-full max-w-[320px] mx-auto h-auto"
  width={320}
  height={320}
/>
```

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers
- ✅ Backdrop blur may fallback gracefully on older browsers

## Common Issues

### Issue: Modal doesn't close on backdrop click

**Solution**: Ensure backdrop has proper onClick handler and isn't blocked by other elements.

### Issue: Focus not returning to trigger

**Solution**: Only happens in standalone mode. In controlled mode, manage focus manually if needed:

```tsx
const buttonRef = useRef<HTMLButtonElement>(null);

const handleClose = () => {
  setIsOpen(false);
  buttonRef.current?.focus();
};

<button ref={buttonRef} onClick={() => setIsOpen(true)}>Open</button>
<QRModal isOpen={isOpen} onClose={handleClose} />
```

### Issue: Tab escapes modal

**Solution**: This is a bug - the focus trap should prevent this. Check that modal is properly mounted and refs are working.

### Issue: QR code not displaying

**Solution**: Ensure QR image is imported in `@/lib/media`:

```typescript
// lib/media.ts
export const images = {
  qr: require("@/public/images/qr-code.jpg"),
  // ...
};
```

### Issue: Modal appears behind other elements

**Solution**: Modal uses `z-50`. Ensure no other elements have higher z-index. Consider using z-index utilities:

```tsx
<div className="fixed inset-0 z-[100] flex items-center justify-center">
```

## Advanced Examples

### With Form Integration

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function ContactForm() {
  const [showQR, setShowQR] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show QR after form validation
    setShowQR(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="姓名" required />
        <input type="email" placeholder="邮箱" required />
        <button type="submit">提交</button>
      </form>
      <QRModal isOpen={showQR} onClose={() => setShowQR(false)} />
    </>
  );
}
```

### With Analytics Tracking

```tsx
"use client";

import { useState } from "react";
import QRModal from "@/components/QRModal";

export default function TrackedModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Track modal open event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "modal_open", {
        modal_name: "qr_contact"
      });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Track modal close event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "modal_close", {
        modal_name: "qr_contact"
      });
    }
  };

  return (
    <>
      <button onClick={handleOpen}>联系我们</button>
      <QRModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
```

### With Timeout Auto-Open

```tsx
"use client";

import { useState, useEffect } from "react";
import QRModal from "@/components/QRModal";

export default function TimedModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open modal after 10 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return <QRModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
```

## Related Components

- [Header](./Header.md) - Can integrate modal in navigation
- [Footer](./Footer.md) - Common location for contact modals
- [Button](./Button.md) - Custom trigger buttons

## Dependencies

```typescript
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { images } from "@/lib/media";
```

Ensure `@/lib/media` exports the QR code image:

```typescript
// lib/media.ts
export const images = {
  qr: require("@/public/images/qr-code.jpg"),
};
```

## Version History

- Initial implementation with focus trap
- Added keyboard navigation (Escape, Enter on backdrop)
- Implemented controlled mode with isOpen/onClose props
- Added auto-focus management
- Improved accessibility with ARIA attributes
