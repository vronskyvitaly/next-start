import { Typography } from '@componentsUI/typography'
import { TypographyVariant } from '@enum/*'
import s from './icon-wrapper.module.scss'
import React from 'react'

type Props = {
  subTitle?: string
  children?: React.ReactNode
  srcImg?: string
  counter?: number
}
export const IconWrapper = ({ subTitle, children, srcImg, counter }: Props) => {
  return (
    <div className={s.root}>
      {children}
      <div className={s.iconBlock}>
        <img
          style={{ borderRadius: '50%', width: '28px' }}
          src={srcImg}
          alt={'def img'}
        />
        <p className={counter ? s.counter : s.displayNone}>{counter}</p>
      </div>
      <Typography variant={TypographyVariant.PV2}>{subTitle}</Typography>
    </div>
  )
}
