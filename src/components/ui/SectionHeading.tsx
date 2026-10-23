import React from 'react'
import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
  id?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  id,
}) => {
  const isCenter = align === 'center'

  return (
    <div
      id={id}
      className={cn(
        'space-y-4 mb-12 sm:mb-16',
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl',
        className
      )}
    >
      {badge && (
        <div className={cn('flex items-center gap-2', isCenter ? 'justify-center' : 'justify-start')}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
