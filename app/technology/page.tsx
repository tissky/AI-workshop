import type { Metadata } from "next";
import TechnologyPageContent from "./page-content";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "技术实力",
  description: "了解AI创意工坊的技术实力，基于最新AI技术，构建专业解决方案",
  keywords: "AI技术,深度学习,机器学习,高性能计算,数据安全,技术架构",
  openGraph: {
    title: "技术实力 - AI创意工坊",
    description: "了解AI创意工坊的技术实力，基于最新AI技术，构建专业解决方案",
    type: "website",
  },
};

export default function TechnologyPage() {
  return <TechnologyPageContent />;
}
