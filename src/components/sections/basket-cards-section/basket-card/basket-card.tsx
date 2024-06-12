import { Card } from '@/app/api/cards/type'
import s from './basket-card.module.scss'
import { Typography } from '@/components/ui/typography/typography'
import { TypographyVariant } from '@/common/enums'
import { useState } from 'react'
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete'

type Props = {
  card: Card
  checkboxPageState: boolean
  removalFromCart: (id: string) => void
}
export const BasketCard = ({ card, removalFromCart }: Props) => {
  const [count, setCount] = useState(0)

  return (
    <div key={card._id} className={s.root}>
      <div className={s.wrapper}>
        <div className={s.deleteCardBtnWrapper}>
          <div
            className={s.deleteCardBtn}
            onClick={() => removalFromCart(card._id)}
          >
            <AiFillDelete />
          </div>
        </div>
        <div className={s.flexImgAndTitle}>
          <div className={s.defaultImgCard}></div>
          <h2>{card.title}</h2>
        </div>
        <div className={s.priceAndDiscount}>
          <Typography variant={TypographyVariant.PriseV2} as={'h4'}>
            {card.price}
          </Typography>
          <h5 className={s.discount}>{card.discount + card.price}</h5>
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
