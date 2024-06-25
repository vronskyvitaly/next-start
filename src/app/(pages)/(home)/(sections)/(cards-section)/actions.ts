/**
 * Retrieving all cards from the server
 */
export async function fetchCards() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/cards`, {
    method: 'GET',
    cache: 'no-store'
  })
  return await res.json()
}
