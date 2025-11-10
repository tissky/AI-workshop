import Link from "next/link";
import { getToolDetail, getAllToolIds } from "@/lib/tools";
import { generateSoftwareApplicationSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export const revalidate = 3600;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const toolIds = getAllToolIds();
  return toolIds.map((id) => ({
    id: id,
  }));
}

interface ToolDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { id } = await params;
  const tool = getToolDetail(id);
  
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CNY"
    }
  };
  const softwareAppSchema = generateSoftwareApplicationSchema(tool);

  return (
    <>
      <StructuredData data={softwareAppSchema} />
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
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-round flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
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
    </>
  );
}
