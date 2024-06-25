import { Card } from '@app/api/cards/type'
import { fetchCards } from '@app/(pages)/(home)/(sections)/(cards-section)/actions'
import { Header } from '@componentsUI/*'
import { BannerSection, CardsSection } from './(sections)'

export default async function HomePage() {
  const cards: Card[] = await fetchCards()
  return (
    <article>
      <Header cards={cards} />
      <BannerSection />
      <CardsSection />
    </article>
  )
}
