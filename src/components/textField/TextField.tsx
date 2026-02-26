'use client'

import { ComponentProps, KeyboardEvent, ReactNode, useId, useState } from 'react'

import clsx from 'clsx'
import { FiEye, FiEyeOff, FiSearch } from 'react-icons/fi'

import s from './textField.module.scss'

import { Label } from '../label'

export type TextFieldProps = ComponentProps<'input'> & {
  errorMessage?: string
  label?: ReactNode
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onShowPasswordClick?: () => void
  required?: boolean
  search?: boolean
  startIcon?: ReactNode
}

export const TextField = ({
  className,
  disabled,
  errorMessage,
  label,
  onEnter,
  onKeyDown,
  onShowPasswordClick,
  required,
  search,
  startIcon,
  type = 'text',
  ...rest
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputId = useId()

  if (search) {
    startIcon = <FiSearch />
  }

  const isPassword = type === 'password'
  const inputType = showPassword ? 'text' : type

  const dataIconStart = startIcon ? 'start' : ''
  const dataIconEnd = isPassword ? 'end' : ''
  const dataIcon = dataIconStart + dataIconEnd

  const showError = !!errorMessage && errorMessage.length > 0

  const classNames = {
    endIconButton: s.endIconButton,
    errorText: s.errorText,
    input: clsx(s.input, showError && s.error, className),
    inputContainer: s.inputContainer,
    root: clsx(s.box, className),
    startIcon: s.startIcon,
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }

  const togglePasswordHandler = () => {
    setShowPassword(prev => !prev)
    onShowPasswordClick?.()
  }

  return (
    <div className={classNames.root}>
      {label && (
        <div className={s.labelGroup}>
          <Label disabled={disabled} htmlFor={inputId} label={label} />
          {required && <span className={s.asterisk}>*</span>}
        </div>
      )}
      <div className={classNames.inputContainer}>
        {startIcon && <span className={classNames.startIcon}>{startIcon}</span>}
        <input
          className={classNames.input}
          data-icon={dataIcon}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          type={inputType}
          {...rest}
          id={inputId}
        />

        {isPassword && (
          <button
            className={classNames.endIconButton}
            onClick={togglePasswordHandler}
            tabIndex={-1}
            type={'button'}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
      {showError && <p className={classNames.errorText}>{errorMessage}</p>}
    </div>
  )
}
