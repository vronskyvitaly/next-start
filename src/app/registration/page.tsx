import s from './page.module.scss'
import { Input } from '@/components'

export default async function RegistrationPage() {
  return (
    <section className={s.root}>
      <form className={s.wrapper}>
        <Input placeholder={'Your text'} errorMassage={'yyyyyyyyyyyyy'} />
        <Input type={'password'} placeholder={'Your password'} />
        <button>Sing up</button>
      </form>
    </section>
  )
}
