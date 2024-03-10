'use client'
import s from './users-dashboard.module.scss'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { UserType } from '@/app/users/type'

export function UserDashboards({ users }: { users: UserType[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { email: 't24@mail.ru', password: '123456' } })
  const router = useRouter()

  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        cache: 'no-cache'
      })
      if (res.status === 400) {
      }
      if (res.status === 201) {
        router.refresh()
        console.log('Successfully added')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUserHandler = async (id: string) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        cache: 'no-cache'
      })
      if (res.status === 400) {
      }
      if (res.status === 200) {
        console.log('Successfully deleted')
      }
    } catch (error) {
      console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <section className={s.root}>
      <div className={s.block1}>
        <ul className={s.usersBlock}>
          {users.map(u => (
            <li key={u._id}>
              <Link href={`/users/${u._id}`}>{u.email}</Link>
              <button onClick={() => deleteUserHandler(u._id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.block2}>
        <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <input placeholder={'Your email'} {...register('email')} />
          <input {...register('password')} />
          <button>Cоздать</button>
        </form>
      </div>
    </section>
  )
}
