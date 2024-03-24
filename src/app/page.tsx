import { BanerSection } from '@/components/sections/baner-section'
import { CardsSection } from '@/components/sections/cards-section'

export default async function HomePage() {
  return (
    <article>
      <BanerSection />
      <CardsSection />
    </article>
  )
}
