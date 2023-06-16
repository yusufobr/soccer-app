import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 1500,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
    }
})

export const { increment, decrement } = counterSlice.actions;

export const selectCounter = (state) => state.counter.counter

export default counterSlice.reducer;