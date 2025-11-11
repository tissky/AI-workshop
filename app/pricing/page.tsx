import Link from "next/link";
import type { Metadata } from "next";
import { 
  pricingPlans, 
  agencyPrices, 
  agencyLevels, 
  pricingTestimonials,
  contactInfo 
} from "@/lib/pricing";
import { generatePricingSchema } from "@/lib/seo";
import { ctaConfig } from "@/lib/navigation";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StructuredData from "@/components/StructuredData";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "定价方案 - AI创意工坊",
  description: "AI创意工坊提供灵活的定价方案，月卡¥45/30天、年卡¥98/365天、永久卡¥167/终身。代理拿货价低至¥10起，五级代理升级制度，累计购卡400张即可成为金牌代理",
  keywords: "AI创意工坊定价,会员价格,月卡年卡,永久卡,代理拿货价,五级代理,代理升级,佣金制度",
  openGraph: {
    title: "定价方案 - AI创意工坊",
    description: "AI创意工坊提供灵活的定价方案，月卡¥45/30天、年卡¥98/365天、永久卡¥167/终身。代理拿货价低至¥10起，五级代理升级制度",
    type: "website",
  },
};

export default function PricingPage() {
  // Generate structured data for pricing plans
  const pricingSchemaData = generatePricingSchema(
    pricingPlans.map(plan => ({
      name: plan.name,
      description: `${plan.duration}会员，享受所有AI工具无限次使用`,
      price: plan.price,
      duration: plan.duration,
    }))
  );

  // Decode CTA URL (server-side)
  const ctaUrl = Buffer.from(ctaConfig.url, 'base64').toString('utf-8');

  return (
    <>
      <StructuredData data={pricingSchemaData} />
      
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-white border-b border-border">
          <div className="container-max py-8 md:py-12">
            <Breadcrumb 
              items={[
                { label: "首页", href: "/" },
                { label: "定价方案", href: "/pricing" }
              ]}
              className="mb-6"
            />
            
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                定价方案
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                灵活的定价选项，满足个人用户与代理商的不同需求
              </p>
            </div>
          </div>
        </section>

        <div className="container-max py-16 md:py-24">
          {/* Primary Pricing Plans */}
          <section className="mb-24 md:mb-32" aria-labelledby="pricing-plans">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="primary" size="lg" className="mb-4">
                会员套餐
              </Badge>
              <h2 id="pricing-plans" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                选择适合您的方案
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                所有套餐均可访问全部30+AI工具，无限次使用，无隐藏费用
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  variant={plan.popular ? "elevated" : "bordered"}
                  padding="lg"
                  className={plan.popular ? "border-2 border-accent" : ""}
                  role="article"
                >
                  {plan.badge && (
                    <Badge 
                      variant={plan.popular ? "primary" : "info"} 
                      size="md" 
                      className="mb-4"
                    >
                      {plan.badge}
                    </Badge>
                  )}
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      ¥{plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      / {plan.duration}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8" role="list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3" role="listitem">
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      fullWidth
                      aria-label={`购买${plan.name}`}
                    >
                      立即购买
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          {/* Agency Pricing Section */}
          <section className="mb-24 md:mb-32" aria-labelledby="agency-pricing">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="success" size="lg" className="mb-4">
                代理拿货价
              </Badge>
              <h2 id="agency-pricing" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                代理批发价格
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                成为代理商，享受批发价格，赚取丰厚利润
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {agencyPrices.map((item) => (
                <Card
                  key={item.planId}
                  variant="interactive"
                  padding="lg"
                  role="article"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {item.planName}代理价
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">零售价</span>
                      <span className="text-lg text-muted-foreground line-through">
                        ¥{item.retailPrice}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">代理价</span>
                      <span className="text-2xl font-bold text-accent">
                        ¥{item.agencyPrice}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <span className="font-semibold text-success">单张利润</span>
                      <span className="text-xl font-bold text-success">
                        ¥{item.profit}
                      </span>
                    </div>
                  </div>

                  <Badge variant="success" size="lg" className="w-full text-center">
                    利润率 {Math.round((item.profit / item.retailPrice) * 100)}%
                  </Badge>
                </Card>
              ))}
            </div>

            <Card variant="elevated" padding="lg" className="mt-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  代理说明
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  成为代理商即可享受批发价格，自由定价销售，赚取差价利润。
                  我们提供专属代理后台、营销素材、客户管理工具等全方位支持，
                  助您轻松开展业务。
                </p>
              </div>
            </Card>
          </section>

          {/* Agency Levels Section */}
          <section className="mb-24 md:mb-32" aria-labelledby="agency-levels">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="warning" size="lg" className="mb-4">
                五级代理制度
              </Badge>
              <h2 id="agency-levels" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                代理升级体系
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                累计购卡达标即可升级，享受更高佣金与专属权益
              </p>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {agencyLevels.map((level) => (
                <Card
                  key={level.level}
                  variant={level.level === 4 ? "elevated" : "bordered"}
                  padding="lg"
                  className={level.level === 4 ? "border-2 border-warning" : ""}
                  role="article"
                >
                  <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {/* Level Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge 
                          variant={
                            level.level === 5 ? "error" : 
                            level.level === 4 ? "warning" : 
                            level.level === 3 ? "success" : 
                            "default"
                          } 
                          size="lg"
                        >
                          L{level.level}
                        </Badge>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {level.name}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm text-muted-foreground">
                            {level.requirement}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-success"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm font-semibold text-success">
                            {level.commission}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                        专属权益
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2" role="list">
                        {level.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2" role="listitem">
                            <svg
                              className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card variant="elevated" padding="lg" className="mt-12 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  金牌代理特别说明
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  累计购卡达到<span className="font-bold text-warning">400张</span>即可晋升为金牌代理，
                  享受<span className="font-bold text-success">15%额外返利</span>以及年度分红计划、
                  团队管理系统、定制推广方案等专属权益。金牌代理是我们最重要的合作伙伴，
                  平台将提供全方位的业务支持与资源倾斜。
                </p>
                <Badge variant="warning" size="lg">
                  累计购卡400张 = 金牌代理
                </Badge>
              </div>
            </Card>
          </section>

          {/* User Testimonials */}
          <section className="mb-24 md:mb-32" aria-labelledby="testimonials">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="info" size="lg" className="mb-4">
                用户反馈
              </Badge>
              <h2 id="testimonials" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                真实用户体验
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                听听用户和代理商的真实评价
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {pricingTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  variant="default"
                />
              ))}
            </div>
          </section>

          {/* Contact & Working Hours */}
          <section className="mb-24 md:mb-32" aria-labelledby="contact-info">
            <div className="text-center mb-12 md:mb-16">
              <Badge variant="default" size="lg" className="mb-4">
                联系我们
              </Badge>
              <h2 id="contact-info" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                客服与咨询
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                我们随时为您提供专业的服务与支持
              </p>
            </div>

            <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full mb-6">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold text-foreground">
                    工作时间：{contactInfo.workingHours}
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {contactInfo.methods.map((method, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-6 rounded-xl bg-muted"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {method.icon === "chat" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        )}
                        {method.icon === "wechat" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        )}
                        {method.icon === "qq" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        )}
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">{method.label}</h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Final CTA */}
          <section aria-labelledby="final-cta">
            <Card variant="elevated" padding="lg" className="text-center">
              <div className="max-w-3xl mx-auto">
                <h2 id="final-cta" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  准备好开始了吗？
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  立即选择适合您的方案，开启AI创意之旅
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={ctaUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="primary"
                      size="lg"
                      aria-label="即刻体验AI创意工坊"
                    >
                      {ctaConfig.label}
                    </Button>
                  </Link>
                  <Link href="/tools">
                    <Button 
                      variant="outline"
                      size="lg"
                      aria-label="浏览AI工具"
                    >
                      浏览AI工具
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
