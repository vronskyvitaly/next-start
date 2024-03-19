'use client'
import s from './card-product.module.scss'
import React from 'react'
import { DefaultImg } from '../default-img'

type Props = {
  children?: React.ReactNode
  price?: number
  discount?: number
  title?: string
}
export const CardProduct = ({
  children,
  discount = 6000,
  price = 3400,
  title = 'Nike'
}: Props) => {
  return (
    <div className={s.root}>
      <DefaultImg />
      <span className={s.cardBlockPrice}>
        <p className={s.price}>{price}</p>
        <span className={s.discount}>{discount}</span>
      </span>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  )
}
