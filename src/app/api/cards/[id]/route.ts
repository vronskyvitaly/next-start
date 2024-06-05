import { NextRequest, NextResponse } from 'next/server'
import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store'
import { connectToDB } from '@/common/utils/db'
import Card from '@/models/card'

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  noStore()
  try {
    await connectToDB()

    // Receiving a card from the server by id
    const card = await Card.findById(params.id)

    return NextResponse.json(card)
  } catch (error) {
    console.error('Error fetch card:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
