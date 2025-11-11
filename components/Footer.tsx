import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-muted bg-background">
      <div className="container-max py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">AI创意工坊</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              专业的AI工具平台，助力创意无限可能
            </p>
            <nav aria-label="社交媒体链接">
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm" 
                  aria-label="关注我们的微信"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.302c-.019.06-.028.124-.028.188 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.949 5.748.353 2.41 1.189 2.557 5.863.36 7.836-2.237 2.008-5.856 2.458-8.378 1.04-1.1 3.407-5.344 4.168-6.84 1.59-.813 2.19-1.79 2.19-3.026 0-1.506-.86-2.809-2.266-3.496-.443-.216-.946-.35-1.463-.42.18-.087.353-.19.516-.307C9.72 2.772 9.246 2.188 8.691 2.188z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm" 
                  aria-label="关注我们的微博"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.797 2.312c-3.835 0-6.944 2.507-6.944 5.6 0 1.278.538 2.438 1.413 3.25l-1.503 3.75a.625.625 0 0 0 .225.703l1.507 1.507c.079.079.177.144.289.192l1.897.632a.312.312 0 0 0 .225-.061l3.226-2.423c.519.124 1.064.19 1.618.19 3.835 0 6.944-2.507 6.944-5.6s-3.109-5.6-6.944-5.6H9.797z"/>
                  </svg>
                </a>
              </div>
            </nav>
          </div>

          <nav aria-label="产品功能">
            <h4 className="text-sm font-semibold text-foreground mb-4">产品功能</h4>
            <ul className="space-y-3" role="list">
              <li>
                <Link 
                  href="/tools" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  图片处理
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  视频编辑
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  文案生成
                </Link>
              </li>
              <li>
                <Link 
                  href="/tools" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  AI模型
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="解决方案">
            <h4 className="text-sm font-semibold text-foreground mb-4">解决方案</h4>
            <ul className="space-y-3" role="list">
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  电商运营
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  内容创作
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  营销推广
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  教育培训
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="关于我们">
            <h4 className="text-sm font-semibold text-foreground mb-4">关于我们</h4>
            <ul className="space-y-3" role="list">
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  技术支持
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  商务合作
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  用户反馈
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                >
                  帮助中心
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-muted mt-12 pt-8 sm:mt-16 sm:pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 AI创意工坊. 保留所有权利.
            </p>
            <nav aria-label="法律信息">
              <ul className="flex flex-wrap gap-6" role="list">
                <li>
                  <Link 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                  >
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                  >
                    服务条款
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                  >
                    Cookie政策
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
