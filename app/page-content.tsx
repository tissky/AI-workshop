"use client";

import { useState } from "react";
import Image from "next/image";
import QRModalWrapper from "@/components/QRModalWrapper";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatsGrid from "@/components/ui/StatsGrid";
import FeatureCard from "@/components/FeatureCard";

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
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">我有产品</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6">智能产品图生成与优化</p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                专业电商产品图处理，一键生成完美展示，提升转化率
              </p>
            </div>
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-3xl aspect-video">
                <Image
                  src="/images/我有产品.png"
                  alt="我有产品 - 智能产品图生成与优化"
                  fill
                  className="object-contain rounded-xl shadow-card"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Product 2 - 图片焕新 */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">图片焕新</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6">AI图片增强与修复</p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                让图片焕然一新，高清修复、背景替换、细节增强
              </p>
            </div>
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-3xl aspect-video">
                <Image
                  src="/images/图片焕新.png"
                  alt="图片焕新 - AI图片增强与修复"
                  fill
                  className="object-contain rounded-xl shadow-card"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>

          {/* Product 3 - AI视频生成 */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">AI视频生成</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6">智能视频创作与编辑</p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                一站式视频制作解决方案，自动生成、剪辑、特效
              </p>
            </div>
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-3xl aspect-video">
                <Image
                  src="/images/AI视频生成.png"
                  alt="AI视频生成 - 智能视频创作与编辑"
                  fill
                  className="object-contain rounded-xl shadow-card"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>
          </div>

          {/* Product 4 - 对标图文 */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">对标图文</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6">竞品分析与内容对标</p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                智能分析竞品，优化营销策略，洞察市场趋势
              </p>
            </div>
            <div className="flex justify-center px-4">
              <div className="relative w-full max-w-3xl aspect-video">
                <Image
                  src="/images/对标图文.jpg"
                  alt="对标图文 - 竞品分析与内容对标"
                  fill
                  className="object-contain rounded-xl shadow-card"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
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
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">强大功能</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">一站式解决您的所有创意需求</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <FeatureCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="图片处理"
              description="背景替换、产品图处理、图片变高清、去水印、图片去人等"
              items={["背景替换", "产品图处理", "图片变高清", "去水印", "图片去人", "智能修复"]}
            />
            <FeatureCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
              title="视频处理"
              description="视频去水印、视频转图片、批量水印、提取转图等"
              items={["视频去水印", "视频转图片", "批量水印", "提取转图", "智能剪辑", "格式转换"]}
            />
            <FeatureCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              }
              title="文案创作"
              description="19种风格文案生成、手写签名、SOP模板、表情包生成"
              items={["19种风格文案", "手写签名", "SOP模板", "表情包生成", "智能改写", "内容优化"]}
            />
            <FeatureCard
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
              title="AI模型"
              description="800+专业训练模型，AI减视频、快速手绘草图、产品图生成"
              items={["800+专业模型", "AI减视频", "手绘草图", "产品图生成", "风格迁移", "智能识别"]}
            />
          </div>

          {/* Additional Features Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
            <Card variant="bordered" padding="sm" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" aria-hidden="true">💡</div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">创意工具</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">激发无限创意</p>
            </Card>
            <Card variant="bordered" padding="sm" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" aria-hidden="true">⚡</div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">高效快速</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">秒级完成处理</p>
            </Card>
            <Card variant="bordered" padding="sm" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" aria-hidden="true">🎯</div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">精准智能</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">AI驱动精准</p>
            </Card>
            <Card variant="bordered" padding="sm" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" aria-hidden="true">🏆</div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">专业品质</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">专业级效果</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-accent" aria-hidden="true">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">创意工具</h3>
              <p className="text-sm text-muted-foreground">激发无限创意</p>
            </Card>
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-accent" aria-hidden="true">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">高效快速</h3>
              <p className="text-sm text-muted-foreground">秒级完成处理</p>
            </Card>
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-accent" aria-hidden="true">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">精准智能</h3>
              <p className="text-sm text-muted-foreground">AI驱动精准</p>
            </Card>
            <Card variant="bordered" padding="md" className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-accent" aria-hidden="true">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            <Card className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">💡</div>
              <h3 className="font-semibold text-foreground mb-2">创意工具</h3>
              <p className="text-sm text-muted-foreground">激发无限创意</p>
            </Card>
            <Card className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">高效快速</h3>
              <p className="text-sm text-muted-foreground">秒级完成处理</p>
            </Card>
            <Card className="text-center bg-background hover:bg-accent-muted transition-colors">
              <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">精准智能</h3>
              <p className="text-sm text-muted-foreground">AI驱动精准</p>
            </Card>
            <Card className="text-center bg-background hover:bg-accent-muted transition-colors">
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
          <div className="text-center mb-12 px-4">
            <h2 id="stats-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">平台数据</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
        className="py-24 md:py-32 bg-muted" 
        aria-labelledby="cta-heading"
      >
        <div className="container-max text-center">
          <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8">准备好开始了？</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
        <div className="container-max text-center px-4">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">准备好开始了？</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto opacity-90">
            立即体验强大的AI工具，让创意无限延伸
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer')}
              aria-label="即刻体验AI创意工坊"
              className="bg-background text-foreground hover:bg-muted min-h-[44px]"
            >
              即刻体验
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowQRModal(true)}
              aria-label="联系我们"
              className="border-background text-background hover:bg-background hover:text-foreground min-h-[44px]"
            >
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
