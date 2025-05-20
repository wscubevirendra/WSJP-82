import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loginAt: null,
        token: null
    },
    reducers: {
        setUser: (state, { payload }) => {
            console.log(payload)
        },

    }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer