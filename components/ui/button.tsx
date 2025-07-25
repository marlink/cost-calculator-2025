import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary variants
        default: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
        destructive: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl",
        
        // Outline variants - Light
        outline: "border-2 border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 hover:border-slate-400",
        "outline-primary": "border-2 border-blue-500 bg-transparent text-blue-600 hover:bg-blue-50 hover:border-blue-600",
        "outline-destructive": "border-2 border-red-500 bg-transparent text-red-600 hover:bg-red-50 hover:border-red-600",
        
        // Outline variants - Dark
        "outline-dark": "border-2 border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800 hover:border-slate-500",
        "outline-primary-dark": "border-2 border-blue-400 bg-transparent text-blue-400 hover:bg-blue-950 hover:border-blue-300",
        "outline-destructive-dark": "border-2 border-red-400 bg-transparent text-red-400 hover:bg-red-950 hover:border-red-300",
        
        // Secondary variants
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-sm hover:shadow-md",
        "secondary-dark": "bg-slate-800 text-slate-100 hover:bg-slate-700 shadow-sm hover:shadow-md",
        
        // Ghost and link
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        "ghost-dark": "hover:bg-slate-800 hover:text-slate-100",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md [&_svg]:size-3",
        default: "h-10 px-4 py-2 text-sm rounded-lg [&_svg]:size-4",
        lg: "h-12 px-6 py-3 text-base rounded-lg [&_svg]:size-5",
        icon: "h-10 w-10 rounded-lg [&_svg]:size-4",
        "icon-sm": "h-8 w-8 rounded-md [&_svg]:size-3",
        "icon-lg": "h-12 w-12 rounded-lg [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
