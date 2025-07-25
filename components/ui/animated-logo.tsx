"use client"

import { useEffect, useState } from 'react'

export default function AnimatedLogo({ className = "w-8 h-8" }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`${className} bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center`}>
        <span className="text-slate-900 font-bold text-sm">DC</span>
      </div>
    )
  }

  return (
    <div className={`${className} relative overflow-hidden rounded-lg flex items-center justify-center`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 animate-gradient-slow"></div>
      
      {/* Logo content */}
      <span className="relative z-10 text-slate-900 font-bold text-sm">DC</span>
      
      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-slow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}