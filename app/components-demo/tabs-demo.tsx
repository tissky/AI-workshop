"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import { Card } from "@/components/ui";

export default function TabsDemo() {
  return (
    <div className="space-y-16">
      {/* Segmented Control Variant (Default - Apple Style) */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Segmented Control（分段控件 - 默认样式）
        </h2>
        <p className="text-muted-foreground mb-6">
          Apple 风格的分段控件，适用于视图切换和选项选择
        </p>
        
        <Card className="p-6">
          <Tabs defaultValue="overview">
            <TabsList variant="segmented" aria-label="产品信息标签">
              <TabsTrigger value="overview">概览</TabsTrigger>
              <TabsTrigger value="features">功能特性</TabsTrigger>
              <TabsTrigger value="specs">技术规格</TabsTrigger>
              <TabsTrigger value="pricing">价格方案</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">产品概览</h3>
                <p className="text-muted-foreground">
                  AI创意工坊是一个集成多种AI工具的创意平台，帮助用户快速完成图像、视频、文本等各类创意内容的制作。
                  我们提供简单易用的界面和强大的AI模型支持。
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">核心功能</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>智能图像处理：背景移除、风格迁移、超分辨率</li>
                  <li>视频编辑：关键帧提取、去水印、字幕生成</li>
                  <li>文本生成：文案创作、摘要提取、翻译优化</li>
                  <li>音频处理：降噪、转录、语音合成</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">技术规格</h3>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-medium text-foreground">支持模型数量</dt>
                    <dd className="text-muted-foreground">800+</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">平均准确率</dt>
                    <dd className="text-muted-foreground">95%</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">API响应时间</dt>
                    <dd className="text-muted-foreground">&lt; 200ms</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">服务可用性</dt>
                    <dd className="text-muted-foreground">99.9%</dd>
                  </div>
                </dl>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-3">价格方案</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">免费版</h4>
                    <p className="text-2xl font-bold text-foreground mb-2">¥0<span className="text-sm font-normal">/月</span></p>
                    <p className="text-muted-foreground text-sm">适合个人用户试用</p>
                  </div>
                  <div className="border-2 border-accent rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">专业版</h4>
                    <p className="text-2xl font-bold text-accent mb-2">¥99<span className="text-sm font-normal">/月</span></p>
                    <p className="text-muted-foreground text-sm">适合创意工作者</p>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">企业版</h4>
                    <p className="text-2xl font-bold text-foreground mb-2">¥999<span className="text-sm font-normal">/月</span></p>
                    <p className="text-muted-foreground text-sm">适合团队协作</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Underline Variant */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Underline Tabs（下划线标签）
        </h2>
        <p className="text-muted-foreground mb-6">
          适用于导航栏和内容分类
        </p>
        
        <Card className="p-6">
          <Tabs defaultValue="all">
            <TabsList variant="underline" aria-label="工具分类标签">
              <TabsTrigger value="all">全部工具</TabsTrigger>
              <TabsTrigger value="image">图像处理</TabsTrigger>
              <TabsTrigger value="video">视频编辑</TabsTrigger>
              <TabsTrigger value="text">文本生成</TabsTrigger>
              <TabsTrigger value="audio">音频处理</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <p className="text-muted-foreground">展示所有类别的工具</p>
            </TabsContent>
            
            <TabsContent value="image" className="mt-6">
              <p className="text-muted-foreground">图像处理相关工具：背景移除、风格迁移、超分辨率等</p>
            </TabsContent>
            
            <TabsContent value="video" className="mt-6">
              <p className="text-muted-foreground">视频编辑相关工具：关键帧提取、去水印、字幕生成等</p>
            </TabsContent>
            
            <TabsContent value="text" className="mt-6">
              <p className="text-muted-foreground">文本生成相关工具：文案创作、摘要提取、翻译优化等</p>
            </TabsContent>
            
            <TabsContent value="audio" className="mt-6">
              <p className="text-muted-foreground">音频处理相关工具：降噪、转录、语音合成等</p>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Pills Variant */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Pills Tabs（药丸标签）
        </h2>
        <p className="text-muted-foreground mb-6">
          适用于标签筛选和多选项切换
        </p>
        
        <Card className="p-6">
          <Tabs defaultValue="trending">
            <TabsList variant="pills" aria-label="内容筛选标签">
              <TabsTrigger value="trending">热门推荐</TabsTrigger>
              <TabsTrigger value="new">最新发布</TabsTrigger>
              <TabsTrigger value="popular">最多使用</TabsTrigger>
              <TabsTrigger value="featured">精选推荐</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending" className="mt-6">
              <p className="text-muted-foreground">当前热门的AI工具和模型</p>
            </TabsContent>
            
            <TabsContent value="new" className="mt-6">
              <p className="text-muted-foreground">最近新增的AI工具和功能</p>
            </TabsContent>
            
            <TabsContent value="popular" className="mt-6">
              <p className="text-muted-foreground">使用次数最多的热门工具</p>
            </TabsContent>
            
            <TabsContent value="featured" className="mt-6">
              <p className="text-muted-foreground">编辑精选的优质工具推荐</p>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Size Variants */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          尺寸变体（Size Variants）
        </h2>
        <p className="text-muted-foreground mb-6">
          支持小、中、大三种尺寸
        </p>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">小尺寸 (sm)</h3>
            <Tabs defaultValue="tab1">
              <TabsList variant="segmented" size="sm" aria-label="小尺寸标签示例">
                <TabsTrigger value="tab1">标签1</TabsTrigger>
                <TabsTrigger value="tab2">标签2</TabsTrigger>
                <TabsTrigger value="tab3">标签3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4 text-sm">小尺寸内容 1</TabsContent>
              <TabsContent value="tab2" className="mt-4 text-sm">小尺寸内容 2</TabsContent>
              <TabsContent value="tab3" className="mt-4 text-sm">小尺寸内容 3</TabsContent>
            </Tabs>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">中尺寸 (md - 默认)</h3>
            <Tabs defaultValue="tab1">
              <TabsList variant="segmented" size="md" aria-label="中尺寸标签示例">
                <TabsTrigger value="tab1">标签1</TabsTrigger>
                <TabsTrigger value="tab2">标签2</TabsTrigger>
                <TabsTrigger value="tab3">标签3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">中尺寸内容 1</TabsContent>
              <TabsContent value="tab2" className="mt-4">中尺寸内容 2</TabsContent>
              <TabsContent value="tab3" className="mt-4">中尺寸内容 3</TabsContent>
            </Tabs>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">大尺寸 (lg)</h3>
            <Tabs defaultValue="tab1">
              <TabsList variant="segmented" size="lg" aria-label="大尺寸标签示例">
                <TabsTrigger value="tab1">标签1</TabsTrigger>
                <TabsTrigger value="tab2">标签2</TabsTrigger>
                <TabsTrigger value="tab3">标签3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">大尺寸内容 1</TabsContent>
              <TabsContent value="tab2" className="mt-4">大尺寸内容 2</TabsContent>
              <TabsContent value="tab3" className="mt-4">大尺寸内容 3</TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      {/* Lazy Loading */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          延迟加载（Lazy Loading）
        </h2>
        <p className="text-muted-foreground mb-6">
          使用 lazy 属性可以延迟渲染标签内容，直到第一次激活
        </p>
        
        <Card className="p-6">
          <Tabs defaultValue="tab1">
            <TabsList variant="segmented" aria-label="延迟加载标签示例">
              <TabsTrigger value="tab1">已加载</TabsTrigger>
              <TabsTrigger value="tab2">延迟加载</TabsTrigger>
              <TabsTrigger value="tab3">延迟加载</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tab1" className="mt-6">
              <p className="text-muted-foreground">这个内容在组件挂载时就已渲染</p>
            </TabsContent>
            
            <TabsContent value="tab2" lazy className="mt-6">
              <p className="text-muted-foreground">
                这个内容只有在第一次点击标签时才会渲染（查看 React DevTools 可以验证）
              </p>
            </TabsContent>
            
            <TabsContent value="tab3" lazy className="mt-6">
              <p className="text-muted-foreground">
                这个内容同样是延迟渲染的，可以提高初始加载性能
              </p>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Keyboard Navigation */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          键盘导航（Keyboard Navigation）
        </h2>
        <p className="text-muted-foreground mb-6">
          完全支持键盘操作，符合 WCAG 2.1 无障碍标准
        </p>
        
        <Card className="p-6">
          <div className="mb-6 p-4 bg-accent-muted rounded-lg">
            <h3 className="text-sm font-semibold text-foreground mb-2">键盘快捷键：</h3>
            <ul className="text-sm text-muted-foreground space-y-1" role="list">
              <li role="listitem"><kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Tab</kbd> - 聚焦到标签组</li>
              <li role="listitem"><kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">←</kbd> / <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">→</kbd> - 切换标签</li>
              <li role="listitem"><kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Home</kbd> - 跳转到第一个标签</li>
              <li role="listitem"><kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">End</kbd> - 跳转到最后一个标签</li>
            </ul>
          </div>
          
          <Tabs defaultValue="a11y">
            <TabsList variant="segmented" aria-label="无障碍特性标签">
              <TabsTrigger value="a11y">无障碍特性</TabsTrigger>
              <TabsTrigger value="aria">ARIA 支持</TabsTrigger>
              <TabsTrigger value="focus">焦点管理</TabsTrigger>
              <TabsTrigger value="screen">屏幕阅读器</TabsTrigger>
            </TabsList>
            
            <TabsContent value="a11y" className="mt-6">
              <p className="text-muted-foreground">
                完整支持 WAI-ARIA Tabs 模式，包括 roving tabindex、键盘导航和正确的 ARIA 属性
              </p>
            </TabsContent>
            
            <TabsContent value="aria" className="mt-6">
              <p className="text-muted-foreground">
                使用 role=&quot;tablist&quot;、role=&quot;tab&quot;、role=&quot;tabpanel&quot; 以及 aria-selected、aria-controls 等属性
              </p>
            </TabsContent>
            
            <TabsContent value="focus" className="mt-6">
              <p className="text-muted-foreground">
                使用 roving tabindex 模式，确保只有一个标签可以被 Tab 键聚焦，提升键盘导航体验
              </p>
            </TabsContent>
            
            <TabsContent value="screen" className="mt-6">
              <p className="text-muted-foreground">
                为屏幕阅读器提供完整的上下文信息，包括标签角色、选中状态和关联内容
              </p>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Controlled State */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          受控状态（Controlled State）
        </h2>
        <p className="text-muted-foreground mb-6">
          支持受控和非受控两种使用方式
        </p>
        
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-4">
            可以通过 value 和 onValueChange 属性实现受控组件，或使用 defaultValue 实现非受控组件
          </p>
          <Tabs defaultValue="uncontrolled">
            <TabsList variant="segmented" aria-label="状态管理标签">
              <TabsTrigger value="uncontrolled">非受控</TabsTrigger>
              <TabsTrigger value="controlled">受控</TabsTrigger>
            </TabsList>
            
            <TabsContent value="uncontrolled" className="mt-6">
              <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                <code>{`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">标签1</TabsTrigger>
    <TabsTrigger value="tab2">标签2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">内容1</TabsContent>
  <TabsContent value="tab2">内容2</TabsContent>
</Tabs>`}</code>
              </pre>
            </TabsContent>
            
            <TabsContent value="controlled" className="mt-6">
              <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                <code>{`const [activeTab, setActiveTab] = useState("tab1");

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="tab1">标签1</TabsTrigger>
    <TabsTrigger value="tab2">标签2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">内容1</TabsContent>
  <TabsContent value="tab2">内容2</TabsContent>
</Tabs>`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </Card>
      </section>
    </div>
  );
}
