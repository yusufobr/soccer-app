import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import standingReducer from './api/standingSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        standing: standingReducer,
    }
})

export default store;