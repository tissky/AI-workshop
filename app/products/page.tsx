import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { generateProductListSchema } from "@/lib/seo";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function ProductsPage() {
  const productCategories = [
    {
      id: "product",
      title: "我有产品",
      description: "专业的电商产品图处理工具，一键生成完美产品展示",
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
      description: "AI驱动的图片增强与修复，让图片焕然一新",
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
      description: "智能视频创作与编辑，轻松制作专业视频",
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
      description: "竞品分析与内容对标，助力精准营销",
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

  const additionalFeatures = [
    {
      title: "AI 800+模型",
      description: "海量专业模型库",
      image: images.ai800,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "创意生成",
      description: "激发无限创意可能",
      image: images.creativeGeneration,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SOP模板",
      description: "95%全行业标准模板",
      image: images.sopTemplate,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "视频转图文",
      description: "智能提取精彩内容",
      image: images.videoToText,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "提示词工具",
      description: "优化提示词效果",
      image: images.promptTool,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "智能体",
      description: "AI助手一站式服务",
      image: images.agent,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const socialPlatforms = [
    { name: "抖音", image: images.douyin, color: "from-pink-500 to-purple-500" },
    { name: "抖音热榜", image: images.douyinHotList, color: "from-red-500 to-orange-500" },
    { name: "小红薯", image: images.xiaohongshu, color: "from-red-400 to-pink-400" },
    { name: "抖抖对标", image: images.douyinBenchmark, color: "from-purple-500 to-indigo-500" }
  ];

  const coreProducts = [
    {
      name: "我有产品",
      description: "智能产品图生成与优化，提升转化率",
      url: "https://ai-creative-workshop.com/products#product",
      image: images.myProduct
    },
    {
      name: "图片焕新",
      description: "高清修复、背景替换、细节增强",
      url: "https://ai-creative-workshop.com/products#image-refresh",
      image: images.imageRefresh
    },
    {
      name: "AI视频生成",
      description: "自动生成、剪辑、特效一站式解决方案",
      url: "https://ai-creative-workshop.com/products#video-ai",
      image: images.aiVideoGeneration
    },
    {
      name: "对标图文",
      description: "智能分析竞品，优化内容策略",
      url: "https://ai-creative-workshop.com/products#benchmark",
      image: images.benchmarkContent
    }
  ];

  const coreProductsForSchema = coreProducts.map(product => ({
    name: product.name,
    description: product.description,
    url: product.url,
    image: typeof product.image === 'string' ? product.image : product.image.src
  }));

  const productListSchema = generateProductListSchema(coreProductsForSchema);

  return (
    <>
      <StructuredData data={productListSchema} />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">产品中心</h1>
              <p className="text-gray-600 mt-2">探索我们的核心AI产品与服务</p>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>

export default function ProductsPage() {
  return <ProductsPageContent />;
}
