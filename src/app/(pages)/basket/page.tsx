import s from './page.module.scss'
import { Typography } from '@/components/ui/typography/typography'
import { TypographyVariant } from '@/common/enums'
import { BasketCards } from '@/components/sections/basket-cards-section'

export default function BasketPage() {
  return (
    <article className={s.root}>
      <div className={s.container}>
        <Typography variant={TypographyVariant.H3} as={'h3'}>
          Корзина
        </Typography>
        <BasketCards />
      </div>
    </article>
  )
}
