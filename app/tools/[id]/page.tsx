import Link from "next/link";
import { Metadata } from "next";
import { getToolDetail, getAllToolIds, getAllTools } from "@/lib/tools";
import { generateSoftwareApplicationSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const revalidate = 3600;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const toolIds = getAllToolIds();
  return toolIds.map((id) => ({
    id: id,
  }));
}

interface ToolDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ToolDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const tool = getToolDetail(id);
  
  return {
    title: `${tool.name} - AI创意工坊`,
    description: tool.description,
    keywords: [tool.name, tool.category, 'AI工具', ...tool.features],
    openGraph: {
      title: `${tool.name} - AI创意工坊`,
      description: tool.description,
      type: 'website',
    },
  };
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { id } = await params;
  const tool = getToolDetail(id);
  const allTools = getAllTools();
  
  const softwareAppSchema = generateSoftwareApplicationSchema({
    name: tool.name,
    description: tool.description,
    category: tool.category,
    features: tool.features,
    url: `https://ai-creative-workshop.com/tools/${id}`
  });

  const relatedTools = allTools
    .filter(t => t.category === tool.category && t.id !== id)
    .slice(0, 3);

  return (
    <>
      <StructuredData data={softwareAppSchema} />
      
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <div className="container-max py-4">
            <Breadcrumb items={[
              { label: "首页", href: "/" },
              { label: "AI工具", href: "/tools" },
              { label: tool.name, href: `/tools/${id}` }
            ]} />
          </div>
        </div>

        {/* Tool Info */}
        <div className="container-max py-12">
          <Card className="overflow-hidden mb-12">
            <div className="p-8">
              {/* Tool Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div 
                    className="w-20 h-20 rounded-2xl bg-accent/10 border border-border flex items-center justify-center text-foreground shadow-card mr-6"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                    <h1 className="text-4xl font-bold text-foreground mb-2">{tool.name}</h1>
                    <div className="flex items-center gap-2">
                      <Badge variant="default" size="sm">
                        {tool.category}
                      </Badge>
                      {tool.lifetimeOnly && (
                        <Badge variant="hot" size="sm">
                          ⭐ 终身版专享
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">{tool.description}</p>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">功能特点</h2>
                  <ul className="space-y-3 list-none">
                    {tool.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scenarios */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">应用场景</h2>
                  <ul className="space-y-3 list-none">
                    {tool.scenarios.map((scenario: string, index: number) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                        {scenario}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps */}
                {tool.steps && tool.steps.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">使用步骤</h2>
                    <ol className="space-y-3 list-none">
                      {tool.steps.map((step: string, index: number) => (
                        <li key={index} className="flex items-start text-muted-foreground">
                          <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0 border border-border">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Preview Section */}
          {tool.previewVideoUrl && (
            <Card className="overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">演示预览</h2>
                <div className="bg-muted p-12 rounded-lg border-2 border-dashed border-border text-center">
                  <div className="text-muted-foreground mb-4" aria-hidden="true">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    点击下方按钮查看 {tool.name} 预览视频
                  </p>
                  <a 
                    href={tool.previewVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="primary" 
                      size="md"
                    >
                      查看预览视频
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          )}

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <Card className="overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">相关工具推荐</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedTools.map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      href={`/tools/${relatedTool.id}`}
                      className="group block"
                    >
                      <Card 
                        variant="interactive"
                        className="h-full group-hover:border-accent transition-colors"
                      >
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                            {relatedTool.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedTool.description}
                          </p>
                          <div className="flex items-center text-accent text-xs font-medium pt-1">
                            <span>了解更多</span>
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* CTA Section */}
          <Card className="overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                开始使用 {tool.name}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                注册免费账户，立即体验强大的AI功能
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="md">
                  即刻体验
                </Button>
                <Link href="/tools">
                  <Button variant="outline" size="md">
                    返回工具列表
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
