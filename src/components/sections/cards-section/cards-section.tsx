'use client'
import s from './cards.section.module.scss'
import { Button, CardProduct, Section } from '@/components'
import React, { CSSProperties } from 'react'

type Props = {
  style?: CSSProperties
}
export const CardsSection = ({ style }: Props) => {
  return (
    <Section className={s.root} style={style}>
      <div className={s.container}>
        <div className={s.flex}>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
        </div>
      </div>
    </Section>
  )
}
