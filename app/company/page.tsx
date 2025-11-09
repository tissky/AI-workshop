import Link from "next/link";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">关于我们</h1>
              <p className="text-gray-600 mt-2">专业的AI技术公司，创新驱动未来</p>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Introduction */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">公司介绍</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">我们的使命</h3>
                <p className="text-gray-600 mb-6">
                  AI创意工坊是一家专注于人工智能技术研发和应用的创新公司。我们致力于为企业提供最先进的人工智能解决方案，帮助客户在数字化转型的浪潮中抢占先机。
                </p>
                <p className="text-gray-600">
                  我们相信人工智能的力量能够释放人类的创造力，让每个人都能轻松实现创意想法，推动社会进步。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">我们的愿景</h3>
                <p className="text-gray-600 mb-6">
                  成为全球领先的人工智能技术公司，让AI技术触手可及，为各行各业提供智能化解决方案。
                </p>
                <p className="text-gray-600">
                  我们希望通过持续的技术创新，构建一个更加智能、高效、便捷的数字化世界。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-xl text-gray-600">来自知名院校和企业的AI专家</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                研
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">研发团队</h3>
              <p className="text-gray-600 mb-4">来自清华、北大、斯坦福等知名院校</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 深度学习专家</li>
                <li>• 算法工程师</li>
                <li>• 模型训练师</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                产
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">产品团队</h3>
              <p className="text-gray-600 mb-4">来自阿里、腾讯、字节等一线互联网公司</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 产品经理</li>
                <li>• UI/UX设计师</li>
                <li>• 用户体验专家</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                服
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">服务团队</h3>
              <p className="text-gray-600 mb-4">7x24小时专业技术支持</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 技术支持工程师</li>
                <li>• 客户成功经理</li>
                <li>• 培训专家</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Company Advantages */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">公司优势</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">技术优势</h3>
                <ul className="space-y-4">
                  <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">800+专业训练模型</p>
                      <p className="text-sm text-gray-600">覆盖多个AI应用领域，持续更新</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-purple-50 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">毫秒级响应速度</p>
                      <p className="text-sm text-gray-600">支持大规模并发处理</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-green-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">企业级安全保障</p>
                      <p className="text-sm text-gray-600">严格的隐私保护机制</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-orange-50 rounded-lg">
                    <svg className="w-6 h-6 text-orange-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">7x24小时技术支持</p>
                      <p className="text-sm text-gray-600">专业技术支持服务</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">服务优势</h3>
                <ul className="space-y-4">
                  <li className="flex items-start p-4 bg-pink-50 rounded-lg">
                    <svg className="w-6 h-6 text-pink-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">定制化解决方案</p>
                      <p className="text-sm text-gray-600">根据客户需求量身定制</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-indigo-50 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">快速部署</p>
                      <p className="text-sm text-gray-600">简单易用，快速上手</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-yellow-50 rounded-lg">
                    <svg className="w-6 h-6 text-yellow-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">持续更新</p>
                      <p className="text-sm text-gray-600">模型库持续优化升级</p>
                    </div>
                  </li>
                  <li className="flex items-start p-4 bg-teal-50 rounded-lg">
                    <svg className="w-6 h-6 text-teal-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">行业经验丰富</p>
                      <p className="text-sm text-gray-600">服务多个行业客户</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">加入我们</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              我们正在寻找优秀的AI人才加入团队，一起创造AI技术的未来
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                查看职位
              </button>
              <button className="border-2 border-white/40 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                联系我们
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
