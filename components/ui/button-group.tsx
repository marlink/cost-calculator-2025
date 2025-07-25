"use client"

import { useState } from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface ButtonGroupOption {
  value: string
  label: string
  disabled?: boolean
}

interface MultiSelectButtonGroupProps {
  options: ButtonGroupOption[]
  value?: string[]
  onChange?: (value: string[]) => void
  className?: string
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  maxSelections?: number
  minSelections?: number
}

export default function MultiSelectButtonGroup({
  options,
  value = [],
  onChange,
  className = "",
  variant = 'outline',
  size = 'default',
  maxSelections,
  minSelections = 0
}: MultiSelectButtonGroupProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>(value)

  const handleToggle = (optionValue: string) => {
    let newValues: string[]

    if (selectedValues.includes(optionValue)) {
      // Deselecting - check minimum
      if (selectedValues.length <= minSelections) {
        return // Can't deselect if at minimum
      }
      newValues = selectedValues.filter(v => v !== optionValue)
    } else {
      // Selecting - check maximum
      if (maxSelections && selectedValues.length >= maxSelections) {
        return // Can't select if at maximum
      }
      newValues = [...selectedValues, optionValue]
    }

    setSelectedValues(newValues)
    onChange?.(newValues)
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value)
        const isDisabled = option.disabled || 
          (!isSelected && maxSelections && selectedValues.length >= maxSelections) ||
          (isSelected && selectedValues.length <= minSelections)

        return (
          <Button
            key={option.value}
            variant={isSelected ? 'default' : variant}
            size={size}
            onClick={() => handleToggle(option.value)}
            disabled={isDisabled}
            className={cn(
              "transition-all duration-200",
              isSelected && "ring-2 ring-emerald-400/50",
              isDisabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}

// Single select version for comparison
interface SingleSelectButtonGroupProps {
  options: ButtonGroupOption[]
  value?: string
  onChange?: (value: string) => void
  className?: string
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
}

export function SingleSelectButtonGroup({
  options,
  value,
  onChange,
  className = "",
  variant = 'outline',
  size = 'default'
}: SingleSelectButtonGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value)

  const handleSelect = (optionValue: string) => {
    const newValue = selectedValue === optionValue ? undefined : optionValue
    setSelectedValue(newValue)
    onChange?.(newValue || '')
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const isSelected = selectedValue === option.value

        return (
          <Button
            key={option.value}
            variant={isSelected ? 'default' : variant}
            size={size}
            onClick={() => handleSelect(option.value)}
            disabled={option.disabled}
            className={cn(
              "transition-all duration-200",
              isSelected && "ring-2 ring-emerald-400/50"
            )}
          >
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}