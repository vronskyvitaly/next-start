import { Card } from '@/app/api/cards/type'
import s from './basket-card.module.scss'
import { Typography } from '@/components/ui/typography/typography'
import { TypographyVariant } from '@/common/enums'
import { useState } from 'react'

type Props = Card
export const BasketCard = ({ _id, title, discount, price }: Props) => {
  const [count, setCount] = useState(0)

  return (
    <div key={_id} className={s.root}>
      <div className={s.wrapper}>
        <div className={s.flexImgAndTitle}>
          <div className={s.defaulImgCard}></div>
          <h2>{title}</h2>
        </div>
        <div className={s.priceAndDiscount}>
          <Typography variant={TypographyVariant.PriseV2} as={'h4'}>
            {price}
          </Typography>
          <h5 className={s.discount}>{discount + price}</h5>
        </div>
        <div className={s.counterBlock}>
          <button
            className={s.btn}
            onClick={() => setCount(prevState => prevState + 1)}
          >
            +
          </button>
          <p>{count}</p>
          <button
            className={s.btn}
            onClick={() => setCount(prevState => prevState - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}
