'use client'
import { useOptimistic, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { TaskType } from '@/app/tasks/type'
import { useSession } from 'next-auth/react'

export const Task = ({ task }: { task: TaskType }) => {
  const router = useRouter()
  let [isPending, startTransition] = useTransition()

  const [optimisticTodo, updateTodo] = useOptimistic(
    task,
    (todo, { isDone }: { isDone: boolean }) => {
      return { ...todo, isDone }
    }
  )
  const updateTaskStatusHandler = async (taskId: string, isDone: boolean) => {
    try {
      updateTodo({ isDone })
      // Make the API call to delete the task
      await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify({ isDone })
      })

      // Log success message and refresh the router
      console.log('Task update successfully')
      router.refresh()
    } catch (error) {
      console.log('Error:', error)
    }
  }
  return (
    <li key={task._id}>
      <input
        style={{ marginRight: '10px' }}
        type={'checkbox'}
        checked={optimisticTodo.isDone}
        onChange={checked =>
          startTransition(() =>
            updateTaskStatusHandler(task._id, checked.target.checked as boolean)
          )
        }
      />
      {task.title}
    </li>
  )
}
