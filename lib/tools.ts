export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  scenarios: string[];
  features: string[];
  steps?: string[];
  previewVideoUrl?: string;
  lifetimeOnly?: boolean;
}

export const tools: Tool[] = [
  // 图片处理 (7 tools)
  {
    id: "background-replace",
    name: "背景替换",
    category: "图片处理",
    description: "智能识别图片主体，一键替换背景，支持多种场景和风格",
    scenarios: [
      "电商产品图制作",
      "证件照背景更换",
      "社交媒体图片美化",
      "创意设计素材制作"
    ],
    features: [
      "智能主体识别",
      "多种背景模板",
      "自然边缘处理",
      "高质量输出"
    ],
    steps: [
      "上传原始图片",
      "选择背景模板或上传新背景",
      "AI自动处理图片",
      "下载处理后的图片"
    ],
    previewVideoUrl: "https://example.com/videos/background-replace.mp4"
  },
  {
    id: "product-image",
    name: "产品图处理",
    category: "图片处理",
    description: "专为电商打造的产品图优化工具，提升产品展示效果和转化率",
    scenarios: [
      "电商产品图制作",
      "营销海报制作",
      "产品目录制作",
      "广告素材生成"
    ],
    features: [
      "自动背景优化",
      "产品细节增强",
      "多角度展示生成",
      "批量处理支持"
    ],
    steps: [
      "上传产品图片",
      "选择处理风格",
      "AI智能优化",
      "下载高质量图片"
    ],
    previewVideoUrl: "https://example.com/videos/product-image.mp4"
  },
  {
    id: "image-enhance",
    name: "图片变高清",
    category: "图片处理",
    description: "AI超分辨率技术，让图片更加清晰，支持多倍放大不失真",
    scenarios: [
      "老照片修复",
      "图片放大",
      "印刷素材优化",
      "视频截图增强"
    ],
    features: [
      "超分辨率技术",
      "细节增强",
      "噪点去除",
      "批量处理"
    ],
    steps: [
      "上传图片",
      "选择放大倍数",
      "AI处理",
      "下载高清图片"
    ]
  },
  {
    id: "remove-watermark",
    name: "去水印",
    category: "图片处理",
    description: "智能去除图片水印，保持图片质量，支持批量处理",
    scenarios: [
      "素材清理",
      "图片优化",
      "内容二次创作",
      "版权处理"
    ],
    features: [
      "智能识别水印",
      "无痕去除",
      "批量处理",
      "多格式支持"
    ],
    steps: [
      "上传图片",
      "标记水印区域",
      "AI去除",
      "保存图片"
    ]
  },
  {
    id: "remove-people",
    name: "图片去人",
    category: "图片处理",
    description: "自动识别并移除图片中的人物，智能填充背景",
    scenarios: [
      "风景照优化",
      "产品图清理",
      "建筑摄影",
      "背景素材制作"
    ],
    features: [
      "人物智能识别",
      "智能背景填充",
      "场景完整保持",
      "批量处理支持"
    ],
    steps: [
      "上传图片",
      "识别人物",
      "AI移除",
      "下载成品"
    ]
  },
  {
    id: "image-deduplication",
    name: "图片查重",
    category: "图片处理",
    description: "检测相似图片，避免重复内容，支持大批量对比",
    scenarios: [
      "内容去重",
      "版权检测",
      "素材管理",
      "库存整理"
    ],
    features: [
      "相似度检测",
      "批量对比",
      "结果排序",
      "快速处理"
    ],
    steps: [
      "上传图片库",
      "设置阈值",
      "执行检测",
      "导出结果"
    ]
  },
  {
    id: "image-beauty",
    name: "智能美颜",
    category: "图片处理",
    description: "AI智能美颜，自然美化人像照片，保持真实感",
    scenarios: [
      "人像美化",
      "证件照处理",
      "社交媒体照片",
      "个人形象照"
    ],
    features: [
      "智能磨皮",
      "五官优化",
      "肤色调节",
      "自然效果"
    ],
    steps: [
      "上传人像照片",
      "选择美颜强度",
      "AI自动美化",
      "下载处理后照片"
    ]
  },
  
  // 视频处理 (8 tools)
  {
    id: "video-watermark",
    name: "视频去水印",
    category: "视频处理",
    description: "专业视频去水印工具，智能识别并移除各种水印，保持视频质量",
    scenarios: [
      "视频素材清理",
      "版权内容处理",
      "视频平台内容优化",
      "影视后期制作"
    ],
    features: [
      "智能水印识别",
      "无痕去水印",
      "多种格式支持",
      "批量处理能力"
    ],
    steps: [
      "上传视频文件",
      "标记水印位置",
      "AI智能处理",
      "下载处理后的视频"
    ],
    previewVideoUrl: "https://example.com/videos/video-watermark.mp4"
  },
  {
    id: "video-to-image",
    name: "视频转图片",
    category: "视频处理",
    description: "提取视频关键帧，生成精美图片，支持自定义帧率",
    scenarios: [
      "封面制作",
      "内容截图",
      "素材提取",
      "预览生成"
    ],
    features: [
      "关键帧提取",
      "批量导出",
      "格式选择",
      "质量保证"
    ],
    steps: [
      "上传视频",
      "选择帧率",
      "提取图片",
      "批量下载"
    ]
  },
  {
    id: "video-batch-watermark",
    name: "视频批量水印",
    category: "视频处理",
    description: "批量为视频添加水印，保护版权，支持多种水印样式",
    scenarios: [
      "版权保护",
      "品牌推广",
      "内容标记",
      "批量加工"
    ],
    features: [
      "批量处理",
      "位置自定义",
      "透明度调节",
      "多格式支持"
    ],
    steps: [
      "上传视频",
      "设计水印",
      "批量添加",
      "导出视频"
    ]
  },
  {
    id: "video-frame-extract",
    name: "视频提取转图",
    category: "视频处理",
    description: "AI提取视频精彩瞬间，智能识别关键画面",
    scenarios: [
      "精彩回放",
      "内容整理",
      "素材收集",
      "快速预览"
    ],
    features: [
      "智能识别",
      "精彩提取",
      "高清输出",
      "快速处理"
    ],
    steps: [
      "上传视频",
      "AI分析",
      "选择片段",
      "导出图片"
    ]
  },
  {
    id: "video-deduplication-ultimate",
    name: "视频去重8.0终极版",
    category: "视频处理",
    description: "终极版视频去重工具，支持深度内容对比，精准识别重复视频",
    scenarios: [
      "视频库管理",
      "内容审核",
      "版权检测",
      "素材整理"
    ],
    features: [
      "深度内容分析",
      "多维度对比",
      "高精度识别",
      "批量处理"
    ],
    steps: [
      "上传视频库",
      "设置检测参数",
      "执行深度分析",
      "导出去重报告"
    ],
    previewVideoUrl: "https://example.com/videos/video-deduplication-ultimate.mp4",
    lifetimeOnly: true
  },
  {
    id: "video-enhance",
    name: "视频增强",
    category: "视频处理",
    description: "AI视频画质增强，提升视频清晰度和色彩表现",
    scenarios: [
      "老视频修复",
      "画质提升",
      "视频优化",
      "专业后期"
    ],
    features: [
      "画质增强",
      "色彩优化",
      "降噪处理",
      "细节提升"
    ],
    steps: [
      "上传视频",
      "选择增强级别",
      "AI处理",
      "导出高清视频"
    ]
  },
  {
    id: "video-subtitle",
    name: "智能字幕",
    category: "视频处理",
    description: "AI自动生成视频字幕，支持多语言识别和翻译",
    scenarios: [
      "视频字幕制作",
      "多语言翻译",
      "教学视频",
      "会议记录"
    ],
    features: [
      "语音识别",
      "自动断句",
      "多语言支持",
      "字幕样式定制"
    ],
    steps: [
      "上传视频",
      "选择语言",
      "AI生成字幕",
      "导出字幕文件"
    ]
  },
  {
    id: "video-clip",
    name: "智能剪辑",
    category: "视频处理",
    description: "AI智能视频剪辑，自动识别精彩片段，快速生成短视频",
    scenarios: [
      "短视频制作",
      "精彩集锦",
      "内容提炼",
      "自动剪辑"
    ],
    features: [
      "智能识别",
      "自动剪辑",
      "转场效果",
      "音乐配置"
    ],
    steps: [
      "上传原始视频",
      "设置剪辑参数",
      "AI自动剪辑",
      "导出成品"
    ]
  },

  // 文案处理 (5 tools)
  {
    id: "text-generation",
    name: "文案生成",
    category: "文案处理",
    description: "AI智能文案创作工具，支持19种不同风格的文案生成",
    scenarios: [
      "产品描述撰写",
      "广告文案创作",
      "社交媒体内容",
      "营销邮件编写"
    ],
    features: [
      "19种文案风格",
      "行业定制模板",
      "批量生成支持",
      "SEO优化建议"
    ],
    steps: [
      "输入产品信息",
      "选择文案风格",
      "AI生成文案",
      "复制或编辑文案"
    ],
    previewVideoUrl: "https://example.com/videos/text-generation.mp4"
  },
  {
    id: "handwriting",
    name: "手写签名",
    category: "文案处理",
    description: "生成逼真的手写签名图片，多种字体风格可选",
    scenarios: [
      "电子签名",
      "文档签署",
      "设计元素",
      "个性展示"
    ],
    features: [
      "多种字体",
      "个性化定制",
      "高清输出",
      "快速生成"
    ],
    steps: [
      "输入文字",
      "选择风格",
      "生成签名",
      "下载图片"
    ]
  },
  {
    id: "sop-template",
    name: "SOP模板",
    category: "文案处理",
    description: "生成95%全行业SOP标准作业模板，提升工作效率",
    scenarios: [
      "流程标准化",
      "培训文档",
      "质量管理",
      "团队协作"
    ],
    features: [
      "全行业覆盖",
      "标准化流程",
      "可定制化",
      "快速生成"
    ],
    steps: [
      "选择行业",
      "定制内容",
      "生成模板",
      "导出文档"
    ]
  },
  {
    id: "article-rewrite",
    name: "文章改写",
    category: "文案处理",
    description: "AI智能文章改写，保持原意的同时优化表达",
    scenarios: [
      "内容优化",
      "伪原创",
      "SEO优化",
      "多版本生成"
    ],
    features: [
      "智能改写",
      "保持原意",
      "多风格输出",
      "查重优化"
    ],
    steps: [
      "输入原文",
      "选择改写风格",
      "AI处理",
      "导出新文案"
    ]
  },
  {
    id: "content-summary",
    name: "内容摘要",
    category: "文案处理",
    description: "AI自动提取长文核心内容，生成精炼摘要",
    scenarios: [
      "长文总结",
      "会议纪要",
      "新闻摘要",
      "研究报告"
    ],
    features: [
      "智能提取",
      "关键信息保留",
      "可调节长度",
      "多语言支持"
    ],
    steps: [
      "输入长文内容",
      "设置摘要长度",
      "AI生成摘要",
      "复制使用"
    ]
  },

  // AI模型 (5 tools)
  {
    id: "ai-background-removal",
    name: "AI智能抠图",
    category: "AI模型",
    description: "基于深度学习的智能抠图，精准识别主体边缘",
    scenarios: [
      "电商产品图",
      "人像抠图",
      "物品分离",
      "背景替换"
    ],
    features: [
      "精准边缘识别",
      "毛发细节保留",
      "批量处理",
      "多场景适配"
    ],
    steps: [
      "上传图片",
      "AI自动识别",
      "边缘优化",
      "导出透明背景"
    ]
  },
  {
    id: "sketch-to-image",
    name: "快速手绘草图",
    category: "AI模型",
    description: "提示词草图也能出效果，快速将创意可视化",
    scenarios: [
      "创意设计",
      "原型设计",
      "概念图生成",
      "快速表达"
    ],
    features: [
      "文字转图",
      "草图风格",
      "快速生成",
      "可编辑"
    ],
    steps: [
      "输入提示词",
      "选择风格",
      "生成草图",
      "下载保存"
    ]
  },
  {
    id: "ai-product-image",
    name: "AI产品图",
    category: "AI模型",
    description: "仅输产品图可得到同类型产品画报，智能生成营销素材",
    scenarios: [
      "电商展示",
      "营销物料",
      "产品目录",
      "广告设计"
    ],
    features: [
      "智能生成",
      "多风格输出",
      "高质量渲染",
      "批量处理"
    ],
    steps: [
      "上传产品图",
      "选择风格",
      "AI生成",
      "导出图片"
    ]
  },
  {
    id: "ai-model-library",
    name: "内置800+AI大模型库",
    category: "AI模型",
    description: "即用即取，一次训练多次使用，涵盖各行业应用场景",
    scenarios: [
      "各行业应用",
      "定制开发",
      "快速部署",
      "规模化使用"
    ],
    features: [
      "800+模型库",
      "即用即取",
      "持续更新",
      "高准确率"
    ],
    steps: [
      "选择模型",
      "配置参数",
      "开始使用",
      "获取结果"
    ],
    previewVideoUrl: "https://example.com/videos/ai-model-library.mp4",
    lifetimeOnly: true
  },
  {
    id: "style-transfer",
    name: "风格迁移",
    category: "AI模型",
    description: "AI艺术风格迁移，将照片转换为各种艺术风格",
    scenarios: [
      "艺术创作",
      "照片美化",
      "设计素材",
      "创意表达"
    ],
    features: [
      "多种艺术风格",
      "智能迁移",
      "高清输出",
      "细节保留"
    ],
    steps: [
      "上传照片",
      "选择艺术风格",
      "AI处理",
      "下载作品"
    ]
  },

  // 其它如需 (4 tools)
  {
    id: "quote-image",
    name: "一句话配图",
    category: "其它如需",
    description: "一句话生成一张图，无需修改图片分布元素",
    scenarios: [
      "社交媒体",
      "海报制作",
      "内容配图",
      "快速创作"
    ],
    features: [
      "文字转图",
      "智能布局",
      "多风格选择",
      "快速生成"
    ],
    steps: [
      "输入文字",
      "选择风格",
      "生成图片",
      "保存分享"
    ]
  },
  {
    id: "emoji-generator",
    name: "表情包生成",
    category: "其它如需",
    description: "一键生成搞笑表情包，丰富的模板和自定义选项",
    scenarios: [
      "社交媒体",
      "聊天工具",
      "营销推广",
      "内容创作"
    ],
    features: [
      "模板丰富",
      "文字编辑",
      "快速生成",
      "分享便捷"
    ],
    steps: [
      "选择模板",
      "编辑文字",
      "生成表情",
      "保存分享"
    ]
  },
  {
    id: "privacy-protection",
    name: "隐私保护",
    category: "其它如需",
    description: "人脸图片隐私保护，智能识别并打码敏感信息",
    scenarios: [
      "隐私保护",
      "内容审核",
      "合规处理",
      "安全分享"
    ],
    features: [
      "人脸识别",
      "智能打码",
      "批量处理",
      "隐私保护"
    ],
    steps: [
      "上传图片",
      "识别敏感区",
      "自动打码",
      "导出图片"
    ]
  },
  {
    id: "qr-code-generator",
    name: "二维码生成",
    category: "其它如需",
    description: "快速生成个性化二维码，支持Logo、颜色自定义",
    scenarios: [
      "营销推广",
      "活动海报",
      "名片制作",
      "品牌宣传"
    ],
    features: [
      "个性化定制",
      "Logo嵌入",
      "颜色自定义",
      "高清输出"
    ],
    steps: [
      "输入链接或文本",
      "自定义样式",
      "生成二维码",
      "下载使用"
    ]
  }
];

