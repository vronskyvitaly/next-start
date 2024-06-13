'use server'

import { fetchCard } from './actions'
import { Card } from '@/app/api/cards/type'

export default async function CardPage({
  params
}: {
  params: { cardId: string }
}) {
  // const card: Card = await fetchCard(params.cardId)
  // console.log(card)

  return (
    <article>
      <h1>{params.cardId}</h1>
    </article>
  )
}
