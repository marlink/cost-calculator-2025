"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/ui/footer"

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/" className="text-slate-400 hover:text-white transition-colors font-light tracking-[0.1px]">Home</a>
              <a href="/calculator" className="text-slate-400 hover:text-white transition-colors font-light tracking-[0.1px]">Calculator</a>
              <a href="/icons" className="text-slate-400 hover:text-white transition-colors font-light tracking-[0.1px]">Icons</a>
              <Button size="sm" className="font-light tracking-[0.1px]">
                <Icons.Login className="mr-2" size="small" />
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-xl text-slate-400/80 font-light tracking-[0.2px] leading-relaxed max-w-2xl mx-auto">
            Comprehensive button system with icons, multiple variants, sizes, and styling options
          </p>
        </div>

        <div className="space-y-12">
          {/* Primary Buttons */}
          <Card className="p-8 bg-slate-800/50 border-slate-700/50">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-white mb-2 tracking-[-0.01em]">Primary Buttons</h2>
              <p className="text-slate-400/80 font-light tracking-[0.2px]">Main action buttons with gradient backgrounds</p>
            </div>
            
            <div className="space-y-8">
              {/* Default Primary */}
              <div>
                <h3 className="text-lg font-light text-white mb-4 tracking-[-0.01em]">Default Primary</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="sm">
                    <Icons.Plus className="mr-2" />
                    Small
                  </Button>
                  <Button>
                    <Icons.Check className="mr-2" />
                    Default
                  </Button>
                  <Button size="lg">
                    <Icons.ArrowRight className="mr-2" />
                    Large
                  </Button>
                  <Button size="icon-sm">
                    <Icons.Search />
                  </Button>
                  <Button size="icon">
                    <Icons.Heart />
                  </Button>
                  <Button size="icon-lg">
                    <Icons.Settings />
                  </Button>
                </div>
              </div>

              {/* Destructive */}
              <div>
                <h3 className="text-lg font-light text-white mb-4 tracking-[-0.01em]">Destructive</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="destructive" size="sm">
                    <Icons.X className="mr-2" />
                    Delete
                  </Button>
                  <Button variant="destructive">
                    <Icons.X className="mr-2" />
                    Remove
                  </Button>
                  <Button variant="destructive" size="lg">
                    <Icons.X className="mr-2" />
                    Delete Forever
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Icons.X />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Outline Buttons - Light */}
          <Card className="p-8 bg-white/5 border-slate-700/50">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-white mb-2 tracking-[-0.01em]">Outline Buttons - Light Theme</h2>
              <p className="text-slate-400/80 font-light tracking-[0.2px]">Transparent buttons with borders for light backgrounds</p>
            </div>
            
            <div className="space-y-8 p-6 bg-white rounded-lg">
              {/* Default Outline */}
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-4">Default Outline</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outline" size="sm">
                    <Icons.Download className="mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">
                    <Icons.Upload className="mr-2" />
                    Upload
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icons.File className="mr-2" />
                    Open File
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icons.Search />
                  </Button>
                </div>
              </div>

              {/* Primary Outline */}
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-4">Primary Outline</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outline-primary" size="sm">
                    <Icons.Login className="mr-2" />
                    Sign In
                  </Button>
                  <Button variant="outline-primary">
                    <Icons.User className="mr-2" />
                    Profile
                  </Button>
                  <Button variant="outline-primary" size="lg">
                    <Icons.Settings className="mr-2" />
                    Settings
                  </Button>
                  <Button variant="outline-primary" size="icon">
                    <Icons.Bell />
                  </Button>
                </div>
              </div>

              {/* Destructive Outline */}
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-4">Destructive Outline</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outline-destructive" size="sm">
                    <Icons.X className="mr-2" />
                    Cancel
                  </Button>
                  <Button variant="outline-destructive">
                    <Icons.X className="mr-2" />
                    Delete
                  </Button>
                  <Button variant="outline-destructive" size="lg">
                    <Icons.X className="mr-2" />
                    Remove Item
                  </Button>
                  <Button variant="outline-destructive" size="icon">
                    <Icons.X />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Outline Buttons - Dark */}
          <Card className="p-8 bg-slate-800/50 border-slate-700/50">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-white mb-2 tracking-[-0.01em]">Outline Buttons - Dark Theme</h2>
              <p className="text-slate-400/80 font-light tracking-[0.2px]">Transparent buttons with borders for dark backgrounds</p>
            </div>
            
            <div className="space-y-8">
              {/* Default Dark Outline */}
              <div>
                <h3 className="text-lg font-light text-white mb-4 tracking-[-0.01em]">Default Dark Outline</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outline-dark" size="sm">
                    <Icons.Sun className="mr-2" />
                    Light Mode
                  </Button>
                  <Button variant="outline-dark">
                    <Icons.Computer className="mr-2" />
                    Desktop
                  </Button>
                  <Button variant="outline-dark" size="lg">
                    <Icons.Smartphone className="mr-2" />
                    Mobile View
                  </Button>
                  <Button variant="outline-dark" size="icon">
                    <Icons.Menu />
                  </Button>
                </div>
              </div>

              {/* Primary Dark Outline */}
              <div>
                <h3 className="text-lg font-light text-white mb-4 tracking-[-0.01em]">Primary Dark Outline</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outline-primary-dark" size="sm">
                    <Icons.Mail />
                    Email
                  </Button>
                  <Button variant="outline-primary-dark">
                    <Icons.Phone />
                    Call
                  </Button>
                  <Button variant="outline-primary-dark" size="lg">
                    <Icons.Message />
                    Message
                  </Button>
                  <Button variant="outline-primary-dark" size="icon">
                    <Icons.Bell />
                  </Button>
                </div>
              </div>

              {/* Destructive Dark Outline */}
              <div>
                <h3 className="text-lg font-light text-white mb-4 tracking-[-0.01em]">Destructive Dark Outline</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outline-destructive-dark" size="sm">
                    <Icons.X />
                    Close
                  </Button>
                  <Button variant="outline-destructive-dark">
                    <Icons.X />
                    Dismiss
                  </Button>
                  <Button variant="outline-destructive-dark" size="lg">
                    <Icons.X />
                    Delete Account
                  </Button>
                  <Button variant="outline-destructive-dark" size="icon">
                    <Icons.X />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Secondary & Ghost Buttons */}
          <Card className="p-8 bg-slate-800/50 border-slate-700/50">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-white mb-2 tracking-[-0.01em]">Secondary & Ghost Buttons</h2>
              <p className="text-slate-400/80 font-light tracking-[0.2px]">Subtle buttons for secondary actions</p>
            </div>
            
            <div className="space-y-8">
              {/* Secondary Light */}
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Secondary Light</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="secondary" size="sm">
                    <Icons.Folder />
                    Browse
                  </Button>
                  <Button variant="secondary">
                    <Icons.Book />
                    Documentation
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Icons.Image />
                    Gallery
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Icons.Calendar />
                  </Button>
                </div>
              </div>

              {/* Secondary Dark */}
              <div>
                <h3 className="text-lg font-light text-white mb-4 tracking-[-0.01em]">Secondary Dark</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="secondary-dark" size="sm">
                    <Icons.Video />
                    Watch
                  </Button>
                  <Button variant="secondary-dark">
                    <Icons.Music />
                    Listen
                  </Button>
                  <Button variant="secondary-dark" size="lg">
                    <Icons.Camera />
                    Capture
                  </Button>
                  <Button variant="secondary-dark" size="icon">
                    <Icons.Globe />
                  </Button>
                </div>
              </div>

              {/* Ghost Buttons */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-lg">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Ghost Light</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="ghost" size="sm">
                      <Icons.ArrowLeft />
                      Back
                    </Button>
                    <Button variant="ghost">
                      <Icons.ArrowRight />
                      Next
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icons.Menu />
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-light text-white mb-4 tracking-[-0.01em]">Ghost Dark</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="ghost-dark" size="sm">
                      <Icons.ArrowUp />
                      Top
                    </Button>
                    <Button variant="ghost-dark">
                      <Icons.ArrowDown />
                      Bottom
                    </Button>
                    <Button variant="ghost-dark" size="icon">
                      <Icons.Search />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Link Buttons */}
          <Card className="p-8 bg-slate-800/50 border-slate-700/50">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-white mb-2 tracking-[-0.01em]">Link Buttons</h2>
              <p className="text-slate-400/80 font-light tracking-[0.2px]">Text-based buttons for navigation and links</p>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center">
              <Button variant="link" size="sm">
                <Icons.ArrowRight />
                Learn More
              </Button>
              <Button variant="link">
                <Icons.Globe />
                Visit Website
              </Button>
              <Button variant="link" size="lg">
                <Icons.Book />
                Read Documentation
              </Button>
            </div>
          </Card>

          {/* Icon Showcase */}
          <Card className="p-8 bg-slate-800/50 border-slate-700/50">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-white mb-2 tracking-[-0.01em]">Popular Icon Combinations</h2>
              <p className="text-slate-400/80 font-light tracking-[0.2px]">Common button and icon pairings</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wider">Actions</h4>
                <div className="space-y-2">
                  <Button className="w-full justify-start">
                    <Icons.Plus />
                    Create New
                  </Button>
                  <Button variant="outline-dark" className="w-full justify-start">
                    <Icons.Download />
                    Download
                  </Button>
                  <Button variant="secondary-dark" className="w-full justify-start">
                    <Icons.Upload />
                    Upload
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wider">Navigation</h4>
                <div className="space-y-2">
                  <Button variant="outline-primary-dark" className="w-full justify-start">
                    <Icons.ArrowLeft />
                    Go Back
                  </Button>
                  <Button className="w-full justify-start">
                    <Icons.ArrowRight />
                    Continue
                  </Button>
                  <Button variant="ghost-dark" className="w-full justify-start">
                    <Icons.Menu />
                    Menu
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wider">Communication</h4>
                <div className="space-y-2">
                  <Button variant="outline-primary-dark" className="w-full justify-start">
                    <Icons.Mail />
                    Send Email
                  </Button>
                  <Button variant="secondary-dark" className="w-full justify-start">
                    <Icons.Phone />
                    Call Now
                  </Button>
                  <Button variant="ghost-dark" className="w-full justify-start">
                    <Icons.Message />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}