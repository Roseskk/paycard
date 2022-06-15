import {createSlice} from "@reduxjs/toolkit";
import Utility from "../../service/Utility";

export const inputSlice = createSlice({
    name: 'inputHandler',
    initialState: {
        name: '',
        color:'',
        firstValue:'',
        secondValue:'',
        thirdValue:'',
        fourthValue:''
    },
    reducers: {
        firstLetterHandler:(state,{payload}) => {
            const number = payload.firstNumber
            const nameHandler = new Utility()
            nameHandler.NameHandler({state,number})
        },

    }
})

export const {firstLetterHandler} = inputSlice.actions

export default inputSlice.reducer