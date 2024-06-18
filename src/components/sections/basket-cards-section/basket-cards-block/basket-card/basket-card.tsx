import { Card } from '@app/api/cards/type'
import s from './basket-card.module.scss'
import { Typography, Button } from '@componentsUI/*'
import { TypographyVariant } from '@common/enums'
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete'
import { useAppDispatch, useAppSelector } from '@common/hooks'
import {
  setBasketCardsSelector,
  updateCardProperty
} from '@/lib/features/basket-slice'
import { useLocalStorage } from '@uidotdev/usehooks'

type Props = {
  card: Card
  removingCardFromTheBasket: (id: string) => void
}

export const BasketCard = ({ card, removingCardFromTheBasket }: Props) => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(setBasketCardsSelector)
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)

  const handlerFindCard = (id: string) => drawing.find(el => el._id === id)

  const incCardProduct = (id: string) => {
    const findCard = drawing.find(c => c._id === id)
    if (findCard) {
      let changeValueCount = ++findCard.counter
      const updatedCards = drawing.map(c =>
        c._id === id ? { ...c, counter: changeValueCount } : c
      )
      saveDrawing(updatedCards)

      dispatch(
        updateCardProperty({
          id,
          property: 'counter',
          value: changeValueCount
        })
      )
    }
  }

  const decCardProduct = (id: string) => {
    const findCard = drawing.find(c => c._id === id)
    if (findCard && findCard.counter > 1) {
      let changeValueCount = --findCard.counter
      const updatedCards = drawing.map(c =>
        c._id === id ? { ...c, counter: changeValueCount } : c
      )
      saveDrawing(updatedCards)

      dispatch(
        updateCardProperty({
          id,
          property: 'counter',
          value: changeValueCount
        })
      )
    }
  }

  const getCount = (id: string): number => {
    const card = drawing.find(c => c._id === id)
    return card ? card.counter : 1
  }

  function priceCard() {
    return handlerFindCard(card._id)!.price
  }

  function discountCard() {
    return handlerFindCard(card._id)!.discount
  }

  const totalPrice = priceCard() * getCount(card._id)
  const totalDiscountedPrice = discountCard()
    ? (priceCard() + discountCard()) * getCount(card._id)
    : totalPrice

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.deleteCardBtnWrapper}>
          <div
            className={s.deleteCardBtn}
            onClick={() => removingCardFromTheBasket(card._id)}
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
            {totalPrice}
          </Typography>
          <h5 className={s.discount}>{totalDiscountedPrice}</h5>
        </div>
        <div className={s.counterBlock}>
          <Button
            title={'-'}
            bg={'counter'}
            disabled={getCount(card._id) <= 1}
            onClick={() => decCardProduct(card._id)}
          />
          <p>{getCount(card._id)}</p>
          <Button
            title={'+'}
            bg={'counter'}
            onClick={() => incCardProduct(card._id)}
          />
        </div>
      </div>
    </div>
  )
}
