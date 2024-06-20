import { createAppSlice } from '@/common/utils/create-app-slice'
import { Card } from '@/app/api/cards/type'
import { PayloadAction } from '@reduxjs/toolkit'

export const basketSlice = createAppSlice({
  name: 'basket',
  initialState: {
    basket: [] as Card[]
  },
  selectors: {
    setBasketCardsSelector: sliceState => sliceState.basket,
    setBasketCounterSelector: sliceState =>
      sliceState.basket.reduce((total, card) => total + card.counter, 0),
    setFavoritesCounterSelector: sliceState =>
      sliceState.basket.filter(card => card.isFavorites).length
  },

  reducers: creators => {
    const saveToLocalStorage = (basket: Card[]) => {
      localStorage.setItem('cards', JSON.stringify(basket))
    }

    return {
      fetchCards: creators.reducer((state, action: PayloadAction<Card[]>) => {
        state.basket = action.payload.map(el => ({
          ...el
        }))
      }),
      updateCardProperty: creators.reducer(
        (
          state,
          action: PayloadAction<{
            id: string
            property: string
            value: any
          }>
        ) => {
          state.basket = state.basket.map(el =>
            el._id === action.payload.id
              ? { ...el, [action.payload.property]: action.payload.value }
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

export const { fetchCards, deleteCard, updateCardProperty } =
  basketSlice.actions

export const {
  setBasketCardsSelector,
  setBasketCounterSelector,
  setFavoritesCounterSelector
} = basketSlice.selectors
