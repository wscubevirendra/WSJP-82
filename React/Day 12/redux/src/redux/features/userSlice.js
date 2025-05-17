import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { name: "virendra" },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        Login: (state) => {
            console.log(state.value)
        },
       
    },
})

// Action creators are generated for each case reducer function
export const { Login} = userSlice.actions

export default userSlice.reducer