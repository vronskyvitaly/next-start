import s from './page.module.scss'
import { Typography } from '@componentsUI/*'
import { TypographyVariant } from '@enum/enums'
import { BasketCardsSection } from '@components/sections/basket-cards-section'

export const dynamic = 'force-dynamic'

export default function BasketPage() {
  return (
    <article className={s.root}>
      <div className={s.container}>
        <Typography variant={TypographyVariant.H3} as={'h3'}>
          Корзина
        </Typography>
        <BasketCardsSection />
      </div>
    </article>
  )
}
