'use client'

import s from './cards.section.module.scss'
import { Section, CardProduct } from '@componentsUI/*'
import React, { CSSProperties } from 'react'
import { setBasketCardsSelector } from '@/lib/features/basket-slice'
import { useAppSelector } from '@common/hooks'

type Props = {
  style?: CSSProperties
}

export function CardsSection({ style }: Props) {
  const cards = useAppSelector(setBasketCardsSelector)

  return (
    <Section className={s.root} style={style}>
      <div className={s.container}>
        <div className={s.flex}>
          {cards.map(c => {
            return (
              <CardProduct
                id={c._id}
                title={c.title}
                key={c._id}
                discount={c.discount}
                price={c.price}
                cardInTheBasket={c.basket}
                isFavorites={c.isFavorites}
              ></CardProduct>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
