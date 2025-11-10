import Link from "next/link";
import ModelsFilter from "@/components/ModelsFilter";

export const revalidate = 3600;
export const dynamic = "force-static";

export default function ModelsPage() {
  const modelCategories = [
    { id: "all", name: "全部模型" },
    { id: "image", name: "图像处理" },
    { id: "video", name: "视频处理" },
    { id: "text", name: "文本生成" },
    { id: "audio", name: "音频处理" }
  ];

  const models = [
    { id: 1, name: "图像增强模型", category: "image", accuracy: "98%", uses: "50K+", desc: "高质量图像超分辨率增强" },
    { id: 2, name: "背景移除模型", category: "image", accuracy: "99%", uses: "100K+", desc: "精准识别主体，智能背景移除" },
    { id: 3, name: "产品图优化模型", category: "image", accuracy: "95%", uses: "30K+", desc: "专为电商产品图优化设计" },
    { id: 4, name: "视频去水印模型", category: "video", accuracy: "97%", uses: "20K+", desc: "专业视频水印去除技术" },
    { id: 5, name: "视频关键帧提取", category: "video", accuracy: "96%", uses: "15K+", desc: "智能提取视频精彩瞬间" },
    { id: 6, name: "文案生成模型", category: "text", accuracy: "94%", uses: "80K+", desc: "支持多种文案风格生成" },
    { id: 7, name: "情感分析模型", category: "text", accuracy: "93%", uses: "40K+", desc: "精准识别文本情感倾向" },
    { id: 8, name: "音频降噪模型", category: "audio", accuracy: "95%", uses: "25K+", desc: "高质量音频降噪处理" }
  ];

  return (
    <>
      <StructuredData data={[datasetSchema, modelListSchema]} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI模型库</h1>
                <p className="text-gray-600 mt-2">800+专业训练模型，覆盖各行各业应用场景</p>
              </div>
              <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
                ← 返回首页
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">800+</div>
                <div className="text-white/90">训练模型</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-white/90">平均准确率</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-white/90">用户使用</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/90">在线服务</div>
              </div>
            </div>
          </div>

        <ModelsFilter modelCategories={modelCategories} models={models} />

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">需要定制模型？</h2>
          <p className="text-gray-600 mb-6">
            我们提供专业的模型定制服务，根据您的业务需求训练专属AI模型
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
              联系定制
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
