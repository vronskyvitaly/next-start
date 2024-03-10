import { NextRequest, NextResponse } from 'next/server'
import Users from '@/models/user'
import { connectToDB } from '@/utils/db'
import bcrypt from 'bcrypt'
import { unstable_noStore as noStore } from 'next/cache'
import { connection } from 'mongoose'

export const GET = async (request: NextRequest) => {
  noStore()
  try {
    await connectToDB()

    // Getting all users from a database
    const users = await Users.find()

    return NextResponse.json(users)
  } catch (error) {
    console.error('Error getting users:', error)
    return NextResponse.json({ error: 'Failed to get users' }, { status: 503 })
  }
}

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json()
  await connectToDB()
  const existingUser = await Users.findOne({ email })

  if (existingUser) {
    return new NextResponse('Email is already in use', { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 5)

  // Creating a user in the database with a unique password
  const newUser = new Users({
    email,
    password: hashedPassword,
    tasks: []
  })

  try {
    await newUser.save()
    return new NextResponse('user is registered', { status: 201 })
  } catch (err: any) {
    return new NextResponse(err, {
      status: 503
    })
  }
}

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB()
    console.log(params.id)

    if (!params.id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Removing a user from the database
    const deletedUser = await Users.findOneAndDelete({ _id: params.id })

    if (!deletedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(deletedUser)
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
