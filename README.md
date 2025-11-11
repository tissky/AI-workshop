# AI创意工坊 (AI Creative Workshop)

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.4.7-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)
![Lighthouse SEO](https://img.shields.io/badge/Lighthouse_SEO-100-success)
![WCAG 2.1 AA](https://img.shields.io/badge/WCAG_2.1-AA_Compliant-success)

一个集成30+专业AI工具的现代化创意平台，采用Apple风格设计系统，基于Next.js 15 + React 19 + Tailwind CSS 4构建

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-workshop)

</div>

---

## 📑 目录 (Table of Contents)

- [项目概览](#-项目概览-project-overview)
- [核心功能矩阵](#-核心功能矩阵-feature-matrix)
- [技术栈](#-技术栈-tech-stack)
- [架构概览](#-架构概览-architecture)
  - [App Router 路由树](#1-app-router-路由树)
  - [共享库与数据源](#2-共享库与数据源)
  - [组件架构](#3-组件架构)
- [开发工作流](#-开发工作流-development-workflow)
  - [环境要求](#1-环境要求)
  - [快速开始](#2-快速开始)
  - [开发脚本](#3-开发脚本)
  - [项目清理](#4-项目清理-project-cleanup)
  - [代码质量保证](#5-代码质量保证)
- [部署指南](#-部署指南-deployment)
  - [本地构建](#1-本地构建与预览)
  - [Vercel部署](#2-vercel-部署)
- [设计系统](#-设计系统-design-system)
- [文档导航](#-文档导航-documentation)
- [项目路线图](#-项目路线图-roadmap)
- [常见问题](#-常见问题-faq)
- [贡献指南](#-贡献指南-contributing)
- [许可证](#-许可证-license)

---

## 🎯 项目概览 (Project Overview)

**AI创意工坊**是一个专业的AI工具集成平台，为创意工作者、设计师、营销人员和内容创作者提供30+种智能化工具，覆盖图片处理、视频编辑、文案创作、AI模型应用和创意设计等多个领域。

### 核心特点

- **🎨 Apple风格设计** - 采用苹果设计语言，极简、专业、易用
- **⚡ 卓越性能** - ISR增量静态生成，1小时缓存策略，平均首屏加载<2秒
- **♿ 无障碍优先** - WCAG 2.1 AA标准，完整键盘导航支持
- **🔍 SEO优化** - Lighthouse SEO评分100/100，完整Schema.org结构化数据
- **📱 响应式设计** - 完美适配桌面、平板、移动设备
- **🚀 现代技术栈** - Next.js 15、React 19、Tailwind CSS 4、TypeScript 5

### 项目规模

- **30+** 专业AI工具
- **800+** 预训练模型库
- **100万+** 注册用户（展示数据）
- **500万+** 日均处理量（展示数据）

---

## ⚙️ 核心功能矩阵 (Feature Matrix)

### 1. 图片处理工具 (Image Processing) - 6项功能

| 工具 | 功能描述 | 应用场景 | 热门度 |
|------|---------|---------|--------|
| **背景替换** | 智能识别主体，一键替换背景 | 电商产品图、证件照、社交媒体 | 🔥 热门 |
| **产品图处理** | 电商专用优化，提升转化率 | 电商展示、营销海报、产品目录 | 🔥 热门 |
| **图片变高清** | AI超分辨率，细节增强 | 老照片修复、图片放大、印刷素材 | - |
| **去水印** | 智能去除水印，保持质量 | 素材清理、图片优化、内容创作 | - |
| **图片去人** | 自动识别并移除人物 | 风景照优化、产品图清理、背景素材 | - |
| **图片查重** | 检测相似图片，避免重复 | 内容去重、版权检测、素材管理 | - |

### 2. 视频处理工具 (Video Processing) - 4项功能

| 工具 | 功能描述 | 应用场景 | 热门度 |
|------|---------|---------|--------|
| **视频去水印** | 专业去除视频水印，不留痕迹 | 视频素材清理、版权处理、后期制作 | 🔥 热门 |
| **视频转图片** | 提取关键帧，生成精美图片 | 封面制作、内容截图、素材提取 | - |
| **视频批量水印** | 批量添加水印，保护版权 | 版权保护、品牌推广、内容标记 | - |
| **视频提取转图** | AI提取精彩瞬间 | 精彩回放、内容整理、快速预览 | - |

### 3. 文案创作工具 (Content Creation) - 4项功能

| 工具 | 功能描述 | 应用场景 | 热门度 |
|------|---------|---------|--------|
| **文案生成** | 19种风格智能文案创作 | 产品描述、广告文案、社交媒体、营销邮件 | 🔥 热门 |
| **手写签名** | 生成逼真手写签名图片 | 电子签名、文档签署、设计元素 | - |
| **SOP模板** | 95%全行业标准作业模板 | 流程标准化、培训文档、质量管理 | 🔥 热门 |
| **表情包生成** | 一键生成搞笑表情包 | 社交媒体、聊天工具、营销推广 | - |

### 4. AI模型应用 (AI Models) - 800+模型

| 工具/模型 | 功能描述 | 应用场景 | 热门度 |
|-----------|---------|---------|--------|
| **AI减视频工具** | 智能移除视频背景 | 视频制作、特效处理、直播背景 | 🔥 热门 |
| **快速手绘草图** | 文字提示词转草图 | 创意设计、原型设计、概念图 | - |
| **AI产品图** | 输入产品图生成同类型画报 | 电商展示、营销物料、产品目录 | - |
| **800+模型库** | 即用即取，一次训练多次使用 | 各行业应用、定制开发、快速部署 | 🔥 热门 |

### 5. 创意工具集 (Creative Tools) - 5项功能

| 工具 | 功能描述 | 应用场景 | 热门度 |
|------|---------|---------|--------|
| **一句话配图** | 一句话生成配图 | 社交媒体、海报制作、内容配图 | 🔥 热门 |
| **服装创意** | 为电商店铺生成服装创意 | 服装设计、搭配推荐、营销图片 | - |
| **隐私处理** | 人脸识别+智能打码 | 隐私保护、内容审核、合规处理 | - |
| **同城推荐** | 基于位置的智能推荐 | 本地营销、用户匹配、内容推荐 | - |
| **素材制作** | 企业商务表情包定制 | 企业宣传、内部沟通、品牌营销 | - |

---

## 🛠️ 技术栈 (Tech Stack)

### 核心框架与库

| 技术 | 版本 | 用途说明 |
|------|------|---------|
| **Next.js** | 15.4.7 | React全栈框架，App Router，ISR支持 |
| **React** | 19.1.0 | 前端UI库，Server Components优先 |
| **TypeScript** | ^5 | 类型安全的JavaScript超集 |
| **Tailwind CSS** | ^4 | 原子化CSS框架，使用@theme inline |
| **Node.js** | >=18.0.0 | JavaScript运行时环境 |

### 开发依赖

| 技术 | 版本 | 用途说明 |
|------|------|---------|
| **@tailwindcss/postcss** | ^4 | Tailwind CSS v4 PostCSS插件 |
| **schema-dts** | ^1.1.5 | Schema.org TypeScript类型定义 |
| **sharp** | ^0.34.5 | 图片优化库，Next.js Image组件依赖 |
| **eslint** | ^9 | 代码质量检查工具 |
| **@next/bundle-analyzer** | ^15.4.7 | 构建产物分析工具 |

### 性能与优化特性

- **ISR (Incremental Static Regeneration)**: 1小时缓存策略 (`revalidate = 3600`)
- **SSG (Static Site Generation)**: 动态路由预渲染 (`generateStaticParams()`)
- **Image Optimization**: Next.js Image组件 + sharp，支持AVIF/WebP
- **Code Splitting**: 自动按路由分割，首屏JS ~104KB
- **Font Optimization**: 系统字体栈，无外部字体加载

### SEO与可访问性

- **Structured Data**: Schema.org结构化数据 (Organization, WebSite, SoftwareApplication, BreadcrumbList)
- **Sitemap & Robots**: 动态生成 `/sitemap.xml` 和 `/robots.txt`
- **Accessibility**: WCAG 2.1 AA合规，完整键盘导航
- **Meta Tags**: 完整Open Graph、Twitter Card支持

---

## 🏗️ 架构概览 (Architecture)

### 1. App Router 路由树

```
app/
├── layout.tsx                 # 根布局 - Header + Footer包装
├── page.tsx                   # 首页入口 (Server Component)
├── page-content.tsx           # 首页内容 (Client Component with interactivity)
├── loading.tsx                # 全局加载骨架屏
├── globals.css                # 全局样式 + 设计令牌定义
├── design-tokens.md           # 设计令牌文档
├── robots.ts                  # 动态生成 robots.txt
├── sitemap.ts                 # 动态生成 sitemap.xml
│
├── products/
│   └── page.tsx               # 产品中心 - 4大核心产品
│
├── tools/
│   ├── page.tsx               # 工具库 - 30+工具分类展示
│   └── [id]/
│       └── page.tsx           # 工具详情页 (动态路由，SSG预渲染)
│
├── models/
│   └── page.tsx               # 模型库 - 800+专业模型
│
├── technology/
│   └── page.tsx               # 技术实力 - 核心技术介绍
│
├── company/
│   └── page.tsx               # 公司介绍 - 团队与优势
│
└── components-demo/
    └── page.tsx               # 组件展示页 (开发参考)
```

**路由配置说明**:
- 所有营销页面均配置 `export const revalidate = 3600` (1小时ISR)
- 所有营销页面均配置 `export const dynamic = "force-static"` (强制静态生成)
- 动态路由 `/tools/[id]` 使用 `generateStaticParams()` 预渲染所有工具详情页
- 构建时生成36个静态页面 (7个主路由 + 29个工具详情)

### 2. 共享库与数据源

```
lib/
├── tools.ts                   # 工具数据中心 - 所有工具定义和分类
│   ├── toolDetails            # 工具详细信息 (名称、图标、功能、用例、步骤)
│   ├── toolCategories         # 工具分类 (5大类别)
│   ├── getAllToolIds()        # 获取所有工具ID (用于generateStaticParams)
│   └── getToolDetail()        # 根据ID获取工具详情
│
├── metadata.ts                # SEO元数据生成器
│   ├── generatePageMetadata() # 页面元数据生成
│   └── defaultMetadata        # 默认元数据配置
│
├── seo.ts                     # Schema.org结构化数据生成
│   ├── generateOrganizationSchema()
│   ├── generateWebSiteSchema()
│   ├── generateBreadcrumbSchema()
│   └── generateSoftwareApplicationSchema()
│
├── design-tokens.ts           # 设计令牌运行时访问
│   ├── colorTokens, shadowTokens, spacingTokens, etc.
│   ├── getToken()             # 获取计算后的令牌值
│   └── 类型定义 (ColorToken, ShadowToken, etc.)
│
├── navigation.ts              # 导航配置
│   └── navLinks[]             # 主导航链接定义
│
└── media.ts                   # 媒体资源映射
    └── productImages          # 产品图片路径映射
```

**数据流说明**:
1. **Server Components** 从 `lib/tools.ts` 读取工具数据
2. **SEO元数据** 通过 `metadata.ts` 和 `seo.ts` 自动生成
3. **动态路由** 使用 `getAllToolIds()` 预渲染所有工具页面
4. **设计令牌** 在CSS中定义 (`globals.css`)，在TypeScript中访问 (`design-tokens.ts`)

### 3. 组件架构

```
components/
├── ui/                        # 原子级UI组件 (Primitive Components)
│   ├── Button.tsx             # 按钮 (4种变体: primary, secondary, outline, ghost)
│   ├── Card.tsx               # 卡片 (支持悬停效果、可点击)
│   ├── Badge.tsx              # 徽章 (6种变体: default, accent, success, warning, error, hot)
│   ├── Hero.tsx               # 简单Hero组件 (标题+描述+CTA)
│   ├── StatsGrid.tsx          # 统计数据网格
│   ├── TestimonialCard.tsx    # 客户评价卡片
│   ├── Tabs.tsx               # 标签页 (支持键盘导航)
│   └── AppLink.tsx            # 应用链接包装器
│
├── sections/                  # 复合型区块组件 (Section Components)
│   ├── Hero.tsx               # 完整Hero区块 (支持3种变体: default, gradient, dark)
│   ├── StatsGrid.tsx          # 统计数据区块
│   └── TestimonialCard.tsx    # 评价展示区块
│
├── skeletons/                 # 加载骨架屏组件
│   ├── HomeSkeleton.tsx       # 首页骨架屏
│   └── ToolsSkeleton.tsx      # 工具页骨架屏
│
├── providers/                 # Context Providers
│   └── ThemeProvider.tsx      # (可选) 主题提供者
│
├── Header.tsx                 # 站点头部 (响应式导航)
├── Footer.tsx                 # 站点底部 (5列导航)
├── SkipLink.tsx               # 无障碍跳转链接
├── StructuredData.tsx         # Schema.org JSON-LD渲染器
├── Breadcrumb.tsx             # 面包屑导航
├── ImageCarousel.tsx          # 自动播放图片轮播
├── QRModal.tsx                # 二维码弹窗 (Client Component)
├── ModelsFilter.tsx           # 模型筛选组件
├── ToolCard.tsx               # 工具卡片
├── FeatureCard.tsx            # 功能特色卡片
├── HomeHero.tsx               # 首页专用Hero
├── HomeCTA.tsx                # 首页CTA区块
├── HomeNav.tsx                # 首页导航按钮
├── ToolsCTA.tsx               # 工具页CTA区块
├── ToolsHero.tsx              # 工具页Hero
└── README.md                  # 组件使用文档
```

**组件设计原则**:
- **Server First**: 默认使用Server Components，仅交互组件标记`"use client"`
- **Atomic Design**: UI组件 (ui/) → 区块组件 (sections/) → 页面组件 (app/)
- **Type Safety**: 所有组件使用TypeScript严格类型定义
- **Accessibility**: 完整ARIA支持，键盘导航，屏幕阅读器友好
- **Performance**: 按需导入，避免barrel exports，使用动态导入优化大组件

---

## 💻 开发工作流 (Development Workflow)

### 1. 环境要求
### 方法一：自动化设置（推荐）⚡

使用我们的自动化设置脚本，一键完成所有配置！

```bash
# 1. 克隆仓库
git clone https://github.com/yourusername/ai-workshop.git
cd ai-workshop

# 2. 运行自动化设置脚本
npm run setup

# 3. 按照向导提示完成配置
# 脚本会自动：
# ✓ 验证 Node.js/npm 版本
# ✓ 安装项目依赖
# ✓ 检查/安装 Vercel CLI（可选）
# ✓ 配置环境变量（.env.local）
# ✓ 运行构建测试（可选）
# ✓ 部署到 Vercel（可选）

# 4. 启动开发服务器
npm run dev
```

> 💡 **提示：** 查看 [SETUP.md](./SETUP.md) 了解设置脚本的详细说明和故障排除

### 方法二：手动安装

#### 环境要求

- **Node.js**: `>=18.0.0` (推荐使用LTS版本 18.x 或 20.x)
- **npm**: `>=9.0.0` (随Node.js安装)
- **操作系统**: macOS, Linux, Windows (WSL2推荐)
- **浏览器**: Chrome, Firefox, Safari, Edge (最新版本)
- **编辑器**: VS Code (推荐), WebStorm, Cursor

### 2. 快速开始
#### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/yourusername/ai-workshop.git
cd ai-workshop

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 打开浏览器访问
# http://localhost:3000
```

**开发服务器特性**:
- **Fast Refresh**: 保存即更新，无需刷新
- **错误提示**: 详细的错误堆栈和修复建议
- **Hot Reload**: CSS和组件实时更新
- **自动端口**: 3000被占用时自动选择可用端口 (3001, 3002...)

### 3. 开发脚本

| 命令 | 用途 | 说明 |
|------|------|------|
| `npm run dev` | 启动开发服务器 | 监听文件变化，Fast Refresh |
| `npm run build` | 构建生产版本 | 输出到`.next`目录，显示ISR配置 |
| `npm run build:analyze` | 构建+分析产物 | 生成bundle分析报告，可视化依赖 |
| `npm start` | 运行生产服务器 | 必须先运行`npm run build` |
| `npm run lint` | 运行ESLint检查 | 检查代码质量和潜在问题 |
| `npm run cleanup:dry-run` | 预览可删除文件 | 显示将被删除的文件，不实际删除 |
| `npm run cleanup:list` | 列出所有可删除文件 | 按类别显示所有可清理的文件 |
| `npm run cleanup:execute` | 执行清理 | 安全删除日志、缓存等临时文件 |

**构建输出示例**:
```
Route (app)                                 Size  First Load JS  Revalidate
┌ ○ /                                    4.44 kB         104 kB          1h
├ ○ /company                             2.92 kB         106 kB          1h
├ ○ /models                                915 B         104 kB          1h
├ ○ /products                            5.33 kB         114 kB          1h
├ ○ /tools                               9.62 kB         118 kB          1h
├ ○ /technology                            162 B         103 kB          1h
└ ● /tools/[id]                            919 B         104 kB          1h
    ├ /tools/background-replace (共29个工具页)

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```

### 4. 项目清理 (Project Cleanup)

#### 清理可删除文件

项目在开发过程中会产生日志、缓存、构建产物等临时文件，可以通过以下命令安全清理：

```bash
# 1. 预览将被删除的文件（推荐先运行）
npm run cleanup:dry-run

# 2. 列出所有可删除文件（按类别分组）
npm run cleanup:list

# 3. 执行清理（会提示确认）
npm run cleanup:execute
```

**清理内容包括**:

- ✅ **日志文件**: `*.log`, `build.log`, `dev.log` 等
- ✅ **构建产物**: `.next/`, `out/` (如果存在)
- ✅ **缓存目录**: `.cache/`, `.vercel/`, `coverage/`
- ✅ **OS文件**: `.DS_Store`, `Thumbs.db`
- ✅ **临时文件**: `*.bak`, `*.backup`, `*.swp`

**重要提示**:

- ⚠️ **历史文档和环境文件需要手动审查** - 脚本默认跳过 `review-needed` 类别
- ✅ **所有清理操作都会记录到 `cleanup-audit.log`** - 可以查看删除历史
- 💡 **建议在清理前提交Git** - 确保代码已保存
- 🔒 **锁文件永不删除** - `package-lock.json` 等关键文件受保护

**详细信息**: 查看 [`docs/DELETABLE_FILES.md`](./docs/DELETABLE_FILES.md) 了解所有可删除文件的完整列表和说明

#### 备份建议

在执行清理前，建议：

1. **提交所有更改到Git**
   ```bash
   git add .
   git commit -m "保存更改"
   ```

2. **备份环境文件**（如果需要保留配置）
   ```bash
   cp .env.local .env.local.backup
   ```

3. **创建备份分支**（可选）
   ```bash
   git checkout -b backup-before-cleanup
   ```

### 5. 代码质量保证

#### 5.1 ESLint配置

项目使用Next.js官方ESLint配置 + 自定义规则:

```javascript
// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

**检查项目**:
- TypeScript类型错误
- React Hooks规则
- 无障碍性问题 (jsx-a11y)
- 未使用的变量和导入
- Next.js最佳实践

#### 5.2 TypeScript配置

```json
{
  "compilerOptions": {
    "strict": true,                      // 严格模式
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./*"]                     // 路径别名
    }
  }
}
```

#### 5.3 开发最佳实践

**组件开发**:
```tsx
// ✅ 推荐: Server Component优先
export default function MyPage() {
  return <div>Server Component</div>;
}

// ✅ 仅在需要交互时使用Client Component
"use client";
import { useState } from "react";
export default function Interactive() {
  const [state, setState] = useState(false);
  return <button onClick={() => setState(!state)}>Toggle</button>;
}
```

**数据获取**:
```tsx
// ✅ Server Component中直接await
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// ❌ 避免在Client Component中使用useEffect获取数据
```

**性能优化**:
```tsx
// ✅ 使用Next.js Image组件
import Image from "next/image";
<Image src="/image.png" alt="..." width={800} height={600} priority />

// ✅ 动态导入重型组件
import dynamic from "next/dynamic";
const HeavyChart = dynamic(() => import("./HeavyChart"), {
  loading: () => <Spinner />,
});
```

#### 4.4 测试流程

3. **配置环境变量**
```bash
# 复制环境变量模板
cp .env.example .env.local

# 编辑 .env.local 文件，设置必要的环境变量
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **启动开发服务器**
```bash
# 1. 代码质量检查
npm run lint

# 2. TypeScript类型检查
npm run build  # 构建过程会检查类型错误

# 3. 本地运行测试
npm run dev
# - 测试所有路由
# - 测试响应式布局 (Chrome DevTools)
# - 测试键盘导航 (Tab, Enter, Escape)
# - 测试屏幕阅读器 (macOS VoiceOver, NVDA, JAWS)

# 4. 生产构建测试
npm run build
npm start
# 访问 http://localhost:3000 验证生产版本
```

---
5. **访问网站**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 🚀 部署指南 (Deployment)

### 1. 本地构建与预览

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm start
# 访问 http://localhost:3000

# (可选) 分析构建产物
npm run build:analyze
# 自动打开浏览器显示bundle分析报告
```

**构建产物**:
- `.next/static/`: 静态资源 (JS, CSS, 图片)
- `.next/server/`: 服务端渲染代码
- `.next/cache/`: 构建缓存 (可安全删除)

**缓存策略**:
- **营销页面**: 1小时ISR (`s-maxage=3600, stale-while-revalidate=86400`)
- **静态资源**: 1年不变 (`max-age=31536000, immutable`)
- **动态路由**: 1小时ISR，构建时预渲染

### 2. Vercel 部署

#### 方法一: 一键部署 (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-workshop)

点击上方按钮，Vercel会自动:
1. Fork仓库到你的GitHub账号
2. 部署项目到Vercel
3. 设置自动部署 (git push触发)

#### 方法二: Vercel CLI
### 方法一：自动化设置脚本（最简单）⚡

使用自动化设置脚本，包含 Vercel 部署选项：

```bash
npm run setup
# 按照向导选择部署选项
# 脚本会自动检查/安装 Vercel CLI
# 提供预览部署和生产部署选项
```

📚 **详细部署指南：** [docs/deployment/vercel.md](./docs/deployment/vercel.md)

### 方法二：使用Vercel CLI部署

```bash
# 1. 安装Vercel CLI
npm install -g vercel

# 2. 登录Vercel账号
vercel login

# 3. 部署项目 (首次部署会提示配置)
vercel

# 4. 部署到生产环境
vercel --prod
```

#### 方法三: GitHub集成 (推荐生产环境)
### 方法三：使用GitHub + Vercel（推荐）

```bash
# 1. 推送代码到GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ai-workshop.git
git push -u origin main

# 2. 在Vercel控制台:
# - 访问 https://vercel.com/new
# - 选择 "Import Git Repository"
# - 选择你的GitHub仓库
# - 点击 "Deploy"
```

**自动部署流程**:
1. 提交代码到GitHub
2. Vercel自动检测到更新
3. 自动运行 `npm run build`
4. 构建成功后自动部署
5. 分支部署: 每个分支都会获得预览URL

#### Vercel配置 (vercel.json)

项目无需 `vercel.json`，Vercel会自动检测Next.js项目并使用最佳配置。

**环境变量** (如需要):
1. 在Vercel控制台 → Settings → Environment Variables
2. 添加必要的环境变量 (如API密钥)
3. 重新部署生效

**自定义域名**:
1. 在Vercel控制台 → Settings → Domains
2. 添加自定义域名
3. 配置DNS记录 (Vercel会提供详细指引)

---

## 🎨 设计系统 (Design System)

### Apple风格设计原则

项目采用**苹果设计语言 (Apple Design Language)**，特点如下:

- **极简主义**: 去除冗余元素，聚焦核心内容
- **留白优先**: 充足的间距和呼吸感
- **微妙细节**: 细腻的阴影、圆角、过渡动画
- **单色调**: 黑白灰为主，蓝色作为强调色
- **系统字体**: 使用系统原生字体栈 (SF Pro / PingFang SC)

### 设计令牌系统

完整的设计令牌系统定义在 `app/globals.css` 和 `lib/design-tokens.ts`:

#### 色彩系统

```css
/* 语义化颜色令牌 */
--color-bg-default       # 默认背景 (白色/黑色)
--color-bg-surface       # 表面背景 (浅灰)
--color-bg-accent        # 强调背景 (蓝色)

--color-text-primary     # 主要文本 (黑/白, 16:1对比度)
--color-text-secondary   # 次要文本 (灰色, 7.5:1)
--color-text-muted       # 弱化文本 (浅灰, 4.8:1)

--color-border-default   # 边框颜色 (浅灰)
--color-border-interactive # 交互边框 (蓝色)
```

**WCAG 2.1 AA合规**: 所有文本颜色组合均达到4.5:1以上对比度。

#### 间距系统 (4px基数)

```css
--spacing-0: 0;
--spacing-1: 0.25rem;    /* 4px */
--spacing-2: 0.5rem;     /* 8px */
--spacing-3: 0.75rem;    /* 12px */
--spacing-4: 1rem;       /* 16px */
--spacing-6: 1.5rem;     /* 24px */
--spacing-8: 2rem;       /* 32px */
...
--spacing-32: 8rem;      /* 128px */
```

#### 圆角系统 (8px/16px基数)

```css
--radius-sm: 0.5rem;     /* 8px */
--radius-base: 0.5rem;   /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
```

#### 阴影系统

```css
--shadow-surface: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-elevated: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-dialog: 0 8px 32px rgba(0, 0, 0, 0.16);
```

#### 动画系统

```css
/* 持续时间 */
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-medium: 300ms;
--duration-slow: 500ms;

/* 缓动函数 (Apple贝塞尔曲线) */
--ease-default: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 组件使用指南

完整的组件文档请参阅:
- [`/components/README.md`](./components/README.md) - 组件库总览
- [`/components/ui/Button.example.md`](./components/ui/Button.example.md) - 按钮组件示例
- [`/components/sections/Hero.example.md`](./components/sections/Hero.example.md) - Hero组件示例
- [`/app/design-tokens.md`](./app/design-tokens.md) - 设计令牌完整文档

---

## 📚 文档导航 (Documentation)

### 核心文档

- **[README.md](./README.md)** (本文档) - 项目总览、架构、开发指南
- **[CHANGELOG.md]** (待添加) - 版本变更记录
- **[CONTRIBUTING.md]** (待添加) - 贡献指南

### 设计系统文档

- **[docs/README.md](./docs/README.md)** - 文档索引总览
- **[app/design-tokens.md](./app/design-tokens.md)** - 设计令牌完整参考
- **[docs/design-system/](./docs/design-system/)** - 设计系统进度追踪
- **[APPLE_DESIGN_REPORT.md](./APPLE_DESIGN_REPORT.md)** - Apple设计实施报告

### 组件文档

- **[components/README.md](./components/README.md)** - 组件库使用指南
- **[docs/components/](./docs/components/)** - 组件详细文档

### 质量报告

- **[docs/quality-report.md](./docs/quality-report.md)** - 综合质量审计报告 (Lighthouse, WCAG, SEO)
- **[docs/QUALITY_AUDIT_SUMMARY.md](./docs/QUALITY_AUDIT_SUMMARY.md)** - 质量审计摘要
- **[docs/lighthouse-reports/](./docs/lighthouse-reports/)** - Lighthouse完整JSON报告

### 技术实施文档

- **[ISR_IMPLEMENTATION.md](./ISR_IMPLEMENTATION.md)** - 增量静态生成实施
- **[METADATA_IMPLEMENTATION.md](./METADATA_IMPLEMENTATION.md)** - SEO元数据实施
- **[STRUCTURED_DATA_VALIDATION.md](./STRUCTURED_DATA_VALIDATION.md)** - Schema.org验证
- **[ACCESSIBILITY_IMPROVEMENTS.md](./ACCESSIBILITY_IMPROVEMENTS.md)** - 无障碍性改进
- **[IMAGE_OPTIMIZATION_SUMMARY.md](./IMAGE_OPTIMIZATION_SUMMARY.md)** - 图片优化策略
- **[CODE_SPLITTING_REPORT.md](./CODE_SPLITTING_REPORT.md)** - 代码分割报告

---

## 🗺️ 项目路线图 (Roadmap)

### ✅ 已完成功能 (v0.1.0)

- [x] 响应式设计 (桌面/平板/手机)
- [x] Apple风格设计系统
- [x] 30+ AI工具展示
- [x] 5大工具分类
- [x] 动态工具详情页
- [x] 图片轮播功能
- [x] 二维码弹窗
- [x] SEO优化 (100/100)
- [x] WCAG 2.1 AA合规
- [x] ISR增量静态生成
- [x] Schema.org结构化数据
- [x] Sitemap & Robots.txt
- [x] 5列Footer导航
- [x] 技术实力页面
- [x] 公司介绍页面
- [x] Vercel部署支持
- [x] Lighthouse审计 (SEO 100, A11y 94, Perf 92)

### 🚧 开发中功能 (v0.2.0)

- [ ] 用户认证系统 (NextAuth.js)
- [ ] 实际API集成 (工具后端服务)
- [ ] 文件上传功能 (图片/视频上传)
- [ ] 用户Dashboard (个人中心)
- [ ] 工具使用历史记录
- [ ] 收藏功能
- [ ] 支付系统集成 (订阅制)

### 📋 计划中功能 (v0.3.0+)
> 📍 **完整功能规划**: 查看 [功能路线图](./docs/roadmap.md) 了解详细的分阶段实施计划

---

- [ ] 后台管理系统 (CMS)
- [ ] 多语言支持 (i18n: 中文/英文)
- [ ] PWA支持 (Service Worker)
- [ ] A/B测试框架
- [ ] 实时协作功能
- [ ] 用户评论与评分系统
- [ ] 社交媒体分享优化
- [ ] 高级分析面板

### 🎯 性能优化目标

- [ ] Lighthouse性能评分 ≥95 (当前92)
- [ ] 首屏加载时间 <1.5s (当前~2s)
- [ ] Largest Contentful Paint <2.0s (当前~2.8s)
- [ ] 无障碍性评分 ≥95 (当前94)

---

## ❓ 常见问题 (FAQ)

### 开发相关

**Q: 启动时端口3000被占用怎么办?**
A: Next.js会自动选择可用端口 (3001, 3002等)，或手动指定:
```bash
PORT=3001 npm run dev
```

**Q: 如何修改二维码图片?**
A: 替换 `public/images/qr.png` 文件即可。

**Q: 如何添加新的工具?**
A: 在 `lib/tools.ts` 中添加工具定义:
```typescript
export const toolDetails: Record<string, ToolDetail> = {
  "your-tool-id": {
    name: "工具名称",
    icon: "🔧",
    category: "工具分类",
    description: "工具描述",
    features: ["功能1", "功能2"],
    useCases: ["用例1"],
    steps: ["步骤1"]
  }
};
```
然后在对应分类的 `toolCategories` 中添加工具引用。

**Q: 如何修改设计令牌 (颜色、间距等)?**
A: 编辑 `app/globals.css` 中的CSS变量定义，例如:
```css
:root {
  --color-accent: #007AFF;  /* 修改强调色 */
}
```
### 部署指南

- **[🚀 Vercel部署指南](./docs/deployment/vercel.md)** - 完整的自动化部署文档
  - 自动化设置脚本使用说明
  - 手动部署流程（CLI、GitHub集成、Dashboard）
  - 环境变量配置详解
  - 常见问题与故障排除
  - 回滚与版本管理
### 产品路线图

- **[🗺️ 功能路线图](./docs/roadmap.md)** - 完整的功能扩展规划（近期、中期、长期）

### 设计系统进度追踪

### 部署相关

**Q: Vercel部署后样式不生效?**
A: 检查Vercel构建日志:
1. 访问 Vercel Dashboard → Deployments → 点击部署 → 查看Build Logs
2. 确认 `npm run build` 成功
3. 确认Tailwind CSS正确编译

**Q: 如何配置自定义域名?**
A: 在Vercel控制台:
1. 进入项目 → Settings → Domains
2. 添加域名 → 配置DNS记录 (Vercel提供的CNAME或A记录)
3. 等待DNS生效 (通常5-30分钟)

**Q: 如何启用HTTPS?**
A: Vercel自动为所有部署提供免费SSL证书 (Let's Encrypt)，无需额外配置。

### 性能相关

**Q: 首屏加载较慢如何优化?**
A: 
1. 使用 `priority` 属性预加载关键图片:
   ```tsx
   <Image src="/hero.png" alt="..." priority />
   ```
2. 使用动态导入延迟加载非关键组件:
   ```tsx
   const HeavyComponent = dynamic(() => import('./Heavy'));
   ```
3. 使用 `npm run build:analyze` 分析bundle大小

**Q: ISR缓存如何工作?**
A: 
- 首次访问: 返回构建时生成的静态HTML
- 后续访问: 返回缓存HTML (1小时内)
- 缓存过期: 后台重新生成，仍返回旧内容 (stale-while-revalidate)
- 重新生成完成: 后续访问返回新内容

---

## 🤝 贡献指南 (Contributing)

欢迎提交Issue和Pull Request！

### 贡献流程

1. **Fork项目** 到你的GitHub账号
2. **创建分支**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **提交代码**:
   ```bash
   git commit -m "feat: add new feature"
   ```
   遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
4. **推送分支**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **创建Pull Request** 到主仓库的 `main` 分支

### 代码规范

- **TypeScript**: 严格模式，所有函数和变量必须有类型注解
- **ESLint**: 提交前运行 `npm run lint` 确保无错误
- **命名规范**:
  - 组件: PascalCase (MyComponent.tsx)
  - 函数: camelCase (myFunction)
  - 常量: UPPER_SNAKE_CASE (MAX_COUNT)
- **注释**: 复杂逻辑添加中文注释说明

### 提交信息规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type类型**:
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具链更新

**示例**:
```
feat(tools): add image watermark removal tool

- Implement watermark detection algorithm
- Add user interface for watermark selection
- Update tools category page

Closes #123
```

### 开发注意事项

- 所有新组件必须支持无障碍访问 (ARIA, 键盘导航)
- 新页面必须配置ISR (`export const revalidate = 3600`)
- 新页面必须添加SEO元数据 (`generateMetadata()`)
- 图片必须使用 `next/image` 组件
- 避免使用内联样式，使用Tailwind工具类

---

## 📄 许可证 (License)

本项目为**私有项目**，保留所有权利。

未经许可，禁止复制、修改、分发本项目代码。

---

## 📞 联系我们 (Contact)

- **项目地址**: [https://github.com/tissky/ai-workshop](https://github.com/tissky/ai-workshop)
- **在线演示**: [https://ai-workshops.vercel.app](https://ai-workshops.vercel.app) 
- **问题反馈**: [GitHub Issues](https://github.com/yourusername/ai-workshop/issues)
- **邮箱**: contact@example.com

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给它一个星标！**

Made with ❤️ by AI创意工坊团队

© 2024 AI创意工坊. 保留所有权利.

</div>
