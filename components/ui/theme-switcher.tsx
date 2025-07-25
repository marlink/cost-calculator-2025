"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'

type Theme = 'light' | 'dark' | 'system'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme || 'system'
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.toggle('dark', systemTheme === 'dark')
    } else {
      root.classList.toggle('dark', newTheme === 'dark')
    }
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg">
        <div className="w-8 h-8 bg-slate-700 rounded animate-pulse"></div>
        <div className="w-8 h-8 bg-slate-700 rounded animate-pulse"></div>
        <div className="w-8 h-8 bg-slate-700 rounded animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700">
      <Button
        variant={theme === 'light' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleThemeChange('light')}
        className="w-8 h-8 p-0"
        title="Light theme"
      >
        <Icons.Sun />
      </Button>
      
      <Button
        variant={theme === 'dark' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleThemeChange('dark')}
        className="w-8 h-8 p-0"
        title="Dark theme"
      >
        <Icons.Moon />
      </Button>
      
      <Button
        variant={theme === 'system' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => handleThemeChange('system')}
        className="w-8 h-8 p-0"
        title="System theme"
      >
        <Icons.Computer />
      </Button>
    </div>
  )
}