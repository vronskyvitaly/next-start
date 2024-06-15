import { createAppSlice } from '@/common/utils/create-app-slice'
import { Card } from '@/app/api/cards/type'
import { PayloadAction } from '@reduxjs/toolkit'

export const basketSlice = createAppSlice({
  name: 'basket',
  initialState: {
    basket: [] as Card[]
  },
  selectors: {
    setBasketSelector: sliceState => sliceState.basket,
    setCountCardInBasketSelector: sliceState =>
      sliceState.basket.filter(c => c.basket).length
  },
  reducers: creators => {
    return {
      fetchCards: creators.reducer((state, action: PayloadAction<Card[]>) => {
        state.basket = action.payload
      }),
      isBasketStatus: creators.reducer(
        (state, action: PayloadAction<{ id: string; status: boolean }>) => {
          return {
            ...state,
            basket: state.basket.map(el =>
              el._id === action.payload.id
                ? { ...el, basket: action.payload.status }
                : el
            )
          }
        }
      ),
      deleteCard: creators.reducer(
        (state, action: PayloadAction<{ id: string }>) => {
          return {
            ...state,
            basket: state.basket.map(el =>
              el._id === action.payload.id ? { ...el, basket: false } : el
            )
          }
        }
      )
    }
  }
})

export const { fetchCards, isBasketStatus, deleteCard } = basketSlice.actions

export const { setBasketSelector, setCountCardInBasketSelector } =
  basketSlice.selectors
