import { PayloadAction, createSlice } from '@reduxjs/toolkit'
interface ItoggleShowDrawer {
  open: boolean
}
const initialState: ItoggleShowDrawer = {
  open: false
}
const toggleShowDrawerSlice = createSlice({
  name: 'toggleDrawer',
  initialState,
  reducers: {
    setActiveDrawer: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    }
  }
})

export const { setActiveDrawer } = toggleShowDrawerSlice.actions
export default toggleShowDrawerSlice
