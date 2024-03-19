import s from './page.module.scss'
import { Button, CardProduct } from '@/components'

export default async function HomePage() {
  return (
    <article className={s.root}>
      <CardProduct>
        <Button title={'В корзину'} bg={'black'} />
      </CardProduct>
    </article>
  )
}
