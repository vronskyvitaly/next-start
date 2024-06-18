'use client'

import { useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { fetchCards, setBasketCardsSelector } from '@/lib/features/basket-slice'
import { useEffect } from 'react'
import { Card } from '@/app/api/cards/type'

type Props = {
  cards: Card[]
}

export const CardSection = ({ cards }: Props) => {
  const params = useSearchParams()
  const paramsKey = params.get('key')
  const cardsRedux = useAppSelector(setBasketCardsSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const localeStorageCards = localStorage.getItem('cards')
    const isArrayLocalStorageArray = JSON.parse(localeStorageCards as string)
    if (isArrayLocalStorageArray !== null) {
      dispatch(fetchCards(JSON.parse(localeStorageCards as string)))
    } else {
      localStorage.setItem('cards', JSON.stringify(cardsRedux))
      dispatch(fetchCards(cardsRedux))
    }
  }, [])

  function findCard() {
    const card = cards.find(el => el._id === paramsKey)
    if (card) {
      return <h1>{card.title}</h1>
    } else {
      return <h1>Card not found</h1>
    }
  }

  return <section>{findCard()}</section>
}
