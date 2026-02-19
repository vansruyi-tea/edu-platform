import { Button } from '@/components/ui/button'
import { BookOpen, Users, Video, Award, MessageSquare, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: '视频课程',
      description: '海量高质量视频课程，随时随地学习',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '直播课堂',
      description: '实时互动教学，与老师同学面对面交流',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: '作业系统',
      description: '在线提交作业，智能批改与反馈',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '学习跟踪',
      description: '个性化学习路径，实时进度跟踪',
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: '社区讨论',
      description: '与同学交流讨论，共同进步',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: '证书认证',
      description: '完成课程获得权威证书',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              免费在线
              <span className="block text-primary">教育社交平台</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              学习、交流、成长，一切尽在掌握。完全免费，无限可能。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">立即注册</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">浏览课程</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">核心功能</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              一站式学习体验，满足你的所有需求
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex rounded-lg p-3 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">立即开始你的学习之旅</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            加入成千上万的学习者，一起探索知识的海洋
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">免费注册</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">在线课程</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">注册用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">完全免费</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">在线支持</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}