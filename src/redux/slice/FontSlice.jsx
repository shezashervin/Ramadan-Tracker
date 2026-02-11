import { createSlice } from '@reduxjs/toolkit'
 
const fontSlice = createSlice({
    name: 'FontControl',
    initialState: { value: 16 },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        reset: (state) => { state.value = 16 }
    }
})
export const { increment, decrement, reset } = fontSlice.actions
export default fontSlice.reducer