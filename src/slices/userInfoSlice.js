import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem("userinfo")? JSON.parse(localStorage.getItem("userinfo")):null,
  },
  reducers: {
    activeuser: (state,action) => {
      state.value=action.payload
        
    },
   
  },
})
export const {activeuser} = userInfoSlice.actions

export default userInfoSlice.reducer