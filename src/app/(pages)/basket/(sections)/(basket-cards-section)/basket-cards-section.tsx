'use client'
import s from './basket-cards-section.module.scss'
import { BasketCardsBlock } from './basket-cards-block'
import { CardPrice } from './card-price'

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
