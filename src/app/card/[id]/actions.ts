/**
 * Receiving a card from the server by id
 */
export async function fetchCard(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/cards/${id}`, {
    method: 'GET'
  })
  return await res.json()
}
