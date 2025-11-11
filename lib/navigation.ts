/**
 * Navigation Configuration
 * Centralized navigation data to avoid duplication across pages
 */

export interface NavLink {
  label: string;
  href: string;
  ariaLabel: string;
  isExternal?: boolean;
  encodedUrl?: string;
}

/**
 * Primary navigation links (5 items)
 * Last item (即刻体验) is a CTA that opens an external encoded URL in a new tab
 */
export const primaryNavLinks: NavLink[] = [
  {
    label: "首页",
    href: "/",
    ariaLabel: "返回首页",
  },
  {
    label: "定价",
    href: "/pricing",
    ariaLabel: "查看产品定价",
  },
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
    label: "即刻体验",
    href: "#",
    ariaLabel: "即刻体验AI创意工坊",
    isExternal: true,
    encodedUrl: "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=",
  },
];

/**
 * Brand configuration
 */
export const brandConfig = {
  name: "AI创意工坊",
  homeUrl: "/",
};

/**
 * CTA configuration (extracted from primaryNavLinks for convenience)
 */
export const ctaConfig = {
  label: "即刻体验",
  url: "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=",
 * CTA (Call-to-Action) Configuration
 * Centralized CTA button configuration for consistent use across pages
 */
export const ctaConfig = {
  url: "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=",
  text: "即刻体验",
  label: "即刻体验",
  target: "_blank" as const,
  ariaLabel: "即刻体验AI创意工坊",
};
