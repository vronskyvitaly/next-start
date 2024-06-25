import s from './page.module.scss'
import { Header, Typography } from '@componentsUI/*'
import { fetchCards } from '@app/(pages)/(home)/(sections)/(cards-section)/actions'
import { TypographyVariant } from '@enum/*'

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
