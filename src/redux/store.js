import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import standingReducer from './api/standingSlice'
import leaguesReducer from './api/leagueSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        standing: standingReducer,
        leagues: leaguesReducer,
    }
})

export default store;