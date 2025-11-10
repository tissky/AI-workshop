# ImageCarousel Component

## Overview

The ImageCarousel component is a feature-rich image carousel with autoplay, navigation controls, keyboard support, and thumbnail preview. It displays images with overlaid titles and descriptions, providing an engaging user experience.

## Import

```typescript
import ImageCarousel from "@/components/ImageCarousel";
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `CarouselItem[]` | ✅ Yes | - | Array of carousel items to display |
| `autoPlay` | `boolean` | ❌ No | `true` | Enable automatic slide progression |
| `interval` | `number` | ❌ No | `5000` | Time in milliseconds between slides (when autoPlay is true) |

### CarouselItem Interface

```typescript
interface CarouselItem {
  id: string;              // Unique identifier for the item
  image: string | StaticImageData;  // Image source (URL or imported image)
  title: string;           // Title displayed over the image
  description: string;     // Description displayed under the title
}
```

## Usage

### Basic Usage

```tsx
import ImageCarousel from "@/components/ImageCarousel";

const items = [
  {
    id: "1",
    image: "/images/slide1.jpg",
    title: "智能抠图",
    description: "AI驱动的精准抠图，一键去除背景"
  },
  {
    id: "2",
    image: "/images/slide2.jpg",
    title: "风格迁移",
    description: "将任何图片转换为艺术作品"
  }
];

export default function Gallery() {
  return <ImageCarousel items={items} />;
}
```

### With Custom Settings

```tsx
import ImageCarousel from "@/components/ImageCarousel";
import image1 from "@/public/images/product1.jpg";
import image2 from "@/public/images/product2.jpg";

const items = [
  {
    id: "product-1",
    image: image1, // Static import for automatic blur placeholder
    title: "AI图像增强",
    description: "提升图像质量和分辨率"
  },
  {
    id: "product-2",
    image: image2,
    title: "智能修复",
    description: "自动修复老照片和损坏图像"
  }
];

export default function ProductShowcase() {
  return (
    <ImageCarousel 
      items={items}
      autoPlay={true}
      interval={3000}  // Change slide every 3 seconds
    />
  );
}
```

### Disable AutoPlay

```tsx
<ImageCarousel 
  items={items}
  autoPlay={false}
/>
```

### Empty State Handling

```tsx
const items = [];

// Component returns null if items array is empty
<ImageCarousel items={items} />  // Renders nothing
```

## Features

### Navigation Options

1. **Arrow Buttons**: Left/right arrows appear on hover
2. **Dot Indicators**: Click any dot to jump to specific slide
3. **Thumbnail Strip**: Click thumbnail to navigate (displayed below main image)
4. **Keyboard Navigation**: Left/Right arrow keys when carousel is focused

### Automatic Playback

- Automatically advances to next slide based on `interval` prop
- Pauses on mouse hover or keyboard focus
- Resumes when mouse leaves or focus is lost
- Can be disabled with `autoPlay={false}`

### Image Optimization

- Uses Next.js Image component for automatic optimization
- Lazy loading for better performance
- Responsive sizes based on viewport
- Blur placeholder support for static imports
- Priority loading for first slide

### Responsive Design

- Adjusts height based on screen size:
  - Mobile: `h-96` (384px)
  - Tablet: `h-[500px]` (500px)
  - Desktop: `h-[600px]` (600px)
- Thumbnail strip scrolls horizontally on mobile
- Touch-friendly controls

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Keyboard Navigation**: Left/Right arrow keys to navigate slides
- ✅ **Focus Management**: Keyboard controls only work when carousel is focused
- ✅ **Pause on Interaction**: Autoplay pauses on hover/focus
- ✅ **ARIA Labels**: All buttons have descriptive aria-labels
- ✅ **Alternative Text**: Images use title as alt text
- ✅ **Color Contrast**: Overlay text uses high-contrast white on dark gradient
- ✅ **Focus Indicators**: All interactive elements show focus state

### Accessibility Checklist

- [x] Keyboard accessible (Arrow keys, Tab)
- [x] Screen reader friendly with proper alt text and labels
- [x] Autoplay can be paused by user interaction
- [x] High contrast text on image overlays (white on dark gradient)
- [x] Focus visible on all interactive elements
- [x] Sufficient touch target sizes (48x48px minimum)
- [x] Respects `prefers-reduced-motion` (via global CSS)

### Motion Sensitivity

The component uses CSS transitions. To respect user preferences, ensure your global CSS includes:

```css
@media (prefers-reduced-motion: reduce) {
  .transition-opacity,
  .transition-transform,
  .transition-all {
    transition-duration: 0.01ms !important;
  }
}
```

## Performance Considerations

### Optimization Strategies

1. **Image Optimization**: Uses Next.js Image component with:
   - Automatic WebP conversion
   - Responsive sizes
   - Lazy loading (except first slide)
   - Blur placeholders for static imports

2. **Efficient State Management**:
   - Single state variable for current index
   - Minimal re-renders on navigation
   - Cleanup of timers and event listeners

3. **Conditional Rendering**:
   - Only one slide fully visible at a time (others at opacity-0)
   - Thumbnail strip only renders if multiple items exist

4. **Hardware Acceleration**:
   - Uses `opacity` and `transform` for smooth animations
   - GPU-accelerated CSS transitions

5. **Memory Management**:
   - Proper cleanup of intervals and event listeners
   - No memory leaks on unmount

### Performance Best Practices

- ✅ Use static imports for blur placeholders
- ✅ Optimize images before adding to carousel
- ✅ Keep item array reasonably sized (< 10 items recommended)
- ✅ Use appropriate image formats (WebP, AVIF when possible)
- ✅ Consider lazy loading for carousels below the fold

### Measuring Performance

```tsx
import { useState, useEffect } from "react";

