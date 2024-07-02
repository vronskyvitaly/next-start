'use client'
import s from './header.module.scss'
import { Button, Form, Input, Logo, Typography } from '@componentsUI/*'
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
import { BasketIcon, HeaderFavoriteIcon, UserIcon } from '@/assets/icons'
import { TypographyVariant } from '@enum/*'

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
            <Link href={'/'} className={s.link}>
              <UserIcon size={1} className={s.icon} />
              <Typography variant={TypographyVariant.PV2}>Войти</Typography>
            </Link>

            <Link href={'/favorites'} className={s.link}>
              <HeaderFavoriteIcon
                count={countCardInFavorites}
                color={'blur'}
                size={1}
                className={s.icon}
              />
              <Typography variant={TypographyVariant.PV2}>Избранное</Typography>
            </Link>

            <Link href={'/basket'} className={s.link}>
              <BasketIcon
                color={'white'}
                count={countCardInBasket}
                size={1}
                className={s.icon}
              />
              <Typography variant={TypographyVariant.PV2}>Корзина</Typography>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
