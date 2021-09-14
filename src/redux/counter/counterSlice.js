import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increament: (state) => {
            state.value = state.value + 1
        },
        decreament: (state) => {
            state.value = state.value - 1
        },
        increamentAmount: (state, action) => {
            state.value = Number(action.payload) + state.value
        }
    },
})

export const {increament,decreament,increamentAmount} = counterSlice.actions
export default counterSlice.reducer