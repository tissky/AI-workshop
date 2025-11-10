import Link from "next/link";
import ToolsCTA from "@/components/ToolsCTA";
import StructuredData from "@/components/StructuredData";
import { generateToolListSchema } from "@/lib/seo";
import { toolCategories } from "@/lib/tools";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function ToolsPage() {
  const hiddenUrl = "https://oooooooooooooo.xiangmuchan.cn/update-history.php";

  const stats = [
    { label: "AI工具", value: "30+", color: "text-blue-600" },
    { label: "专业模型", value: "800+", color: "text-purple-600" },
    { label: "服务用户", value: "100万+", color: "text-green-600" },
    { label: "日处理量", value: "500万+", color: "text-orange-600" }
  ];

  const allTools = toolCategories.flatMap(category =>
    category.tools.map(tool => ({
      name: tool.name,
      description: tool.desc,
      url: `https://ai-creative-workshop.com/tools/${tool.id}`,
      category: category.name
    }))
  );

  const toolListSchema = generateToolListSchema(allTools);

  return (
    <>
      <StructuredData data={toolListSchema} />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI工具库</h1>
              <p className="text-gray-600 mt-2">探索30+专业AI工具，释放无限创意</p>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              全方位<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI工具</span>平台
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              从图片处理到视频编辑，从文案创作到AI模型，我们提供一站式AI创意解决方案
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-20">
          {toolCategories.map((category) => (
            <section key={category.id} className="relative">
              {/* Category Header */}
              <div className={`${category.bgColor} rounded-3xl p-8 mb-8`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-4xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                      <span className="px-4 py-1 bg-white rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Tools Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
                  >
                    {/* Hot Badge */}
                    {tool.hot && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          🔥 热门
                        </span>
                      </div>
                    )}
                    
                    {/* Hover Effect Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </h3>
                        <span className="text-gray-400 group-hover:text-blue-500 transition-colors text-xl">→</span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{tool.desc}</p>
                      <div className="flex items-center text-blue-600 font-medium">
                        <span className="group-hover:translate-x-1 transition-transform">开始使用</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            需要更多功能？
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            我们持续更新工具库，为您带来更多AI能力
          </p>
          <ToolsCTA hiddenUrl={hiddenUrl} />
        </div>
      </section>
    </div>
    </>
  );
}
