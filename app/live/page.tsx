import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Users, Video, Zap, Bell } from 'lucide-react'

const liveSessions = [
  {
    id: 1,
    title: 'React Hooks深度解析',
    instructor: '张老师',
    time: '今天 14:00',
    duration: '2小时',
    participants: 45,
    status: 'upcoming',
    category: '前端开发',
  },
  {
    id: 2,
    title: 'Python数据可视化实战',
    instructor: '李老师',
    time: '今天 16:00',
    duration: '1.5小时',
    participants: 32,
    status: 'upcoming',
    category: '数据科学',
  },
  {
    id: 3,
    title: 'UI设计原则与实战',
    instructor: '王老师',
    time: '明天 10:00',
    duration: '2小时',
    participants: 28,
    status: 'upcoming',
    category: '设计',
  },
  {
    id: 4,
    title: 'Node.js性能优化',
    instructor: '赵老师',
    time: '直播中',
    duration: '进行中',
    participants: 156,
    status: 'live',
    category: '后端开发',
  },
  {
    id: 5,
    title: '移动应用架构设计',
    instructor: '陈老师',
    time: '昨天 15:00',
    duration: '2小时',
    participants: 89,
    status: 'recorded',
    category: '移动开发',
  },
  {
    id: 6,
    title: '机器学习模型部署',
    instructor: '刘老师',
    time: '前天 19:00',
    duration: '2.5小时',
    participants: 67,
    status: 'recorded',
    category: '人工智能',
  },
]

export default function LivePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h1 className="mb-2 text-4xl font-bold">直播课堂</h1>
            <p className="text-lg text-muted-foreground">
              实时互动学习，与老师和同学面对面交流
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Video className="mr-2 h-4 w-4" />
              发起直播
            </Button>
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              订阅通知
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="rounded-lg bg-blue-100 p-2">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">正在直播</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="rounded-lg bg-green-100 p-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold">2,345</div>
                <div className="text-sm text-muted-foreground">在线学员</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="rounded-lg bg-purple-100 p-2">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold">48</div>
                <div className="text-sm text-muted-foreground">今日直播</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="rounded-lg bg-amber-100 p-2">
                <Zap className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-muted-foreground">满意率</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Now Section */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">正在直播</h2>
          <Button variant="outline" size="sm">
            查看全部
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {liveSessions
            .filter((session) => session.status === 'live')
            .map((session) => (
              <Card key={session.id} className="border-2 border-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">
                        直播中
                      </Badge>
                      <CardTitle>{session.title}</CardTitle>
                      <CardDescription>{session.instructor}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      <span>{session.participants} 人在线</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{session.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    加入直播
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">即将开始</h2>
          <Button variant="outline" size="sm">
            查看全部
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liveSessions
            .filter((session) => session.status === 'upcoming')
            .map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {session.category}
                      </Badge>
                      <CardTitle className="line-clamp-1">{session.title}</CardTitle>
                      <CardDescription>{session.instructor}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>{session.participants} 人预约</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1">预约</Button>
                  <Button variant="outline">提醒我</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>

      {/* Recorded Sessions */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">直播回放</h2>
          <Button variant="outline" size="sm">
            查看全部
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liveSessions
            .filter((session) => session.status === 'recorded')
            .map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        回放
                      </Badge>
                      <CardTitle className="line-clamp-1">{session.title}</CardTitle>
                      <CardDescription>{session.instructor}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>{session.participants} 人观看</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    观看回放
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}