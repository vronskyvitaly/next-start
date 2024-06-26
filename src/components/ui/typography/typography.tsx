import { ComponentPropsWithoutRef, ElementType } from 'react'

import cn from 'classnames'

import s from './typography.module.scss'
import { TypographyVariant } from '../../../common/enums/enums'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
  variant = TypographyVariant.P,
  className,
  as,
  ...restProps
}: TypographyProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  const Component = as || 'p'

  const typographyClasses = cn(s[variant], className)

  return <Component className={typographyClasses} {...restProps} />
}
