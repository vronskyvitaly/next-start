import { NextRequest, NextResponse } from 'next/server'
import Users from '@/models/user'
import { connectToDB } from '@/utils/db'
import Tasks from '@/models/tasks'

/**
 * @info Retrieving all tasks from the database
 */
export const GET = async (request: NextRequest) => {
  try {
    // Connect to the database
    await connectToDB()

    // Find user tasks by ID
    const tasks = await Tasks.find()

    // Return all tasks for the user
    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Error getting user tasks:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export const POST = async (request: NextRequest) => {
  await connectToDB()

  try {
    const { title, id } = await request.json()
    const user = await Users.findById(id)

    if (!user) {
      return NextResponse.json({
        message: 'User not found',
        resultCode: 1,
        data: {}
      })
    }

    const newTask = new Tasks({
      title,
      author: id,
      isDone: false
    })

    // Сохранение новой задачи
    await newTask.save()

    user.tasks.push(newTask)
    await user.save()

    return new NextResponse('Tasks added successfully', { status: 201 })
  } catch (error) {
    console.error('Error adding task:', error)
    return new NextResponse('Internal Server Error', { status: 501 })
  }
}
