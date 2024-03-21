'use client'
import s from './input.module.scss'
import { ComponentPropsWithRef, forwardRef } from 'react'

type Props = {
  errorMassage?: string
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      placeholder,
      type = 'text' || 'password' || ('search' as const),
      errorMassage,
      style
    },
    ref
  ) => {
    return (
      <div className={s.root} style={style}>
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          className={type === 'search' ? s.search : ''}
        />
        <span className={s.error}>{errorMassage ?? ' '}</span>
      </div>
    )
  }
)
Input.displayName = 'Input'
