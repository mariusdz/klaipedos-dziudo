import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-dojo-blue focus-visible:ring-offset-2 active:scale-[0.98]'

  const variants = {
    primary: 'bg-dojo-blue text-white hover:bg-dojo-blue-light hover:shadow-elevated',
    secondary: 'bg-dojo-gray-100 text-dojo-gray-900 hover:bg-dojo-gray-200',
    outline:
      'bg-transparent text-dojo-blue border-2 border-dojo-blue hover:bg-dojo-blue hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
