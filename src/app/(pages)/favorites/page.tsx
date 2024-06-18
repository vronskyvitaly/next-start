import s from './page.module.scss'
import { Header, Typography } from '@componentsUI/*'
import { TypographyVariant } from '@enum/enums'
import { fetchCards } from '@components/sections/cards-section/actions'

export default async function Page() {
  const cards = await fetchCards()
  return (
    <article className={s.root}>
      <Header cards={cards} />
      <div className={s.container}>
        <Typography variant={TypographyVariant.H3} as={'h3'}>
          Товары и списки
        </Typography>
      </div>
    </article>
  )
}
