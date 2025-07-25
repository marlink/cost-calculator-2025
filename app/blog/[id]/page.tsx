"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/ui/icons'
import Footer from '@/components/ui/footer'

// Dummy blog post data
const blogPost = {
  id: 1,
  title: "The Future of Design Cost Estimation",
  content: `
    <p>Design cost estimation has evolved significantly over the past decade. What once relied heavily on intuition and rough calculations now leverages sophisticated algorithms and machine learning to provide more accurate predictions.</p>
    
    <h2>The Current Landscape</h2>
    <p>Traditional cost estimation methods often fall short in today's fast-paced design environment. Teams need tools that can adapt to changing requirements, account for complexity variations, and provide real-time insights into project costs.</p>
    
    <h3>Key Challenges</h3>
    <ul>
      <li>Scope creep and changing requirements</li>
      <li>Varying team expertise levels</li>
      <li>Technology stack complexity</li>
      <li>Client communication and expectation management</li>
    </ul>
    
    <h2>AI-Powered Solutions</h2>
    <p>Machine learning algorithms can analyze historical project data to identify patterns and predict costs with greater accuracy. These systems learn from past projects, considering factors like:</p>
    
    <blockquote>
      "The future of design lies not in replacing human creativity, but in augmenting it with intelligent tools that handle the complexity of modern project management."
    </blockquote>
    
    <h3>Benefits of AI Integration</h3>
    <ol>
      <li><strong>Improved Accuracy:</strong> ML models can process vast amounts of data to identify cost patterns</li>
      <li><strong>Real-time Adjustments:</strong> Dynamic pricing based on project changes</li>
      <li><strong>Risk Assessment:</strong> Predictive analysis for potential cost overruns</li>
      <li><strong>Resource Optimization:</strong> Better allocation of team members and time</li>
    </ol>
    
    <h2>Implementation Strategies</h2>
    <p>Successfully implementing AI-powered cost estimation requires a strategic approach. Organizations should start with data collection and gradually introduce automated systems.</p>
    
    <h3>Getting Started</h3>
    <p>Begin by auditing your current estimation process and identifying areas where data can be collected more systematically. This foundation will support more advanced AI implementations in the future.</p>
  `,
  author: "Sarah Chen",
  date: "2024-01-15",
  readTime: "5 min read",
  category: "Technology",
  image: "/placeholder.jpg",
  tags: ["AI", "Machine Learning", "Cost Estimation", "Project Management"]
}

// Related posts
const relatedPosts = [
  {
    id: 2,
    title: "Building Scalable Design Systems",
    excerpt: "A comprehensive guide to creating design systems that grow with your organization.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Cost-Effective UX Research Methods",
    excerpt: "Discover budget-friendly approaches to user research that deliver maximum insights.",
    author: "Emily Watson",
    date: "2024-01-10",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Remote Design Team Collaboration",
    excerpt: "Best practices for managing distributed design teams across time zones.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "7 min read"
  }
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Dummy carousel images
  const carouselImages = [
    { src: "/placeholder.jpg", alt: "Design process visualization", caption: "Modern design workflows integrate AI tools" },
    { src: "/placeholder.jpg", alt: "Cost estimation dashboard", caption: "Real-time cost tracking and predictions" },
    { src: "/placeholder.jpg", alt: "Team collaboration", caption: "Distributed teams working together effectively" }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

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

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <a href="/blog">
              <Icons.ArrowLeft />
              Back to Blog
            </a>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">
              {blogPost.category}
            </span>
            <span className="text-sm text-slate-500">{blogPost.readTime}</span>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
              <div>
                <p className="font-medium">{blogPost.author}</p>
                <p className="text-sm text-slate-500">{blogPost.date}</p>
              </div>
            </div>
            
            {/* Social Share */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 mr-2">Share:</span>
              <Button variant="ghost" size="sm">
                <Icons.Share />
              </Button>
              <Button variant="ghost" size="sm">
                <Icons.Twitter />
              </Button>
              <Button variant="ghost" size="sm">
                <Icons.Linkedin />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-slate-800 rounded-lg mb-8 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <Icons.Image className="text-slate-500 text-4xl" />
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-slate prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </article>

        {/* Image Carousel */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6">Project Gallery</h3>
          <Card variant="secondary" className="p-6">
            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <Icons.Image className="text-slate-500 text-4xl mx-auto mb-2" />
                    <p className="text-slate-400">{carouselImages[currentSlide].caption}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={prevSlide}>
                  <Icons.ArrowLeft />
                  Previous
                </Button>
                
                <div className="flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-emerald-400' : 'bg-slate-600'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" onClick={nextSlide}>
                  Next
                  <Icons.ArrowRight />
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Accordion Section */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6">Additional Resources</h3>
          <Card variant="secondary">
            <button
              className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              <span className="font-medium">Implementation Checklist</span>
              <Icons.ChevronDown className={`transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isAccordionOpen && (
              <div className="px-6 pb-6">
                <div className="border-t border-slate-700 pt-4">
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <Icons.Check className="text-emerald-400" />
                      Audit current estimation processes
                    </li>
                    <li className="flex items-center gap-2">
                      <Icons.Check className="text-emerald-400" />
                      Collect historical project data
                    </li>
                    <li className="flex items-center gap-2">
                      <Icons.Check className="text-emerald-400" />
                      Define key metrics and KPIs
                    </li>
                    <li className="flex items-center gap-2">
                      <Icons.Check className="text-emerald-400" />
                      Train team on new tools
                    </li>
                    <li className="flex items-center gap-2">
                      <Icons.Check className="text-emerald-400" />
                      Implement feedback loops
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Card>
        </section>

        {/* Tags */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} variant="secondary" className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base group-hover:text-emerald-400 transition-colors">
                    <a href={`/blog/${post.id}`}>
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="text-center">
          <Card variant="primary" glow className="p-8">
            <h3 className="text-xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-slate-300 mb-6">
              Subscribe to our newsletter for more design insights and cost estimation tips.
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