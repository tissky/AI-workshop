# AI创意工坊 🚀

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.4-black)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)

一个集成30+专业AI工具的现代化创意平台，基于Next.js 15.4 + React 19 + Tailwind CSS v4构建

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-workshop)

</div>

---

## ✨ 项目特色

### 🎯 核心功能

- **🖼️ 图片处理** - 6大专业AI工具：背景替换、产品图处理、图片变高清、去水印、图片去人、图片查重
- **🎬 视频处理** - 4大智能工具：视频去水印、视频转图片、视频批量水印、视频提取转图
- **✍️ 文案创作** - 4大创意工具：文案生成(19种风格)、手写签名、SOP模板、表情包生成
- **🤖 AI模型** - 800+专业训练模型，即用即取的高效工具
- **✨ 创意工具** - 5大创新工具：一句话配图、服装创意、隐私处理、同城推荐、素材制作

### 🏗️ 技术架构

| 技术 | 版本 | 说明 |
|------|------|------|
| Next.js | 15.4 | React全栈框架 |
| React | 19 | 前端UI库 |
| Tailwind CSS | 4 | 实用优先的CSS框架 |
| TypeScript | 5 | 类型安全的JavaScript |
| Node.js | 18+ | JavaScript运行时 |

---

## 📁 项目结构

```
ai-workshop/
├── app/                    # Next.js App Router (App Directory)
│   ├── page.tsx           # 首页 - 现代化Hero + 产品展示
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   ├── products/
│   │   └── page.tsx       # 产品中心 - 四大核心产品详细介绍
│   ├── tools/
│   │   ├── page.tsx       # 工具库 - 30+AI工具分类展示
│   │   └── [id]/
│   │       └── page.tsx   # 工具详情页
│   ├── models/
│   │   └── page.tsx       # 模型库 - 800+专业模型
│   ├── technology/
│   │   └── page.tsx       # 技术实力 - 核心技术详细介绍
│   └── company/
│       └── page.tsx       # 公司介绍 - 团队与优势
├── components/            # 可复用组件
│   ├── Header.tsx         # 响应式导航栏
│   ├── Footer.tsx         # 页脚组件
│   ├── ImageCarousel.tsx  # 轮播图组件
│   ├── ToolCard.tsx       # 工具卡片
│   ├── FeatureCard.tsx    # 功能特色卡片
│   └── QRModal.tsx        # 二维码弹窗组件
├── docs/                  # 项目文档
│   ├── design-system/     # 设计系统进度追踪
│   │   ├── EXECUTION_LOG.md    # 详细执行日志
│   │   └── QUICK_STATUS.md     # 快速状态概览
│   └── components/        # 组件文档
│       └── README.md      # 组件文档索引
├── public/               # 静态资源
│   └── images/           # 产品图片资源
└── package.json          # 项目依赖配置
```

---

## 🛠️ 快速开始

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

- Node.js 18.0 或更高版本
- npm 9.0 或更高版本
- 现代浏览器（Chrome、Firefox、Safari、Edge）

#### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/yourusername/ai-workshop.git
cd ai-workshop
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**
```bash
# 复制环境变量模板
cp .env.example .env.local

# 编辑 .env.local 文件，设置必要的环境变量
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **启动开发服务器**
```bash
npm run dev
```

5. **访问网站**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
# 构建生产版本
npm run build

# 本地预览生产版本
npm start
```

---

## 🚀 Vercel一键部署

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

1. **安装Vercel CLI**
```bash
npm install -g vercel
```

2. **登录Vercel**
```bash
vercel login
```

3. **部署项目**
```bash
vercel
```

### 方法三：使用GitHub + Vercel（推荐）

