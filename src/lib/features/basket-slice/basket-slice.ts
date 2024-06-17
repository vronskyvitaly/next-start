import { createAppSlice } from '@/common/utils/create-app-slice'
import { Card } from '@/app/api/cards/type'
import { PayloadAction } from '@reduxjs/toolkit'

export const basketSlice = createAppSlice({
  name: 'basket',
  initialState: {
    basket: [] as Card[],
    counter: 0
  },
  selectors: {
    setBasketSelector: sliceState => sliceState.basket,
    setCountCardInBasketSelector: sliceState =>
      sliceState.basket.filter(c => c.basket).length,
    initCounterBasketSelector: sliceState => sliceState.counter
  },

  reducers: creators => {
    const saveToLocalStorage = (basket: Card[]) => {
      localStorage.setItem('cards', JSON.stringify(basket))
    }

    return {
      fetchCards: creators.reducer((state, action: PayloadAction<Card[]>) => {
        state.basket = action.payload.map(el => ({
          ...el,
          totalCardPrise: 0,
          totalCardDiscount: 0
        }))
      }),
      isBasketStatus: creators.reducer(
        (state, action: PayloadAction<{ id: string; status: boolean }>) => {
          state.basket = state.basket.map(el =>
            el._id === action.payload.id
              ? {
                  ...el,
                  basket: action.payload.status
                }
              : el
          )
        }
      ),
      incBasketCount: creators.reducer(
        (state, action: PayloadAction<{ id: string }>) => {
          state.basket = state.basket.map(el =>
            el._id === action.payload.id
              ? {
                  ...el,
                  counter: el.counter + 1
                }
              : el
          )
        }
      ),
      decBasketCount: creators.reducer(
        (state, action: PayloadAction<{ id: string }>) => {
          state.basket = state.basket.map(el =>
            el._id === action.payload.id
              ? {
                  ...el,
                  counter: el.counter - 1
                }
              : el
          )
        }
      ),
      newTotalCardPrise: creators.reducer(
        (
          state,
          action: PayloadAction<{
            id: string
            newCardTotalPrise: number
          }>
        ) => {
          state.basket = state.basket.map(el =>
            el._id === action.payload.id
              ? {
                  ...el,
                  totalCardPrise: action.payload.newCardTotalPrise
                }
              : el
          )
        }
      ),
      newTotalCardDiscount: creators.reducer(
        (
          state,
          action: PayloadAction<{
            id: string
            newTotalCardDiscount: number
          }>
        ) => {
          state.basket = state.basket.map(el =>
            el._id === action.payload.id
              ? {
                  ...el,
                  totalCardDiscount: action.payload.newTotalCardDiscount
                }
              : el
          )
          saveToLocalStorage(state.basket)
        }
      ),
      deleteCard: creators.reducer(
        (state, action: PayloadAction<{ id: string }>) => {
          state.basket = state.basket.map(el =>
            el._id === action.payload.id ? { ...el, basket: false } : el
          )
          saveToLocalStorage(state.basket)
        }
      )
    }
  }
})

export const {
  fetchCards,
  isBasketStatus,
  deleteCard,
  newTotalCardPrise,
  newTotalCardDiscount,
  incBasketCount,
  decBasketCount
} = basketSlice.actions

export const {
  setBasketSelector,
  setCountCardInBasketSelector,
  initCounterBasketSelector
} = basketSlice.selectors
