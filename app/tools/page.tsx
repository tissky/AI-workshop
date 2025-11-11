import Link from "next/link";
import type { Metadata } from "next";
import { ReactElement } from "react";
import ToolsCTA from "@/components/ToolsCTA";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ToolsHero from "@/components/ToolsHero";
import StatsGrid from "@/components/ui/StatsGrid";
import { generateToolListSchema } from "@/lib/seo";
import { getAllTools, getToolsByCategory, toolCategories, getTotalToolCount } from "@/lib/tools";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AI工具库",
  description: "探索29款专业AI工具，包括图片处理、视频编辑、文案处理等一站式AI创意解决方案",
  keywords: "AI工具,图片处理,视频编辑,文案生成,AI模型,创意工具,背景替换,视频去水印",
  openGraph: {
    title: "AI工具库 - AI创意工坊",
    description: "探索29款专业AI工具，包括图片处理、视频编辑、文案处理等一站式AI创意解决方案",
    type: "website",
  },
};

export default function ToolsPage() {
  const hiddenUrl = "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=";
  const allTools = getAllTools();
  const totalToolCount = getTotalToolCount();

  const stats = [
    { label: "AI工具", value: `${totalToolCount}款`, description: "专业工具" },
    { label: "专业模型", value: "800+", description: "训练模型" },
    { label: "服务用户", value: "100万+", description: "活跃用户" },
    { label: "日处理量", value: "500万+", description: "任务处理" }
  ];

  const categoryIcons: Record<string, ReactElement> = {
    "image": (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    "video": (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    "text": (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    "ai-models": (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    "other": (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  };

  const schemaTools = allTools.map(tool => ({
    name: tool.name,
    description: tool.description,
    url: `https://ai-creative-workshop.com/tools/${tool.id}`,
    category: tool.category,
  }));

  const toolListSchema = generateToolListSchema(schemaTools);

  return (
    <>
      <StructuredData data={toolListSchema} />
      
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

        {/* Hero Section */}
        <ToolsHero
          title={
            <>
              全方位<span className="text-accent">AI工具</span>平台
            </>
          }
          description="从图片处理到视频编辑，从文案处理到AI模型，我们提供一站式AI创意解决方案"
        >
          {/* Stats Grid */}
          <div className="max-w-4xl mx-auto">
            <StatsGrid 
              stats={stats}
              columns={4}
              variant="cards"
              align="center"
            />
          </div>
        </ToolsHero>

        {/* Tools Categories */}
        <section className="py-16 md:py-20">
          <div className="container-max">
            <div className="space-y-16 md:space-y-20">
              {toolCategories.map((category) => {
                const categoryTools = getToolsByCategory(category.name);
                
                return (
                  <article 
                    key={category.id}
                    id={category.id}
                    aria-labelledby={`category-${category.id}`}
                  >
                    {/* Category Header */}
                    <div className="mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-14 h-14 rounded-xl bg-accent-muted text-accent flex items-center justify-center p-2.5 shadow-card"
                            aria-hidden="true"
                          >
                            {categoryIcons[category.id]}
                          </div>
                          <div>
                            <h2
                              id={`category-${category.id}`}
                              className="text-2xl sm:text-3xl font-bold text-foreground"
                            >
                              {category.name}
                            </h2>
                            <Badge variant="default" size="sm" className="mt-2">
                              {category.count}款工具
                            </Badge>
                          </div>
                        </div>
                        <Link 
                          href={`/tools#${category.id}`}
                          className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1"
                        >
                          查看全部
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      <p className="text-muted-foreground text-base sm:text-lg">
                        {category.description}
                      </p>
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
                            variant="interactive"
                            className="h-full relative group-hover:border-accent transition-colors duration-300"
                    {/* Tools Grid */}
                    <ul 
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none"
                      aria-label={`${category.name}工具列表`}
                    >
                      {categoryTools.map((tool) => (
                        <li key={tool.id}>
                          <Link
                            href={`/tools/${tool.id}`}
                            className="group block h-full"
                            aria-label={`${tool.name} - ${tool.description}`}
                          >
                            <Card 
                              variant="interactive"
                              className="h-full relative group-hover:border-accent transition-colors duration-300"
                            >
                              {/* Lifetime Only Badge */}
                              {tool.lifetimeOnly && (
                                <Badge 
                                  variant="hot" 
                                  size="sm" 
                                  className="absolute top-4 right-4"
                                >
                                  ⭐ 终身版
                                </Badge>
                              )}
                              
                              <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors pr-8">
                                  {tool.name}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                  {tool.description}
                                </p>
                                
                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                  <div className="flex items-center text-accent text-sm font-medium">
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                      开始使用
                                    </span>
                                    <svg 
                                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
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
                                  {tool.previewVideoUrl && (
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      预览视频
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Card>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

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
              我们持续更新工具库，为您带来更多AI能力
            </p>
            <ToolsCTA hiddenUrl={hiddenUrl} />
          </div>
        </section>
      </div>
    </>
  );
}
