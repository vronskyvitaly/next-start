import s from './form.module.scss'
import { ComponentPropsWithRef, forwardRef } from 'react'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  title: string
  subtitle?: string
  titleLink?: string
  hrefLink?: string
} & ComponentPropsWithRef<'form'>
export const Form = forwardRef<HTMLFormElement, Props>(
  (
    {
      children,
      onSubmit,
      title = 'Create title',
      subtitle = 'Create subtitle',
      titleLink = 'Link',
      hrefLink = '/api/auth/signin'
    },
    ref
  ) => {
    return (
      <form ref={ref} className={s.root} onSubmit={onSubmit}>
        <div className={s.titleBlock}>
          <h4 className={s.title}>{title}</h4>
          <div className={s.subTitleBlock}>
            <p className={s.subTitle}>{subtitle}</p>
            <Link className={s.link} href={hrefLink}>
              {titleLink}
            </Link>
          </div>
        </div>
        {children}
      </form>
    )
  }
)

Form.displayName = 'Form'
