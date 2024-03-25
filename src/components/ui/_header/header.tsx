'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import s from './header.module.scss'

export const Header = () => {
  const { data: session } = useSession()
  return (
    <header className={s.root}>
      <div className={s.container}>
        <div className={s.flex}>
          <nav>
            <ul className={s.links}>
              <li>
                <Link href='/'>Home</Link>
              </li>
              {session?.user?.email ? (
                <div style={{ display: 'flex', gap: '10px' }}>
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
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <li>
                    <Link href={'/registration'}>Sign Up</Link>
                  </li>
                  <li>
                    <Link
                      style={{ marginLeft: '10px' }}
                      href={'/api/auth/signin'}
                    >
                      Sign In
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
