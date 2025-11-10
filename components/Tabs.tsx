"use client";

import { useState, useRef, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  count?: number | string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export default function Tabs({ 
  tabs, 
  defaultTab, 
  onChange,
  className = "" 
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (onChange) {
      onChange(activeTab);
    }
  }, [activeTab, onChange]);

  const handleTabClick = (tabId: string, index: number) => {
    setActiveTab(tabId);
    tabsRef.current[index]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = index > 0 ? index - 1 : tabs.length - 1;
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = index < tabs.length - 1 ? index + 1 : 0;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = tabs.length - 1;
    } else {
      return;
    }

    setActiveTab(tabs[newIndex].id);
    tabsRef.current[newIndex]?.focus();
  };

  return (
    <div className={`${className}`}>
      <div 
        role="tablist" 
        aria-label="工具分类"
        className="flex gap-2 overflow-x-auto hide-scrollbar border-b border-border"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              ref={(el) => { tabsRef.current[index] = el; }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(tab.id, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`
                px-4 py-3 text-sm font-medium whitespace-nowrap
                border-b-2 transition-all duration-200
                ${isActive 
                  ? 'border-accent text-accent' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }
                focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
              `}
            >
              {tab.label}
              {tab.count && (
                <span className={`ml-2 text-xs ${isActive ? 'text-accent' : 'text-muted-foreground'}`}>
                  ({tab.count})
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
