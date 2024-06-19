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

  const changeCardProduct = (id: string, actions: '+' | '-') => {
    const findCard = drawing.find(c => c._id === id)
    if (findCard) {
      let changeValueCount = changeBasketCounter(findCard.counter, actions)
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

  function changeBasketCounter(currentCounterValue: number, action: '+' | '-') {
    return action === '+' ? ++currentCounterValue : --currentCounterValue
  }

  const getCardCount = (id: string): number => {
    const card = drawing.find(c => c._id === id)
    return card ? card.counter : 1
  }

  function getCardPrice() {
    return handlerFindCard(card._id)!.price
  }

  function getCardDiscount() {
    return handlerFindCard(card._id)!.discount
  }

  const totalPrice = getCardPrice() * getCardCount(card._id)
  const totalPriseWithDiscount = getCardDiscount()
    ? (getCardPrice() + getCardDiscount()) * getCardCount(card._id)
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
          <h5 className={s.discount}>{totalPriseWithDiscount}</h5>
        </div>
        <div className={s.counterBlock}>
          <Button
            title={'-'}
            bg={'inBasket'}
            disabled={getCardCount(card._id) <= 1}
            onClick={() => changeCardProduct(card._id, '-')}
          />
          <p>{getCardCount(card._id)}</p>
          <Button
            title={'+'}
            bg={'inBasket'}
            onClick={() => changeCardProduct(card._id, '+')}
          />
        </div>
      </div>
    </div>
  )
}
