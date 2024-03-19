import s from './page.module.scss'
import { BanerSection } from '@/components/sections/baner-section'
import { CardsSection } from '@/components/sections/cards-section'

export default async function HomePage() {
  return (
    <article className={s.root}>
      <BanerSection />
      <CardsSection />
    </article>
  )
}
