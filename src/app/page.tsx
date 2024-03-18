import s from './page.module.scss'
import { CardsSection } from '@components/sections/cards-section'

export default async function HomePage() {
  return (
    <article className={s.root}>
      <CardsSection />
    </article>
  )
}
