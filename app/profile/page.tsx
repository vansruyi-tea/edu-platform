'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, Mail, Calendar, BookOpen, Video, Settings, Save, Upload, LogOut } from 'lucide-react'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
  })

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/login')
        return
      }

      setUser(session.user)

      // 获取用户资料
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (profileData) {
        setProfile(profileData)
        setFormData({
          name: profileData.name || '',
          bio: profileData.bio || '',
        })
      }

      setLoading(false)
    }

    fetchUserData()
  }, [router])

  const handleSaveProfile = async () => {
    if (!user) return

    setSaving(true)
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: formData.name,
          bio: formData.bio,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id)

      if (error) throw error

      // 更新本地状态
      setProfile({
        ...profile,
        name: formData.name,
        bio: formData.bio,
      })

      alert('资料更新成功！')
    } catch (error) {
      console.error('更新资料失败:', error)
      alert('更新失败，请重试')
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 用户信息卡片 */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile?.avatar_url || ''} />
                <AvatarFallback>
                  <User className="h-10 w-10" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">
                  {profile?.name || user.email?.split('@')[0]}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  {user.email}
                </CardDescription>
                {profile?.created_at && (
                  <CardDescription className="flex items-center mt-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    加入时间: {new Date(profile.created_at).toLocaleDateString('zh-CN')}
                  </CardDescription>
                )}
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              退出登录
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* 标签页 */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            个人资料
          </TabsTrigger>
          <TabsTrigger value="courses">
            <BookOpen className="mr-2 h-4 w-4" />
            我的课程
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="mr-2 h-4 w-4" />
            账户设置
          </TabsTrigger>
        </TabsList>

        {/* 个人资料标签页 */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>编辑个人资料</CardTitle>
              <CardDescription>更新你的个人信息</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">姓名</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="请输入你的姓名"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">个人简介</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="介绍一下你自己..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>头像</Label>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={profile?.avatar_url || ''} />
                    <AvatarFallback>
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    上传头像
                  </Button>
                </div>
              </div>

              <Button onClick={handleSaveProfile} disabled={saving}>
                {saving ? '保存中...' : '保存更改'}
                <Save className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 我的课程标签页 */}
        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>我的课程</CardTitle>
              <CardDescription>你正在学习的课程</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-8 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">暂无课程</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  你还没有开始学习任何课程
                </p>
                <Button className="mt-4" asChild>
                  <Link href="/courses">浏览课程</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 账户设置标签页 */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>账户设置</CardTitle>
              <CardDescription>管理你的账户和安全设置</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">安全设置</h3>
                <div className="space-y-2">
                  <Label htmlFor="current-password">当前密码</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">新密码</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">确认新密码</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>更新密码</Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">通知设置</h3>
                <div className="space-y-2">
                  <Label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    课程更新通知
                  </Label>
                  <Label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    直播提醒
                  </Label>
                  <Label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    营销邮件
                  </Label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-600">危险区域</h3>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <h4 className="font-medium text-red-800">删除账户</h4>
                  <p className="mt-1 text-sm text-red-600">
                    删除你的账户和所有相关数据。此操作不可撤销。
                  </p>
                  <Button variant="destructive" className="mt-4">
                    删除账户
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}