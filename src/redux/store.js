import {configureStore} from "@reduxjs/toolkit";
import placeHolderReducer from "./slice/transitionSlice";
import inputReducer from "./slice/inputSlice";

export default configureStore({
    reducer: {
        placeHolder: placeHolderReducer,
        inputHolder: inputReducer
    },
})