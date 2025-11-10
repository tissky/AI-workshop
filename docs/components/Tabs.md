# Tabs Component

## Overview

Tabs is a fully accessible tabbed interface component built with React Context and ARIA patterns. Supports both controlled and uncontrolled modes with keyboard navigation and multiple visual variants following Apple's design aesthetic.

## Import

```typescript
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
// or
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
```

## Components

### Tabs (Container)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `defaultValue` | `string` | ✅ Yes | - | Initially active tab (uncontrolled) |
| `value` | `string` | ❌ No | `undefined` | Currently active tab (controlled) |
| `onValueChange` | `(value: string) => void` | ❌ No | `undefined` | Callback when tab changes |
| `children` | `React.ReactNode` | ✅ Yes | - | Tab components |

### TabsList

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `"default"` \| `"pills"` \| `"underline"` | ❌ No | `"pills"` | Visual style variant |
| `children` | `React.ReactNode` | ✅ Yes | - | TabsTrigger components |

### TabsTrigger

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` | ✅ Yes | - | Unique identifier for this tab |
| `children` | `React.ReactNode` | ✅ Yes | - | Tab label |

### TabsContent

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` | ✅ Yes | - | Unique identifier matching TabsTrigger |
| `children` | `React.ReactNode` | ✅ Yes | - | Content to display when active |

## Usage

### Basic Tabs (Uncontrolled)

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export default function Example() {
  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all">全部模型</TabsTrigger>
        <TabsTrigger value="image">图像处理</TabsTrigger>
        <TabsTrigger value="video">视频处理</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <p>显示所有模型...</p>
      </TabsContent>
      
      <TabsContent value="image">
        <p>显示图像处理模型...</p>
      </TabsContent>
      
      <TabsContent value="video">
        <p>显示视频处理模型...</p>
      </TabsContent>
    </Tabs>
  );
}
```

### Controlled Tabs

```tsx
"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export default function ControlledExample() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="all">全部</TabsTrigger>
        <TabsTrigger value="image">图像</TabsTrigger>
        <TabsTrigger value="video">视频</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <ModelList category="all" />
      </TabsContent>
      
      <TabsContent value="image">
        <ModelList category="image" />
      </TabsContent>
      
      <TabsContent value="video">
        <ModelList category="video" />
      </TabsContent>
    </Tabs>
  );
}
```

### Variant Examples

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export default function VariantExamples() {
  return (
    <div className="space-y-8">
      {/* Pills variant (default) */}
      <Tabs defaultValue="tab1">
        <TabsList variant="pills">
          <TabsTrigger value="tab1">Pills Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Pills Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Pills content 1</TabsContent>
        <TabsContent value="tab2">Pills content 2</TabsContent>
      </Tabs>

      {/* Underline variant */}
      <Tabs defaultValue="tab1">
        <TabsList variant="underline">
          <TabsTrigger value="tab1">Underline Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Underline Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Underline content 1</TabsContent>
        <TabsContent value="tab2">Underline content 2</TabsContent>
      </Tabs>

      {/* Default variant */}
      <Tabs defaultValue="tab1">
        <TabsList variant="default">
          <TabsTrigger value="tab1">Default Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Default Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Default content 1</TabsContent>
        <TabsContent value="tab2">Default content 2</TabsContent>
      </Tabs>
    </div>
  );
}
```

### Filter Tabs with Models

```tsx
"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import Card from "@/components/ui/Card";

export default function ModelFilter() {
  const models = [
    { id: 1, name: "图像增强", category: "image" },
    { id: 2, name: "背景移除", category: "image" },
    { id: 3, name: "视频去水印", category: "video" },
  ];

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-8">
        <TabsTrigger value="all">全部模型</TabsTrigger>
        <TabsTrigger value="image">图像处理</TabsTrigger>
        <TabsTrigger value="video">视频处理</TabsTrigger>
        <TabsTrigger value="text">文本生成</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <div className="grid md:grid-cols-3 gap-6">
          {models.map(model => (
            <Card key={model.id}>
              <h3 className="font-semibold">{model.name}</h3>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="image">
        <div className="grid md:grid-cols-3 gap-6">
          {models.filter(m => m.category === "image").map(model => (
            <Card key={model.id}>
              <h3 className="font-semibold">{model.name}</h3>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Other tab contents... */}
    </Tabs>
  );
}
```

