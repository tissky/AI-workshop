import Link from "next/link";
import type { Metadata } from "next";
import ToolsCTA from "@/components/ToolsCTA";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ToolsHero from "@/components/ToolsHero";
import StatsGrid from "@/components/ui/StatsGrid";
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
  const hiddenUrl = "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=";

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

          {/* Tools by Category */}
          <div className="mt-16 space-y-16">
            {toolCategories.map((category) => (
              <article 
                key={category.id}
                aria-labelledby={`category-${category.id}`}
              >
                <div className="mb-8">
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
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <section 
            className="relative py-16 sm:py-20 lg:py-24 mt-12 sm:mt-16 rounded-2xl overflow-hidden"
            aria-labelledby="cta-heading"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent" />
            <div className="relative text-center px-4">
              <h2 
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                需要更多功能？
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
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
