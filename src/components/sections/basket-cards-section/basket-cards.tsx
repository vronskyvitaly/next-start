'use client'

import s from './basket-cards.module.scss'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  deleteCard,
  fetchCards,
  setBasketSelector
} from '@/lib/features/basket-slice'
import { useEffect, useState } from 'react'
import { Card } from '@/app/api/cards/type'
import { BasketCard } from '@/components/sections/basket-cards-section/basket-card'

export const BasketCards = () => {
  const dispatch = useAppDispatch()

  // Получаю карточки добавленные в корзину из Redux
  const cards = useAppSelector(setBasketSelector)
  const [localCards, setLocalCards] = useState<Card[]>(cards)
  const [checkboxPageState, setCheckboxPageState] = useState(true)

  useEffect(() => {
    // Преобразование объекта cards в строку JSON
    const cardsStringifyJSON = JSON.stringify(cards)

    // Преобразование объекта cards в массив
    const cardsParsJSON = JSON.parse(cardsStringifyJSON)

    // Проверяю есть ли в localstorage объект cards если нет вернется null
    const isCardsLocaleStorage = localStorage.getItem('cards')

    // сохраняю в redux состояние карточки из localeStorage если есть или с server если нет
    if (isCardsLocaleStorage !== null) {
      setLocalCards(JSON.parse(isCardsLocaleStorage))
      dispatch(fetchCards(JSON.parse(isCardsLocaleStorage)))
    } else {
      dispatch(fetchCards(cardsParsJSON))
    }
  }, [])

  // Remove a [card] from the basket by clicking on the default icon
  function removalFromCart(id: string) {
    // Удаляем из локального state
    setLocalCards(prevState => prevState.filter(c => c._id !== id))

    // Удаляем из redux
    dispatch(deleteCard({ id }))

    // Получаю карточки из localStorage
    const cardLocalStorage = localStorage.getItem('cards')

    // Изменяю состояние карточки в localstorage
    const parsCardLocalStorage = JSON.parse(cardLocalStorage as string).map(
      (c: Card) => (c._id === id ? { ...c, basket: false } : c)
    )
    const stringifyCardLocalStorage = JSON.stringify(parsCardLocalStorage)

    // Очищаю key в localStorage
    localStorage.removeItem('cards')

    // Добавляю обновленные карточки
    localStorage.setItem('cards', stringifyCardLocalStorage)
  }

  const renderBasketCards = () => {
    // Объявляю переменную каторая содержит количество добавленных в корзину карточек
    const isBasketArrayCards = cards.filter(c => c.basket).length

    // Отфильтровываем карточки, которые находятся в корзине
    return isBasketArrayCards > 0 ? (
      localCards
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
