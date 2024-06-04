import { createAppSlice } from '@/common/utils/create-app-slice'
import { PayloadAction } from '@reduxjs/toolkit'
import { Card } from '@/app/api/cards/type'

// Функция для получения данных из Local Storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cards')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

// Функция для сохранения данных в Local Storage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    if (serializedState) {
      localStorage.setItem('cards', serializedState)
    } else {
    }
  } catch (error) {
    // Обработка ошибок сохранения
  }
}

const initialState = {
  cards: [
    {
      _id: '',
      title: '',
      price: 0,
      discount: 0,
      hrefIng: null,
      favorites: false,
      basket: false
    }
  ]
}

export const cardsSlice = createAppSlice({
  name: 'cards',
  initialState,
  selectors: {
    cardsSelectors: sliceState => sliceState.cards
  },
  reducers: creators => {
    return {
      setCards(state, action: PayloadAction<Card[]>) {
        saveState(state) // Сохраняем состояние в Local Storage при обновлении карточек
        state.cards = action.payload
      },
      setNewBasketStatus(
        state,
        action: PayloadAction<{ id: string; status: boolean }>
      ) {
        const { id, status } = action.payload
        const newState = {
          ...state,
          cards: state.cards.map((card: Card) =>
            card._id === id ? { ...card, basket: !status } : card
          )
        }
        saveState(newState) // Сохраняем состояние в Local Storage при обновлении статуса корзины
        return newState
      }
    }
  }
})

export const { setCards, setNewBasketStatus, sevInBasketArray } =
  cardsSlice.actions
