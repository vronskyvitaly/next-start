'use client'
import { useAppDispatch, useAppSelector } from '@common/hooks'
import {
  increaseOrDecreaseTheCounter,
  setCardsStateSelector,
  updateCardProperty
} from '@/lib/features/basket-slice'
import { Button, Typography } from '@componentsUI/*'
import { TypographyVariant } from '@enum/*'
import { FavoriteIcon } from '@/assets/icons'
import s from './card-price.module.scss'
import Link from 'next/link'

type Props = {
  id: string
}

export function CardPrice({ id }: Props) {
  const cards = useAppSelector(setCardsStateSelector)
  const dispatch = useAppDispatch()

  const card = cards.find(c => c._id === id)

  enum ACTIONS {
    PLUS = '+',
    MINUS = '-'
  }

  if (!card) {
    return <div>Card not found</div>
  }

  const {
    price: cardPrice,
    discount: cardDiscount,
    basket: inBasketCard,
    isFavorites: inFavoritesCard,
    counter: counterCard
  } = card

  const totalPriseWithDiscount = cardPrice + cardDiscount

  function addBasketCard(isBasket: boolean) {
    if (!isBasket) {
      dispatch(
        updateCardProperty({
          id,
          property: 'basket',
          value: !isBasket
        })
      )
      dispatch(
        updateCardProperty({
          id,
          property: 'counter',
          value: 1
        })
      )
    }
  }
  function addFavoritesCard(toggle: boolean) {
    dispatch(
      updateCardProperty({
        id,
        property: 'isFavorites',
        value: !toggle
      })
    )
  }

  function incCounterBasket(id: string) {
    dispatch(
      increaseOrDecreaseTheCounter({
        id,
        functionToIncreaseOrDecreaseTheCounter: count => ++count
      })
    )
  }

  function decCounterBasket(id: string, counterBasketCard: number) {
    if (counterBasketCard > 1) {
      dispatch(
        increaseOrDecreaseTheCounter({
          id,
          functionToIncreaseOrDecreaseTheCounter: count => --count
        })
      )
    } else {
      dispatch(
        updateCardProperty({
          id,
          property: 'basket',
          value: false
        })
      )
      dispatch(
        updateCardProperty({
          id,
          property: 'counter',
          value: 0
        })
      )
    }
  }

  return (
    <div className={s.root}>
      <div className={s.flex}>
        <div className={s.priceBlock}>
          <Typography className={s.price} variant={TypographyVariant.PriseV3}>
            {cardPrice}
          </Typography>
          <Typography
            className={s.totalPriseWithDiscount}
            variant={TypographyVariant.PriseV4}
          >
            {totalPriseWithDiscount}
          </Typography>
        </div>
        <div className={s.inBasketCardBlock}>
          {inBasketCard ? (
            <>
              <Link href={'/basket'}>
                <Button bg={'greenV2'}>
                  <p>В корзине </p>
                  <p>Перейти </p>
                </Button>
              </Link>

              <div className={s.inBasketAndCounterBlock}>
                <Button
                  onClick={() => decCounterBasket(id, counterCard)}
                  bg={'inBasket'}
                  title={ACTIONS.MINUS}
                />
                <p>{counterCard}</p>
                <Button
                  onClick={() => incCounterBasket(id)}
                  bg={'inBasket'}
                  title={ACTIONS.PLUS}
                />
              </div>
              <Button
                bg={'inBasket'}
                onClick={() => addFavoritesCard(inFavoritesCard)}
              >
                {inFavoritesCard ? (
                  <FavoriteIcon size={1.5} color={'red'} />
                ) : (
                  <FavoriteIcon size={1.5} color={'white'} />
                )}
              </Button>
            </>
          ) : (
            <>
              <Button
                bg={'blue'}
                widthMax={true}
                title={'Добавить в корзину'}
                onClick={() => addBasketCard(inBasketCard)}
              />
              <Button
                onClick={() => addFavoritesCard(inFavoritesCard)}
                bg={'inBasket'}
              >
                {inFavoritesCard ? (
                  <FavoriteIcon size={1.5} color={'red'} />
                ) : (
                  <FavoriteIcon size={1.5} color={'white'} />
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
