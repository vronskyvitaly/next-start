import { Metadata } from 'next'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Избранное',
  description: ''
}
export default function FavoritePage() {
  return (
    <article className={s.root}>
      <h2>Избранное</h2>
    </article>
  )
}
