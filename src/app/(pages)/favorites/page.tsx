import s from './page.module.scss'
import { Header, Typography } from '@componentsUI/*'
import { TypographyVariant } from '@enum/*'
import { fetchCards } from '@app/(pages)/(home)/(sections)/(cards-section)/actions'
import { FavoritesCardsSection } from './(sections)'

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
      <FavoritesCardsSection />
    </article>
  )
}
