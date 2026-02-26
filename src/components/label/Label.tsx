import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './label.module.scss'

type Props = {
  disabled?: boolean
  label?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label = ({ children, className, disabled, label, ...rest }: Props) => {
  const classNames = {
    label: clsx(s.label, className, disabled && s.disabled),
  }

  return (
    <LabelRadixUI.Root {...rest}>
      {label && <div className={classNames.label}>{label}</div>}
      {children}
    </LabelRadixUI.Root>
  )
}
