import type { Metadata } from "next";
import TabsDemo from "./tabs-demo";

export const metadata: Metadata = {
  title: "组件演示 - Tabs | AI创意工坊",
  description: "展示 Tabs 标签组件的各种用法和变体",
  robots: "noindex, nofollow",
};

export const revalidate = 3600;
export const dynamic = "force-static";

export default function ComponentsDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-max py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            组件演示：Tabs
          </h1>
          <p className="text-muted-foreground text-lg">
            展示 Tabs 标签组件的各种用法和变体
          </p>
        </div>

        <TabsDemo />
      </div>
    </div>
  );
}
