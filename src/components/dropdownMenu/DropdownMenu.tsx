import { ComponentPropsWithoutRef, ComponentRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdownMenu.module.scss'

type DropdownMenuProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  contentClassName?: string
  sideOffset?: number
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdownMenu.Root>

export const DropdownMenu = forwardRef<
  ComponentRef<typeof RadixDropdownMenu.Trigger>,
  DropdownMenuProps
>(({ align = 'end', children, contentClassName, sideOffset = 8, trigger, ...rest }, ref) => {
  return (
    <RadixDropdownMenu.Root {...rest}>
      <RadixDropdownMenu.Trigger
        asChild={typeof trigger !== 'string'}
        className={s.trigger}
        ref={ref}
      >
        {trigger}
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Content
        align={align}
        className={clsx(s.content, contentClassName)}
        sideOffset={sideOffset}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Root>
  )
})

export const DropdownMenuArrow = () => {
  return <RadixDropdownMenu.Arrow className={s.arrow} />
}
