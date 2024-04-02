import type { Metadata } from 'next'
import s from './page.module.scss'

export const metadata: Metadata = {
  title: 'Корзина',
  description: ''
}

export default function BasketPage() {
  return (
    <article className={s.root}>
      <h1>Корзина</h1>
    </article>
  )
}
