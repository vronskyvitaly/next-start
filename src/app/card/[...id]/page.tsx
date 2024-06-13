import { fetchCard } from './actions'
import { Card } from '@/app/api/cards/type'

export const dynamic = 'force-static'
export const dynamicParams = false

export default async function CardPage({ params }: { params: { id: string } }) {
  const card: Card = await fetchCard(params.id)
  // console.log(card)

  return (
    <article>
      <h1>{card.title}</h1>
    </article>
  )
}
