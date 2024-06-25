import s from './not-found.module.scss'
import { CardsSection } from 'src/app/(pages)/(home)/(sections)/(cards-section)'
import Link from 'next/link'

export const NotFoundPageComponent = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.titleBlock}>
          <h3>Произошла ошибка</h3>
          <Link href={'/'}>Вернуться на главную</Link>
        </div>
        <CardsSection />
      </div>
    </div>
  )
}
