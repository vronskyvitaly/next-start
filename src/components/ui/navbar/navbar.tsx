'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className='bg-blue-800 p-4'>
      <ul className='flex justify-evenly text-2xl font-bold'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {session?.user?.email ? (
          <>
            <li>
              <Link href={'/users'}>Users</Link>
            </li>
            <li>
              <Link href={'/tasks'}>Tasks</Link>
            </li>
            <li>
              <Link href={'/client'}>Client</Link>
            </li>
            <li>
              <Link href={'/api/auth/signout'}>Sign Out</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href={'/registration'}>Sign Up</Link>
            <Link href={'/api/auth/signin'}>Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
