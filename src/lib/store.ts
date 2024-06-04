import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '@/lib/features/counter-slice/counter-slice'
import { basketSlice } from '@/lib/features/basket-slice/basket-slice'

export const myStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      basket: basketSlice.reducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof myStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
