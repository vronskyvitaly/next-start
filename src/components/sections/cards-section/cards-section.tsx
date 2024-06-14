'use client'

import s from './cards.section.module.scss'
import { Section } from '@/components'
import React, { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { setBasketSelector } from '@/lib/features/basket-slice'
import { CardProduct } from '@components/sections/cards-section/card-product'

type Props = {
  style?: CSSProperties
}

export function CardsSection({ style }: Props) {
  const cards = useSelector(setBasketSelector)

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
                basket={c.basket}
              ></CardProduct>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
