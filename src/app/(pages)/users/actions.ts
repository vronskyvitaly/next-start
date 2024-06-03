// import { revalidatePath } from 'next/cache'

/**
 * @info getting all users
 */
export async function fetchUsers() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/users`, {
    method: 'GET',
    cache: 'no-store'
  })
  return await res.json()
}

/**
 * @info getting user by id
 */
export async function fetchUserById(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/users/${id}`, {
    method: 'GET',
    cache: 'no-store'
  })
  return await res.json()
}

/**
 * @info getting user tasks by id
 */
export async function fetchTasksUser(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/tasks/${id}`, {
    method: 'GET',
    cache: 'no-store'
  })
  return await res.json()
}
