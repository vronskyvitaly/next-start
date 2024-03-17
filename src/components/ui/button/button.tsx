'use client'
import s from './button.module.scss'

type Props = {
  title: string
  disabled?: boolean
  onClick?: () => void
  widthMax?: boolean
}
export const Button = ({
  title,
  disabled = false,
  onClick,
  widthMax = false
}: Props) => {
  return (
    <button
      onClick={() => onClick?.()}
      style={widthMax ? { width: '100%' } : { width: '' }}
      disabled={disabled}
      className={s.root}
    >
      {title}
    </button>
  )
}
