import { Card } from '@app/api/cards/type'
import s from './basket-card.module.scss'
import { Typography } from '@componentsUI/typography'
import { TypographyVariant } from '@common/enums'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete'
import { Button } from '@componentsUI/button'
import { useAppDispatch, useAppSelector } from '@common/hooks'
import {
  fetchCards,
  newTotalCardDiscount,
  newTotalCardPrise,
  setBasketSelector
} from '@/lib/features/basket-slice'
import { fetchCard } from '@app/(pages)/card/actions'

type Props = {
  children: React.ReactNode
  key: string
  card: Card
  checkboxPageState: boolean
  removalFromCart: (id: string) => void
}

export const BasketCard = ({ card, removalFromCart, key, children }: Props) => {
  const cards = useAppSelector(setBasketSelector)
  const [counter, setCounter] = useState(1)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   const cardsL = localStorage.getItem('cards')
  //   dispatch(fetchCards(JSON.parse(cardsL as string)))
  // }, [])

  const handlerBasketSum = (id: string) => cards.find(el => el._id === id)
  const setBasketCount = (id: string, counter: number) => {
    const newArray = cards.map(c =>
      c._id === id ? { ...c, count: counter } : c
    )
    dispatch(fetchCards(newArray))
    localStorage.setItem('cards', JSON.stringify(newArray))
    return newArray
  }

  const incCardProduct = (id: string) => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1
      const newBasketSum = handlerBasketSum(id)
      if (newBasketSum) {
        const newTotalPrise = newBasketSum.price * newCounter
        const newTotalDiscount = newBasketSum.discount * newCounter
        const newCards = setBasketCount(id, prevCounter + 1)
        localStorage.setItem('cards', JSON.stringify(newCards))

        dispatch(
          newTotalCardPrise({
            id: id,
            newCardTotalPrise: newTotalPrise
            // counter: prevCounter + 1
          })
        )
        dispatch(
          newTotalCardDiscount({
            id: id,
            newTotalCardDiscount: newTotalDiscount
          })
        )
      }
      return newCounter
    })
  }

  const decCardProduct = (id: string) => {
    setCounter(prevCounter => {
      if (prevCounter > 1) {
        const newCounter = prevCounter - 1
        const newBasketSum = handlerBasketSum(id)
        if (newBasketSum) {
          const newTotalPrise = newBasketSum.price * newCounter
          const newTotalDiscount = newBasketSum.discount * newCounter
          const newCards = setBasketCount(id, prevCounter - 1)

          localStorage.setItem('cards', JSON.stringify(newCards))

          dispatch(
            newTotalCardPrise({
              id: id,
              newCardTotalPrise: newTotalPrise
              // counter: prevCounter - 1
            })
          )
          dispatch(
            newTotalCardDiscount({
              id: id,
              newTotalCardDiscount: newTotalDiscount
            })
          )
        }
        return newCounter
      }
      return prevCounter
    })
  }

  const totalPrice = card.price * counter
  const totalDiscountedPrice = card.discount
    ? (card.price + card.discount) * counter
    : totalPrice

  const getCount = (id: string): number => {
    const card = cards.find(c => c._id === id)
    return card ? (card.counter === 1 ? counter : card.counter) : 1
  }

  console.log(cards)

  return (
    <div key={key} className={s.root}>
      <div className={s.wrapper}>
        <div className={s.deleteCardBtnWrapper}>
          <div
            className={s.deleteCardBtn}
            onClick={() => removalFromCart(card._id)}
          >
            <AiFillDelete />
          </div>
        </div>
        <div className={s.flexImgAndTitle}>
          <div className={s.defaultImgCard}></div>
          <h2>{card.title}</h2>
        </div>
        <div className={s.priceAndDiscount}>
          <Typography variant={TypographyVariant.PriseV2} as={'h4'}>
            {totalPrice}
          </Typography>
          <h5 className={s.discount}>{totalDiscountedPrice}</h5>
        </div>
        <div className={s.counterBlock}>
          <Button
            title={'-'}
            bg={'counter'}
            disabled={counter <= 1}
            onClick={() => decCardProduct(card._id)}
          />
          <p>{getCount(card._id)}</p>
          <Button
            title={'+'}
            bg={'counter'}
            onClick={() => incCardProduct(card._id)}
          />
        </div>
      </div>
      {children}
    </div>
  )
}
