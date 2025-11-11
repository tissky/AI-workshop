"use client";

import Image from "next/image";
import { productCategories, additionalFeatures, socialPlatforms } from "@/lib/products";
import ImageCarouselWrapper from "@/components/ImageCarouselWrapper";
import Card from "@/components/Card";
import Button from "@/components/ui/Button";

export default function ProductsPageContent() {
  return (
    <div className="space-y-20">
      {/* Main Product Categories */}
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" aria-label={`体验${category.title}`}>
                    即刻体验
                  </Button>
                  <Button variant="outline" size="lg" aria-label={`了解更多关于${category.title}`}>
                    了解更多
                  </Button>
                </div>
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

      {/* Additional Features Grid */}
      <section>
        <div className="text-center mb-12 md:mb-16">
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
      <section>
        <div className="text-center mb-12 md:mb-16">
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
              <Button size="lg" aria-label="探索AI工具">
                探索AI工具
              </Button>
              <Button variant="outline" size="lg" aria-label="联系销售团队">
                联系销售
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
