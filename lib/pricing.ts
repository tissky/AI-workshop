/**
 * Pricing Configuration
 * Centralized pricing data for plans, agency prices, and user testimonials
 */

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  durationDays: number;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export interface AgencyPrice {
  planId: string;
  planName: string;
  retailPrice: number;
  agencyPrice: number;
  profit: number;
}

export interface AgencyLevel {
  level: number;
  name: string;
  requirement: string;
  commission: string;
  benefits: string[];
}

export interface PricingTestimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface ContactInfo {
  workingHours: string;
  methods: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
}

/**
 * Primary pricing plans for end users
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "monthly",
    name: "月卡",
    price: 45,
    duration: "30天",
    durationDays: 30,
    features: [
      "30天无限次使用",
      "访问全部30+AI工具",
      "高清图片输出",
      "标准视频生成",
      "7×24小时在线客服",
      "定期功能更新"
    ],
  },
  {
    id: "yearly",
    name: "年卡",
    price: 98,
    duration: "365天",
    durationDays: 365,
    popular: true,
    badge: "最超值",
    features: [
      "365天无限次使用",
      "访问全部30+AI工具",
      "超高清图片输出",
      "高清视频生成",
      "优先客服响应",
      "专属功能内测权",
      "免费升级新功能",
      "年度使用报告"
    ],
  },
  {
    id: "lifetime",
    name: "永久卡",
    price: 167,
    duration: "终身",
    durationDays: 0,
    badge: "终身畅享",
    features: [
      "终身无限次使用",
      "访问全部30+AI工具",
      "超高清图片输出",
      "4K视频生成",
      "VIP专属客服",
      "优先体验新功能",
      "终身免费更新",
      "企业级数据安全",
      "专属定制服务"
    ],
  },
];

/**
 * Agency wholesale prices
 */
export const agencyPrices: AgencyPrice[] = [
  {
    planId: "monthly",
    planName: "月卡",
    retailPrice: 45,
    agencyPrice: 10,
    profit: 35,
  },
  {
    planId: "yearly",
    planName: "年卡",
    retailPrice: 98,
    agencyPrice: 35,
    profit: 63,
  },
  {
    planId: "lifetime",
    planName: "永久卡",
    retailPrice: 167,
    agencyPrice: 68,
    profit: 99,
  },
];

/**
 * Five-level agency system
 */
export const agencyLevels: AgencyLevel[] = [
  {
    level: 1,
    name: "初级代理",
    requirement: "累计购卡50张",
    commission: "基础佣金",
    benefits: [
      "享受代理拿货价",
      "专属代理后台",
      "销售数据统计",
      "客户管理工具"
    ],
  },
  {
    level: 2,
    name: "中级代理",
    requirement: "累计购卡100张",
    commission: "额外返利5%",
    benefits: [
      "初级代理所有权益",
      "月度销售奖励",
      "营销素材支持",
      "专属客户经理"
    ],
  },
  {
    level: 3,
    name: "高级代理",
    requirement: "累计购卡200张",
    commission: "额外返利10%",
    benefits: [
      "中级代理所有权益",
      "季度业绩奖金",
      "区域独家代理权",
      "线下活动支持"
    ],
  },
  {
    level: 4,
    name: "金牌代理",
    requirement: "累计购卡400张",
    commission: "额外返利15%",
    benefits: [
      "高级代理所有权益",
      "年度分红计划",
      "团队管理系统",
      "定制推广方案",
      "优先新品体验"
    ],
  },
  {
    level: 5,
    name: "钻石代理",
    requirement: "累计购卡600张",
    commission: "额外返利20%",
    benefits: [
      "金牌代理所有权益",
      "战略合作伙伴",
      "公司股权激励",
      "全球市场拓展",
      "品牌联合运营",
      "终身分红权益"
    ],
  },
];

/**
 * User testimonials for pricing page
 */
export const pricingTestimonials: PricingTestimonial[] = [
  {
    quote: "年卡真的太划算了！平均每天不到3毛钱，所有AI工具随便用，极大提升了我的工作效率。客服响应也很及时，强烈推荐！",
    author: "张女士",
    role: "电商运营",
    rating: 5,
  },
  {
    quote: "作为内容创作者，这个平台解决了我的大部分需求。图片处理、视频生成、文案创作都能搞定，永久卡一次投资终身受益，非常值得。",
    author: "李先生",
    role: "自媒体博主",
    rating: 5,
  },
  {
    quote: "做代理三个月就回本了，现在每月都有稳定收入。平台提供的营销素材和客户管理工具很实用，代理后台数据清晰，结算及时。",
    author: "王先生",
    role: "金牌代理",
    rating: 5,
  },
  {
    quote: "月卡很适合我这种不确定长期需求的用户，先试用一个月看看效果。用下来感觉工具很强大，已经准备升级年卡了。",
    author: "赵女士",
    role: "营销策划",
    rating: 5,
  },
];

/**
 * Contact information and working hours
 */
export const contactInfo: ContactInfo = {
  workingHours: "周一至周日 9:00-21:00",
  methods: [
    {
      label: "在线客服",
      value: "7×24小时在线",
      icon: "chat",
    },
    {
      label: "客服微信",
      value: "扫码添加客服",
      icon: "wechat",
    },
    {
      label: "客服QQ",
      value: "点击咨询",
      icon: "qq",
    },
  ],
};
