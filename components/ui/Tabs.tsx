"use client";

import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  Children,
  isValidElement,
  HTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  variant: "pills" | "underline" | "segmented";
  size: "sm" | "md" | "lg";
  orientation: "horizontal" | "vertical";
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
}

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className = "",
  orientation = "horizontal",
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeTab = controlledValue !== undefined ? controlledValue : internalValue;

  const setActiveTab = (tab: string) => {
    if (controlledValue === undefined) {
      setInternalValue(tab);
    }
    onValueChange?.(tab);
  };

  // Extract variant and size from TabsList if present
  const [variant, setVariant] = useState<"pills" | "underline" | "segmented">("segmented");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  useEffect(() => {
    // Extract variant and size from children
    Children.forEach(children, (child) => {
      if (isValidElement<TabsListProps>(child) && child.type === TabsList) {
        if (child.props.variant) setVariant(child.props.variant);
        if (child.props.size) setSize(child.props.size);
      }
    });
  }, [children]);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, variant, size, orientation }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "pills" | "underline" | "segmented";
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
}

export function TabsList({
  children,
  variant = "segmented",
  size: _size = "md", // Prefix with underscore to indicate intentionally unused (passed via context)
  className = "",
  "aria-label": ariaLabel,
  ...props
}: TabsListProps) {
  const { orientation } = useTabsContext();

  const baseStyles = `flex ${orientation === "horizontal" ? "flex-row" : "flex-col"}`;

  const variantStyles = {
    pills: "gap-2 flex-wrap",
    underline: `gap-1 border-b border-border`,
    segmented: `gap-1 p-1 bg-muted rounded-xl inline-flex`,
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation={orientation}
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
}

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
}

export const TabsTrigger = ({
  value,
  children,
  className = "",
  onKeyDown,
  ...props
}: TabsTriggerProps) => {
  const { activeTab, setActiveTab, variant, size, orientation } = useTabsContext();
  const isActive = activeTab === value;
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const tablist = triggerRef.current?.closest('[role="tablist"]');
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]')) as HTMLButtonElement[];
    const currentIndex = tabs.indexOf(triggerRef.current!);

    let newIndex = currentIndex;
    const isHorizontal = orientation === "horizontal";
    const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";
    const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";

    if (e.key === nextKey) {
      e.preventDefault();
      newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    } else if (e.key === prevKey) {
      e.preventDefault();
      newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = tabs.length - 1;
    } else {
      onKeyDown?.(e);
      return;
    }

    tabs[newIndex]?.focus();
    tabs[newIndex]?.click();
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  // Base transition styles
  const baseStyles = `
    font-medium transition-all duration-200
    focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim();

  // Variant-specific styles
  const variantStyles = {
    pills: isActive
      ? "bg-accent text-accent-foreground shadow-sm rounded-full"
      : "bg-background text-foreground hover:bg-muted rounded-full border border-border",
    underline: isActive
      ? "border-b-2 border-accent text-foreground -mb-px"
      : "border-b-2 border-transparent text-muted-foreground hover:text-foreground hover:border-border",
    segmented: isActive
      ? "bg-background text-foreground shadow-sm rounded-lg"
      : "text-muted-foreground hover:text-foreground",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  return (
    <button
      ref={triggerRef}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      className={classes}
      onClick={() => setActiveTab(value)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
};

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
  forceMount?: boolean;
  lazy?: boolean;
}

export function TabsContent({
  value,
  children,
  className = "",
  forceMount = false,
  lazy = false,
  ...props
}: TabsContentProps) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;
  const [hasBeenActive, setHasBeenActive] = useState(isActive);

  useEffect(() => {
    if (isActive) {
      setHasBeenActive(true);
    }
  }, [isActive]);

  // If forceMount is true, always render but hide inactive
  if (forceMount) {
    return (
      <div
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        hidden={!isActive}
        tabIndex={0}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  }

  // If lazy, only render after first activation
  if (lazy && !hasBeenActive) {
    return null;
  }

  // Default: only render when active
  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
