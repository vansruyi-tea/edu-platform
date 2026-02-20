'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Database, Key, Link } from 'lucide-react'

export default function TestSupabasePage() {
  const [status, setStatus] = useState({
    url: '',
    key: '',
    connected: false,
    error: '',
    tables: [] as string[],
  })

  const testConnection = async () => {
    try {
      // 显示配置
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '未设置'
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
        ? `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 10)}...` 
        : '未设置'

      setStatus(prev => ({ ...prev, url, key }))

      // 测试连接
      const { data, error } = await supabase.from('profiles').select('count').limit(1)

      if (error) {
        // 如果profiles表不存在，尝试其他表
        const { error: authError } = await supabase.auth.getSession()
        if (authError) throw authError
        
        setStatus(prev => ({ 
          ...prev, 
          connected: true, 
          error: 'profiles表不存在，但认证连接正常',
          tables: ['auth.users'] 
        }))
      } else {
        setStatus(prev => ({ 
          ...prev, 
          connected: true, 
          error: '',
          tables: ['profiles', 'auth.users'] 
        }))
      }
    } catch (error: any) {
      setStatus(prev => ({ 
        ...prev, 
        connected: false, 
        error: error.message 
      }))
    }
  }

  useEffect(() => {
    testConnection()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="mr-2 h-6 w-6" />
            Supabase 连接测试
          </CardTitle>
          <CardDescription>
            检查Supabase数据库连接状态
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 配置信息 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Supabase URL:</span>
              </div>
              <code className="rounded bg-muted px-2 py-1 text-sm">
                {status.url || '加载中...'}
              </code>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Key className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Anon Key:</span>
              </div>
              <code className="rounded bg-muted px-2 py-1 text-sm">
                {status.key || '加载中...'}
              </code>
            </div>
          </div>

          {/* 连接状态 */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {status.connected ? (
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="mr-2 h-5 w-5 text-red-600" />
                )}
                <span className="font-medium">
                  连接状态: {status.connected ? '成功' : '失败'}
                </span>
              </div>
              <Button onClick={testConnection} size="sm">
                重新测试
              </Button>
            </div>

            {status.error && (
              <div className="mt-2 rounded bg-red-50 p-3">
                <p className="text-sm text-red-600">{status.error}</p>
              </div>
            )}

            {status.tables.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium">可访问的表:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {status.tables.map((table) => (
                    <span
                      key={table}
                      className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
                    >
                      {table}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 操作指南 */}
          <div className="rounded-lg bg-blue-50 p-4">
            <h3 className="font-medium text-blue-800">如果连接失败：</h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-blue-700">
              <li>登录Vercel，检查环境变量是否正确设置</li>
              <li>登录Supabase，确认项目URL和Anon Key</li>
              <li>在Supabase中创建profiles表（执行SQL）</li>
              <li>重新部署Vercel项目</li>
            </ol>
          </div>

          {/* 快速链接 */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button variant="outline" asChild>
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                打开 Vercel
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">
                打开 Supabase
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}