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
              <p className="text-gray-600 mt-2">了解AI创意工坊的使命与愿景</p>
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
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">公司简介</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              AI创意工坊致力于为用户提供专业的AI工具和服务，帮助创作者、企业和开发者释放创意潜能，提升工作效率。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我们集成了30+专业AI工具，覆盖图片处理、视频编辑、文案创作等多个领域，为用户提供一站式AI解决方案。
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">我们的使命</h2>
              <p className="text-lg leading-relaxed">
                让AI技术惠及每一个创作者，让创意无限延伸，让效率大幅提升。
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">我们的愿景</h2>
              <p className="text-lg leading-relaxed">
                成为全球领先的AI创意工具平台，为用户提供最优质的AI服务。
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">联系我们</h2>
            <p className="text-lg text-gray-700 mb-8">
              如有任何问题或建议，欢迎随时与我们联系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
                联系客服
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all">
                商务合作
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
