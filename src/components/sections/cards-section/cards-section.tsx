'use client'
import s from './cards.section.module.scss'
import { Button, CardProduct, DefaultImg } from '@/components'
import { ComponentPropsWithRef, forwardRef } from 'react'
import cn from 'classnames'

type Props = {} & ComponentPropsWithRef<'section'>
export const CardsSection = forwardRef<HTMLElement, Props>(
  ({ style, className }, ref) => {
    return (
      <section className={cn(s.root, className)} style={style} ref={ref}>
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
      </section>
    )
  }
)

CardsSection.displayName = 'section'
