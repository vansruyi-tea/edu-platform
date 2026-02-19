import Link from 'next/link'
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">Edu</span>
              </div>
              <span className="text-xl font-bold">教育平台</span>
            </div>
            <p className="text-sm text-muted-foreground">
              完全免费的在线教育社交平台，让学习变得更简单、更有趣
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  所有课程
                </Link>
              </li>
              <li>
                <Link
                  href="/live"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  直播课堂
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  社区讨论
                </Link>
              </li>
              <li>
                <Link
                  href="/qna"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  问答专区
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">学习资源</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  博客文章
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  使用教程
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  常见问题
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  帮助中心
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">support@eduplatform.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+86 400-123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  北京市海淀区教育科技园88号
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 教育平台. 保留所有权利.
            </p>
            <div className="mt-4 flex space-x-6 text-sm text-muted-foreground md:mt-0">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                服务条款
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}