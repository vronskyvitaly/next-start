import { createAppSlice } from '@/common/utils/create-app-slice'

export const counterSlice = createAppSlice({
  name: 'counter',
  initialState: {
    count: 0 as number
  },
  selectors: {
    setCount: sliceState => sliceState.count
  },
  reducers: {
    incrementCount: state => {
      state.count += 1
    },
    decrementCount: state => {
      state.count -= 1
    },
    resetValueCount: state => {
      state.count = 0
    }
  }
})

export const { incrementCount, decrementCount, resetValueCount } =
  counterSlice.actions
export const { setCount } = counterSlice.selectors