1. **推送代码到GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ai-workshop.git
git push -u origin main
```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择你的GitHub仓库
   - 点击 "Deploy"

### 方法三：直接部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-workshop)

点击上方按钮即可一键部署到Vercel！

---

## 🎨 设计系统

### 📚 设计系统文档

全新的Apple风格设计系统正在开发中！查看完整文档：

- **[设计系统总览](./docs/design-system/README.md)** - 设计系统介绍和快速开始
- **[设计令牌参考](./docs/design-system/tokens.md)** - 完整的设计令牌文档（颜色、字体、间距、阴影、动画）
- **[任务清单](./docs/design-system/TASK_MANIFEST.md)** - 完整的21项任务规划，包含6个阶段
- **[进度追踪](./docs/design-system/TASK_PROGRESS.md)** - 实时进度跟踪和状态更新

### 当前色彩方案

| 颜色 | 用途 | 色值 |
|------|------|------|
| 主色蓝 | 按钮、主要元素 | `from-blue-600 to-purple-600` |
| 成功绿 | 成功提示、数据展示 | `from-green-500 to-emerald-500` |
| 警告橙 | 警告、重要信息 | `from-orange-500 to-red-500` |
| 紫色 | 高级功能、特殊标签 | `from-purple-500 to-pink-500` |

### 交互效果

- **悬停动画**: 卡片阴影变化、文字颜色过渡
- **缩放效果**: 按钮hover时轻微放大 (`scale-105`)
- **渐变背景**: 多种渐变色彩方案
- **玻璃态**: 半透明背景 + backdrop-blur
- **平滑过渡**: 所有动画使用 `transition-all`

---

## 📱 页面详解

### 🏠 首页 (`/`)

**Hero区域**
- 超大标题展示 "AI创意工坊"
- 副标题 "释放无限创意可能"
- CTA按钮："即刻体验" + "产品展示"

**产品展示区（MacBook风格）**
- 我有产品 - 智能产品图生成
- 图片焕新 - AI图片增强修复
- AI视频生成 - 智能视频创作
- 对标图文 - 竞品分析对标

**功能网格（iPad风格）**
- 图片处理（6大功能）
- 视频处理（智能工具）
- 文案创作（19种风格）
- AI模型（800+模型）

**800+模型展示（Apple Watch风格）**
- 极简大标题设计
- 模型库介绍
- "探索模型库"按钮

**CTA区域（iPhone风格）**
- 渐变背景
- "即刻体验"按钮
- "联系我们"二维码

### 📦 产品中心 (`/products`)

- **四大核心产品**详细介绍
- **完整轮播展示**：自动播放、手动导航、缩略图预览
- **额外功能展示**：6个特色功能
- **社交媒体工具**：4个主流平台
- **CTA区域**：邀请用户体验

### 🛠️ AI工具库 (`/tools`)

**Hero统计区域**
- 4大数据展示：30+工具、800+模型、100万+用户、500万+日处理量

**分类展示**
- 每个分类使用彩色背景卡片
- 大图标 + 详细描述
- 分类计数器标签

**工具网格**
- 热门工具标签（🔥）
- 悬停渐变效果
- 卡片阴影变化
- "开始使用"交互

### 🎯 技术实力 (`/technology`)

- **核心技术**：深度学习、高性能计算、数据安全
- **技术优势**：模型库规模、性能指标
- **技术栈**：机器学习、深度学习、高性能计算、云计算

### 🏢 公司介绍 (`/company`)

- **公司使命**：专注于AI技术研发和应用
- **核心团队**：研发、产品、服务三大团队
- **公司优势**：技术优势、服务优势
- **加入我们**：招聘板块

---

## 🎯 功能清单

### ✅ 已实现功能

- [x] 响应式设计（桌面/平板/手机）
- [x] 现代化UI/UX设计
- [x] 30+AI工具展示
- [x] 图片轮播功能
- [x] 二维码弹窗
- [x] 隐藏URL跳转
- [x] 苹果风格设计
- [x] 平滑动画效果
- [x] 技术页面
- [x] 公司页面
- [x] 5列Footer导航
- [x] Vercel部署支持

### 🔄 开发中功能

- [ ] 用户认证系统
- [ ] 实际API集成
- [ ] 文件上传功能
- [ ] 用户Dashboard
- [ ] 支付系统
- [ ] 后台管理

---

## ⚙️ 自定义配置

### 修改主题颜色

编辑 `tailwind.config.js`：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
      }
    }
  }
}
```

### 添加新页面

1. 在 `app/` 下创建文件夹和 `page.tsx`
2. 导出默认函数组件
3. 添加路由导航链接

### 添加新组件

1. 在 `components/` 下创建 `.tsx` 文件
2. 导出函数组件
3. 在需要的页面中导入使用

---

## 📚 文档

### 部署指南

- **[🚀 Vercel部署指南](./docs/deployment/vercel.md)** - 完整的自动化部署文档
  - 自动化设置脚本使用说明
  - 手动部署流程（CLI、GitHub集成、Dashboard）
  - 环境变量配置详解
  - 常见问题与故障排除
  - 回滚与版本管理

### 设计系统进度追踪

实时追踪21个Apple设计系统重构任务的进展情况。

- **[⚡ 快速状态](./docs/design-system/QUICK_STATUS.md)** - 一目了然的进度概览
- **[📊 执行日志](./docs/design-system/EXECUTION_LOG.md)** - 详细的任务追踪和时间线
- **[📖 文档索引](./docs/README.md)** - 完整文档导航

### 组件文档

- **[🧩 组件文档库](./docs/components/README.md)** - 完整的组件使用指南
- **[🍎 Apple设计报告](./APPLE_DESIGN_REPORT.md)** - 设计系统实施指南

---

## 🐛 常见问题

**Q: 启动时端口被占用？**
A: Next.js会自动选择可用端口（如3001、3002等）

**Q: 如何修改二维码图片？**
A: 替换 `public/images/qr.png` 文件

**Q: 如何修改隐藏URL？**
A: 在页面中找到base64编码的URL，更新为新的URL

**Q: 部署后样式不生效？**
A: 检查Vercel构建日志，确保Tailwind CSS正确编译

---

## 📄 许可证

私有项目 - 保留所有权利

---

## 👥 贡献

欢迎提交Issue和Pull Request！

---

## 📞 联系我们

- 项目地址: [GitHub仓库链接]
- 在线演示: [Vercel部署链接]
- 邮箱: contact@example.com

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给它一个星标！**

© 2024 AI创意工坊. 保留所有权利.

</div>
