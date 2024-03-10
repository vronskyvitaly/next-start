import s from './loader.module.scss'

export function Loader() {
  return (
    <div className={s.wrapper}>
      <p className={s.loading}></p>
    </div>
  )
}
