import s from './form-wrapper.module.scss'
import { ComponentPropsWithRef, forwardRef } from 'react'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  formTitle?: string | null
  formSubtitle?: string | null
  formTitleLink?: string | null
  hrefLink?: string | null
} & ComponentPropsWithRef<'form'>
export const FormWrapper = forwardRef<HTMLFormElement, Props>(
  (
    {
      children,
      onSubmit,
      formTitle = null,
      formSubtitle = null,
      formTitleLink = null,
      hrefLink = '',
      style
    },
    ref
  ) => {
    return (
      <form ref={ref} style={style} className={s.root} onSubmit={onSubmit}>
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

FormWrapper.displayName = 'FormWrapper'
