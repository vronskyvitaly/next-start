'use client'
// import { unstable_noStore as noStore } from 'next/cache'
import s from './user-tasks.module.scss'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useOptimistic, useTransition } from 'react'
import { Task } from '@/components'
import { TaskType } from '@/app/tasks/type'

export function UserTasks({
  tasks = [],
  id
}: {
  tasks: TaskType[]
  id: string
}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { title: '' } })
  const router = useRouter()

  let [isPending, startTransition] = useTransition()

  let [state, mutate] = useOptimistic(
    tasks,
    function createReducer(state, newTask: TaskType | string) {
      if (typeof newTask === 'object') {
        return [...state, newTask]
      } else {
        return state.filter(t => t._id !== newTask)
      }
    }
  )

  const onSubmit = async (data: { title: string }) => {
    const { title } = data
    let newTask = {
      _id: crypto.randomUUID(),
      title,
      isDone: false,
      author: id,
      __v: 0
    }

    startTransition(async () => {
      try {
        mutate(newTask)
        await fetch('/api/tasks', {
          method: 'POST',
          body: JSON.stringify({ title, id }),
          cache: 'no-cache'
        })
        router.refresh()
        // console.log('Task added successfully')
      } catch (error) {
        console.log('Error:', error)
      }
    })
  }

  const deleteTaskHandler = async (taskId: string) => {
    startTransition(async () => {
      try {
        mutate(taskId)
        // Make the API call to delete the task
        await fetch(`/api/tasks/${taskId}`, {
          method: 'DELETE',
          cache: 'no-cache'
        })
        // Log success message and refresh the router
        console.log('Task deleted successfully')
        router.refresh()
      } catch (error) {
        // If there is an error, revert back to the original state
        // mutate(state) // Revert back to the original state
        console.log('Error:', error)
      }
    })
  }

  return (
    <section className={s.root}>
      {state.length !== 0 ? (
        state.map(t => (
          <div key={t._id} style={{ display: 'flex' }}>
            <Task task={t} />
            <DeleteTask onClick={() => deleteTaskHandler(t._id)} />
          </div>
        ))
      ) : (
        <p>Not tasks</p>
      )}
      <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={'Assign a task'} {...register('title')} />
        <button>Создать</button>
      </form>
    </section>
  )
}

type DeleteTaskProps = {
  onClick: () => void
}
const DeleteTask = ({ onClick }: DeleteTaskProps) => {
  return (
    <button
      style={{
        padding: '2px',
        backgroundColor: 'red',
        borderRadius: '4px',
        marginLeft: '10px'
      }}
      onClick={() => onClick()}
    >
      Х
    </button>
  )
}
