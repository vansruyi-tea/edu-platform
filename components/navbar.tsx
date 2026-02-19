'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Home, BookOpen, Video, Users, MessageSquare, User } from 'lucide-react'

const navItems = [
  { name: '首页', href: '/', icon: Home },
  { name: '课程', href: '/courses', icon: BookOpen },
  { name: '直播', href: '/live', icon: Video },
  { name: '社区', href: '/community', icon: Users },
  { name: '问答', href: '/qna', icon: MessageSquare },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">Edu</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline">教育平台</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/login">登录</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">免费注册</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 md:hidden"
        >
          <span className="sr-only">打开菜单</span>
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4 space-y-2">
              <Button className="w-full" asChild>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  免费注册
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  登录
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}