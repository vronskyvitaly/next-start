import s from './page.module.scss'
import { Button, Input } from '@/components'
import Link from 'next/link'

export default async function RegistrationPage() {
  return (
    <section className={s.root}>
      <form className={s.formWrapper}>
        <div className={s.titleBlock}>
          <p className={s.title}>Create your account</p>
          <div className={s.subTitleBlock}>
            <p className={s.subTitle}>Have an account?</p>
            <Link className={s.link} href={'/api/auth/signin'}>
              Log in now
            </Link>
          </div>
        </div>
        <Input placeholder={'Your First name'} />
        <Input placeholder={'Your Last name'} />
        <Input type={'email'} placeholder={'Your email'} />
        <Input type={'password'} placeholder={'Your password'} />
        <Button title={'Sing up'} />
      </form>
    </section>
  )
}
