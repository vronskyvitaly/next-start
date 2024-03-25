import s from './cards.section.module.scss'
import { CardProduct, Section } from '@/components'
import React, { CSSProperties } from 'react'
import { fetchCards } from './actions'
import { Card } from '@/app/api/cards/type'

type Props = {
  style?: CSSProperties
}

export async function CardsSection({ style }: Props) {
  const cards: Card[] = await fetchCards()
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
              ></CardProduct>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
