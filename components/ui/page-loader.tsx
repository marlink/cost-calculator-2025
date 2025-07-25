"use client"

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface PageLoaderProps {
  isLoading?: boolean
  className?: string
  variant?: 'bar' | 'dots' | 'pulse'
}

export default function PageLoader({ 
  isLoading = true, 
  className = "",
  variant = 'bar'
}: PageLoaderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoading) {
    return null
  }

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 pointer-events-none",
      className
    )}>
      {/* Bar Loader */}
      {variant === 'bar' && (
        <div className="h-1 bg-slate-800/20 backdrop-blur-sm">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-loading-bar origin-left"></div>
        </div>
      )}

      {/* Dots Loader */}
      {variant === 'dots' && (
        <div className="flex justify-center pt-4">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      )}

      {/* Pulse Loader */}
      {variant === 'pulse' && (
        <div className="flex justify-center pt-4">
          <div className="relative">
            <div className="w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="absolute top-0 left-0 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes loading-bar {
          0% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(0.7);
          }
          100% {
            transform: scaleX(1);
          }
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

// Hook for managing loading state
export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return {
    isLoading,
    startLoading,
    stopLoading
  }
}