"use client";

import Link from "next/link";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">技术实力</h1>
              <p className="text-gray-600 mt-2">领先的AI技术，专业的技术团队</p>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Technologies */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心技术</h2>
            <p className="text-xl text-gray-600">基于最新AI技术，构建专业解决方案</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">深度学习</h3>
              <p className="text-gray-600">基于最新的深度学习技术，800+专业训练模型，覆盖多个AI应用领域</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">高性能计算</h3>
              <p className="text-gray-600">毫秒级响应速度，支持批量处理，满足大规模商业应用需求</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">数据安全</h3>
              <p className="text-gray-600">企业级安全保障，数据加密传输，严格的隐私保护机制</p>
            </div>
          </div>
        </section>

        {/* Technical Advantages */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">技术优势</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">模型库规模</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 font-medium">图像处理模型</span>
                    <span className="text-blue-600 font-bold text-xl">300+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <span className="text-gray-700 font-medium">视频处理模型</span>
                    <span className="text-purple-600 font-bold text-xl">200+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-medium">文本生成模型</span>
                    <span className="text-green-600 font-bold text-xl">150+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <span className="text-gray-700 font-medium">音频处理模型</span>
                    <span className="text-orange-600 font-bold text-xl">150+</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">性能指标</h4>
                <ul className="space-y-4">
                  <li className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">响应速度</p>
                      <p className="text-sm text-gray-600">平均处理时间 &lt; 500ms，支持实时处理</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">并发能力</p>
                      <p className="text-sm text-gray-600">支持10,000+并发请求处理</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">准确率</p>
                      <p className="text-sm text-gray-600">模型准确率达95%以上</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">可用性</p>
                      <p className="text-sm text-gray-600">99.9%系统可用性保障</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">技术栈</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-blue-400 transition-colors">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="font-semibold text-gray-900 mb-2">机器学习</h4>
                <p className="text-sm text-gray-600">TensorFlow, PyTorch, Keras</p>
              </div>
              <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-purple-400 transition-colors">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="font-semibold text-gray-900 mb-2">深度学习</h4>
                <p className="text-sm text-gray-600">CNN, RNN, Transformer</p>
              </div>
              <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-green-400 transition-colors">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-semibold text-gray-900 mb-2">高性能计算</h4>
                <p className="text-sm text-gray-600">CUDA, OpenMP, MPI</p>
              </div>
              <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-orange-400 transition-colors">
                <div className="text-4xl mb-3">☁️</div>
                <h4 className="font-semibold text-gray-900 mb-2">云计算</h4>
                <p className="text-sm text-gray-600">AWS, Azure, 阿里云</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
