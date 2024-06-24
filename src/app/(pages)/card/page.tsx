import { CardSection } from '@components/sections/card-section/card-section'
import { fetchCards } from '@components/sections/cards-section/actions'
import s from './page.module.scss'
import { Metadata } from 'next'
import { Header } from '@componentsUI/*'

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
