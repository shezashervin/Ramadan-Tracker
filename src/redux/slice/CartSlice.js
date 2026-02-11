import { createSlice } from "@reduxjs/toolkit";
export const CartSlice=createSlice({
    name: 'CartShopping',
    initialState: {value:0
    },
    reducers:{
        add: (state)=>{state.value+=1},
        sub: (state)=>{state.value-=1},
        reset: (state)=>{state.value=0}
    }
})
export const {add,sub,reset}=CartSlice.actions
export default CartSlice.reducer