"use client"

import { useState } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Icons } from './icons'
import { cn } from '@/lib/utils'

interface NewsletterProps {
  variant?: 'default' | 'compact' | 'inline'
  className?: string
  title?: string
  description?: string
  placeholder?: string
}

export default function Newsletter({ 
  variant = 'default',
  className = "",
  title = "Stay Updated",
  description = "Get the latest updates and insights delivered to your inbox.",
  placeholder = "Enter your email"
}: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsSubmitting(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <div className={cn(
        "text-center p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-lg",
        className
      )}>
        <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-full mx-auto mb-4">
          <Icons.Check className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Thanks for subscribing!</h3>
        <p className="text-slate-400">You'll receive our latest updates in your inbox.</p>
      </div>
    )
  }

  // Default variant
  if (variant === 'default') {
    return (
      <div className={cn(
        "bg-slate-800/50 border border-slate-700 rounded-lg p-6",
        className
      )}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400">{description}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400"
            required
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icons.Loader className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <Icons.ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    )
  }

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={cn(
        "bg-slate-800/30 border border-slate-700 rounded-lg p-4",
        className
      )}>
        <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400 text-sm"
            required
          />
          <Button 
            type="submit" 
            size="sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Icons.Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Icons.ArrowRight className="w-4 h-4" />
            )}
          </Button>
        </form>
      </div>
    )
  }

  // Inline variant
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-white mb-1">{title}</h4>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-48 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-400 text-sm"
          required
        />
        <Button 
          type="submit" 
          size="sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Icons.Loader className="w-4 h-4 animate-spin" />
          ) : (
            'Subscribe'
          )}
        </Button>
      </form>
    </div>
  )
}