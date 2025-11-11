import { Metadata } from "next";
import { getToolDetail, getAllToolIds } from "@/lib/tools";
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
  
  const softwareAppSchema = generateSoftwareApplicationSchema(tool);

  return (
    <>
      <StructuredData data={softwareAppSchema} />
      
      {/* Breadcrumb Section */}
      <section 
        className="border-b border-border bg-background"
        aria-labelledby="breadcrumb-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 id="breadcrumb-heading" className="sr-only">导航路径</h2>
          <Breadcrumb items={[
            { label: "首页", href: "/" },
            { label: "AI工具", href: "/tools" },
            { label: tool.name, href: `/tools/${id}` }
          ]} />
        </div>
      </section>

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Tool Header */}
          <header className="mb-12">
            <div className="flex items-start gap-6 mb-6">
              <div 
                className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center text-4xl flex-shrink-0"
                role="img"
                aria-label={`${tool.name}图标`}
              >
                {tool.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-4xl font-bold text-foreground">{tool.name}</h1>
                  <Badge variant="primary" size="md">
                    {tool.category}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </header>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Features Section */}
            <section aria-labelledby="features-heading">
              <Card variant="bordered" padding="lg">
                <h2 
                  id="features-heading" 
                  className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
                >
                  <span className="text-2xl" role="img" aria-label="功能">✨</span>
                  功能特点
                </h2>
                <ul className="space-y-3" role="list">
                  {tool.features.map((feature: string, index: number) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 text-muted-foreground"
                      role="listitem"
                    >
                      <span 
                        className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" 
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Use Cases Section */}
            <section aria-labelledby="usecases-heading">
              <Card variant="bordered" padding="lg">
                <h2 
                  id="usecases-heading" 
                  className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
                >
                  <span className="text-2xl" role="img" aria-label="应用">🎯</span>
                  应用场景
                </h2>
                <ul className="space-y-3" role="list">
                  {tool.useCases.map((useCase: string, index: number) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 text-muted-foreground"
                      role="listitem"
                    >
                      <span 
                        className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" 
                        aria-hidden="true"
                      />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Steps Section */}
            <section aria-labelledby="steps-heading">
              <Card variant="bordered" padding="lg">
                <h2 
                  id="steps-heading" 
                  className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
                >
                  <span className="text-2xl" role="img" aria-label="步骤">📋</span>
                  使用步骤
                </h2>
                <ol className="space-y-4" role="list">
                  {tool.steps.map((step: string, index: number) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3"
                      role="listitem"
                    >
                      <span className="w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground pt-0.5">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </Card>
            </section>
          </div>

          {/* Demo Section */}
          <section 
            aria-labelledby="demo-heading"
            className="mb-12"
          >
            <Card variant="elevated" padding="lg">
              <h2 
                id="demo-heading" 
                className="text-2xl font-semibold text-foreground mb-6"
              >
                演示预览
              </h2>
              <div className="bg-muted rounded-lg p-12 text-center border-2 border-dashed border-border">
                <div 
                  className="text-6xl mb-6 opacity-50"
                  role="img"
                  aria-label={`${tool.name}演示`}
                >
                  {tool.icon}
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  点击下方按钮体验 {tool.name}
                </p>
                <Button variant="primary" size="md">
                  即刻体验
                </Button>
              </div>
            </Card>
          </section>

          {/* CTA Section */}
          <section 
            aria-labelledby="cta-heading"
            className="text-center"
          >
            <Card variant="bordered" padding="lg">
              <h2 
                id="cta-heading" 
                className="text-2xl font-semibold text-foreground mb-4"
              >
                开始使用 {tool.name}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                注册免费账户，立即体验强大的AI功能
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="md">
                  即刻体验
                </Button>
                <Button variant="outline" size="md">
                  查看价格
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
