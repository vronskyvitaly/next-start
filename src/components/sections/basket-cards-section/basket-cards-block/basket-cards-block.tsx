'use client'
import s from './basket-cards-block.module.scss'
import { useAppDispatch, useAppSelector } from '@common/hooks'
import {
  deleteCard,
  fetchCards,
  setBasketCardsSelector
} from '@/lib/features/basket-slice'
import { useEffect } from 'react'
import { Card } from '@app/api/cards/type'
import { BasketCard } from '@components/sections/basket-cards-section/basket-cards-block/basket-card'
import { useLocalStorage } from '@uidotdev/usehooks'

export const BasketCardsBlock = () => {
  const cards = useAppSelector(setBasketCardsSelector)
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // сохраняю в redux состояние карточки из localeStorage если есть или с server если нет
    if (drawing !== null) {
      dispatch(fetchCards(drawing))
    } else {
      dispatch(fetchCards(cards))
    }
  }, [])

  // Remove a card from the basket by clicking on the default icon
  function removingCardFromTheBasket(id: string) {
    // Удаляем из локального state
    saveDrawing(prevState => prevState.filter(c => c._id !== id))
    // Удаляем из redux
    dispatch(deleteCard({ id }))
    // Изменяю состояние карточки в localstorage
    const changeStatusCard = drawing.map((c: Card) =>
      c._id === id ? { ...c, basket: false, counter: 0 } : c
    )
    dispatch(fetchCards(changeStatusCard))
    // Добавляю обновленные карточки
    saveDrawing(changeStatusCard)
  }

  const renderBasketCards = () => {
    // Объявляю переменную каторая содержит количество добавленных в корзину карточек
    const isBasketArrayCards = cards.filter(c => c.basket).length

    // Отфильтровываем карточки, которые находятся в корзине
    return isBasketArrayCards > 0 ? (
      drawing
        .filter(el => el.basket)
        .map(card => (
          <div key={card._id}>
            <BasketCard
              card={card}
              removingCardFromTheBasket={removingCardFromTheBasket}
            ></BasketCard>
            <p className={s.link}>Поделиться</p>
          </div>
        ))
    ) : (
      <h3>No cards</h3>
    )
  }

  return <div className={s.basketCardsBlock}>{renderBasketCards()}</div>
}
