'use client'
import s from './cards.section.module.scss'
import { Button, CardProduct, DefaultImg, Section } from '@/components'
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
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
          <CardProduct>
            <DefaultImg />
            <Button title={'В корзину'} bg={'black'} />
          </CardProduct>
        </div>
      </div>
    </Section>
  )
}
