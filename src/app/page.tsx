import s from './page.module.scss'

export default async function HomePage() {
  return (
    <article className={s.root}>
      <h1 style={{ fontSize: '40px', fontWeight: 800 }}>Home page</h1>
    </article>
  )
}