function CarouselWithMetrics() {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('LCP:', entry);
      }
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }, []);

  return <ImageCarousel items={items} />;
}
```

## Integration Tips

### With Dynamic Data

```tsx
"use client";

import { useState, useEffect } from "react";
import ImageCarousel from "@/components/ImageCarousel";

export default function DynamicCarousel() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/carousel-items")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>加载中...</div>;
  if (items.length === 0) return <div>暂无内容</div>;

  return <ImageCarousel items={items} />;
}
```

### In Hero Section

```tsx
import ImageCarousel from "@/components/ImageCarousel";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">
          我们的产品
        </h1>
        <ImageCarousel items={productItems} interval={4000} />
      </div>
    </section>
  );
}
```

### With CMS Integration

```tsx
import ImageCarousel from "@/components/ImageCarousel";
import { getCarouselContent } from "@/lib/cms";

export default async function CMSCarousel() {
  const content = await getCarouselContent();
  
  const items = content.map(item => ({
    id: item.id,
    image: item.imageUrl,
    title: item.heading,
    description: item.text
  }));

  return <ImageCarousel items={items} />;
}
```

## State Management

### Internal State

```typescript
const [currentIndex, setCurrentIndex] = useState(0);  // Current slide index
const [isPaused, setIsPaused] = useState(false);      // Autoplay pause state
```

### Refs

```typescript
const carouselRef = useRef<HTMLDivElement>(null);  // Reference to carousel container
```

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers with touch support
- ✅ IE11 not supported (uses modern React hooks)

## Common Issues

### Issue: Images not loading

**Solution**: Ensure image paths are correct. For external URLs, add domains to `next.config.ts`:

```typescript
module.exports = {
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },
}
```

### Issue: Carousel doesn't autoplay

**Solution**: Check that:
1. `autoPlay` prop is `true` (default)
2. `items.length > 1`
3. Component is not constantly hovered/focused

### Issue: Keyboard navigation not working

**Solution**: Carousel must have focus. Click on it first or use Tab to focus it.

### Issue: Poor performance with many images

**Solution**: 
1. Optimize image sizes (recommended: max 2000px width)
2. Use static imports for blur placeholders
3. Limit carousel to 5-10 items
4. Consider pagination or separate galleries

## TypeScript Types

```typescript
interface CarouselItem {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}
```

## Styling Customization

### Overlay Gradient

The text overlay uses a bottom gradient. To customize:

```tsx
// Change from-black/70 to adjust darkness
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 md:p-8">
```

### Carousel Height

Adjust responsive heights by modifying:

```tsx
<div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
```

### Thumbnail Styling

Customize thumbnail appearance:

```tsx
className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2
  ${index === currentIndex 
    ? "border-blue-500 ring-2 ring-blue-200"  // Active state
    : "border-gray-200 hover:border-gray-300"  // Inactive state
  }
`}
```

## Related Components

- [ToolCard](./ToolCard.md) - Card component for grid displays
- [FeatureCard](./FeatureCard.md) - Feature highlight cards
- [QRModal](./QRModal.md) - Modal with similar interaction patterns

## Advanced Examples

### With External Controls

```tsx
"use client";

import { useState } from "react";
import ImageCarousel from "@/components/ImageCarousel";

export default function ControlledCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <ImageCarousel items={items} autoPlay={false} />
      <div className="flex gap-2 mt-4">
        <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}>
          上一张
        </button>
        <button onClick={() => setCurrentIndex(prev => Math.min(items.length - 1, prev + 1))}>
          下一张
        </button>
      </div>
    </div>
  );
}
```

### With Progress Bar

```tsx
// Note: Would require component modification to expose currentIndex
<div className="w-full h-1 bg-gray-200 mt-4">
  <div 
    className="h-full bg-blue-600 transition-all"
    style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
  />
</div>
```

## Version History

- Initial implementation with basic carousel functionality
- Added keyboard navigation support
- Added autoplay pause on hover/focus
- Implemented thumbnail strip
- Added blur placeholder support for static imports
