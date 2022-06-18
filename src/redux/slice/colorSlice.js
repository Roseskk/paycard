import {createSlice} from "@reduxjs/toolkit";
import Utility from "../../service/Utility";

export const colorSlice = createSlice({
    name:'color',
    initialState:{
        color: '',
        background: 'bg-black'
    },
    reducers:{
        colorHandler:(state=0,{payload}) => {
            const number = payload.firstNumber;
            const colorHandler = new Utility()
            colorHandler.ColorHandler({state,number})
        },
        backgroundHandler: (state = 0,{payload})=> {
            const number = payload.firstNumber;
            const colorHandler = new Utility()
            colorHandler.ColorBackground({state,number})
        }
    }
})

export const {colorHandler,backgroundHandler} = colorSlice.actions

export default colorSlice.reducer