import { createSlice } from '@reduxjs/toolkit'
// import { useState } from 'react'
const themeSlice = createSlice({
    name: 'theme',
    initialState: { val: false },
    // initialState: {const [isDark,setIsDark]=useState(false)},
    reducers: {
        dark: (state) => { state.val = !state.val },
        // dark: (state)=>{const[dark,setIsNotDark]=useState(false)},
        //    light: (state)=>{!state.val}
    }
})
export const { dark } = themeSlice.actions;
// export const {dark,setIsNotDark}=themeSlice.actions;
export default themeSlice.reducer