### With Icons

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export default function IconTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview" className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          概览
        </TabsTrigger>
        <TabsTrigger value="details" className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          详情
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="details">Details content</TabsContent>
    </Tabs>
  );
}
```

## Accessibility

### WCAG 2.1 AA Compliance

- ✅ **Keyboard Navigation**: Tab, Shift+Tab, Arrow keys
- ✅ **ARIA Roles**: Proper `tablist`, `tab`, and `tabpanel` roles
- ✅ **ARIA States**: `aria-selected`, `aria-controls`, `aria-labelledby`
- ✅ **Focus Management**: Visible focus indicators
- ✅ **Screen Reader Support**: Proper announcements

### Keyboard Navigation

- **Tab**: Focus next trigger
- **Shift+Tab**: Focus previous trigger
- **Click/Enter**: Activate tab
- **Arrow Keys**: Navigate between triggers (future enhancement)

### Best Practices

```tsx
// ✅ Good: Descriptive tab labels
<TabsTrigger value="image">图像处理</TabsTrigger>

// ✅ Good: Meaningful value identifiers
<TabsTrigger value="image-processing">...</TabsTrigger>

// ❌ Bad: Generic labels
<TabsTrigger value="tab1">Tab 1</TabsTrigger>

// ❌ Bad: Non-unique values
<TabsTrigger value="tab">First</TabsTrigger>
<TabsTrigger value="tab">Second</TabsTrigger>  // Duplicate value!
```

## Apple Design Principles

### Clarity
- Clear visual distinction between active and inactive tabs
- Smooth gradient for active state
- Adequate spacing between tabs

### Deference
- Subtle transitions (200ms)
- Non-intrusive focus indicators
- Content-first design

### Depth
- Gradient backgrounds for active tabs
- Subtle hover states
- Rounded pill design

## Visual Reference

### Pills Variant (Active)
```
┌──────────┐  ┌──────────┐
│   全部   │  │   图像   │  ← Gradient blue-purple
└──────────┘  └──────────┘
   Active        Inactive (white bg, border)
```

### Underline Variant
```
  全部     图像    视频
  ────                    ← Blue underline on active
```

## TypeScript Support

```typescript
import { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from "@/components/ui/Tabs";

// Type-safe tab value
type TabValue = "all" | "image" | "video";

function ModelTabs() {
  const [activeTab, setActiveTab] = useState<TabValue>("all");
  
  return (
    <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabValue)}>
      {/* ... */}
    </Tabs>
  );
}
```

## Performance Considerations

- Uses React Context for efficient state sharing
- Only renders active tab content
- No unnecessary re-renders
- CSS-only animations

## Related Components

- **Button**: Similar focus and active states
- **Card**: Often used within tab content
- **ModelsFilter**: Previous inline implementation

## Common Patterns

### Data Fetching with Tabs

```tsx
"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

export default function DataTabs() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Fetch data when tab changes
    fetchData(activeTab).then(setData);
  }, [activeTab]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="all">全部</TabsTrigger>
        <TabsTrigger value="recent">最近</TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab}>
        {data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </TabsContent>
    </Tabs>
  );
}
```

## Reduced Motion Support

Respects `prefers-reduced-motion` for all transitions.

## Browser Support

- ✅ All modern browsers
- ✅ Requires JavaScript for tab switching

## Migration Guide

```tsx
// Before (inline buttons with state)
const [category, setCategory] = useState("all");

<div className="flex gap-4">
  <button onClick={() => setCategory("all")}>全部</button>
  <button onClick={() => setCategory("image")}>图像</button>
</div>

// After
<Tabs defaultValue="all" onValueChange={setCategory}>
  <TabsList>
    <TabsTrigger value="all">全部</TabsTrigger>
    <TabsTrigger value="image">图像</TabsTrigger>
  </TabsList>
  <TabsContent value="all">...</TabsContent>
  <TabsContent value="image">...</TabsContent>
</Tabs>
```
