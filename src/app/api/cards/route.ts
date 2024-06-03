import { NextRequest, NextResponse } from 'next/server'
import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store'
import { connectToDB } from '@/common/utils/db'
import Cards from '@/models/card'

export const GET = async (request: NextRequest) => {
  noStore()
  try {
    await connectToDB()

    // Getting all cards from a database
    const cards = await Cards.find()

    return NextResponse.json(cards)
  } catch (error) {
    console.error('Error fetch cards:', error)
    return NextResponse.json({ error: 'Error fetch cards' }, { status: 503 })
  }
}