// Category definitions with updated names
export const toolCategories = [
  {
    id: "image",
    name: "图片处理",
    description: "专业的图片处理AI工具，让每张图片都完美呈现",
    count: 7
  },
  {
    id: "video",
    name: "视频处理",
    description: "强大的视频编辑AI工具，轻松制作专业视频",
    count: 8
  },
  {
    id: "text",
    name: "文案处理",
    description: "AI驱动的文案生成工具，释放无限创意灵感",
    count: 5
  },
  {
    id: "ai-models",
    name: "AI模型",
    description: "800+专业训练模型，即用即取的高效工具",
    count: 5
  },
  {
    id: "other",
    name: "其它如需",
    description: "更多实用AI工具，满足多样化需求",
    count: 4
  }
];

// Helper functions
export function getAllTools(): Tool[] {
  return tools;
}

export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter(tool => tool.category === category);
}

export function getAllToolIds(): string[] {
  return tools.map(tool => tool.id);
}

export function getToolDetail(id: string): Tool {
  const tool = getToolById(id);
  return tool || {
    id: "default",
    name: "工具详情",
    category: "其它如需",
    description: "AI驱动的创意工具",
    scenarios: ["创意设计", "内容制作", "效率提升"],
    features: ["智能处理", "高质量输出", "简单易用", "快速高效"],
    steps: ["上传文件", "选择设置", "开始处理", "下载结果"]
  };
}

export function getTotalToolCount(): number {
  return tools.length;
}

export function getLifetimeOnlyTools(): Tool[] {
  return tools.filter(tool => tool.lifetimeOnly);
}

export function getCategoryDisplayName(categoryId: string): string {
  const categoryMap: Record<string, string> = {
    "image": "图片处理",
    "video": "视频处理",
    "text": "文案处理",
    "ai-models": "AI模型",
    "other": "其它如需"
  };
  return categoryMap[categoryId] || categoryId;
}
