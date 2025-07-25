"use client"

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface PatternBackgroundProps {
  children?: React.ReactNode
  variant: 'dots' | 'particles'
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

export default function PatternBackground({ 
  children, 
  variant, 
  className = "",
  intensity = 'subtle'
}: PatternBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const intensityClasses = {
    subtle: 'opacity-20',
    medium: 'opacity-40', 
    strong: 'opacity-60'
  }

  if (!mounted) {
    return (
      <div className={cn("relative", className)}>
        {children}
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Dots Pattern */}
      {variant === 'dots' && (
        <div 
          className={cn(
            "absolute inset-0 pointer-events-none",
            intensityClasses[intensity]
          )}
          style={{
            backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            animation: 'float-dots 20s ease-in-out infinite'
          }}
        />
      )}

      {/* Particles Pattern */}
      {variant === 'particles' && (
        <>
          {/* Multiple particle layers for depth */}
          <div 
            className={cn(
              "absolute inset-0 pointer-events-none",
              intensityClasses[intensity]
            )}
            style={{
              backgroundImage: `radial-gradient(circle, #10b981 0.5px, transparent 0.5px)`,
              backgroundSize: '30px 30px',
              animation: 'float-particles-1 25s linear infinite'
            }}
          />
          <div 
            className={cn(
              "absolute inset-0 pointer-events-none",
              intensityClasses[intensity]
            )}
            style={{
              backgroundImage: `radial-gradient(circle, #06b6d4 0.3px, transparent 0.3px)`,
              backgroundSize: '45px 45px',
              animation: 'float-particles-2 30s linear infinite reverse'
            }}
          />
          <div 
            className={cn(
              "absolute inset-0 pointer-events-none",
              intensityClasses[intensity]
            )}
            style={{
              backgroundImage: `radial-gradient(circle, #8b5cf6 0.4px, transparent 0.4px)`,
              backgroundSize: '60px 60px',
              animation: 'float-particles-3 35s linear infinite'
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-dots {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
          }
          75% {
            transform: translateY(-15px) translateX(8px);
          }
        }

        @keyframes float-particles-1 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) translateX(-15px) rotate(240deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
          }
        }

        @keyframes float-particles-2 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) translateX(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
          }
        }

        @keyframes float-particles-3 {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          40% {
            transform: translateY(-15px) translateX(25px) rotate(144deg);
          }
          80% {
            transform: translateY(-30px) translateX(-10px) rotate(288deg);
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

// Convenience components
export function DotsBackground({ children, className, intensity }: Omit<PatternBackgroundProps, 'variant'>) {
  return (
    <PatternBackground variant="dots" className={className} intensity={intensity}>
      {children}
    </PatternBackground>
  )
}

export function ParticlesBackground({ children, className, intensity }: Omit<PatternBackgroundProps, 'variant'>) {
  return (
    <PatternBackground variant="particles" className={className} intensity={intensity}>
      {children}
    </PatternBackground>
  )
}