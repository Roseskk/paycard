import {createSlice} from "@reduxjs/toolkit";
import Utility from "../../service/Utility";

export const colorSlice = createSlice({
    name:'color',
    initialState:{
        color: ''
    },
    reducers:{
        colorHandler:(state,{payload}) => {
            const number = payload.firstNumber;
            const colorHandler = new Utility()
            colorHandler.ColorHandler({state,number})
        }
    }
})

export const {colorHandler} = colorSlice.actions

export default colorSlice.reducer