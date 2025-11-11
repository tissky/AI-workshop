import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/ui/Hero";
import StatsGrid from "@/components/ui/StatsGrid";
import Button from "@/components/ui/Button";
import ModelsFilter from "@/components/ModelsFilter";
import StructuredData from "@/components/StructuredData";
import { generateModelListSchema, generateDatasetSchema } from "@/lib/seo";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AI模型库",
  description: "800+专业训练模型，覆盖各行各业应用场景",
  keywords: "AI模型,机器学习,深度学习,图像处理,视频处理,文本生成,音频处理",
  openGraph: {
    title: "AI模型库 - AI创意工坊",
    description: "800+专业训练模型，覆盖各行各业应用场景",
    type: "website",
  },
};

export default function ModelsPage() {
  const modelCategories = [
    { id: "all", name: "全部模型" },
    { id: "image", name: "图像处理" },
    { id: "video", name: "视频处理" },
    { id: "text", name: "文本生成" },
    { id: "audio", name: "音频处理" },
  ];

  const models = [
    {
      id: 1,
      name: "图像增强模型",
      category: "image",
      accuracy: "98%",
      uses: "50K+",
      desc: "高质量图像超分辨率增强",
    },
    {
      id: 2,
      name: "背景移除模型",
      category: "image",
      accuracy: "99%",
      uses: "100K+",
      desc: "精准识别主体，智能背景移除",
    },
    {
      id: 3,
      name: "产品图优化模型",
      category: "image",
      accuracy: "95%",
      uses: "30K+",
      desc: "专为电商产品图优化设计",
    },
    {
      id: 4,
      name: "视频去水印模型",
      category: "video",
      accuracy: "97%",
      uses: "20K+",
      desc: "专业视频水印去除技术",
    },
    {
      id: 5,
      name: "视频关键帧提取",
      category: "video",
      accuracy: "96%",
      uses: "15K+",
      desc: "智能提取视频精彩瞬间",
    },
    {
      id: 6,
      name: "文案生成模型",
      category: "text",
      accuracy: "94%",
      uses: "80K+",
      desc: "支持多种文案风格生成",
    },
    {
      id: 7,
      name: "情感分析模型",
      category: "text",
      accuracy: "93%",
      uses: "40K+",
      desc: "精准识别文本情感倾向",
    },
    {
      id: 8,
      name: "音频降噪模型",
      category: "audio",
      accuracy: "95%",
      uses: "25K+",
      desc: "高质量音频降噪处理",
    },
  ];

  const stats = [
    { label: "训练模型", value: "800+", description: "专业AI模型" },
    { label: "平均准确率", value: "95%", description: "行业领先" },
    { label: "用户使用", value: "500K+", description: "活跃用户" },
    { label: "在线服务", value: "24/7", description: "全天候支持" },
  ];

  // Generate structured data for SEO
  const modelListSchema = generateModelListSchema(
    models.map(model => ({
      name: model.name,
      description: model.desc,
      category: model.category,
      accuracy: model.accuracy,
    }))
  );

  const datasetSchema = generateDatasetSchema({
    name: "AI创意工坊模型库",
    description: "800+专业训练模型，覆盖各行各业应用场景",
    models: models.map(model => ({
      name: model.name,
      description: model.desc,
      accuracy: model.accuracy,
    })),
  });

  return (
    <>
      <StructuredData data={[modelListSchema, datasetSchema]} />
      
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb
              items={[
                { label: "首页", href: "/" },
                { label: "AI模型库", href: "/models" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <Hero
          title="AI模型库"
          subtitle="800+专业训练模型"
          description="覆盖各行各业应用场景，提供高质量AI解决方案"
          variant="default"
          align="center"
        />

        {/* Stats Section */}
        <section className="bg-muted py-12 md:py-16" aria-labelledby="models-stats">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="models-stats" className="sr-only">模型库统计数据</h2>
            <StatsGrid stats={stats} columns={4} variant="cards" align="center" />
          </div>
        </section>

        {/* Models Filter and Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-labelledby="models-catalog">
          <h2 id="models-catalog" className="sr-only">模型分类目录</h2>
          <ModelsFilter modelCategories={modelCategories} models={models} />

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              需要定制模型？
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              我们提供专业的模型定制服务，根据您的业务需求训练专属AI模型
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" aria-label="联系定制服务">
                联系定制
              </Button>
              <Button variant="outline" size="lg" aria-label="了解更多信息">
                了解更多
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
