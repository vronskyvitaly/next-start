import { fetchCard } from './actions'
import { Card } from '@/app/api/cards/type'
export const dynamic = 'force-dynamic'
// export const dynamic = 'force-static'

export default async function Page({ params }: { params: { id: string } }) {
  const card: Card = await fetchCard(params.id)
  console.log(card)

  return (
    <article>
      <h1>{card.title}</h1>
    </article>
  )
}
