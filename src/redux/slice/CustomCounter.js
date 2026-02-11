import { createSlice } from '@reduxjs/toolkit'

const customCounter = createSlice({
    name: 'CustomCounter',
    initialState: { val: 0 },
    reducers: {
        increase: (state, action) => {
            state.val += Number(action.payload)
            console.log('action:', action);
        },
        decrease: (state, action) => {
            state.val -= action.payload
        },
        reset: (state) => { state.val = 0 }
    }
})

export const { increase, decrease, reset } = customCounter.actions;
export default customCounter.reducer