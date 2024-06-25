'use client'
import s from './button.module.scss'
import cn from 'classnames'
import { ReactNode } from 'react'

type Props = {
  title?: string
  disabled?: boolean
  onClick?: () => void
  widthMax?: boolean
  bg?:
    | 'green'
    | 'greenV2'
    | 'black'
    | 'blue'
    | 'white'
    | 'inBasket'
    | 'inBasketAndCounter'
  children?: ReactNode
}
export const Button = ({
  title,
  disabled = false,
  onClick,
  widthMax = false,
  bg = 'green',
  children
}: Props) => {
  const classNames = {
    root: () => {
      switch (bg) {
        case 'green':
          return s.root
        case 'black':
          return cn(s.root, s.bgBlack)
        case 'blue':
          return cn(s.root, s.bgBlue)
        case 'greenV2':
          return cn(s.bgGreenV2)
        case 'white':
          return cn(s.root, s.bgWhite)
        case 'inBasket':
          return children ? cn(s.children) : cn(s.root, s.inBasket)
        case 'inBasketAndCounter':
          return cn(s.root, s.inBasketAndCounter)
        default:
          return s.root
      }
    }
  }

  return (
    <button
      onClick={() => onClick?.()}
      style={widthMax ? { width: '100%' } : { width: '' }}
      disabled={disabled}
      className={classNames.root()}
    >
      {bg === 'inBasket' || bg === 'inBasketAndCounter' || bg === 'greenV2' ? (
        <div className={children ? s.child : s.title}>{children || title}</div>
      ) : (
        title
      )}
    </button>
  )
}
