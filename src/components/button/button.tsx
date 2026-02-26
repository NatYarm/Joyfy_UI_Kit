import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

const buttonVariant = [
  'primary',
  'secondary',
  'outline',
  'text',
  'link',
  'icon',
  'comment',
  'clean',
] as const

type ButtonVariant = (typeof buttonVariant)[number]

const buttonSize = ['small', 'medium', 'large'] as const

type ButtonSize = (typeof buttonSize)[number]

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  customStyles?: boolean
  endIcon?: ReactNode
  fullWidth?: boolean
  noPadding?: boolean
  size?: ButtonSize
  startIcon?: ReactNode
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    customStyles = false,
    endIcon,
    fullWidth = false,
    noPadding = false,
    size = 'medium',
    startIcon,
    variant = 'primary',
    ...rest
  } = props

  const classNames = clsx(
    s.button,
    !customStyles && s[variant],
    !customStyles && s[size],
    fullWidth && s.fullWidth,
    noPadding && s.noPadding,
    className
  )

  return (
    <Component className={classNames} {...rest}>
      {startIcon && <span className={s.startIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={s.endIcon}>{endIcon}</span>}
    </Component>
  )
}
