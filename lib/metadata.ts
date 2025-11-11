import type { Metadata } from "next";

// Site-wide constants
export const SITE_NAME = "AI创意工坊";
export const SITE_TAGLINE = "释放无限创意可能";
export const SITE_DESCRIPTION = "集成29款专业AI工具，涵盖图片处理、视频编辑、文案处理等多个领域，提供一站式AI创意解决方案";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-workshop.example.com";
export const SITE_DOMAIN = "ai-workshop.example.com";

// OpenGraph default image
export const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

// Products metadata
export const PRODUCTS_DATA = {
  title: "产品中心 - AI创意工坊",
  description: "探索AI创意工坊的核心产品：我有产品、图片焕新、AI视频生成、对标图文等专业AI工具，助力电商、内容创作和营销",
  keywords: "AI产品图,图片处理,视频生成,电商工具,产品优化,背景替换,AI创作",
  ogImage: `${SITE_URL}/images/我有产品.png`,
  products: [
    {
      id: "product",
      name: "我有产品",
      description: "智能产品图生成与优化，提升转化率"
    },
    {
      id: "image-refresh",
      name: "图片焕新",
      description: "AI图片增强与修复，让图片焕然一新"
    },
    {
      id: "video-ai",
      name: "AI视频生成",
      description: "智能视频创作与编辑，轻松制作专业视频"
    },
    {
      id: "benchmark",
      name: "对标图文",
      description: "竞品分析与内容对标，助力精准营销"
    }
  ]
};

// Tools metadata
export const TOOLS_DATA = {
  title: "AI工具库 - AI创意工坊",
  description: "29款专业AI工具，涵盖图片处理、视频编辑、文案处理、AI模型等多个领域，提供一站式创意解决方案",
  keywords: "AI工具,图片处理,视频编辑,文案生成,背景替换,去水印,产品图优化,视频制作",
  ogImage: `${SITE_URL}/images/og-tools.jpg`,
  categories: {
    image: {
      name: "图片处理",
      tools: [
        { id: "background-replace", name: "背景替换", desc: "一键替换图片背景，支持多种场景" },
        { id: "product-image", name: "产品图处理", desc: "智能优化产品展示图，提升转化率" },
        { id: "image-enhance", name: "图片变高清", desc: "AI超分辨率技术，让图片更加清晰" },
        { id: "remove-watermark", name: "去水印", desc: "智能去除图片水印，保持图片质量" },
        { id: "remove-people", name: "图片去人", desc: "自动识别并移除图片中的人物" },
        { id: "image-deduplication", name: "图片查重", desc: "检测相似图片，避免重复内容" }
      ]
    },
    video: {
      name: "视频处理",
      tools: [
        { id: "video-watermark", name: "视频去水印", desc: "专业去除视频水印，不留痕迹" },
        { id: "video-to-image", name: "视频转图片", desc: "提取视频关键帧，生成精美图片" },
        { id: "video-batch-watermark", name: "视频批量水印", desc: "批量为视频添加水印，保护版权" },
        { id: "video-frame-extract", name: "视频提取转图", desc: "AI提取视频精彩瞬间" }
      ]
    },
    text: {
      name: "文案创作",
      tools: [
        { id: "text-generation", name: "文案生成", desc: "为你的产品生成19种不同风格的文案" },
        { id: "handwriting", name: "手写签名", desc: "生成逼真的手写签名图片" },
        { id: "sop-template", name: "SOP模板", desc: "生成95%全行业SOP标准作业模板" },
        { id: "emoji-generator", name: "表情包生成", desc: "一键生成搞笑表情包" }
      ]
    }
  }
};

// Get tool by ID for dynamic metadata
export function getToolById(id: string) {
  for (const category of Object.values(TOOLS_DATA.categories)) {
    const tool = category.tools.find(t => t.id === id);
    if (tool) {
      return {
        ...tool,
        categoryName: category.name
      };
    }
  }
  return null;
}

// Models metadata
export const MODELS_DATA = {
  title: "AI模型库 - AI创意工坊",
  description: "800+专业训练模型，覆盖图像处理、视频处理、文本生成、音频处理等多个AI应用领域",
  keywords: "AI模型,机器学习,深度学习,图像识别,视频处理,文本生成,模型训练",
  ogImage: `${SITE_URL}/images/AI 800.jpg`
};

// Company metadata
export const COMPANY_DATA = {
  title: "关于我们 - AI创意工坊",
  description: "AI创意工坊是专注于人工智能技术研发和应用的创新公司，拥有800+专业训练模型和29款AI工具，致力于为企业提供最先进的AI解决方案",
  keywords: "AI公司,人工智能,技术团队,AI研发,深度学习,AI解决方案",
  ogImage: `${SITE_URL}/images/og-company.jpg`
};

// Technology metadata
export const TECHNOLOGY_DATA = {
  title: "技术实力 - AI创意工坊",
  description: "基于深度学习、高性能计算和企业级安全的AI技术栈，提供毫秒级响应速度和99.9%系统可用性保障",
  keywords: "AI技术,深度学习,机器学习,TensorFlow,PyTorch,高性能计算,技术栈",
  ogImage: `${SITE_URL}/images/og-technology.jpg`
};

// Home page metadata
export const HOME_DATA = {
  title: `${SITE_NAME} - ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  keywords: "AI创意工坊,AI工具,图片处理,视频制作,文案生成,人工智能,创意设计,营销工具",
  ogImage: OG_IMAGE
};

// Helper function to generate metadata with hreflang support
export function generateMetadataWithAlternates(
  title: string,
  description: string,
  path: string,
  ogImage?: string,
  keywords?: string
): Metadata {
  const url = `${SITE_URL}${path}`;
  
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        'zh-CN': url,
        'en-US': url.replace(SITE_URL, SITE_URL), // Stub for English version - same URL for now
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage || OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'zh_CN',
      alternateLocale: ['en_US'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate tool metadata dynamically
export function generateToolMetadata(toolId: string): Metadata {
  const tool = getToolById(toolId);
  
  if (!tool) {
    return generateMetadataWithAlternates(
      `工具详情 - ${SITE_NAME}`,
      "AI驱动的创意工具，助力您的创作之旅",
      `/tools/${toolId}`
    );
  }
  
  return generateMetadataWithAlternates(
    `${tool.name} - ${tool.categoryName} - ${SITE_NAME}`,
    tool.desc,
    `/tools/${toolId}`,
    TOOLS_DATA.ogImage,
    `${tool.name},${tool.categoryName},AI工具,${SITE_NAME}`
  );
}
