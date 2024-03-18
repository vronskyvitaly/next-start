'use client'
import { CSSProperties } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}
export const Section = ({ style, children, className }: Props) => {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  )
}
