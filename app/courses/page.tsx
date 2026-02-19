import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Clock, Users, Star, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const courses = [
  {
    id: 1,
    title: 'React从入门到实战',
    description: '学习现代React开发，掌握Hooks、状态管理等核心概念',
    instructor: '张老师',
    duration: '24小时',
    students: 1245,
    rating: 4.8,
    price: 0,
    category: '前端开发',
    level: '初级',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h-225&fit=crop',
  },
  {
    id: 2,
    title: 'Python数据分析',
    description: '使用Python进行数据清洗、分析和可视化',
    instructor: '李老师',
    duration: '36小时',
    students: 892,
    rating: 4.9,
    price: 0,
    category: '数据科学',
    level: '中级',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h-225&fit=crop',
  },
  {
    id: 3,
    title: 'UI/UX设计基础',
    description: '学习用户界面和用户体验设计的基本原则',
    instructor: '王老师',
    duration: '18小时',
    students: 1567,
    rating: 4.7,
    price: 0,
    category: '设计',
    level: '初级',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h-225&fit=crop',
  },
  {
    id: 4,
    title: 'Node.js后端开发',
    description: '构建高性能的Node.js后端应用',
    instructor: '赵老师',
    duration: '30小时',
    students: 734,
    rating: 4.6,
    price: 0,
    category: '后端开发',
    level: '中级',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h-225&fit=crop',
  },
  {
    id: 5,
    title: '移动应用开发',
    description: '使用React Native开发跨平台移动应用',
    instructor: '陈老师',
    duration: '28小时',
    students: 1023,
    rating: 4.8,
    price: 0,
    category: '移动开发',
    level: '中级',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h-225&fit=crop',
  },
  {
    id: 6,
    title: '机器学习入门',
    description: '了解机器学习的基本概念和算法',
    instructor: '刘老师',
    duration: '32小时',
    students: 567,
    rating: 4.9,
    price: 0,
    category: '人工智能',
    level: '高级',
    thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h-225&fit=crop',
  },
]

const categories = ['全部', '前端开发', '后端开发', '数据科学', '设计', '移动开发', '人工智能']
const levels = ['全部', '初级', '中级', '高级']

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">探索免费课程</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          从数千门高质量课程中选择，完全免费学习
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索课程..."
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              筛选
            </Button>
            <Button variant="outline" size="sm">
              排序
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === '全部' ? 'default' : 'outline'}
              className="cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Levels */}
        <div className="mt-4 flex flex-wrap gap-2">
          {levels.map((level) => (
            <Badge
              key={level}
              variant={level === '全部' ? 'default' : 'secondary'}
              className="cursor-pointer"
            >
              {level}
            </Badge>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-secondary/20" />
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {course.category}
                  </Badge>
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {course.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <BookOpen className="mr-1 h-4 w-4" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{course.students} 学员</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 text-amber-500 fill-amber-500" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <span className="text-2xl font-bold">免费</span>
                <Badge variant="outline" className="ml-2">
                  {course.level}
                </Badge>
              </div>
              <Button>立即学习</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">1000+</div>
          <div className="text-sm text-muted-foreground">免费课程</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">5000+</div>
          <div className="text-sm text-muted-foreground">学习小时</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">98%</div>
          <div className="text-sm text-muted-foreground">满意率</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">24/7</div>
          <div className="text-sm text-muted-foreground">在线支持</div>
        </div>
      </div>
    </div>
  )
}