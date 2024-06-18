'use client'
import s from './card-product.module.scss'
import { DefaultImg, Button } from '@componentsUI/*'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@common/hooks'
import {
  fetchCards,
  setBasketCardsSelector,
  updateCardProperty
} from '@/lib/features/basket-slice'
import { useLocalStorage } from '@uidotdev/usehooks'

type Props = {
  children?: React.ReactNode
  id: string
  price?: number
  discount?: number
  title?: string
  basket: boolean
}
export const CardProduct = ({
  children,
  id,
  discount = 6000,
  price = 3400,
  title = 'Nike',
  basket
}: Props) => {
  const cards = useAppSelector(setBasketCardsSelector)
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)
  const dispatch = useAppDispatch()

  const toggleBasketStatus = (id: string, currentStatus: boolean) => {
    // Обновляю статус и счетчик карточки в локальном массиве
    const updatedCards = drawing.map(card => {
      if (card._id === id) {
        return {
          ...card,
          basket: !currentStatus,
          counter: currentStatus ? 0 : 1
        }
      }
      return card
    })

    // Обновляю статус и счетчик карточки в Redux
    dispatch(
      updateCardProperty({
        id,
        property: 'basket',
        value: !currentStatus
      })
    )

    dispatch(
      updateCardProperty({
        id,
        property: 'counter',
        value: currentStatus ? 0 : 1
      })
    )

    // Сохраняем обновленные данные в локальное хранилище
    saveDrawing(updatedCards)

    // Обновляем Redux с новыми данными карточек
    dispatch(fetchCards(updatedCards))
  }

  console.log(cards)

  return (
    <div className={s.root}>
      <Link
        target={'_blank'}
        href={`/card?key=${id}`}
        className={s.actionWrapper}
      >
        <DefaultImg />
        <span className={s.cardBlockPrice}>
          <p className={s.price}>{price}</p>
          <span className={s.discount}>{discount + price}</span>
        </span>
        <p className={s.title}>{title}</p>
      </Link>

      <Button
        title={basket ? 'B корзине' : 'В корзину'}
        bg={basket ? 'green' : 'black'}
        onClick={() => {
          toggleBasketStatus(id, basket)
        }}
      />
      {children}
    </div>
  )
}
