import Link from "next/link";
import type { Metadata } from "next";
import ToolsCTA from "@/components/ToolsCTA";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
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
                      <p className="text-muted-foreground text-base sm:text-lg">
                        {category.description}
                      </p>
                    </div>
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
            <ToolsCTA hiddenUrl={hiddenUrl} />
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

