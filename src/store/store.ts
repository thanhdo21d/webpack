import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import configSlice from './slice/LanguageSlice'
import toggleShowDrawerSlice from './slice/toggleShowDrawer'

export const store = configureStore({
  reducer: {
    // language
    Config: configSlice.reducer,
    // toggle drawer
    toggleShowDrawer: toggleShowDrawerSlice.reducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
