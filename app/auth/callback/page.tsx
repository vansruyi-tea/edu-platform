'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // 获取当前会话
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) throw error

        if (session) {
          // 认证成功，跳转到首页
          setTimeout(() => {
            router.push('/')
          }, 2000)
        } else {
          // 没有会话，跳转到登录页
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        }
      } catch (error) {
        console.error('认证回调错误:', error)
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">认证处理中</CardTitle>
          <CardDescription>
            正在验证你的登录信息，请稍候...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-center text-sm text-muted-foreground">
            正在完成认证流程，完成后将自动跳转
          </p>
        </CardContent>
      </Card>
    </div>
  )
}