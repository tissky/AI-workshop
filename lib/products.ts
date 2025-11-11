import { images } from "./media";
import { StaticImageData } from "next/image";

export interface ProductItem {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  items: ProductItem[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "product",
    title: "我有产品",
    description: "专业的电商产品图处理工具，一键生成完美产品展示图，提升商品转化率与视觉吸引力",
    items: [
      {
        id: "1",
        image: images.myProduct,
        title: "我有产品",
        description: "智能产品图生成与优化，提升转化率"
      }
    ]
  },
  {
    id: "image-refresh",
    title: "图片焕新",
    description: "AI驱动的图片增强与修复技术，让老旧图片焕然一新，细节清晰、色彩鲜明",
    items: [
      {
        id: "1",
        image: images.imageRefresh,
        title: "图片焕新",
        description: "高清修复、背景替换、细节增强"
      }
    ]
  },
  {
    id: "video-ai",
    title: "AI视频生成",
    description: "智能视频创作与编辑平台，轻松制作专业级视频内容，自动化剪辑与特效处理",
    items: [
      {
        id: "1",
        image: images.aiVideoGeneration,
        title: "AI视频生成",
        description: "自动生成、剪辑、特效一站式解决方案"
      }
    ]
  },
  {
    id: "benchmark",
    title: "对标图文",
    description: "竞品分析与内容对标工具，深度解析市场趋势，助力精准营销决策",
    items: [
      {
        id: "1",
        image: images.benchmarkContent,
        title: "对标图文",
        description: "智能分析竞品，优化内容策略"
      },
      {
        id: "2",
        image: images.peerAnalysis,
        title: "同行分析",
        description: "深度解析同行数据，找出差异化优势"
      },
      {
        id: "3",
        image: images.peerObservation,
        title: "同行观测",
        description: "实时监控竞争对手动态"
      }
    ]
  }
];

export interface AdditionalFeature {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export const additionalFeatures: AdditionalFeature[] = [
  {
    title: "AI 800+模型",
    description: "海量专业模型库，覆盖多种创作场景",
    image: images.ai800,
  },
  {
    title: "创意生成",
    description: "激发无限创意可能，智能生成创意方案",
    image: images.creativeGeneration,
  },
  {
    title: "SOP模板",
    description: "95%全行业标准模板，规范化作业流程",
    image: images.sopTemplate,
  },
  {
    title: "视频转图文",
    description: "智能提取精彩内容，快速生成图文素材",
    image: images.videoToText,
  },
  {
    title: "提示词工具",
    description: "优化提示词效果，提升AI生成质量",
    image: images.promptTool,
  },
  {
    title: "智能体",
    description: "AI助手一站式服务，智能化工作流程",
    image: images.agent,
  }
];

export interface SocialPlatform {
  name: string;
  image: string | StaticImageData;
}

export const socialPlatforms: SocialPlatform[] = [
  { name: "抖音", image: images.douyin },
  { name: "抖音热榜", image: images.douyinHotList },
  { name: "小红薯", image: images.xiaohongshu },
  { name: "抖抖对标", image: images.douyinBenchmark }
];
