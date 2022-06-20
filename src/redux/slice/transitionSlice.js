import { createSlice } from "@reduxjs/toolkit";

export const placeHolderSlice = createSlice({
    name: 'placeHolder',
    initialState:{
        value: '',
        mm: '',
        yy: '',
        secret: ''
    },
    reducers: {
        animate: (state) => {
            state.value = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        },
        show: (state) => {
            state.value = 'translate-y-0 translate-x-0 opacity-100 scale-1'
        },
        animateMM: (state) => {
            state.mm = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        },
        showMM: (state) => {
            state.mm = 'translate-y-0 translate-x-0 opacity-100 scale-1'
        },
        animateYY: (state) => {
            state.yy = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        },
        showYY: (state) => {
            state.yy = 'translate-y-0 translate-x-0 opacity-100 scale-1'
        },
        animateSecret: (state) => {
            state.secret = '-translate-y-3 -translate-x-3 opacity-0 scale-08'
        },
        showSecret: (state) => {
            state.secret = 'translate-y-0 translate-x-0 opacity-100 scale-1'
        }
    }
})

export const {animate,animateMM,animateYY,show,showMM,showYY,animateSecret,showSecret}= placeHolderSlice.actions

export default placeHolderSlice.reducer
