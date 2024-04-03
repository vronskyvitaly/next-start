'use client'
import s from './header.module.scss'
import { Button, Form, Input, Logo } from '@/components'

import { IconWrapper } from '@/components/assets/icons/icon-wrapper'
import Link from 'next/link'

export const Header = () => {
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
            <Link href={'/favorite'} className={s.link}>
              <IconWrapper
                subTitle={'Избранное'}
                srcImg={
                  'https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg'
                }
              />
            </Link>
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
