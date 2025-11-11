import Link from "next/link";
import { Metadata } from "next";
import { getToolDetail, getAllToolIds } from "@/lib/tools";
import { generateSoftwareApplicationSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
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

        {/* Tool Info */}
        <div className="container-max py-12">
          <Card className="overflow-hidden">
            <div className="p-8">
              {/* Tool Header */}
              <div className="flex items-center mb-6">
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
                  <Badge variant="default" size="sm">
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

              <p className="text-lg text-muted-foreground mb-8">{tool.description}</p>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">功能特点</h2>
                  <ul className="space-y-3" role="list">
                    {tool.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-muted-foreground" role="listitem">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">应用场景</h2>
                  <ul className="space-y-3" role="list">
                    {tool.useCases.map((useCase: string, index: number) => (
                      <li key={index} className="flex items-center text-muted-foreground" role="listitem">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">使用步骤</h2>
                  <ol className="space-y-3" role="list">
                    {tool.steps.map((step: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground" role="listitem">
                        <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0 border border-border">
                          {index + 1}
                        </span>
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
              <div className="mt-12 p-8 bg-muted rounded-xl">
                <h2 className="text-2xl font-semibold text-foreground mb-4">演示预览</h2>
                <div className="bg-background p-8 rounded-lg border-2 border-dashed border-border text-center">
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground mb-4">点击下方按钮体验{tool.name}</p>
                  <Button variant="primary" size="md">
                    即刻体验
                  </Button>
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
            </div>
          </Card>

          {/* CTA Section */}
          <section 
            className="mt-12 py-12 px-8 bg-muted rounded-2xl text-center border border-border"
            aria-labelledby="tool-cta-heading"
          >
            <h2 
              id="tool-cta-heading"
              className="text-2xl font-semibold text-foreground mb-4"
            >
              开始使用{tool.name}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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
