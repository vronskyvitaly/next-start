'use client'

import s from './cards.section.module.scss'
import { CardProduct, Section } from '@/components'
import React, { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

type Props = {
  style?: CSSProperties
}

export function CardsSection({ style }: Props) {
  const cards = useSelector((state: RootState) => state.basket.basket)

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
