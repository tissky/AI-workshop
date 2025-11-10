import Link from "next/link";
import HomeNav from "@/components/HomeNav";
import HomeHero from "@/components/HomeHero";
import HomeCTA from "@/components/HomeCTA";
import Image from "next/image";
import { images } from "@/lib/media";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  const hiddenUrl = "aHR0cHM6Ly9vb29vb29vb29vb29vby54aWFuZ211Y2hhbi5jbi91cGRhdGUtaGlzdG9yeS5waHA=";
  
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  
  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema]} />
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[980px] mx-auto h-full px-4">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              AI创意工坊
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#products" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">产品</Link>
              <Link href="/tools" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">AI工具</Link>
              <Link href="/models" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">模型库</Link>
              <HomeNav hiddenUrl={hiddenUrl} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - iPhone Style */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              AI创意工坊
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
              释放无限创意可能
            </h2>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域
            </p>
            <HomeHero hiddenUrl={hiddenUrl} />
          </div>
        </div>
      </section>

      {/* Products Section - MacBook Style */}
      <section id="products" className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Product 1 - 我有产品 */}
          <div className="mb-48">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold text-gray-900 mb-6">我有产品</h2>
              <p className="text-2xl text-gray-600 mb-8">智能产品图生成与优化</p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                专业电商产品图处理，一键生成完美展示，提升转化率
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto flex justify-center">
              <Image
                src={images.myProduct}
                alt="我有产品"
                className="w-2/3 h-auto"
                width={1303}
                height={700}
                sizes="(max-width: 768px) 100vw, 66vw"
                placeholder="blur"
                priority
              />
            </div>
          </div>

          {/* Product 2 - 图片焕新 */}
          <div className="mb-48">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold text-gray-900 mb-6">图片焕新</h2>
              <p className="text-2xl text-gray-600 mb-8">AI图片增强与修复</p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                让图片焕然一新，高清修复、背景替换、细节增强
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto flex justify-center">
              <Image
                src={images.imageRefresh}
                alt="图片焕新"
                className="w-2/3 h-auto"
                width={1160}
                height={700}
                sizes="(max-width: 768px) 100vw, 66vw"
                placeholder="blur"
              />
            </div>
          </div>

          {/* Product 3 - AI视频生成 */}
          <div className="mb-48">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold text-gray-900 mb-6">AI视频生成</h2>
              <p className="text-2xl text-gray-600 mb-8">智能视频创作与编辑</p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                一站式视频制作解决方案，自动生成、剪辑、特效
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto flex justify-center">
              <Image
                src={images.aiVideoGeneration}
                alt="AI视频生成"
                className="w-2/3 h-auto"
                width={2025}
                height={1150}
                sizes="(max-width: 768px) 100vw, 66vw"
                placeholder="blur"
              />
            </div>
          </div>

          {/* Product 4 - 对标图文 */}
          <div className="mb-48">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold text-gray-900 mb-6">对标图文</h2>
              <p className="text-2xl text-gray-600 mb-8">竞品分析与内容对标</p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                智能分析竞品，优化营销策略，洞察市场趋势
              </p>
            </div>
            <div className="relative max-w-3xl mx-auto flex justify-center">
              <Image
                src={images.benchmarkContent}
                alt="对标图文"
                className="w-2/3 h-auto"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 66vw"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - iPad Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">强大功能</h2>
            <p className="text-xl text-gray-600">一站式解决您的所有创意需求</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 - 图片处理 */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">图片处理</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">6大功能</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  背景替换、产品图处理、图片变高清、去水印、图片去人等
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>查看详情</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 2 - 视频处理 */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎬</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">视频处理</h3>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">智能工具</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  视频去水印、视频转图片、批量水印、提取转图等
                </p>
                <div className="flex items-center text-purple-600 text-sm font-medium">
                  <span>查看详情</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 - 文案创作 */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">✍️</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">文案创作</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">19种风格</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  19种风格文案生成、手写签名、SOP模板、表情包生成
                </p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <span>查看详情</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 4 - AI模型 */}
            <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">AI模型</h3>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">800+模型</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  800+专业训练模型，AI减视频、快速手绘草图、产品图生成
                </p>
                <div className="flex items-center text-orange-600 text-sm font-medium">
                  <span>查看详情</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:from-blue-100 hover:to-blue-200 transition-all">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-semibold text-gray-900 mb-2">创意工具</h4>
              <p className="text-sm text-gray-600">激发无限创意</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:from-purple-100 hover:to-purple-200 transition-all">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-2">高效快速</h4>
              <p className="text-sm text-gray-600">秒级完成处理</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:from-green-100 hover:to-green-200 transition-all">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">精准智能</h4>
              <p className="text-sm text-gray-600">AI驱动精准</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center hover:from-orange-100 hover:to-orange-200 transition-all">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-semibold text-gray-900 mb-2">专业品质</h4>
              <p className="text-sm text-gray-600">专业级效果</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 800 Models - Apple Watch Style */}
      <section className="py-32 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-8">800+</h2>
          <h3 className="text-3xl font-medium mb-6">专业训练模型</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            涵盖图像处理、自然语言处理、音频处理、视频分析等多个领域
          </p>
          <Link 
            href="/models"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition-all transform hover:scale-105"
          >
            探索模型库
          </Link>
        </div>
      </section>

      {/* CTA Section - iPhone Style */}
      <section className="py-32 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold text-white mb-8">准备好开始了？</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            立即体验强大的AI工具，让创意无限延伸
          </p>
          <HomeCTA hiddenUrl={hiddenUrl} />
        </div>
      </section>

      {/* Footer - Apple Style */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">产品</h4>
              <ul className="space-y-3">
                <li><Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">我有产品</Link></li>
                <li><Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">图片焕新</Link></li>
                <li><Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">AI视频生成</Link></li>
                <li><Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">对标图文</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">AI工具</h4>
              <ul className="space-y-3">
                <li><Link href="/tools" className="text-gray-600 hover:text-gray-900 transition-colors">图片处理</Link></li>
                <li><Link href="/tools" className="text-gray-600 hover:text-gray-900 transition-colors">视频处理</Link></li>
                <li><Link href="/tools" className="text-gray-600 hover:text-gray-900 transition-colors">文案创作</Link></li>
                <li><Link href="/tools" className="text-gray-600 hover:text-gray-900 transition-colors">创意工具</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">技术</h4>
              <ul className="space-y-3">
                <li><Link href="/technology" className="text-gray-600 hover:text-gray-900 transition-colors">核心技术</Link></li>
                <li><Link href="/technology" className="text-gray-600 hover:text-gray-900 transition-colors">技术栈</Link></li>
                <li><Link href="/technology" className="text-gray-600 hover:text-gray-900 transition-colors">性能指标</Link></li>
                <li><Link href="/technology" className="text-gray-600 hover:text-gray-900 transition-colors">模型库</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">支持</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">帮助中心</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">技术支持</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">用户反馈</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">公司</h4>
              <ul className="space-y-3">
                <li><Link href="/company" className="text-gray-600 hover:text-gray-900 transition-colors">关于我们</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">商务合作</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">隐私政策</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">服务条款</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>&copy; 2024 AI创意工坊. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
