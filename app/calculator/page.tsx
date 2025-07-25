"use client"

import Component from '../../components/calculator'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import Footer from '@/components/ui/footer'

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">DC</span>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/" className="footer-link">Home</a>
              <a href="/calculator" className="footer-link">Calculator</a>
              <a href="/blog" className="footer-link">Blog</a>
              <a href="/styleguide" className="footer-link">Style Guide</a>
              <a href="/icons" className="footer-link">Icons</a>
              <a href="/buttons" className="footer-link">Buttons</a>
              <Button size="sm" className="font-light tracking-[0.1px]">
                <Icons.Login />
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Calculator Content */}
      <Component />

      {/* Footer */}
      <Footer />
    </div>
  )
}