"use client";

import { useState, createContext, useContext, HTMLAttributes, ButtonHTMLAttributes } from "react";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
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
  children: React.ReactNode;
}

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  children,
  className = "",
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

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "pills" | "underline";
}

export function TabsList({
  children,
  variant = "pills",
  className = "",
  ...props
}: TabsListProps) {
  const baseStyles = "flex gap-2";
  
  const variantStyles = {
    default: "border-b border-gray-200 gap-4",
    pills: "flex-wrap gap-2",
    underline: "border-b border-gray-200 gap-6",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div role="tablist" className={classes} {...props}>
      {children}
    </div>
  );
}

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

export function TabsTrigger({
  value,
  children,
  className = "",
  ...props
}: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  const baseStyles =
    "px-6 py-2 rounded-full transition-all font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const activeStyles = isActive
    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200";

  const classes = `${baseStyles} ${activeStyles} ${className}`;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      className={classes}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export function TabsContent({
  value,
  children,
  className = "",
  ...props
}: TabsContentProps) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
