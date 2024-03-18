'use client'
import s from './card-product.module.scss'
import React from 'react'

type Props = {
  children: React.ReactNode
}
export const CardProduct = ({ children }: Props) => {
  return <div className={s.root}>{children}</div>
}
