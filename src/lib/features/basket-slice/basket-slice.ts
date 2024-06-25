import { createAppSlice } from '@/common/utils/create-app-slice'
import { Card } from '@/app/api/cards/type'
import { PayloadAction } from '@reduxjs/toolkit'

/**
 *@debuger
 * const st = current(state)
 * console.log(st)
 */

export const rootSlice = createAppSlice({
  name: 'root',
  initialState: {
    cardsState: [] as Card[]
  },
  selectors: {
    setCardsStateSelector: sliceState => sliceState.cardsState,
    setBasketCounterSelector: sliceState =>
      sliceState.cardsState.reduce((acc, card) => acc + card.counter, 0),
    setFavoritesCounterSelector: sliceState =>
      sliceState.cardsState.filter(c => c.isFavorites && !c.isModified).length
  },

  reducers: creators => {
    const saveToLocalStorage = (basket: Card[]) => {
      localStorage.setItem('cards', JSON.stringify(basket))
    }

    return {
      saveCards: creators.reducer((state, action: PayloadAction<Card[]>) => {
        state.cardsState = action.payload.map(el => ({
          ...el,
          isModified: false
        }))
      }),
      increaseOrDecreaseTheCounter: creators.reducer(
        (
          state,
          action: PayloadAction<{
            id: string
            functionToIncreaseOrDecreaseTheCounter: (counter: number) => number
          }>
        ) => {
          state.cardsState = state.cardsState.map(el =>
            el._id === action.payload.id
              ? {
                  ...el,
                  counter:
                    action.payload.functionToIncreaseOrDecreaseTheCounter(
                      el.counter
                    )
                }
              : el
          )
          saveToLocalStorage(state.cardsState)
        }
      ),
      updateCardProperty: creators.reducer(
        (
          state,
          action: PayloadAction<{
            id: string
            property: string
            value: any
          }>
        ) => {
          state.cardsState = state.cardsState.map(el =>
            el._id === action.payload.id
              ? { ...el, [action.payload.property]: action.payload.value }
              : el
          )
          saveToLocalStorage(state.cardsState)
        }
      )
    }
  }
})

export const { saveCards, increaseOrDecreaseTheCounter, updateCardProperty } =
  rootSlice.actions

export const {
  setCardsStateSelector,
  setBasketCounterSelector,
  setFavoritesCounterSelector
} = rootSlice.selectors
