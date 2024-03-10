import s from './page.module.scss'
import { UserTasks } from '@/components'
import { fetchTasksUser, fetchUserById } from '@/app/users/actions'

export default async function UserPage({ params }: { params: { id: string } }) {
  // const user = await fetchUserById(params.id)
  // const tasks = await fetchTasksUser(params.id)
  const [tasks, user] = await Promise.all([
    fetchTasksUser(params.id),
    fetchUserById(params.id)
  ])

  return (
    <section className={s.root}>
      <div className={s.title}>
        <h1>{user.email}</h1>
      </div>
      <UserTasks tasks={tasks} id={params.id} />
    </section>
  )
}
