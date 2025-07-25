"use client"

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MultiColumnTextProps {
  children: ReactNode
  columns: 2 | 3
  className?: string
  gap?: 'sm' | 'md' | 'lg'
}

export default function MultiColumnText({ 
  children, 
  columns, 
  className = "",
  gap = "md" 
}: MultiColumnTextProps) {
  const gapClasses = {
    sm: "gap-6",
    md: "gap-8", 
    lg: "gap-12"
  }

  const columnClasses = {
    2: "md:columns-2",
    3: "lg:columns-3 md:columns-2"
  }

  return (
    <div 
      className={cn(
        "text-slate-300 leading-relaxed",
        columnClasses[columns],
        gapClasses[gap],
        "column-fill-balance",
        "[&>p]:mb-4 [&>p]:break-inside-avoid",
        "[&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mb-3 [&>h2]:break-after-avoid",
        "[&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-emerald-400 [&>h3]:mb-2 [&>h3]:break-after-avoid",
        "[&>ul]:mb-4 [&>ul]:break-inside-avoid",
        "[&>ol]:mb-4 [&>ol]:break-inside-avoid",
        "[&>blockquote]:border-l-4 [&>blockquote]:border-emerald-400 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-400 [&>blockquote]:mb-4 [&>blockquote]:break-inside-avoid",
        className
      )}
    >
      {children}
    </div>
  )
}

// Example usage components
export function TwoColumnText({ children, className, gap }: Omit<MultiColumnTextProps, 'columns'>) {
  return (
    <MultiColumnText columns={2} className={className} gap={gap}>
      {children}
    </MultiColumnText>
  )
}

export function ThreeColumnText({ children, className, gap }: Omit<MultiColumnTextProps, 'columns'>) {
  return (
    <MultiColumnText columns={3} className={className} gap={gap}>
      {children}
    </MultiColumnText>
  )
}