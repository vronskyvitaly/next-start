import { Typography } from '@components/ui'
import { TypographyVariant } from '@enum/*'
import s from './icons-block.module.scss'
import React from 'react'

type Props = {
  subTitle?: string
  children?: React.ReactNode
  srcImg?: string
  counter?: number
  variant?: 'basket' | 'favorites'
}
export const IconsBlock = ({
  subTitle,
  children,
  srcImg,
  counter,
  variant = 'basket'
}: Props) => {
  return (
    <div className={s.root}>
      {children}
      <div className={s.iconsBlockWrapper}>
        <img
          style={{ borderRadius: '50%', width: '28px' }}
          src={srcImg}
          alt={'def img'}
        />
        {variant !== 'favorites' ? (
          <p className={counter ? s.counterBasket : s.displayNone}>{counter}</p>
        ) : (
          <p className={counter ? s.counterFavorites : s.displayNone}>
            {counter}
          </p>
        )}
      </div>
      <Typography variant={TypographyVariant.PV2}>{subTitle}</Typography>
    </div>
  )
}
