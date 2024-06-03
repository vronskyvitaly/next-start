'use client'
import s from './page.module.scss'
import { decrement, increment } from '@/store/slise'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function BasketPage() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <article className={s.root}>
      <h1>Корзина</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </article>
  )
}
