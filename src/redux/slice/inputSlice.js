import {createSlice} from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name: 'inputHandler',
    initialState: {
        value: ''
    },
    reducers: {
        firstInputHandler:(state,action) => {
            console.log('payload',action)
        }
    }
})

export const {firstInputHandler} = inputSlice.actions

export default inputSlice.reducer