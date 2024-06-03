import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '@/lib/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: null | string
}>()
