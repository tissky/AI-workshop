import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { productCategories, additionalFeatures, socialPlatforms } from "@/lib/products";
import { generateProductListSchema } from "@/lib/seo";
import ImageCarouselWrapper from "@/components/ImageCarouselWrapper";
import Button from "@/components/ui/Button";
import Card from "@/components/Card";
import Badge from "@/components/ui/Badge";
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
  const coreProducts = productCategories.map(category => ({
    name: category.title,
    description: category.items[0].description,
    url: `https://ai-creative-workshop.com/products#${category.id}`,
    image: category.items[0].image
  }));

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
              <Badge variant="primary" size="lg" className="mb-4">
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
