import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    activeuser: (state,action) => {
      state.value=action.payload
        
    },
   
  },
})
export const {activeuser} = userInfoSlice.actions

export default userInfoSlice.reducer