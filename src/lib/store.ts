import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '@/lib/features/counter-slice/counter-slice'

export const myStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof myStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
