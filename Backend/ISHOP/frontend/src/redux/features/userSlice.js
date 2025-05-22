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
            state.data = payload.data;
            state.loginAt = new Date();
            state.token = payload.token;

            localStorage.setItem("user", JSON.stringify(state));
        },

        lsToUser: (state) => {
            const lsCart = JSON.parse(localStorage.getItem("user"));
            if (lsCart) {
                state.data = lsCart.data;
                state.token = lsCart.token;
                state.loginAt == lsCart.loginAt;
            }


        },
        logoutUser: (state) => {
            state.data = null;
            state.token = null;
            state.loginAt = null;

            localStorage.removeItem("user")

        }

    }
})

// Action creators are generated for each case reducer function
export const { setUser, lsToUser,logoutUser } = userSlice.actions

export default userSlice.reducer