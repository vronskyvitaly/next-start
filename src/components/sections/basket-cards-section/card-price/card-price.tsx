import s from './card-price.module.scss'
import { Button, Typography } from '@componentsUI/*'
import { TypographyVariant } from '@common/enums'
import cn from 'classnames'
import { useAppSelector } from '@common/hooks'
import {
  setBasketCounterSelector,
  setBasketCardsSelector
} from '@/lib/features/basket-slice'

export const CardPrice = () => {
  const counterBasketCards = useAppSelector(setBasketCounterSelector)
  const cards = useAppSelector(setBasketCardsSelector)

  const calculateTotalPrice = () => {
    return cards.reduce((sum, card) => {
      if (card.basket) {
        return sum + card.price * card.counter
      }
      return sum
    }, 0)
  }

  const calculateTotalDiscount = () => {
    return cards.reduce((sum, card) => {
      if (card.basket) {
        return sum + (card.discount || 0) * card.counter
      }
      return sum
    }, 0)
  }

  const totalSumWithDiscount = () => {
    return calculateTotalPrice() + calculateTotalDiscount()
  }

  const totalSumWithOutDiscount = () => {
    return totalSumWithDiscount() - calculateTotalDiscount()
  }

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
            Товары
          </Typography>
          <Typography variant={TypographyVariant.P} className={s.countProducts}>
            ({counterBasketCards})
          </Typography>
          <Typography
            variant={TypographyVariant.PriseV3}
            className={s.sumProduct}
          >
            {totalSumWithDiscount()}
          </Typography>
        </div>
        <div className={cn(s.discountRow, s.row)}>
          <Typography variant={TypographyVariant.P}>Скидка</Typography>
          <Typography
            variant={TypographyVariant.PriseV3}
            className={s.discount}
          >
            -{calculateTotalDiscount()}
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
          {totalSumWithOutDiscount()}
        </Typography>
      </div>
    </div>
  )
}
