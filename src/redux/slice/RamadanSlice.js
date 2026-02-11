import { createSlice } from '@reduxjs/toolkit'

export const RamadanSlice = createSlice({
    name: 'ramadan',
    initialState: {
        details: []
    },
    reducers: {
        add: (state, action) => {
            state.details.push(action.payload)
            // console.log(state.details);
        },
        edit: (state, action) => {
            const { index, updatedData } = action.payload
            state.details[index] = updatedData
        },
        del: (state, action) => {
            state.details.splice(action.payload, 1)
        }
    }
})

export const { add, edit, del } = RamadanSlice.actions;
export default RamadanSlice.reducer