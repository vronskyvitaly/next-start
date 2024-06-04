import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import { CardProduct } from '@/components'
import React from 'react'

export const BasketCardsSection = () => {
  const cards = useSelector((state: RootState) => state.cards.cards)

  // Фильтруем карты по условию и создаем массив элементов JSX
  const basketCards = cards
    .filter(el => el.basket) // Фильтруем только карты, которые находятся в корзине
    .map(c => {
      return (
        <CardProduct
          cards={cards}
          id={c._id}
          title={c.title}
          key={c._id}
          discount={c.discount}
          price={c.price}
          favorites={c.favorites}
          basket={c.basket}
        ></CardProduct>
      )
    })

  return <>{basketCards}</> // Создаем массив элементов JSX с заголовками выбранных карт
}
