'use client'
import s from './button.module.scss'
import cn from 'classnames'

type Props = {
  title: string
  disabled?: boolean
  onClick?: () => void
  widthMax?: boolean
  bg?: 'green' | 'black' | 'blue' | 'white' | 'counter'
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
        case 'blue':
          return cn(s.root, s.bgBlue)
        case 'white':
          return cn(s.root, s.bgWhite)
        case 'counter':
          return cn(s.root, s.bgCounter)
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
      {bg === 'counter' ? <p className={s.title}>{title}</p> : title}
    </button>
  )
}
