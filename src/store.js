import {configureStore} from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteSlice";
import filterReducer from "./reducers/filterSlice";

let store = configureStore({
    reducer : {
        anecdotes : anecdoteReducer,
        filter : filterReducer
    }
})
console.log(store.getState())
export default store;