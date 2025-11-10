import Link from "next/link";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">技术架构</h1>
              <p className="text-gray-600 mt-2">了解AI创意工坊的技术实力</p>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Technology Overview */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">技术概览</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              AI创意工坊采用最先进的人工智能技术，结合深度学习、计算机视觉和自然语言处理等多个领域的前沿算法。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我们的技术团队不断优化模型性能，确保为用户提供高效、准确、稳定的AI服务。
            </p>
          </div>
        </section>

        {/* Key Technologies */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">核心技术</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">深度学习</h3>
              <p className="text-gray-600">
                基于深度神经网络的先进算法，实现高精度的图像识别和生成。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">计算机视觉</h3>
              <p className="text-gray-600">
                强大的图像处理能力，支持背景替换、物体识别、图像增强等功能。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">自然语言处理</h3>
              <p className="text-gray-600">
                智能理解和生成文本内容，支持多种文案风格和语言。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">视频处理</h3>
              <p className="text-gray-600">
                专业的视频编辑和生成技术，支持水印去除、关键帧提取等功能。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">云计算架构</h3>
              <p className="text-gray-600">
                基于云原生的分布式架构，确保高可用性和可扩展性。
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">安全保障</h3>
              <p className="text-gray-600">
                企业级安全防护，保护用户数据和隐私安全。
              </p>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-8 text-center">性能指标</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">服务可用性</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">&lt;2s</div>
                <div className="text-blue-100">平均响应时间</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">800+</div>
                <div className="text-blue-100">训练模型</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500万+</div>
                <div className="text-blue-100">日处理量</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">体验我们的技术</h2>
            <p className="text-lg text-gray-700 mb-8">
              立即开始使用AI创意工坊，感受先进技术带来的创作体验
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
              即刻体验
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
