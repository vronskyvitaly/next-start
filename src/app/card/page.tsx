import { CardSection } from '@/components/sections/card-section/card-section'
import { fetchCards } from '@/components/sections/cards-section/actions'

export default async function Page() {
  const cards = await fetchCards()
  return (
    <article>
      <CardSection cards={cards} />
    </article>
  )
}
