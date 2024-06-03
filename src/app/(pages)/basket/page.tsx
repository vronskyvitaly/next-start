'use client'
import s from './page.module.scss'

import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  decrementCount,
  incrementCount,
  resetValueCount,
  setCount
} from '@/lib/features/counter-slice'

export default function BasketPage() {
  const count = useAppSelector(setCount)
  const dispatch = useAppDispatch()

  const handleReset = () => {
    dispatch(resetValueCount()) // Вызываем действие resetValueCount для сброса значения счетчика
  }

  return (
    <article className={s.root}>
      <h1>Корзина</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button
          style={{ padding: '10px', borderRadius: '30px' }}
          onClick={() => dispatch(incrementCount())}
        >
          +
        </button>
        <button
          style={{ padding: '10px', borderRadius: '30px' }}
          onClick={() => dispatch(decrementCount())}
        >
          -
        </button>
        <button
          style={{ padding: '10px', borderRadius: '30px' }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </article>
  )
}
