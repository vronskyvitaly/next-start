'use client'
import s from './header.module.scss'
import { Button, Form, IconWrapper, Input, Logo } from '@componentsUI/*'
import Link from 'next/link'
import { Card } from '@/app/api/cards/type'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  fetchCards,
  setBasketCounterSelector
} from '@/lib/features/basket-slice'
import { useLocalStorage } from '@uidotdev/usehooks'

type HeaderProps = {
  cards: Card[]
}

export const Header = ({ cards }: HeaderProps) => {
  const dispatch = useAppDispatch()
  const countCardInBasket = useAppSelector(setBasketCounterSelector)
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)

  useEffect(() => {
    drawing !== null
      ? dispatch(fetchCards(drawing))
      : dispatch(fetchCards(cards))
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
            <Link href={'/favorites'} className={s.link}>
              <IconWrapper
                subTitle={'Избранное'}
                srcImg={
                  'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
                }
              />
            </Link>

            <div>
              <Link href={'/basket'} className={s.link}>
                <IconWrapper
                  counter={countCardInBasket}
                  subTitle={'Корзина'}
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
