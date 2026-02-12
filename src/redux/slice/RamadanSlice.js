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
            const { day, updatedData } = action.payload
            const index = state.details.findIndex(
                item => item.day === day
            )
            if (index !== -1) {
                state.details[index] = updatedData
            }
        },
        del: (state, action) => {
            state.details = state.details.filter(
                item => item.day !== action.payload
            )
        }
    }
})

export const { add, edit, del } = RamadanSlice.actions;
export default RamadanSlice.reducer
