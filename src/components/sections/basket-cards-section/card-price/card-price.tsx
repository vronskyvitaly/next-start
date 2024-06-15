import s from './card-price.module.scss'
import { Button } from '@componentsUI/button'
import { Typography } from '@componentsUI/typography'
import { TypographyVariant } from '@enum/*'
import cn from 'classnames'
import { useAppSelector } from '@common/hooks'
import { setCountCardInBasketSelector } from '@/lib/features/basket-slice'

export const CardPrice = () => {
  const countCardInBasket = useAppSelector(setCountCardInBasketSelector)
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
          <Typography variant={TypographyVariant.PriseV3}>5000</Typography>
        </div>
        <div className={cn(s.discountRow, s.row)}>
          <Typography variant={TypographyVariant.P}>Скидка</Typography>
          <Typography
            variant={TypographyVariant.PriseV3}
            className={s.discount}
          >
            -2500
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
          2500
        </Typography>
      </div>
    </div>
  )
}
