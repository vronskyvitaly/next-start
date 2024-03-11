/**
 * @info getting all tasks from the database
 */
export const getAllTasks = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/tasks`, {
    method: 'GET',
    cache: 'no-store'
  })
  return await res.json()
}
