import { NextRequest, NextResponse } from 'next/server'
import { connectToDB } from '@/utils/db'
import Users from '@/models/user'
import Tasks from '@/models/tasks'
import User from '@/models/user'
import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store'

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // Connect to the database
    await connectToDB()

    // Check if the user ID is provided
    if (!params.id || params.id.trim() === '') {
      return new NextResponse('User ID is required', { status: 400 })
    }

    // Find user tasks by ID
    const tasks = await Tasks.find({ author: params.id })

    // Return all tasks for the user
    return NextResponse.json(tasks)
  } catch (error) {
    console.error('Error getting user tasks:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export const POST = async (request: NextRequest) => {
  const { title, id } = await request.json()
  try {
    // Connect to the database
    await connectToDB()

    // Find existing user by ID
    const existingUser = await Users.findOne({ _id: id })

    if (!existingUser) {
      return new NextResponse('User not found', { status: 404 })
    }

    // Check if title is provided
    if (!title) {
      return new NextResponse('Title is required', { status: 400 })
    }

    // Create a new task
    const newTask = new Tasks({
      title,
      author: existingUser._id,
      isDone: false
    })

    // Save the new task
    await newTask.save()

    // Add the task to the user's tasks array
    existingUser.tasks.push(newTask._id)

    // Save the updated user
    await existingUser.save()

    return new NextResponse('Task added successfully', { status: 201 })
  } catch (error) {
    console.error('Error adding task:', error)
    return new NextResponse('Internal Server Error', { status: 501 })
  }
}

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  noStore()
  try {
    // Connect to the database
    await connectToDB()

    if (!params.id) {
      return new NextResponse('Task ID is required', { status: 400 })
    }

    // Find the task by ID
    const deleteTask = await Tasks.findById(params.id)

    if (!deleteTask) {
      return new NextResponse('Task not found', { status: 404 })
    }

    // Find the user by ID
    const user = await User.findById(deleteTask.author)

    // Remove the task from the user's tasks array
    user.tasks = user.tasks.filter(
      (taskId: any) => taskId.toString() !== deleteTask._id.toString()
    )

    // Save the updated user
    await user.save()

    // Delete the task from the database
    await Tasks.findOneAndDelete({ _id: params.id })

    return new NextResponse('Task deleted successfully', { status: 200 })
  } catch (error) {
    console.error('Error deleting task:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // Connect to the database
    await connectToDB()

    const { isDone } = await request.json()

    if (isDone === undefined || isDone === null) {
      return new NextResponse('Invalid request body', { status: 400 })
    }

    // Find the task by ID
    const taskToUpdate = await Tasks.findById(params.id)

    if (!taskToUpdate) {
      return new NextResponse('Task not found', { status: 404 })
    }

    // Update the task status
    taskToUpdate.isDone = isDone

    // Save the updated task
    await taskToUpdate.save()

    return new NextResponse('Task status updated successfully', {
      status: 200
    })
  } catch (error) {
    console.error('Error updating task status:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
