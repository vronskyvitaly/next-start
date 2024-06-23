'use client'

import { useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { saveCards, setCardsStateSelector } from '@/lib/features/basket-slice'
import { useEffect } from 'react'
import { Card } from '@/app/api/cards/type'
import { useLocalStorage } from '@uidotdev/usehooks'

type Props = {
  cards: Card[]
}

export const CardSection = ({ cards }: Props) => {
  const paramsKey = useSearchParams().get('key')
  const cardsRedux = useAppSelector(setCardsStateSelector)
  const dispatch = useAppDispatch()
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)

  useEffect(() => {
    if (drawing !== null) {
      dispatch(saveCards(drawing))
    } else {
      dispatch(saveCards(cardsRedux))
    }
  }, [])

  const renderCard = () => {
    const findCard = cards.find(el => el._id === paramsKey)
    return findCard ? <h1>{findCard.title}</h1> : <h1>Card not found</h1>
  }

  return <section>{renderCard()}</section>
}
