import {configureStore} from "@reduxjs/toolkit";
import placeHolderReducer from "./slice/transitionSlice";
import inputReducer from "./slice/inputSlice";
import colorSlice from "./slice/colorSlice";
import thunk from "redux-thunk";


export default  configureStore({
    reducer: {
        placeHolder: placeHolderReducer,
        inputHolder: inputReducer,
        colorHolder: colorSlice,
    },
    middleware: [thunk]
})