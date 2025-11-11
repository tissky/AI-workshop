"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/ui/Hero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CompanyContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: "首页", href: "/" },
              { label: "关于我们", href: "/company" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        title="关于我们"
        subtitle="了解AI创意工坊的使命与愿景"
        variant="default"
        align="center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Company Introduction */}
        <section className="mb-24 md:mb-32" aria-labelledby="company-intro">
          <Card>
            <h2 id="company-intro" className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              公司简介
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                AI创意工坊致力于为用户提供专业的AI工具和服务，帮助创作者、企业和开发者释放创意潜能，提升工作效率。
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                我们集成了30+专业AI工具，覆盖图片处理、视频编辑、文案创作等多个领域，为用户提供一站式AI解决方案。
              </p>
            </div>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24 md:mb-32" aria-labelledby="mission-vision">
          <h2 id="mission-vision" className="sr-only">我们的使命与愿景</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                我们的使命
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                让AI技术惠及每一个创作者，让创意无限延伸，让效率大幅提升。
              </p>
            </Card>

            {/* Vision */}
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                我们的愿景
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                成为全球领先的AI创意工具平台，为用户提供最优质的AI服务。
              </p>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-us">
          <Card className="text-center">
            <h2 id="contact-us" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              联系我们
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              如有任何问题或建议，欢迎随时与我们联系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {}}
                aria-label="联系客服"
              >
                联系客服
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {}}
                aria-label="商务合作"
              >
                商务合作
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
