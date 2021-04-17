import { configureStore } from '@reduxjs/toolkit'
import checkDigitReducer from './ducks/checkDigit'

const store = configureStore({
    reducer: {
        checkDigit: checkDigitReducer
    },
})

export default store