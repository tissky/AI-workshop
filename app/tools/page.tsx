import Link from "next/link";
import ToolsCTA from "@/components/ToolsCTA";
import StatsGrid from "@/components/sections/StatsGrid";
import { generateToolListSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function ToolsPage() {
  const hiddenUrl = "https://oooooooooooooo.xiangmuchan.cn/update-history.php";

  const stats = [
    { label: "AI工具", value: "30+" },
    { label: "专业模型", value: "800+" },
    { label: "服务用户", value: "100万+" },
    { label: "日处理量", value: "500万+" }
  ];

  const toolCategories = [
    {
      id: "image",
      name: "图片处理",
      description: "专业的图片处理AI工具，让每张图片都完美呈现",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      count: "6大功能",
      tools: [
        { id: "background-replace", name: "背景替换", desc: "一键替换图片背景，支持多种场景", hot: true },
        { id: "product-image", name: "产品图处理", desc: "智能优化产品展示图，提升转化率", hot: true },
        { id: "image-enhance", name: "图片变高清", desc: "AI超分辨率技术，让图片更加清晰", hot: false },
        { id: "remove-watermark", name: "去水印", desc: "智能去除图片水印，保持图片质量", hot: false },
        { id: "remove-people", name: "图片去人", desc: "自动识别并移除图片中的人物", hot: false },
        { id: "image-deduplication", name: "图片查重", desc: "检测相似图片，避免重复内容", hot: false }
      ]
    },
    {
      id: "video",
      name: "视频处理",
      description: "强大的视频编辑AI工具，轻松制作专业视频",
      icon: "🎬",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      count: "4大功能",
      tools: [
        { id: "video-watermark", name: "视频去水印", desc: "专业去除视频水印，不留痕迹", hot: true },
        { id: "video-to-image", name: "视频转图片", desc: "提取视频关键帧，生成精美图片", hot: false },
        { id: "video-batch-watermark", name: "视频批量水印", desc: "批量为视频添加水印，保护版权", hot: false },
        { id: "video-frame-extract", name: "视频提取转图", desc: "AI提取视频精彩瞬间", hot: false }
      ]
    },
    {
      id: "text",
      name: "文案创作",
      description: "AI驱动的文案生成工具，释放无限创意灵感",
      icon: "✍️",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      count: "4大功能",
      tools: [
        { id: "text-generation", name: "文案生成", desc: "为你的产品生成19种不同风格的文案", hot: true },
        { id: "handwriting", name: "手写签名", desc: "生成逼真的手写签名图片", hot: false },
        { id: "sop-template", name: "SOP模板", desc: "生成95%全行业SOP标准作业模板", hot: true },
        { id: "emoji-generator", name: "表情包生成", desc: "一键生成搞笑表情包", hot: false }
      ]
    },
    {
      id: "ai-models",
      name: "AI模型",
      description: "800+专业训练模型，即用即取的高效工具",
      icon: "🤖",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      count: "800+模型",
      tools: [
        { id: "ai减视频", name: "AI减视频工具", desc: "智能移除视频背景，专业级效果", hot: true },
        { id: "sketch", name: "快速手绘草图", desc: "提示词草图也能出效果", hot: false },
        { id: "ai-product", name: "AI产品图", desc: "仅输产品图可得到同类型产品画报", hot: false },
        { id: "trained-models", name: "800+模型库", desc: "即用即取，一次训练多次使用", hot: true }
      ]
    },
    {
      id: "creative",
      name: "创意工具",
      description: "激发创意的AI工具集合，让想象成为现实",
      icon: "✨",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      count: "5大功能",
      tools: [
        { id: "quote-image", name: "一句话配图", desc: "一句话生成一张图，无修改图片分布元素", hot: true },
        { id: "fashion-creative", name: "服装创意", desc: "为你的小网店发的小服装创意", hot: false },
        { id: "privacy", name: "隐私处理", desc: "人脸图片隐私保护，隐私图像打码", hot: false },
        { id: "local-recommend", name: "同城推荐", desc: "为同城可删掉的多记录撮合", hot: false },
        { id: "material-creation", name: "素材制作", desc: "为你的企业制作的商务表情", hot: false }
      ]
    }
  ];

  // Generate structured data for SEO
  const allTools = toolCategories.flatMap(category =>
    category.tools.map(tool => ({
      name: tool.name,
      description: tool.desc,
      url: `https://ai-creative-workshop.com/tools/${tool.id}`,
      category: category.name
    }))
  );
  const toolListSchema = generateToolListSchema(allTools);

  return (
    <>
      <StructuredData data={toolListSchema} />
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background border-b border-border shadow-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI工具库</h1>
              <p className="text-muted-foreground mt-2">探索30+专业AI工具，释放无限创意</p>
            </div>
            <Link href="/" className="text-accent hover:opacity-80 transition-opacity">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-muted">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              全方位<span className="text-accent">AI工具</span>平台
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              从图片处理到视频编辑，从文案创作到AI模型，我们提供一站式AI创意解决方案
            </p>
            
            {/* Stats */}
            <div className="max-w-4xl mx-auto">
              <StatsGrid stats={stats} columns={4} />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-20">
          {toolCategories.map((category) => (
            <section key={category.id} className="relative">
              {/* Category Header */}
              <div className="bg-muted border border-border rounded-3xl p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-background border border-border flex items-center justify-center text-4xl shadow-card">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
                      <span className="px-4 py-1 bg-background border border-border rounded-full text-sm font-semibold text-foreground shadow-sm">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Tools Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="group relative bg-background p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 border border-border overflow-hidden"
                  >
                    {/* Hot Badge */}
                    {tool.hot && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-error text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                          🔥 热门
                        </span>
                      </div>
                    )}
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {tool.name}
                        </h3>
                        <span className="text-muted-foreground group-hover:text-accent transition-colors text-xl">→</span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{tool.desc}</p>
                      <div className="flex items-center text-accent font-medium">
                        <span className="group-hover:translate-x-1 transition-transform">开始使用</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 mt-20 bg-primary">
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            需要更多功能？
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            我们持续更新工具库，为您带来更多AI能力
          </p>
          <ToolsCTA hiddenUrl={hiddenUrl} />
        </div>
      </section>
    </div>
    </>
  );
}
