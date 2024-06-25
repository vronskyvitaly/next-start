'use client'

import s from './cards.section.module.scss'
import { Section, CardProduct } from '@componentsUI/*'
import React, { CSSProperties } from 'react'
import { setCardsStateSelector } from '@/lib/features/basket-slice'
import { useAppSelector } from '@common/hooks'

type Props = {
  style?: CSSProperties
}

export function CardsSection({ style }: Props) {
  const cards = useAppSelector(setCardsStateSelector)

  return (
    <Section className={s.root} style={style}>
      <div className={s.container}>
        <div className={s.flex}>
          {cards.map(c => {
            return (
              <CardProduct
                {...c}
                key={c._id}
                id={c._id}
                cardInTheBasket={c.basket}
              ></CardProduct>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
