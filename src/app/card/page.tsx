import { CardSection } from '@/components/sections/card-section/card-section'
import { fetchCards } from '@/components/sections/cards-section/actions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Card page',
  description: 'Card page',
  applicationName: 'Shop',
  creator: 'Vronsky Vitaly'
}
export default async function Page() {
  const cards = await fetchCards()
  return (
    <article>
      <CardSection cards={cards} />
    </article>
  )
}
