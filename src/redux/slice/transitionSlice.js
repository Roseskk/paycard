import { createSlice } from "@reduxjs/toolkit";

export const placeHolderSlice = createSlice({
    name: 'placeHolder',
    initialState:{
        value: '',
        mm: '',
        yy: ''
    },
    reducers: {
        animate: (state) => {
            state.value = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        },
        animateMM: (state) => {
            state.mm = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        },
        animateYY: (state) => {
            state.yy = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        }
    }
})

export const {animate,animateMM,animateYY}= placeHolderSlice.actions

export default placeHolderSlice.reducer
