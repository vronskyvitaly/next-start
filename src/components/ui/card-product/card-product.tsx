'use client'
import s from './card-product.module.scss'
import React, { useState } from 'react'
import { DefaultImg } from '../default-img'
import { Button } from '../button'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  id?: string
  price?: number
  discount?: number
  title?: string
}
export const CardProduct = ({
  children,
  id,
  discount = 6000,
  price = 3400,
  title = 'Nike'
}: Props) => {
  const [buttonTitle, setButtonTitle] = useState<'В корзине' | 'В корзину'>(
    'В корзину'
  )
  const [buttonColor, setButtonColor] = useState<'green' | 'black'>('black')

  const changeButtonTitle = () => {
    setButtonTitle(prevState =>
      prevState === 'В корзину' ? 'В корзине' : 'В корзину'
    )
    setButtonColor(prevState => (prevState === 'black' ? 'green' : 'black'))
  }

  return (
    <div className={s.root}>
      <Link target={'_blank'} className={s.actionWrapper} href={`/card/${id}`}>
        <DefaultImg />
        <span className={s.cardBlockPrice}>
          <p className={s.price}>{price}</p>
          <span className={s.discount}>{discount + price}</span>
        </span>
        <p className={s.title}>{title}</p>
      </Link>

      <Button
        title={buttonTitle}
        bg={buttonColor}
        onClick={() => changeButtonTitle()}
      />
      {children}
    </div>
  )
}
