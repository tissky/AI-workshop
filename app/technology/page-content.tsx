"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Hero from "@/components/ui/Hero";
import Card from "@/components/ui/Card";
import StatsGrid from "@/components/ui/StatsGrid";

export default function TechnologyPageContent() {
  // Model statistics
  const modelStats = [
    { label: "图像处理模型", value: "300+", description: "专业图像识别与处理" },
    { label: "视频处理模型", value: "200+", description: "智能视频编辑与分析" },
    { label: "文本生成模型", value: "150+", description: "自然语言理解与生成" },
    { label: "音频处理模型", value: "150+", description: "语音识别与合成" },
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      title: "响应速度",
      description: "平均处理时间 < 500ms，支持实时处理",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "并发能力",
      description: "支持10,000+并发请求处理",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "准确率",
      description: "模型准确率达95%以上",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "可用性",
      description: "99.9%系统可用性保障",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  // Technology stack
  const techStack = [
    {
      title: "机器学习",
      description: "TensorFlow, PyTorch, Keras",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "深度学习",
      description: "CNN, RNN, Transformer",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "高性能计算",
      description: "CUDA, OpenMP, MPI",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "云计算",
      description: "AWS, Azure, 阿里云",
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: "首页", href: "/" },
              { label: "技术实力", href: "/technology" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        title="技术实力"
        subtitle="领先的AI技术，专业的技术团队"
        description="基于最新AI技术，构建专业解决方案"
        variant="default"
        align="center"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Core Technologies */}
        <section className="mb-24 md:mb-32" aria-labelledby="core-tech">
          <div className="text-center mb-16">
            <h2 id="core-tech" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              核心技术
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              基于最新AI技术，构建专业解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Deep Learning */}
            <Card variant="elevated" padding="lg">
              <div className="w-16 h-16 bg-accent-muted rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                深度学习
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                基于最新的深度学习技术，800+专业训练模型，覆盖多个AI应用领域
              </p>
            </Card>

            {/* High Performance Computing */}
            <Card variant="elevated" padding="lg">
              <div className="w-16 h-16 bg-accent-muted rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-accent"
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
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                高性能计算
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                毫秒级响应速度，支持批量处理，满足大规模商业应用需求
              </p>
            </Card>

            {/* Data Security */}
            <Card variant="elevated" padding="lg">
              <div className="w-16 h-16 bg-accent-muted rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                数据安全
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                企业级安全保障，数据加密传输，严格的隐私保护机制
              </p>
            </Card>
          </div>
        </section>

        {/* Technical Advantages */}
        <section className="mb-24 md:mb-32" aria-labelledby="tech-advantages">
          <Card variant="elevated" padding="lg">
            <h2 id="tech-advantages" className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              技术优势
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Model Library Scale */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  模型库规模
                </h3>
                <StatsGrid
                  stats={modelStats}
                  columns={2}
                  variant="cards"
                  align="center"
                />
              </div>

              {/* Performance Metrics */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  性能指标
                </h3>
                <ul className="space-y-4" role="list">
                  {performanceMetrics.map((metric, index) => (
                    <li key={index} role="listitem">
                      <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                        <div className="flex-shrink-0 mt-0.5">
                          {metric.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            {metric.title}
                          </p>
                          <p className="text-sm md:text-base text-muted-foreground">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Technology Stack */}
        <section aria-labelledby="tech-stack">
          <Card variant="elevated" padding="lg">
            <h2 id="tech-stack" className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              技术栈
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-6 border-2 border-border rounded-xl hover:border-accent hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-center mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
