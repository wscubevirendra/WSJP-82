import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        data: null,
        logingAt: null
    },
    reducers: {
        setAdmin: (state, current) => {
            state.data = current.payload.admin
            state.logingAt = current.payload.loginAt
        },
        removeAdmin: (state) => {
            state.data = null,
            state.logingAt = null
            localStorage.removeItem("admin")
            localStorage.removeItem("logingAt")
        }

    }
})

// Action creators are generated for each case reducer function
export const { setAdmin, removeAdmin } = adminSlice.actions

export default adminSlice.reducer