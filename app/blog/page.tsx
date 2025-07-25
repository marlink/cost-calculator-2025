"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/ui/icons'
import Footer from '@/components/ui/footer'

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Design Cost Estimation",
    excerpt: "Exploring how AI and machine learning are revolutionizing the way we calculate design project costs and timelines.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "Building Scalable Design Systems",
    excerpt: "A comprehensive guide to creating design systems that grow with your organization and maintain consistency.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Design",
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "Cost-Effective UX Research Methods",
    excerpt: "Discover budget-friendly approaches to user research that deliver maximum insights for your design decisions.",
    author: "Emily Watson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Research",
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "Remote Design Team Collaboration",
    excerpt: "Best practices for managing distributed design teams and maintaining creative collaboration across time zones.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Management",
    image: "/placeholder.jpg"
  },
  {
    id: 5,
    title: "Sustainable Design Practices",
    excerpt: "How to incorporate environmental considerations into your design process and reduce digital carbon footprint.",
    author: "Lisa Green",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Sustainability",
    image: "/placeholder.jpg"
  },
  {
    id: 6,
    title: "Typography in Modern Web Design",
    excerpt: "Understanding the impact of typography choices on user experience and brand perception in digital products.",
    author: "Alex Thompson",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Design",
    image: "/placeholder.jpg"
  },
  {
    id: 7,
    title: "Accessibility-First Design Approach",
    excerpt: "Creating inclusive digital experiences that work for everyone, from the ground up.",
    author: "Jordan Martinez",
    date: "2024-01-01",
    readTime: "9 min read",
    category: "Accessibility",
    image: "/placeholder.jpg"
  },
  {
    id: 8,
    title: "Design System Documentation",
    excerpt: "Strategies for creating comprehensive documentation that teams actually use and maintain.",
    author: "Rachel Park",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Documentation",
    image: "/placeholder.jpg"
  },
  {
    id: 9,
    title: "Color Theory for Digital Products",
    excerpt: "Understanding how color psychology influences user behavior and decision-making in digital interfaces.",
    author: "Michael Brown",
    date: "2023-12-25",
    readTime: "7 min read",
    category: "Design",
    image: "/placeholder.jpg"
  },
  {
    id: 10,
    title: "Performance-Driven Design Decisions",
    excerpt: "Balancing visual appeal with technical performance to create fast, beautiful user experiences.",
    author: "Nina Patel",
    date: "2023-12-22",
    readTime: "8 min read",
    category: "Performance",
    image: "/placeholder.jpg"
  }
]

const categories = ["All", "Technology", "Design", "Research", "Management", "Sustainability", "Accessibility", "Documentation", "Performance"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in design, 
            cost estimation, and project management.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline-dark"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="font-light"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} variant="secondary" className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-slate-800 rounded-t-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <Icons.Image className="text-slate-500" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-400 transition-colors">
                    <a href={`/blog/${post.id}`}>
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                      <span className="text-xs text-slate-500">{post.author}</span>
                    </div>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-emerald-500/10 group-hover:text-emerald-400"
                    asChild
                  >
                    <a href={`/blog/${post.id}`}>
                      Read More
                      <Icons.ArrowRight className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <Card variant="primary" glow className="max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-6">
              Get the latest design insights and cost estimation tips delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
              />
              <Button>
                <Icons.ArrowRight />
                Subscribe
              </Button>
            </div>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}