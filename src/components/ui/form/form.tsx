import s from './form.module.scss'
import { ComponentPropsWithRef, forwardRef } from 'react'
import Link from 'next/link'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
  formTitle?: string | null
  formSubtitle?: string | null
  formTitleLink?: string | null
  hrefLink?: string | null
} & ComponentPropsWithRef<'form'>
export const Form = forwardRef<HTMLFormElement, Props>(
  (
    {
      children,
      onSubmit,
      formTitle = null,
      formSubtitle = null,
      formTitleLink = null,
      hrefLink = '',
      style,
      className
    },
    ref
  ) => {
    return (
      <form
        ref={ref}
        style={style}
        className={cn(s.root, className)}
        onSubmit={onSubmit}
      >
        <div className={formTitle ? s.titleBlock : s.displayNone}>
          <h4 className={s.title}>{formTitle}</h4>
          <div className={formSubtitle ? s.subTitleBlock : s.displayNone}>
            <p className={s.subTitle}>{formSubtitle}</p>
            {hrefLink !== null ? (
              <Link className={s.link} href={hrefLink}>
                {formTitleLink}
              </Link>
            ) : null}
          </div>
        </div>
        {children}
      </form>
    )
  }
)

Form.displayName = 'Form'
