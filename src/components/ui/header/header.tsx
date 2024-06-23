'use client'
import s from './header.module.scss'
import { Button, Form, IconsBlock, Input, Logo } from '@componentsUI/*'
import Link from 'next/link'
import { Card } from '@/app/api/cards/type'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  saveCards,
  setBasketCounterSelector,
  setFavoritesCounterSelector
} from '@/lib/features/basket-slice'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useRouter } from 'next/navigation'

type HeaderProps = {
  cards: Card[]
}

export const Header = ({ cards }: HeaderProps) => {
  const router = useRouter()
  const countCardInBasket = useAppSelector(setBasketCounterSelector)
  const countCardInFavorites = useAppSelector(setFavoritesCounterSelector)
  const [drawing, saveDrawing] = useLocalStorage('cards', cards)
  const dispatch = useAppDispatch()

  useEffect(() => {
    drawing !== null ? dispatch(saveCards(drawing)) : dispatch(saveCards(cards))
  }, [])

  const handleLogoClick = () => {
    router.prefetch('/')
  }

  return (
    <header className={s.root}>
      <div className={s.container}>
        <div className={s.flex}>
          <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <Logo />
          </div>
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
            <IconsBlock
              subTitle={'Войти'}
              srcImg={
                'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
              }
            />
            <Link href={'/favorites'} className={s.link}>
              <IconsBlock
                variant={'favorites'}
                counter={countCardInFavorites}
                subTitle={'Избранное'}
                srcImg={
                  'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
                }
              />
            </Link>

            <div>
              <Link href={'/basket'} className={s.link}>
                <IconsBlock
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
