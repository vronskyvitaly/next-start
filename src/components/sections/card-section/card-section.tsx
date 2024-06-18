'use client'

import { useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { fetchCards, setBasketCardsSelector } from '@/lib/features/basket-slice'
import { useEffect } from 'react'
import { Card } from '@/app/api/cards/type'
import { useLocalStorage } from '@uidotdev/usehooks'

type Props = {
  cards: Card[]
}

export const CardSection = ({ cards }: Props) => {
  const params = useSearchParams()
  const paramsKey = params.get('key')
  const cardsRedux = useAppSelector(setBasketCardsSelector)
  const dispatch = useAppDispatch()
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)

  useEffect(() => {
    if (drawing !== null) {
      dispatch(fetchCards(drawing))
    } else {
      dispatch(fetchCards(cardsRedux))
    }
  }, [])

  const renderCard = () => {
    const findCard = cards.find(el => el._id === paramsKey)
    return findCard ? <h1>{findCard.title}</h1> : <h1>Card not found</h1>
  }

  return <section>{renderCard()}</section>
}
