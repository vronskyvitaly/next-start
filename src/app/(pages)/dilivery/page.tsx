import s from './page.module.scss'
import { Header } from '@componentsUI/header'
import { fetchCards } from '@components/sections/cards-section/actions'
import { TypographyVariant } from '@enum/*'
import { Typography } from '@componentsUI/typography'

export default async function Page() {
  const cards = await fetchCards()
  return (
    <article className={s.root}>
      <Header cards={cards} />
      <div className={s.container}>
        <div className={s.flex}>
          <Typography variant={TypographyVariant.H3} as={'h3'}>
            Условия доставки
          </Typography>
        </div>
      </div>
    </article>
  )
}
