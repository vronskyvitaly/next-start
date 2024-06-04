import { createAppSlice } from '@/common/utils/create-app-slice'
import { Card } from '@/app/api/cards/type'

export const basketSlice = createAppSlice({
  name: 'basket',
  initialState: {
    basket: [] as Card[] | []
  },
  selectors: {
    setCount: sliceState => sliceState.basket
  },
  reducers: {}
})

export const {} = basketSlice.actions
