'use client'
import s from './header.module.scss'
import Link from 'next/link'

export function Header() {
  return (
    <header className={s.root}>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/users'}>Users</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/tasks'}>Tasks</Link>
        <Link href={'/registration'}>Sing in</Link>
      </nav>
    </header>
  )
}
