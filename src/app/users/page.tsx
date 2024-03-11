import s from './page.module.scss'
import { UserType } from './type'
import type { Metadata } from 'next'
import { UserDashboards } from '@/components'
import { fetchUsers } from '@/app/users/actions'

export const metadata: Metadata = {
  title: 'Users page',
  description: 'Generated by create next app'
}

export default async function UsersPage() {
  const users: UserType[] = await fetchUsers()
  // const session = await getServerSession()

  return (
    <section className={s.root}>
      <UserDashboards users={users} />
    </section>
  )
}
