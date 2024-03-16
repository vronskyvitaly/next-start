'use client'
import s from './input.module.scss'
import { ComponentPropsWithRef, forwardRef, JSX } from 'react'

type Props = {
  errorMassage?: string
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, type = 'text' || 'password', errorMassage }, ref) => {
    return (
      <div className={s.root}>
        <input type={type} ref={ref} placeholder={placeholder} />
        <span className={s.error}>{errorMassage ?? ' '}</span>
      </div>
    )
  }
)
Input.displayName = 'Input'
