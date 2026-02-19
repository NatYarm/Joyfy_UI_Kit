import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdownMenu.module.scss'

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadixDropdownMenu.Item className={clsx(s.dropdownMenuItem, className)} ref={ref} {...props} />
  )
})

DropdownMenuItem.displayName = 'DropdownMenuItem'
