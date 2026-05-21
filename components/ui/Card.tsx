import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  bordered?: boolean
  hover?: boolean
}

export function Card({ children, className, bordered = false, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl overflow-hidden transition-all duration-300',
        bordered && 'border border-dojo-gray-200',
        hover && 'shadow-card hover:shadow-card-hover',
        !hover && 'shadow-card',
        className
      )}
    >
      {children}
    </div>
  )
}
