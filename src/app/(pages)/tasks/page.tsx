import s from './page.module.scss'
import { getAllTasks } from '@/app/(pages)/tasks/actions'
import { TaskType } from '@/app/(pages)/tasks/type'

export default async function TasksPage() {
  const tasks: TaskType[] = await getAllTasks()

  return (
    <section className={s.root}>
      <h1>Всего задач {tasks.length}</h1>
      {/*<ul>*/}
      {/*  {tasks.map(t => (*/}
      {/*    <li key={t._id}>{t.title}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </section>
  )
}
