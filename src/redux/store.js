import {configureStore} from "@reduxjs/toolkit";
import placeHolderReducer from "./slice/transitionSlice";
import inputReducer from "./slice/inputSlice";
import thunk from "redux-thunk";
import colorHandler from "./slice/colorSlice";


export default  configureStore({
    reducer: {
        placeHolder: placeHolderReducer,
        inputHolder: inputReducer,
        colorHolder: colorHandler
    },
    middleware: [thunk]
})