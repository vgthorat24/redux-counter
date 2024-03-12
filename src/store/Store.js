import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "../reducers/Reducers";

export const Store=configureStore({
    reducer:{
        counter:conterReducer,
    }
})