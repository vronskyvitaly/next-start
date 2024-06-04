import { BanerSection } from '@/components/sections/baner-section'
import { CardsSection } from '@/components/sections/cards-section'
import { Card } from '@/app/api/cards/type'
import { fetchCards } from '@/components/sections/cards-section/actions'

export default async function HomePage() {
  const cards: Card[] = await fetchCards()
  return (
    <article>
      <BanerSection />
      <CardsSection cards={cards} />
    </article>
  )
}
