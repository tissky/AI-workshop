/**
 * Navigation Configuration
 * Centralized navigation data to avoid duplication across pages
 */

export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface CTAConfig {
  label: string;
  url: string;
  ariaLabel: string;
}

/**
 * Primary navigation links
 */
export const primaryNavLinks: NavLink[] = [
  {
    label: "产品",
    href: "/products",
    ariaLabel: "查看产品列表",
  },
  {
    label: "AI工具",
    href: "/tools",
    ariaLabel: "浏览AI工具库",
  },
  {
    label: "模型库",
    href: "/models",
    ariaLabel: "探索AI模型库",
  },
  {
    label: "技术",
    href: "/technology",
    ariaLabel: "了解核心技术",
  },
  {
    label: "公司",
    href: "/company",
    ariaLabel: "关于我们",
  },
];

/**
 * CTA button configuration
 * Note: The actual URL is encoded and should be decoded at runtime
 */
export const ctaConfig: CTAConfig = {
  label: "即刻体验",
  url: "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=",
  ariaLabel: "即刻体验AI创意工坊",
};

/**
 * Brand configuration
 */
export const brandConfig = {
  name: "AI创意工坊",
  homeUrl: "/",
};
