'use client'
import s from './button.module.scss'
import cn from 'classnames'

type Props = {
  title: string
  disabled?: boolean
  onClick?: () => void
  widthMax?: boolean
  bg?: 'green' | 'black'
}
export const Button = ({
  title,
  disabled = false,
  onClick,
  widthMax = false,
  bg = 'green'
}: Props) => {
  const classNames = {
    root: () => {
      switch (bg) {
        case 'green':
          return s.root
        case 'black':
          return cn(s.root, s.bgBlack)
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
      {title}
    </button>
  )
}
