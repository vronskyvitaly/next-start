'use client'
import s from './favorites-cards-sections.module.scss'
import { useAppSelector } from '@common/hooks'
import { setCardsStateSelector } from '@/lib/features/basket-slice'
import { CardProduct } from '@/components'

export function FavoritesCardsSection() {
  const cards = useAppSelector(setCardsStateSelector)

  const renderFavoritesCards = () =>
    cards
      .filter(c => c.isFavorites || c.isModified)
      .map(c => (
        <CardProduct
          {...c}
          key={c._id}
          id={c._id}
          cardInTheBasket={c.basket}
          variants='inBasketAndCounter'
        />
      ))

  return (
    <section className={s.root}>
      <div className={s.container}>
        <div className={s.flex}>{renderFavoritesCards()}</div>
      </div>
    </section>
  )
}
