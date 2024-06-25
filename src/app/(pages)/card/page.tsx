import { fetchCards } from '@app/(pages)/(home)/(sections)/(cards-section)/actions'
import s from './page.module.scss'
import { Metadata } from 'next'
import { Header } from '@componentsUI/*'
import { CardSection } from './(sections)'

export const metadata: Metadata = {
  title: 'Card page',
  description: 'Card page',
  applicationName: 'Shop',
  creator: 'Vronsky Vitaly'
}
export default async function Page() {
  const cards = await fetchCards()
  return (
    <article className={s.root}>
      <Header cards={cards} />
      <CardSection cards={cards} />
    </article>
  )
}
