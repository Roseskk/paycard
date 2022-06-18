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
        fourthValue:'',
        monthValue: '',
        yearValue: ''
    },
    reducers: {
        firstLetterHandler:(state=0,{payload}) => {
            const number = payload.firstNumber
            const nameHandler = new Utility()
            nameHandler.NameHandler({state,number})
        },
        firstInput:(state=0,{payload}) => {
            const newState = payload.value
            const inputCheck = new Utility()
            inputCheck.InputValidator({mutate: state,newState, type:'first'})
        },
        secondInput:(state=0,{payload}) => {
            const newState = payload.value
            const inputCheck = new Utility()
            inputCheck.InputValidator({mutate: state,newState, type:'second'})
        },
        thirdInput:(state=0,{payload}) => {
            const newState = payload.value
            const inputCheck = new Utility()
            inputCheck.InputValidator({mutate: state,newState, type:'third'})
        },
        fourthInput:(state=0,{payload}) => {
            const newState = payload.value
            const inputCheck = new Utility()
            inputCheck.InputValidator({mutate: state,newState, type:'fourth'})
        },
        monthValue:(state=0,{payload}) => {
            const newState = payload.value
            const dateCheck = new Utility()
            dateCheck.DateValidator({mutate: state, newState,type:'month'})
        },
        yearValue:(state=0,{payload}) => {
            const newState = payload.value
            const dateCheck = new Utility()
            dateCheck.DateValidator({mutate: state, newState,type:'year'})
        }
    }
})

export const {firstLetterHandler,firstInput,secondInput,thirdInput,fourthInput,monthValue,yearValue} = inputSlice.actions

export default inputSlice.reducer