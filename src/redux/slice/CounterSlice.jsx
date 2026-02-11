import { createSlice } from '@reduxjs/toolkit'

// creating the slice
const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: { val: 0 },

        reducers: {
            increment: (state) => { state.val += 1 },
            decrement: (state) => { state.val -= 1 },
            reset: (state) => { state.val = 0 },
        }
    }
)

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer