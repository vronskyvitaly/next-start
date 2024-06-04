'use client'
import s from './card-product.module.scss'
import React, { useState } from 'react'
import { DefaultImg } from '../default-img'
import { Button } from '../button'
import Link from 'next/link'
import { useAppDispatch } from '@/common/hooks'
import { basketSlice } from '@/lib/features/basket-slice'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

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
  const cardsSl = useSelector((state: RootState) => state.basket.basket)
  const [buttonTitle, setButtonTitle] = useState<'В корзине' | 'В корзину'>(
    'В корзину'
  )
  const [buttonColor, setButtonColor] = useState<'green' | 'black'>('black')

  const changeBasketStatus = (id: string, status: boolean) => {
    // Очистка локального хранилища
    localStorage.removeItem('cards')

    // Изменение статуса свойства basket на противоположное!
    dispatch(basketSlice.actions.isBasketStatus({ id, status: !status }))

    // Возвращаю новый массив с объновленными данными
    const newCardsData = cardsSl.map(el =>
      el._id === id ? { ...el, basket: !status } : el
    )

    // Преобразование массив в формат JSON
    const newCardsDataJSON = JSON.stringify(newCardsData)

    // Сохраненяю данные в localStorage
    localStorage.setItem('cards', newCardsDataJSON)
  }

  const changeButtonTitle = () => {
    setButtonTitle(prevState =>
      prevState === 'В корзину' ? 'В корзине' : 'В корзину'
    )
    setButtonColor(prevState => (prevState === 'black' ? 'green' : 'black'))
  }

  // todo: ❌После проверки удалить
  // console.log(cardsSl)

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
        onClick={() => {
          changeBasketStatus(id, basket)
          changeButtonTitle()
        }}
      />
      {children}
    </div>
  )
}
