import React from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'slate' | 'outline' | 'verified' | 'placeholder'
  size?: 'sm' | 'md'
  icon?: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'cyan',
  size = 'md',
  icon,
  children,
  ...props
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/60',
    slate: 'bg-slate-900 text-slate-300 border border-slate-800',
    outline: 'bg-transparent text-slate-400 border border-slate-800',
    verified: 'bg-emerald-950/50 text-emerald-300 border border-emerald-800/60',
    placeholder: 'bg-amber-950/40 text-amber-300 border border-amber-800/60',
  }

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full tracking-wide select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
