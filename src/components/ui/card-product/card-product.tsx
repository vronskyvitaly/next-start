'use client'
import s from './card-product.module.scss'
import { Button, DefaultImg } from '@componentsUI/*'
import Link from 'next/link'
import { useAppDispatch } from '@common/hooks'
import { updateCardProperty } from '@/lib/features/basket-slice'
import { FavoriteIcon } from '@/assets/icons'
import { useEffect, useState } from 'react'
import { convectorNumberUtil } from '@utils/*'

type Props = {
  id: string
  isFavorites: boolean
  isNot?: boolean
  isModified?: boolean
  price?: number
  discount?: number
  title?: string
  cardInTheBasket: boolean
  counter?: number
  variants?: 'default' | 'inBasketAndCounter'
}

// Выбираем поля, которые должны быть обязательными
type MandatoryProps = Required<
  Pick<Props, 'id' | 'isFavorites' | 'cardInTheBasket'>
>

// Делаем остальные поля необязательными
type OptionalProps = Partial<
  Omit<Props, 'id' | 'isFavorites' | 'cardInTheBasket'>
>

// Комбинируем обязательные и необязательные поля
type CombinedProps = MandatoryProps & OptionalProps

export const CardProduct = ({
  isFavorites,
  isModified,
  counter = 0,
  id,
  discount = 6000,
  price = 3400,
  title = 'Nike',
  cardInTheBasket,
  variants = 'default'
}: CombinedProps) => {
  const [currentUrl, setCurrentUrl] = useState<string>('')
  const [isChanged, setIsIsChanged] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.pathname)
    }
  }, [])

  enum IS_BASKET {
    ON = 'В корзине',
    OFF = 'В корзину'
  }

  enum COLOR {
    RED = 'red',
    BLACK = 'black',
    WHITE = 'white',
    GREEN = 'green'
  }

  enum ACTION {
    PLUS = '+',
    MINUS = '-'
  }

  const toggleBasketCounter = (id: string, currentStatus: boolean) => {
    return currentStatus
      ? dispatch(
          updateCardProperty({
            id,
            property: 'counter',
            value: 0
          })
        )
      : dispatch(
          updateCardProperty({
            id,
            property: 'counter',
            value: 1
          })
        )
  }

  const toggleBasketStatus = (id: string, currentStatus: boolean) => {
    dispatch(
      updateCardProperty({
        id,
        property: 'basket',
        value: !currentStatus
      })
    )
  }

  function toggleInFavoritesStatus(id: string, currentStatus: boolean) {
    if (currentUrl === '/favorites') {
      setIsIsChanged(prevState => !prevState)
      dispatch(
        updateCardProperty({
          id,
          property: 'isFavorites',
          value: !currentStatus
        })
      )
      dispatch(
        updateCardProperty({
          id,
          property: 'isModified',
          value: !isChanged
        })
      )
    } else {
      console.log('сработала 226')
      dispatch(
        updateCardProperty({
          id,
          property: 'isFavorites',
          value: !currentStatus
        })
      )
    }
  }

  function changeBasketCounter(
    currentCounterValue: number,
    action: ACTION.PLUS | ACTION.MINUS
  ) {
    return action === ACTION.PLUS
      ? ++currentCounterValue
      : --currentCounterValue
  }

  const changeValueProduct = (
    id: string,
    actions: ACTION.PLUS | ACTION.MINUS,
    currentCounter: number
  ) => {
    let newCounterValue = changeBasketCounter(currentCounter, actions)

    if (newCounterValue > 0) {
      dispatch(
        updateCardProperty({
          id,
          property: 'counter',
          value: newCounterValue
        })
      )
    } else {
      // Удаление карточки из корзины при уменьшении до 0
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
      <Link
        // target={'_blank'}
        href={`/card?key=${id}`}
        className={s.actionWrapper}
      >
        <DefaultImg />
        <span className={s.cardBlockPrice}>
          <p className={s.price}>{convectorNumberUtil(price)}</p>
          <span className={s.discount}>
            {convectorNumberUtil(discount + price)}
          </span>
        </span>
        <p className={s.title}>{title}</p>
      </Link>

      <div
        className={s.wrapperFavoritesIcon}
        onClick={() => toggleInFavoritesStatus(id, isFavorites)}
      >
        {currentUrl !== '/favorites' ? (
          <FavoriteIcon
            color={isFavorites ? COLOR.RED : COLOR.WHITE}
            size={1.5}
          />
        ) : (
          <FavoriteIcon
            color={isChanged ? COLOR.WHITE : COLOR.RED}
            size={1.5}
          />
        )}
      </div>

      {variants === 'default' ? (
        <Button
          title={cardInTheBasket ? IS_BASKET.ON : IS_BASKET.OFF}
          bg={cardInTheBasket ? COLOR.GREEN : COLOR.BLACK}
          onClick={() => {
            toggleBasketStatus(id, cardInTheBasket)
            toggleBasketCounter(id, cardInTheBasket)
          }}
        />
      ) : cardInTheBasket ? (
        <div className={s.inBasketAndCounterBlock}>
          <Button
            title={ACTION.MINUS}
            bg={'inBasketAndCounter'}
            onClick={() => changeValueProduct(id, ACTION.MINUS, counter)}
          />
          <p>{counter}</p>
          <Button
            title={ACTION.PLUS}
            bg={'inBasketAndCounter'}
            onClick={() => changeValueProduct(id, ACTION.PLUS, counter)}
          />
        </div>
      ) : (
        <Button
          title={IS_BASKET.OFF}
          bg={COLOR.BLACK}
          onClick={async () => {
            toggleBasketStatus(id, cardInTheBasket)
            toggleBasketCounter(id, cardInTheBasket)
          }}
        />
      )}
    </div>
  )
}
