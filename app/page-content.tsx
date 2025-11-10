"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatsGrid from "@/components/ui/StatsGrid";
import FeatureCard from "@/components/FeatureCard";
import QRModalWrapper from "@/components/QRModalWrapper";

export default function HomeContent() {
  const [showQRModal, setShowQRModal] = useState(false);
  const hiddenUrl = "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=";

  const stats = [
    { label: "AI工具", value: "30+", description: "专业工具集" },
    { label: "训练模型", value: "800+", description: "多领域覆盖" },
    { label: "处理速度", value: "秒级", description: "高效快捷" },
    { label: "用户满意度", value: "98%", description: "专业品质" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <Hero
        title="AI创意工坊"
        subtitle="释放无限创意可能"
        description="集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域"
        variant="default"
        align="center"
        aria-label="主要内容"
        actions={
          <>
            <Button
              size="lg"
              onClick={() => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer')}
              aria-label="即刻体验AI创意工坊"
            >
              即刻体验
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowQRModal(true)}
              aria-label="了解更多关于AI创意工坊"
            >
              了解更多
            </Button>
          </>
        }
      />
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white" aria-label="主要内容">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              AI创意工坊
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-8">
              释放无限创意可能
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer')}
                aria-label="即刻体验AI创意工坊"
              >
                即刻体验
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setShowQRModal(true)}
                aria-label="了解更多关于AI创意工坊"
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section 
        id="products" 
        className="py-24 md:py-32 bg-background"
        aria-labelledby="products-heading"
      >
        <div className="container-max">
          <h2 id="products-heading" className="sr-only">产品展示</h2>
          
          {/* Product 1 - 我有产品 */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">我有产品</h3>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">智能产品图生成与优化</p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                专业电商产品图处理，一键生成完美展示，提升转化率
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/我有产品.png"
                alt="我有产品 - 智能产品图生成与优化"
                className="w-full max-w-3xl h-auto rounded-xl shadow-card"
              />
            </div>
          </div>

          {/* Product 2 - 图片焕新 */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">图片焕新</h3>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">AI图片增强与修复</p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                让图片焕然一新，高清修复、背景替换、细节增强
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/图片焕新.png"
                alt="图片焕新 - AI图片增强与修复"
                className="w-full max-w-3xl h-auto rounded-xl shadow-card"
              />
            </div>
          </div>

          {/* Product 3 - AI视频生成 */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">AI视频生成</h3>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">智能视频创作与编辑</p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                一站式视频制作解决方案，自动生成、剪辑、特效
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/AI视频生成.png"
                alt="AI视频生成 - 智能视频创作与编辑"
                className="w-full max-w-3xl h-auto rounded-xl shadow-card"
              />
            </div>
          </div>

          {/* Product 4 - 对标图文 */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">对标图文</h3>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">竞品分析与内容对标</p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                智能分析竞品，优化营销策略，洞察市场趋势
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/对标图文.jpg"
                alt="对标图文 - 竞品分析与内容对标"
                className="w-full max-w-3xl h-auto rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section 
        className="py-20 md:py-24 bg-muted" 
        aria-labelledby="features-heading"
      >
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">强大功能</h2>
            <p className="text-lg md:text-xl text-muted-foreground">一站式解决您的所有创意需求</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <FeatureCard
              icon="🎨"
              title="图片处理"
              description="背景替换、产品图处理、图片变高清、去水印、图片去人等"
              items={["背景替换", "产品图处理", "图片变高清", "去水印", "图片去人", "智能修复"]}
            />
            <FeatureCard
              icon="🎬"
              title="视频处理"
              description="视频去水印、视频转图片、批量水印、提取转图等"
              items={["视频去水印", "视频转图片", "批量水印", "提取转图", "智能剪辑", "格式转换"]}
            />
            <FeatureCard
              icon="✍️"
              title="文案创作"
              description="19种风格文案生成、手写签名、SOP模板、表情包生成"
              items={["19种风格文案", "手写签名", "SOP模板", "表情包生成", "智能改写", "内容优化"]}
            />
            <FeatureCard
              icon="🤖"
              title="AI模型"
              description="800+专业训练模型，AI减视频、快速手绘草图、产品图生成"
              items={["800+专业模型", "AI减视频", "手绘草图", "产品图生成", "风格迁移", "智能识别"]}
            />
          </div>

          {/* Additional Features Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">💡</div>
              <h3 className="font-semibold text-foreground mb-2">创意工具</h3>
              <p className="text-sm text-muted-foreground">激发无限创意</p>
            </Card>
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">高效快速</h3>
              <p className="text-sm text-muted-foreground">秒级完成处理</p>
            </Card>
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">精准智能</h3>
              <p className="text-sm text-muted-foreground">AI驱动精准</p>
            </Card>
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">🏆</div>
              <h3 className="font-semibold text-foreground mb-2">专业品质</h3>
              <p className="text-sm text-muted-foreground">专业级效果</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-20 md:py-24 bg-background" 
        aria-labelledby="stats-heading"
      >
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 id="stats-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">平台数据</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              涵盖图像处理、自然语言处理、音频处理、视频分析等多个领域
            </p>
          </div>
          <StatsGrid stats={stats} columns={4} variant="cards" align="center" />
          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/models'}
              aria-label="探索AI模型库"
            >
              探索模型库
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 md:py-32 bg-accent text-accent-foreground" 
        aria-labelledby="cta-heading"
      >
        <div className="container-max text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">准备好开始了？</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto opacity-90">
            立即体验强大的AI工具，让创意无限延伸
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer')}
              aria-label="即刻体验AI创意工坊"
              className="bg-background text-foreground hover:bg-muted"
            >
              即刻体验
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowQRModal(true)}
              aria-label="联系我们"
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
              了解更多
              联系我们
            </Button>
          </div>
        </div>
      </section>

      {/* QR Modal */}
      {showQRModal && (
        <QRModalWrapper isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
      )}
    </div>
  );
}
