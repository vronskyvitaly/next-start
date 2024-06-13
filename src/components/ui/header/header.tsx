'use client'
import s from './header.module.scss'
import { Button, Form, IconWrapper, Input, Logo } from '@/components'
import Link from 'next/link'
import { Card } from '@/app/api/cards/type'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { fetchCards, setBasketSelector } from '@/lib/features/basket-slice'

type HeaderProps = {
  cards: Card[]
}

export const Header = ({ cards }: HeaderProps) => {
  const dispatch = useAppDispatch()
  const cardBasket = useAppSelector(setBasketSelector)

  const getBasketItemCount = () => {
    return cardBasket.filter(el => el.basket).length
  }

  /***
   * Saving cards to localStorage
   */
  useEffect(() => {
    // Преобразование объекта cards в строку JSON
    const cardsStringifyJSON = JSON.stringify(cards)

    // Преобразование объекта cards в массив
    const cardsParsJSON = JSON.parse(cardsStringifyJSON)

    // Проверяю есть ли в localstorage объект cards если нет вернется null
    const isCardsLocaleStorage = localStorage.getItem('cards')

    // сохраняю в redux состояние карточки из localeStorage если есть или с server если нет
    if (isCardsLocaleStorage !== null) {
      dispatch(fetchCards(JSON.parse(isCardsLocaleStorage)))
    } else {
      dispatch(fetchCards(cardsParsJSON))
    }
  }, [])

  return (
    <header className={s.root}>
      <div className={s.container}>
        <div className={s.flex}>
          <Logo />
          <Form
            style={{
              flexDirection: 'row',
              maxWidth: '620px',
              gap: '12px'
            }}
          >
            <Input
              style={{ width: '100%' }}
              type={'search'}
              placeholder={'Search'}
            />
            <Button bg={'blue'} title={'Search'} />
          </Form>
          <div className={s.iconsBlock}>
            <IconWrapper
              subTitle={'Войти'}
              srcImg={
                'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
              }
            />
            <IconWrapper
              subTitle={'Избранное'}
              srcImg={
                'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
              }
            />
            <div>
              <Link href={'/basket'} className={s.link}>
                <IconWrapper
                  counter={getBasketItemCount()}
                  subTitle={'Корзина6'}
                  srcImg={
                    'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
