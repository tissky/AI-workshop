"use client";

import Link from "next/link";
import QRModalWrapper from "@/components/QRModalWrapper";
import { useState } from "react";

export default function ToolsPageContent() {
  const [showQRModal, setShowQRModal] = useState(false);
  const hiddenUrl = "https://oooooooooooooo.xiangmuchan.cn/update-history.php";

  const toolCategories = [
    {
      id: "image",
      name: "图片处理",
      description: "专业的图片处理AI工具，让每张图片都完美呈现",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      count: "6大功能",
      tools: [
        { id: "background-replace", name: "背景替换", desc: "一键替换图片背景，支持多种场景", hot: true },
        { id: "product-image", name: "产品图处理", desc: "智能优化产品展示图，提升转化率", hot: true },
        { id: "image-enhance", name: "图片变高清", desc: "AI超分辨率技术，让图片更加清晰", hot: false },
        { id: "remove-watermark", name: "去水印", desc: "智能去除图片水印，保持图片质量", hot: false },
        { id: "remove-people", name: "图片去人", desc: "自动识别并移除图片中的人物", hot: false },
        { id: "image-deduplication", name: "图片查重", desc: "检测相似图片，避免重复内容", hot: false }
      ]
    },
    {
      id: "video",
      name: "视频处理",
      description: "强大的视频编辑AI工具，轻松制作专业视频",
      icon: "🎬",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      count: "4大功能",
      tools: [
        { id: "video-watermark", name: "视频去水印", desc: "专业去除视频水印，不留痕迹", hot: true },
        { id: "video-to-image", name: "视频转图片", desc: "提取视频关键帧，生成精美图片", hot: false },
        { id: "video-batch-watermark", name: "视频批量水印", desc: "批量为视频添加水印，保护版权", hot: false },
        { id: "video-frame-extract", name: "视频提取转图", desc: "AI提取视频精彩瞬间", hot: false }
      ]
    },
    {
      id: "text",
      name: "文案创作",
      description: "AI驱动的文案生成工具，释放无限创意灵感",
      icon: "✍️",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      count: "4大功能",
      tools: [
        { id: "text-generation", name: "文案生成", desc: "为你的产品生成19种不同风格的文案", hot: true },
        { id: "handwriting", name: "手写签名", desc: "生成逼真的手写签名图片", hot: false },
        { id: "sop-template", name: "SOP模板", desc: "生成95%全行业SOP标准作业模板", hot: true },
        { id: "emoji-generator", name: "表情包生成", desc: "一键生成搞笑表情包", hot: false }
      ]
    },
    {
      id: "ai-models",
      name: "AI模型",
      description: "800+专业训练模型，即用即取的高效工具",
      icon: "🤖",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      count: "800+模型",
      tools: [
        { id: "ai减视频", name: "AI减视频工具", desc: "智能移除视频背景，专业级效果", hot: true },
        { id: "sketch", name: "快速手绘草图", desc: "提示词草图也能出效果", hot: false },
        { id: "ai-product", name: "AI产品图", desc: "仅输产品图可得到同类型产品画报", hot: false },
        { id: "trained-models", name: "800+模型库", desc: "即用即取，一次训练多次使用", hot: true }
      ]
    },
    {
      id: "creative",
      name: "创意工具",
      description: "激发创意的AI工具集合，让想象成为现实",
      icon: "✨",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      count: "5大功能",
      tools: [
        { id: "quote-image", name: "一句话配图", desc: "一句话生成一张图，无修改图片分布元素", hot: true },
        { id: "fashion-creative", name: "服装创意", desc: "为你的小网店发的小服装创意", hot: false },
        { id: "privacy", name: "隐私处理", desc: "人脸图片隐私保护，隐私图像打码", hot: false },
        { id: "local-recommend", name: "同城推荐", desc: "为同城可删掉的多记录撮合", hot: false },
        { id: "material-creation", name: "素材制作", desc: "为你的企业制作的商务表情", hot: false }
      ]
    }
  ];

  const stats = [
    { label: "AI工具", value: "30+", color: "text-blue-600" },
    { label: "专业模型", value: "800+", color: "text-purple-600" },
    { label: "服务用户", value: "100万+", color: "text-green-600" },
    { label: "日处理量", value: "500万+", color: "text-orange-600" }
  ];

  return (
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
      <section className="relative py-20 overflow-hidden" aria-label="工具库概览">
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
        <div className="space-y-20" role="region" aria-label="AI工具分类">
          {toolCategories.map((category) => (
            <section key={category.id} className="relative" aria-labelledby={`category-${category.id}`}>
              {/* Category Header */}
              <div className={`${category.bgColor} rounded-3xl p-8 mb-8`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-4xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 id={`category-${category.id}`} className="text-3xl font-bold text-gray-900">{category.name}</h2>
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
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            我们持续更新工具库，为您带来更多AI能力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open(hiddenUrl, '_blank')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              立即体验
            </button>
            <button 
              onClick={() => setShowQRModal(true)}
              className="border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              联系我们
            </button>
          </div>
        </div>
      </section>

      {/* QR Modal */}
      {showQRModal && (
        <QRModalWrapper isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
      )}
    </div>
  );
}
