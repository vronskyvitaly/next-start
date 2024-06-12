'use client'

import s from './basket-cards.module.scss'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { deleteCard, setBasketSelector } from '@/lib/features/basket-slice'
import { useEffect, useState } from 'react'
import { Card } from '@/app/api/cards/type'
import { BasketCard } from '@/components/sections/basket-cards-section/basket-card'

export const BasketCards = () => {
  const dispatch = useAppDispatch()

  // Получаю карточки добавленные в корзину из Redux
  const cards = useAppSelector(setBasketSelector)
  const [localCards, setLocalCards] = useState<Card[]>(cards)
  const [checkboxPageState, setCheckboxPageState] = useState(true)

  // Загружаю данные из localStorage при монтировании компонента
  useEffect(() => {
    const savedCards = localStorage.getItem('cards')
    if (savedCards) {
      setLocalCards(JSON.parse(savedCards))
    }
  }, [])

  // Сохраняю данные в localStorage при изменении состояния корзины
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  // Удаляем карточку из корзины по нажатию на default icon
  function removalFromCart(id: string) {
    // Удаляем из локального state
    setLocalCards(prevState => prevState.filter(c => c._id !== id))

    // Удаляем из redux
    dispatch(deleteCard({ id }))

    // Удаляю из localstorage
    const cardLocalStorage = localStorage.getItem('cards')
    // Изменяю состояние карточки в localstorage
    const parsCardLocalStorage = JSON.parse(cardLocalStorage as string).map(
      (c: Card) => (c._id === id ? { ...c, basket: false } : c)
    )
    const stringifyCardLocalStorage = JSON.stringify(parsCardLocalStorage)
    localStorage.removeItem('cards')
    localStorage.setItem('cards', stringifyCardLocalStorage)
  }

  const renderBasketCards = () => {
    // Используем данные из localStorage, если они есть, иначе данные из Redux
    const cardsToRender = localCards.length > 0 ? localCards : cards

    // Отфильтровываем карточки, которые находятся в корзине
    return cardsToRender.length > 0 ? (
      cardsToRender
        .filter(el => el.basket)
        .map(card => (
          <div key={card._id}>
            <BasketCard
              card={card}
              checkboxPageState={checkboxPageState}
              removalFromCart={removalFromCart}
            />
            <p className={s.link}>Поделиться</p>
          </div>
        ))
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
