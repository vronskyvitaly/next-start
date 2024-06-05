import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/user'
import { unstable_noStore as noStore } from 'next/cache'
import { connectToDB } from '@/common/utils/db'

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  noStore()
  try {
    await connectToDB()

    if (!params.id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Получение юзера из базы данных
    const user = await User.findOne({ _id: params.id })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { error: 'Internal Server Errorrr' },
      { status: 500 }
    )
  }
}

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  noStore()
  try {
    await connectToDB()
    console.log(params.id)

    if (!params.id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Удаление пользователя из базы данных
    const user = await User.findOneAndDelete({ _id: params.id })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
