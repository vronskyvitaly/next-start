'use client'

import { signIn, useSession, signOut } from 'next-auth/react'

export default function ProfileIcon() {
  const { data: session, status } = useSession()
  console.log(session)

  if (status === 'authenticated') {
    return (
      <div className='flex gap-5'>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }

  return <button onClick={() => signIn('github')}>Sign In</button>
}
