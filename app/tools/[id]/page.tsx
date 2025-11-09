import Link from "next/link";

interface ToolDetail {
  name: string;
  icon: string;
  category: string;
  description: string;
  features: string[];
  useCases: string[];
  steps: string[];
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: toolId } = await params;

  const toolDetails: Record<string, ToolDetail> = {
    "background-replace": {
      name: "背景替换",
      icon: "🖼️",
      category: "图片处理",
      description: "智能识别图片主体，一键替换背景，支持多种场景和风格",
      features: [
        "智能主体识别",
        "多种背景模板",
        "自然边缘处理",
        "高质量输出"
      ],
      useCases: [
        "电商产品图制作",
        "证件照背景更换",
        "社交媒体图片美化",
        "创意设计素材制作"
      ],
      steps: [
        "上传原始图片",
        "选择背景模板或上传新背景",
        "AI自动处理图片",
        "下载处理后的图片"
      ]
    },
    "product-image": {
      name: "产品图处理",
      icon: "📦",
      category: "图片处理",
      description: "专为电商打造的产品图优化工具，提升产品展示效果和转化率",
      features: [
        "自动背景优化",
        "产品细节增强",
        "多角度展示生成",
        "批量处理支持"
      ],
      useCases: [
        "电商产品图制作",
        "营销海报制作",
        "产品目录制作",
        "广告素材生成"
      ],
      steps: [
        "上传产品图片",
        "选择处理风格",
        "AI智能优化",
        "下载高质量图片"
      ]
    },
    "text-generation": {
      name: "文案生成",
      icon: "📝",
      category: "文案创作",
      description: "AI智能文案创作工具，支持19种不同风格的文案生成",
      features: [
        "19种文案风格",
        "行业定制模板",
        "批量生成支持",
        "SEO优化建议"
      ],
      useCases: [
        "产品描述撰写",
        "广告文案创作",
        "社交媒体内容",
        "营销邮件编写"
      ],
      steps: [
        "输入产品信息",
        "选择文案风格",
        "AI生成文案",
        "复制或编辑文案"
      ]
    },
    "video-watermark": {
      name: "视频去水印",
      icon: "🎥",
      category: "视频处理",
      description: "专业视频去水印工具，智能识别并移除各种水印，保持视频质量",
      features: [
        "智能水印识别",
        "无痕去水印",
        "多种格式支持",
        "批量处理能力"
      ],
      useCases: [
        "视频素材清理",
        "版权内容处理",
        "视频平台内容优化",
        "影视后期制作"
      ],
      steps: [
        "上传视频文件",
        "标记水印位置",
        "AI智能处理",
        "下载处理后的视频"
      ]
    }
  };

  const tool = toolDetails[toolId] || {
    name: "工具详情",
    icon: "🔧",
    category: "其他",
    description: "AI驱动的创意工具",
    features: ["智能处理", "高质量输出", "简单易用", "快速高效"],
    useCases: ["创意设计", "内容制作", "效率提升"],
    steps: ["上传文件", "选择设置", "开始处理", "下载结果"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link href="/tools" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← 返回工具库
            </Link>
          </div>
        </div>
      </div>

      {/* Tool Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl mr-6">
                {tool.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{tool.name}</h1>
                <p className="text-gray-600">{tool.category}</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8">{tool.description}</p>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">功能特点</h2>
                <ul className="space-y-3">
                  {tool.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">应用场景</h2>
                <ul className="space-y-3">
                  {tool.useCases.map((useCase: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">使用步骤</h2>
                <ol className="space-y-3">
                  {tool.steps.map((step: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Demo Section */}
            <div className="mt-12 p-8 bg-gray-50 rounded-xl">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">演示预览</h2>
              <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <div className="text-gray-400 text-6xl mb-4">{tool.icon}</div>
                <p className="text-gray-600">点击下方按钮体验{tool.name}</p>
                <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
                  即刻体验
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">开始使用{tool.name}</h2>
              <p className="text-gray-600 mb-6">注册免费账户，立即体验强大的AI功能</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all">
                  即刻体验
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all">
                  查看价格
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}