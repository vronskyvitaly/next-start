'use client'
import s from './card-product.module.scss'
import React, { useState } from 'react'
import { DefaultImg } from '../../../ui/default-img'
import { Button } from '../../../ui/button'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@common/hooks'
import {
  fetchCards,
  isBasketStatus,
  setBasketSelector
} from '@/lib/features/basket-slice'
import { useLocalStorage } from '@uidotdev/usehooks'

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
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)

  const changeBasketStatus = (id: string, status: boolean) => {
    // Возвращаю новый массив с объновленными данными
    const newCardsData = drawing.map(el =>
      el._id === id ? { ...el, basket: !status } : el
    )

    let newCardsData1

    if (status) {
      newCardsData1 = newCardsData.map(el =>
        el._id === id ? { ...el, counter: 0 } : el
      )
    } else {
      newCardsData1 = newCardsData.map(el =>
        el._id === id ? { ...el, counter: 1 } : el
      )
    }

    // Изменение статуса свойства basket в Redux на противоположное!
    dispatch(isBasketStatus({ id, status: !status }))

    // if (status) {
    //   dispatch(fetchCards(newCardsData))
    //   newCardsData.map(c => (c._id == id ? { ...c, counter: 1 } : c))
    // } else {
    //   dispatch(fetchCards(newCardsData))
    //   newCardsData.map(c => (c._id == id ? { ...c, counter: 2 } : c))
    // }

    saveDrawing(newCardsData1)
  }

  const changeButtonIsBasketStatus = () => {
    setCardIsBasket(prevState => !prevState)
  }

  return (
    <div className={s.root}>
      <Link
        target={'_blank'}
        href={`/card?key=${id}`}
        className={s.actionWrapper}
      >
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
