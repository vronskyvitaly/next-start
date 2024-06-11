'use client'

import s from './basket-cards.module.scss'
import { useAppSelector } from '@/common/hooks'
import { setBasketSelector } from '@/lib/features/basket-slice'
import { BasketCard } from '@/components/sections/basket-cards-section/basket-card/basket-card'
import { useEffect, useState } from 'react'

export const BasketCards = () => {
  // Получаю карточки добавленные в корзину из Redux
  const cards = useAppSelector(setBasketSelector)
  const [localCards, setLocalCards] = useState([])

  // Считать полный путь страницы

  // Загружаем данные из localStorage при монтировании компонента
  useEffect(() => {
    const savedCards = localStorage.getItem('cards')
    if (savedCards) {
      setLocalCards(JSON.parse(savedCards))
    }
  }, [])

  // Сохраняем данные в localStorage при изменении состояния корзины
  useEffect(() => {
    localStorage.setItem('basketCards', JSON.stringify(cards))
  }, [cards])

  const renderBasketCards = () => {
    // Используем данные из localStorage, если они есть, иначе данные из Redux
    const cardsToRender = localCards.length > 0 ? localCards : cards

    // Отфильтровываем карточки, которые находятся в корзине
    return cardsToRender.length > 0 ? (
      cardsToRender
        .filter(el => el.basket)
        .map(card => {
          return (
            <>
              <BasketCard {...card} key={card._id} />
              <p className={s.link}>Поделиться</p>
            </>
          )
        })
    ) : (
      <h3>No cards</h3>
    )
  }

  return (
    <section className={s.root}>
      <div className={s.flexSection}>
        <div className={s.basketBlock}>{renderBasketCards()}</div>
        <div className={s.infoBlock}></div>
      </div>
    </section>
  )
}
