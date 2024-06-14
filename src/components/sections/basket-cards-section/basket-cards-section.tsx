'use client'
import s from './basket-cards-section.module.scss'
import { BasketCardsBlock } from '@components/sections/basket-cards-section/basket-cards-block'
import { CardPrice } from '@components/sections/basket-cards-section/card-price'
export const BasketCardsSection = () => {
  return (
    <section className={s.root}>
      <div className={s.flexSection}>
        <BasketCardsBlock />
        <CardPrice />
      </div>
    </section>
  )
}
