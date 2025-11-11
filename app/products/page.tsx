import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { images } from "@/lib/media";
import { generateProductListSchema } from "@/lib/seo";
import ImageCarouselWrapper from "@/components/ImageCarouselWrapper";
import Button from "@/components/ui/Button";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Breadcrumb from "@/components/Breadcrumb";
import StatsGrid from "@/components/ui/StatsGrid";
import StructuredData from "@/components/StructuredData";
import ProductCTA from "@/components/ProductCTA";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "产品中心 - AI创意工坊",
  description: "探索AI创意工坊的核心产品与服务，包括智能产品图生成、图片焕新、AI视频生成、对标图文等专业AI工具",
  keywords: "AI产品,产品图生成,图片修复,AI视频,对标分析,电商工具,内容创作,营销工具",
  openGraph: {
    title: "产品中心 - AI创意工坊",
    description: "探索AI创意工坊的核心产品与服务，包括智能产品图生成、图片焕新、AI视频生成、对标图文等专业AI工具",
    type: "website",
  },
};

export default function ProductsPage() {
  const productCategories = [
    {
      id: "product",
      title: "我有产品",
      description: "专业的电商产品图处理工具，一键生成完美产品展示图，提升商品转化率与视觉吸引力",
      items: [
        {
          id: "1",
          image: images.myProduct,
          title: "我有产品",
          description: "智能产品图生成与优化，提升转化率"
        }
      ]
    },
    {
      id: "image-refresh",
      title: "图片焕新",
      description: "AI驱动的图片增强与修复技术，让老旧图片焕然一新，细节清晰、色彩鲜明",
      items: [
        {
          id: "1",
          image: images.imageRefresh,
          title: "图片焕新",
          description: "高清修复、背景替换、细节增强"
        }
      ]
    },
    {
      id: "video-ai",
      title: "AI视频生成",
      description: "智能视频创作与编辑平台，轻松制作专业级视频内容，自动化剪辑与特效处理",
      items: [
        {
          id: "1",
          image: images.aiVideoGeneration,
          title: "AI视频生成",
          description: "自动生成、剪辑、特效一站式解决方案"
        }
      ]
    },
    {
      id: "benchmark",
      title: "对标图文",
      description: "竞品分析与内容对标工具，深度解析市场趋势，助力精准营销决策",
      items: [
        {
          id: "1",
          image: images.benchmarkContent,
          title: "对标图文",
          description: "智能分析竞品，优化内容策略"
        },
        {
          id: "2",
          image: images.peerAnalysis,
          title: "同行分析",
          description: "深度解析同行数据，找出差异化优势"
        },
        {
          id: "3",
          image: images.peerObservation,
          title: "同行观测",
          description: "实时监控竞争对手动态"
        }
      ]
    }
  ];

  const additionalFeatures = [
    {
      title: "AI 800+模型",
      description: "海量专业模型库，覆盖多种创作场景",
      image: images.ai800,
    },
    {
      title: "创意生成",
      description: "激发无限创意可能，智能生成创意方案",
      image: images.creativeGeneration,
    },
    {
      title: "SOP模板",
      description: "95%全行业标准模板，规范化作业流程",
      image: images.sopTemplate,
    },
    {
      title: "视频转图文",
      description: "智能提取精彩内容，快速生成图文素材",
      image: images.videoToText,
    },
    {
      title: "提示词工具",
      description: "优化提示词效果，提升AI生成质量",
      image: images.promptTool,
    },
    {
      title: "智能体",
      description: "AI助手一站式服务，智能化工作流程",
      image: images.agent,
    }
  ];

  const socialPlatforms = [
    { name: "抖音", image: images.douyin },
    { name: "抖音热榜", image: images.douyinHotList },
    { name: "小红薯", image: images.xiaohongshu },
    { name: "抖抖对标", image: images.douyinBenchmark }
  ];

  const coreProducts = [
    {
      name: "我有产品",
      description: "智能产品图生成与优化，提升转化率",
      url: "https://ai-creative-workshop.com/products#product",
      image: images.myProduct
    },
    {
      name: "图片焕新",
      description: "高清修复、背景替换、细节增强",
      url: "https://ai-creative-workshop.com/products#image-refresh",
      image: images.imageRefresh
    },
    {
      name: "AI视频生成",
      description: "自动生成、剪辑、特效一站式解决方案",
      url: "https://ai-creative-workshop.com/products#video-ai",
      image: images.aiVideoGeneration
    },
    {
      name: "对标图文",
      description: "智能分析竞品，优化内容策略",
      url: "https://ai-creative-workshop.com/products#benchmark",
      image: images.benchmarkContent
    }
  ];

  const coreProductsForSchema = coreProducts.map(product => ({
    name: product.name,
    description: product.description,
    url: product.url,
    image: typeof product.image === 'string' ? product.image : product.image.src
  }));

  const productListSchema = generateProductListSchema(coreProductsForSchema);

  const stats = [
    { label: "核心产品", value: "4+", description: "专业解决方案" },
    { label: "功能模块", value: "20+", description: "丰富工具集" },
    { label: "AI模型", value: "800+", description: "训练模型" },
    { label: "服务用户", value: "100万+", description: "活跃用户" }
  ];

  return (
    <>
      <StructuredData data={productListSchema} />
      
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-white border-b border-border">
          <div className="container-max py-8 md:py-12">
            <Breadcrumb 
              items={[
                { label: "首页", href: "/" },
                { label: "产品中心", href: "/products" }
              ]}
              className="mb-6"
            />
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                产品中心
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                探索我们的核心AI产品与服务，为电商、内容创作者和营销人员打造的专业工具矩阵
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container-max">
            <StatsGrid 
              stats={stats} 
              columns={4}
              variant="cards"
              align="center"
            />
          </div>
        </section>

        <div className="container-max py-16 md:py-24">
          {/* Main Product Categories */}
          <section className="mb-24 md:mb-32">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="accent" size="lg" className="mb-4">
                核心产品
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                四大核心产品
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                专为电商、内容创作者和营销人员打造的AI工具矩阵
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              {productCategories.map((category, categoryIndex) => (
                <div key={category.id} id={category.id} className="scroll-mt-20">
                  <Card 
                    as="article"
                    className="shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 md:p-12 overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      {/* Content */}
                      <div className={categoryIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {category.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground mb-8">
                          {category.description}
                        </p>
                        <ProductCTA categoryTitle={category.title} />
                      </div>
                      
                      {/* Carousel */}
                      <div className={categoryIndex % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                        <ImageCarouselWrapper
                          items={category.items}
                          autoPlay={true}
                          interval={4000}
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Features Grid */}
          <section className="mb-24 md:mb-32">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="accent" size="lg" className="mb-4">
              <Badge variant="default" size="lg" className="mb-4">
                扩展功能
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                更多强大功能
              </h2>
              <p className="text-lg text-muted-foreground">
                全方位的AI工具，助力您的创作之旅
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => (
                <Card
                  key={index}
                  as="article"
                  hover
                  className="overflow-hidden group relative p-0"
                  role="article"
                >
                  <div className="relative h-64">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Social Media Platforms */}
          <section className="mb-24 md:mb-32">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="success" size="lg" className="mb-4">
                平台覆盖
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                社交媒体工具
              </h2>
              <p className="text-lg text-muted-foreground">
                覆盖主流平台的全方位营销支持
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {socialPlatforms.map((platform, index) => (
                <Card
                  key={index}
                  as="article"
                  hover
                  className="overflow-hidden group relative p-0"
                  role="article"
                >
                  <div className="relative h-48">
                    <Image
                      src={platform.image}
                      alt={platform.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-primary-foreground">
                      {platform.name}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <Card className="text-center shadow-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  准备好体验AI创意工坊了吗？
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  立即开始使用我们的AI工具，让创意无限延伸，让效率大幅提升
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tools">
                    <Button 
                      variant="primary"
                      size="lg"
                      aria-label="探索AI工具"
                    >
                      探索AI工具
                    </Button>
                  </Link>
                  <Link href="/company#contact">
                    <Button 
                      variant="outline"
                      size="lg"
                      aria-label="联系销售团队"
                    >
                      联系销售
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
