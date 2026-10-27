import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'gold' | 'magenta' | 'outline'

interface SharedProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

type PremiumButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button'
  }

type PremiumLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
  }

function variantClass(variant: Variant) {
  return `premium-btn premium-btn-${variant}`
}

export function PremiumButton({
  children,
  variant = 'gold',
  className = '',
  ...props
}: PremiumButtonProps) {
  return (
    <button
      type="button"
      className={`${variantClass(variant)} ${className}`.trim()}
      {...props}
    >
      <span className="premium-btn-inner">{children}</span>
    </button>
  )
}

export function PremiumLink({
  children,
  variant = 'gold',
  className = '',
  as: _as,
  ...props
}: PremiumLinkProps) {
  return (
    <a className={`${variantClass(variant)} ${className}`.trim()} {...props}>
      <span className="premium-btn-inner">{children}</span>
    </a>
  )
}
