import Link from "next/link";
import type { Metadata } from "next";
import Badge from "@/components/Badge";
import StatsGrid from "@/components/ui/StatsGrid";
import StructuredData from "@/components/StructuredData";
import { generateToolListSchema } from "@/lib/seo";
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
  const stats = [
    { label: "AI工具", value: "30+", description: "专业工具" },
    { label: "专业模型", value: "800+", description: "训练模型" },
    { label: "服务用户", value: "100万+", description: "活跃用户" },
    { label: "日处理量", value: "500万+", description: "任务处理" }
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

        {/* CTA Section */}
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
