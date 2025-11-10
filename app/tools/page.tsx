import Link from "next/link";
import type { Metadata } from "next";
import Badge from "@/components/Badge";
import StatsGrid from "@/components/ui/StatsGrid";
import StructuredData from "@/components/StructuredData";
import { generateToolListSchema } from "@/lib/seo";
import { toolCategories } from "@/lib/tools";
import ToolsCTA from "@/components/ToolsCTA";
import { generateToolListSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AI工具库",
  description: "探索30+专业AI工具，包括图片处理、视频编辑、文案创作等一站式AI创意解决方案",
  keywords: "AI工具,图片处理,视频编辑,文案生成,AI模型,创意工具,背景替换,视频去水印",
  openGraph: {
    title: "AI工具库 - AI创意工坊",
    description: "探索30+专业AI工具，包括图片处理、视频编辑、文案创作等一站式AI创意解决方案",
    type: "website",
  },
};

export default function ToolsPage() {
  const stats = [
  const hiddenUrl = "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=";

  const stats = [
    { label: "AI工具", value: "30+" },
    { label: "专业模型", value: "800+" },
    { label: "服务用户", value: "100万+" },
    { label: "日处理量", value: "500万+" }
  ];

    { label: "AI工具", value: "30+", description: "专业工具" },
    { label: "专业模型", value: "800+", description: "训练模型" },
    { label: "服务用户", value: "100万+", description: "活跃用户" },
    { label: "日处理量", value: "500万+", description: "任务处理" }
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
        {/* Hero Section */}
        <section className="bg-muted py-20 md:py-24" aria-labelledby="hero-heading">
          <div className="container-max">
            <div className="text-center mb-12">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                全方位<span className="text-accent">AI工具</span>平台
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                从图片处理到视频编辑，从文案创作到AI模型，我们提供一站式AI创意解决方案
              </p>
              
              <StatsGrid stats={stats} columns={4} variant="cards" align="center" />
            </div>
        {/* Breadcrumb Navigation */}
        <div className="border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb items={[
              { label: "首页", href: "/" },
              { label: "AI工具", href: "/tools" }
            ]} />
          <div className="container-max py-4">
            <Breadcrumb />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                全方位<span className="text-accent">AI工具</span>平台
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                从图片处理到视频编辑，从文案创作到AI模型，我们提供一站式AI创意解决方案
              </p>
            </div>
            
            {/* Stats */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
              role="list"
              aria-label="平台统计数据"
            >
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center"
                  as="article"
                  role="listitem"
                >
                  <div 
                    className="text-3xl sm:text-4xl font-bold text-accent mb-2"
                    aria-label={`${stat.label}: ${stat.value}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
        <ToolsHero
          title={
            <>
              全方位<span className="text-accent">AI工具</span>平台
            </>
          }
          description="从图片处理到视频编辑，从文案创作到AI模型，我们提供一站式AI创意解决方案"
        >
          {/* Stats Grid */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            role="list"
            aria-label="平台统计数据"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center"
                as="article"
                role="listitem"
              >
                <div 
                  className="text-3xl sm:text-4xl font-bold text-accent mb-2"
                  aria-label={`${stat.label}: ${stat.value}`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools Categories */}
        <section className="py-16 md:py-20">
          <div className="container-max">
            <div className="space-y-16 md:space-y-20">
              {toolCategories.map((category) => (
                <article 
                  key={category.id} 
                  aria-labelledby={`category-${category.id}`}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center text-3xl shadow-card"
                          aria-hidden="true"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-16 sm:space-y-20">
            {toolCategories.map((category) => (
              <section 
                key={category.id} 
                aria-labelledby={`category-${category.id}`}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-3xl"
                        aria-hidden="true"
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h2 
                          id={`category-${category.id}`}
                          className="text-2xl sm:text-3xl font-bold text-foreground"
                        >
                          {category.icon}
                        </div>
                        <div>
                          <h2 
                            id={`category-${category.id}`}
                            className="text-2xl sm:text-3xl font-bold text-foreground"
                          >
                            {category.name}
                          </h2>
                          <Badge variant="default" size="sm" className="mt-2">
                            {category.count}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-base sm:text-lg">
                      {category.description}
                    </p>
                  </div>
                  </div>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    {category.description}
                  </p>
                </div>

                  {/* Tools Grid */}
                  <div 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    role="list"
                    aria-label={`${category.name}工具列表`}
                  >
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.id}`}
                        className="group block"
                        aria-label={`查看${tool.name}详情`}
                      >
                        <article 
                          className="h-full relative bg-background border border-border rounded-xl p-6 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group-hover:border-accent"
                        <Card 
                          hover
                          as="article"
                          className="h-full relative group-hover:border-accent transition-colors duration-300"
                          role="listitem"
                        >
                          {/* Hot Badge */}
                          {tool.hot && (
                            <Badge 
                              variant="hot" 
                              size="sm" 
                              className="absolute top-4 right-4"
                            >
                              🔥 热门
                            </Badge>
                          )}
                          
                          <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors pr-8">
                              {tool.name}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {tool.desc}
                            </p>
                            <div className="flex items-center text-accent text-sm font-medium pt-2">
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                开始使用
                              </span>
                              <svg 
                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M9 5l7 7-7 7" 
                                />
                              </svg>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* CTA Section */}
          <section 
            className="relative py-16 sm:py-20 lg:py-24 mt-12 sm:mt-16"
            aria-labelledby="cta-heading"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent" />
            <div className="relative container-max text-center">
              <h2 
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
              >
                需要更多功能？
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty">
                我们持续更新工具库，为您带来更多AI能力
              </p>
              <ToolsCTA hiddenUrl={hiddenUrl} />
            </div>
          </section>
        </div>
        <section 
          className="bg-accent text-accent-foreground py-16 md:py-20"
          aria-labelledby="cta-heading"
        >
          <div className="container-max text-center">
            <h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              需要更多功能？
            </h2>
            <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          className="relative py-16 sm:py-20 lg:py-24 border-t border-border"
          aria-labelledby="cta-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              需要更多功能？
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              我们持续更新工具库，为您带来更多AI能力
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-full bg-background text-foreground hover:bg-muted transition-colors"
              aria-label="返回首页"
            >
              返回首页
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
