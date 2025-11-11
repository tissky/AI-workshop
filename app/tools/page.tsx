import Link from "next/link";
import type { Metadata } from "next";
import ToolsCTA from "@/components/ToolsCTA";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import ToolsHero from "@/components/ToolsHero";
import StatsGrid from "@/components/ui/StatsGrid";
import { toolCategories } from "@/lib/tools";

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
  const hiddenUrl = "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=";

  const stats = [
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
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
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
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
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
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
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
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
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
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
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
      category: category.name,
    }))
  );

  const toolListSchema = generateToolListSchema(allTools);

  return (
    <>
      <StructuredData data={toolListSchema} />
      
      {/* Breadcrumb Section */}
      <section 
        className="border-b border-border bg-background"
        aria-labelledby="breadcrumb-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 id="breadcrumb-heading" className="sr-only">导航路径</h2>
          <Breadcrumb items={[
            { label: "首页", href: "/" },
            { label: "AI工具", href: "/tools" }
          ]} />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-border bg-background">
          <div className="container-max py-4">
            <Breadcrumb items={[
              { label: "首页", href: "/" },
              { label: "AI工具", href: "/tools" }
            ]} />
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Hero Section */}
          <ToolsHero
            title={
              <>
                全方位<span className="text-accent">AI工具</span>平台
              </>
            }
            description="从图片处理到视频编辑，从文案创作到AI模型，我们提供一站式AI创意解决方案"
          >
            {/* Stats Grid */}
            <StatsGrid 
              stats={stats}
              columns={4}
              variant="default"
            />
          </ToolsHero>
        {/* Hero Section */}
        <ToolsHero
          title={
            <>
              全方位<span className="text-accent">AI工具</span>平台
            </>
          }
          description="从图片处理到视频编辑，从文案创作到AI模型，我们提供一站式AI创意解决方案"
        >
          {/* Stats Grid */}
          <div className="max-w-4xl mx-auto">
            <StatsGrid 
              stats={stats}
              columns={4}
              variant="cards"
              align="center"
              role="list"
              aria-label="平台统计数据"
            />
          <ul 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto list-none"
            aria-label="平台统计数据"
          >
            {stats.map((stat, index) => (
              <li key={index}>
                <Card 
                  className="text-center"
                  as="article"
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
              </li>
            ))}
          </ul>
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
        </ToolsHero>

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
                          className="w-14 h-14 rounded-xl bg-accent/10 border border-border flex items-center justify-center text-foreground shadow-card"
                          className="w-14 h-14 rounded-xl bg-accent-muted text-accent flex items-center justify-center p-2.5 shadow-card"
                          aria-hidden="true"
                        >
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
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
                      <p className="text-muted-foreground text-base sm:text-lg">
                        {category.description}
                      </p>
                    </div>
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
                  </div>

                  {/* Tools Grid */}
                  <div 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    role="list"
                    aria-label={`${category.name}工具列表`}
                  >
                  </div>

                  {/* Tools Grid */}
                  <ul 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none"
                    aria-label={`${category.name}工具列表`}
                  >
                    {category.tools.map((tool) => (
                      <li key={tool.id}>
                        <Link
                          href={`/tools/${tool.id}`}
                          className="group block h-full"
                          aria-label={`${tool.name} - ${tool.desc}`}
                        >
                          <Card 
                            hover
                            as="article"
                            className="h-full relative group-hover:border-accent transition-colors duration-300"
                          >
                            {/* Hot Badge */}
                            {tool.hot && (
                              <Badge 
                                variant="hot" 
                                size="sm" 
                                className="absolute top-4 right-4"
                              >
                                🔥
                              >
                                🔥 热门
                              </Badge>
                            )}
                            
                            <div className="flex items-center gap-3 mb-3">
                              <span 
                                className="text-4xl" 
                      role="img" 
                      aria-label={category.name}
                    >
                      {category.icon}
                    </span>
                    <h2 
                      id={`category-${category.id}`}
                      className="text-3xl font-bold text-foreground"
                    >
                      {category.name}
                    </h2>
                    <Badge variant="primary" size="md">
                      {category.count}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool) => (
                    <Link 
                      key={tool.id} 
                      href={`/tools/${tool.id}`}
                      className="group"
                    >
                      <Card 
                        variant="interactive"
                        padding="lg"
                        className="h-full"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                            {tool.name}
                          </h3>
                          {tool.hot && (
                            <Badge variant="error" size="sm">
                              热门
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">
                          {tool.desc}
                        </p>
                        <div className="mt-4 flex items-center text-accent text-sm font-medium">
                          立即体验
                          <svg 
                            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
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
                      <Card 
                        hover
                        as="article"
                        className="h-full relative group-hover:border-accent transition-colors duration-300"
                        role="listitem"
                      >
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
                              热门
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
                                🔥 热门
                              </Badge>
                            )}
                            
                            <div className="text-2xl mb-3">{category.icon}</div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {tool.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {tool.desc}
                            </p>
                          </Card>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="relative py-16 sm:py-20 lg:py-24 border-t border-border mt-12 sm:mt-16"
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
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
          </div>
        </section>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

          {/* CTA Section */}
        {/* CTA Section */}
        <section 
          className="relative py-16 sm:py-20 lg:py-24 mt-12 sm:mt-16"
          aria-labelledby="cta-heading"
        >
          <div className="absolute inset-0 bg-accent" />
          <div className="relative container-max text-center">
            <h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
            >
              需要更多功能？
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty">
          <div className="absolute inset-0 bg-muted" />
          <div className="relative container-max text-center">
            <h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              需要更多功能？
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
              我们持续更新工具库，为您带来更多AI能力
            </p>
            <ToolsCTA hiddenUrl={hiddenUrl} />
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

