'use client'
import s from './card-section.module.scss'
import { useSearchParams } from 'next/navigation'
import { Card } from '@/app/api/cards/type'
import { DefaultImg, Typography } from '@/components'
import { TypographyVariant } from '@enum/*'
import Link from 'next/link'

type Props = {
  cards: Card[]
}

export const CardSection = ({ cards }: Props) => {
  const paramsKey = useSearchParams().get('key')
  // const cardsRedux = useAppSelector(setCardsStateSelector)

  return (
    <section className={s.root}>
      <div className={s.container}>
        <div className={s.line}>
          <p className={s.barCode}>Код товара: {paramsKey}</p>
        </div>
        <div className={s.cardWrapper}>
          {cards.find(el => el._id === paramsKey) ? (
            <>
              <div className={s.imagesAndCharacteristicsBlock}>
                <div className={s.imagAndOptionsImagesBlock}>
                  <div className={s.optionsImagesBlock}>
                    <DefaultImg width={'100px'} height={'60px'} />
                    <DefaultImg width={'100px'} height={'60px'} />
                    <DefaultImg width={'100px'} height={'60px'} />
                  </div>
                  <DefaultImg width={'300px'} height={'300px'} />
                </div>
                <div className={s.characteristicsBlock}>
                  <ul>
                    <li>Цвет:</li>
                    <li>Страна изготовитель:</li>
                    <li>Высота, см:</li>
                    <li>Ширина, см:</li>
                    <li>
                      <Typography variant={TypographyVariant.Link} as={'a'}>
                        Перейти к описанию
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={s.cardPriceAndLinksBlock}>
                <div className={s.cardPrice}></div>
                <div className={s.linksAndTitleBlock}>
                  <div className={s.title}>
                    <Typography variant={TypographyVariant.H6}>
                      Часто задаваемые вопросы
                    </Typography>
                  </div>
                  <div className={s.linksBlock}>
                    <ul className={s.linksBlock}>
                      <Typography variant={TypographyVariant.Link} as={'li'}>
                        <Link href={'/'}>Условия доставки</Link>
                      </Typography>
                      <Typography variant={TypographyVariant.Link} as={'li'}>
                        <Link href={'/'}>Возврат товаров</Link>
                      </Typography>
                      <Typography variant={TypographyVariant.Link} as={'li'}>
                        <Link href={'/'}>Способы оплаты</Link>
                      </Typography>
                      <Typography variant={TypographyVariant.Link} as={'li'}>
                        <Link href={'/'}>Возврат денег</Link>
                      </Typography>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h1>Card not found</h1>
          )}
        </div>
      </div>
    </section>
  )
}
