import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
import  userSlice  from './features/userSlice'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice
    },
})

export default store