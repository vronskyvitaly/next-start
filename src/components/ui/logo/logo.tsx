import s from './logo.module.scss'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'} className={s.root}>
      Logo
    </Link>
  )
}
