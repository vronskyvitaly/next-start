import { NextRequest, NextResponse } from 'next/server'

type Card = {
  id: string
  title: string
  price: number
  discount: number
  hrefIng: string | null
}

const generateRandomCard = (): Card => {
  const titles = ['Nike', 'Reebok', 'PUMA', 'STREETBEAT', 'adidas'] // Add more titles if needed
  const randomTitle = titles[Math.floor(Math.random() * titles.length)]

  const price = Math.floor(Math.random() * 10000) + 1000 // Random price between 1000 and 11000
  const discount = Math.floor(Math.random() * price) // Random discount between 0 and price

  return {
    id: crypto.randomUUID(),
    title: randomTitle,
    price: price,
    discount: discount,
    hrefIng: null
  }
}

const cards: Card[] = Array.from({ length: 100 }, () => generateRandomCard())

/**
 * @info Retrieving all cards from the default data
 */
export const GET = async (request: NextRequest) => {
  try {
    return NextResponse.json(cards)
  } catch (error) {
    console.error('Error getting cards:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
