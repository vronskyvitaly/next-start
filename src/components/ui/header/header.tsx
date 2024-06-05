'use client'
import s from './header.module.scss'
import { Button, Form, Input, Logo } from '@/components'

import { IconWrapper } from '@/assets/icons/icon-wrapper'
import Link from 'next/link'
import { Card } from '@/app/api/cards/type'
import { useEffect } from 'react'
import { useAppDispatch } from '@/common/hooks'
import { basketSlice } from '@/lib/features/basket-slice'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

type HeaderProps = {
  cards: Card[]
}

export const Header = ({ cards }: HeaderProps) => {
  const dispatch = useAppDispatch()

  /***
   * Saving cards to localStorage
   */
  useEffect(() => {
    // Преобразование объекта cards в строку JSON
    const cardsJSON = JSON.stringify(cards)
    // Сохранение строки JSON в локальном хранилище
    localStorage.setItem('cards', cardsJSON)

    // Распарс строки JSON и загрузка карточек в Redux-состояние
    const parsedCards: Card[] = JSON.parse(cardsJSON)
    dispatch(basketSlice.actions.fetchCards(parsedCards))
  }, [cards])

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
            <Link href={'/basket'} className={s.link}>
              <IconWrapper
                subTitle={'Корзина'}
                srcImg={
                  'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
