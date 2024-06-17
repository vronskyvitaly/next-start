import s from './card-price.module.scss'
import { Button } from '@componentsUI/button'
import { Typography } from '@componentsUI/typography'
import { TypographyVariant } from '@enum/*'
import cn from 'classnames'
import { useAppSelector } from '@common/hooks'
import {
  setBasketSelector,
  setCountCardInBasketSelector
} from '@/lib/features/basket-slice'
import { Card } from '@app/api/cards/type'

interface ICardCalculator {
  cards: Card[]
  totalSumWithOutDiscount: () => number
  totalDiscount: () => number
  totalSum: () => number
}

export const CardPrice = () => {
  const countCardInBasket = useAppSelector(setCountCardInBasketSelector)
  const cards = useAppSelector(setBasketSelector)

  function CardCalculator<T extends ICardCalculator>(
    this: T,
    cards: Card[]
  ): void {
    this.cards = cards.filter(c => c.basket)

    this.totalSumWithOutDiscount = function () {
      return this.cards.reduce((sum: number, card: Card) => {
        return card.totalCardPrise === 0
          ? sum + card.price
          : sum + card.totalCardPrise
      }, 0)
    }

    this.totalDiscount = function () {
      return this.cards.reduce((sum: number, card: Card) => {
        return card.totalCardDiscount === 0
          ? sum + (card.discount || 0)
          : sum + (card.totalCardDiscount || 0)
      }, 0)
    }

    this.totalSum = function () {
      return this.totalSumWithOutDiscount() + this.totalDiscount()
    }
  }

  const cardsFunctionality = new (CardCalculator as any)(cards)

  return (
    <div className={s.cardPrice}>
      <Button title={'Перейти к оформлению'} widthMax={true} />
      <Typography variant={TypographyVariant.P} as={'p'}>
        Доступные способы и время доставки можно выбрать при оформлении заказа
      </Typography>
      <hr className={s.line} />
      <Typography variant={TypographyVariant.H5} as={'h5'}>
        Ваша корзина
      </Typography>
      <div className={s.productAndDiscountBlock}>
        <div className={cn(s.productRow, s.row)}>
          <Typography variant={TypographyVariant.P} className={s.product}>
            Tовары
          </Typography>
          <Typography variant={TypographyVariant.P} className={s.countProducts}>
            ({countCardInBasket})
          </Typography>
          <Typography
            variant={TypographyVariant.PriseV3}
            className={s.sumProduct}
          >
            {cardsFunctionality.totalSum()}
          </Typography>
        </div>
        <div className={cn(s.discountRow, s.row)}>
          <Typography variant={TypographyVariant.P}>Скидка</Typography>
          <Typography
            variant={TypographyVariant.PriseV3}
            className={s.discount}
          >
            -{cardsFunctionality.totalDiscount()}
          </Typography>
        </div>
      </div>
      <hr className={s.line} />
      <div className={s.totalAmountBlock}>
        <Typography variant={TypographyVariant.H4} as={'h4'}>
          Цена
        </Typography>
        <Typography
          variant={TypographyVariant.H4}
          as={'h4'}
          className={s.totalAmount}
        >
          {cardsFunctionality.totalSumWithOutDiscount()}
        </Typography>
      </div>
    </div>
  )
}
