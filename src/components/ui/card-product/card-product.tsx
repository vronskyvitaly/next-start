'use client'
import s from './card-product.module.scss'
import React, { useState } from 'react'
import { DefaultImg } from '../default-img'
import { Button } from '../button'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { isBasketStatus, setBasketSelector } from '@/lib/features/basket-slice'

type Props = {
  children?: React.ReactNode
  id: string
  price?: number
  discount?: number
  title?: string
  basket: boolean
}
export const CardProduct = ({
  children,
  id,
  discount = 6000,
  price = 3400,
  title = 'Nike',
  basket
}: Props) => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(setBasketSelector)
  const [cardIsBasket, setCardIsBasket] = useState<boolean>(basket)

  const changeBasketStatus = (id: string, status: boolean) => {
    // Возвращаю новый массив с объновленными данными
    const newCardsData = cards.map(el =>
      el._id === id ? { ...el, basket: !status } : el
    )
    // Изменение статуса свойства basket на противоположное!
    dispatch(isBasketStatus({ id, status: !status }))

    // Преобразование массив в формат JSON
    const cardsStringify = JSON.stringify(newCardsData)

    // Сохраненяю данные в localStorage
    localStorage.setItem('cards', cardsStringify)
  }

  const changeButtonIsBasketStatus = () => {
    setCardIsBasket(prevState => !prevState)
  }

  return (
    <div className={s.root}>
      <Link className={s.actionWrapper} href={`/card/${id}`}>
        <DefaultImg />
        <span className={s.cardBlockPrice}>
          <p className={s.price}>{price}</p>
          <span className={s.discount}>{discount + price}</span>
        </span>
        <p className={s.title}>{title}</p>
      </Link>

      <Button
        title={cardIsBasket ? 'B корзине' : 'В корзину'}
        bg={cardIsBasket ? 'green' : 'black'}
        onClick={() => {
          changeBasketStatus(id, basket)
          changeButtonIsBasketStatus()
        }}
      />
      {children}
    </div>
  )
}
