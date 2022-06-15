import { createSlice } from "@reduxjs/toolkit";

export const placeHolderSlice = createSlice({
    name: 'placeHolder',
    initialState:{
        value: ''
    },
    reducers: {
        animate: (state) => {
            state.value = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        },
        hide: (state) => {
            state.value = ''
        }
    }
})

export const {animate,hide}= placeHolderSlice.actions

export default placeHolderSlice.reducer
