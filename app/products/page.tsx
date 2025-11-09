import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function ProductsPage() {
  const productCategories = [
    {
      id: "product",
      title: "我有产品",
      description: "专业的电商产品图处理工具，一键生成完美产品展示",
      items: [
        {
          id: "1",
          image: "/images/我有产品.png",
          title: "我有产品",
          description: "智能产品图生成与优化，提升转化率"
        }
      ]
    },
    {
      id: "image-refresh",
      title: "图片焕新",
      description: "AI驱动的图片增强与修复，让图片焕然一新",
      items: [
        {
          id: "1",
          image: "/images/图片焕新.png",
          title: "图片焕新",
          description: "高清修复、背景替换、细节增强"
        }
      ]
    },
    {
      id: "video-ai",
      title: "AI视频生成",
      description: "智能视频创作与编辑，轻松制作专业视频",
      items: [
        {
          id: "1",
          image: "/images/AI视频生成.png",
          title: "AI视频生成",
          description: "自动生成、剪辑、特效一站式解决方案"
        }
      ]
    },
    {
      id: "benchmark",
      title: "对标图文",
      description: "竞品分析与内容对标，助力精准营销",
      items: [
        {
          id: "1",
          image: "/images/对标图文.jpg",
          title: "对标图文",
          description: "智能分析竞品，优化内容策略"
        },
        {
          id: "2",
          image: "/images/同行分析.png",
          title: "同行分析",
          description: "深度解析同行数据，找出差异化优势"
        },
        {
          id: "3",
          image: "/images/同行观测.png",
          title: "同行观测",
          description: "实时监控竞争对手动态"
        }
      ]
    }
  ];

  const additionalFeatures = [
    {
      title: "AI 800+模型",
      description: "海量专业模型库",
      image: "/images/AI 800.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "创意生成",
      description: "激发无限创意可能",
      image: "/images/创意生成.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "SOP模板",
      description: "95%全行业标准模板",
      image: "/images/SOP模板.png",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "视频转图文",
      description: "智能提取精彩内容",
      image: "/images/视频转图文.png",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "提示词工具",
      description: "优化提示词效果",
      image: "/images/提示词.png",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "智能体",
      description: "AI助手一站式服务",
      image: "/images/智能体.png",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const socialPlatforms = [
    { name: "抖音", image: "/images/抖音.jpg", color: "from-pink-500 to-purple-500" },
    { name: "抖音热榜", image: "/images/抖音热榜.jpg", color: "from-red-500 to-orange-500" },
    { name: "小红薯", image: "/images/小红薯.png", color: "from-red-400 to-pink-400" },
    { name: "抖抖对标", image: "/images/抖抖对标.jpg", color: "from-purple-500 to-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">产品中心</h1>
              <p className="text-gray-600 mt-2">探索我们的核心AI产品与服务</p>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Product Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            四大核心产品
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            专为电商、内容创作者和营销人员打造的AI工具矩阵
          </p>

          <div className="space-y-20">
            {productCategories.map((category, categoryIndex) => (
              <div key={category.id} className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className={`${categoryIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {category.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
                          即刻体验
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-all">
                          即刻体验
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <ImageCarousel
                      items={category.items}
                      autoPlay={true}
                      interval={4000}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            更多强大功能
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            全方位的AI工具，助力您的创作之旅
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Platforms */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            社交媒体工具
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            覆盖主流平台的全方位营销支持
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => (
              <div
                key={index}
                className="group relative h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">
                      {platform.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            准备好体验AI创意工坊了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            立即开始使用我们的AI工具，让创意无限延伸，让效率大幅提升
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              即刻体验
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              联系销售
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}