import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./category.reducer";

export const rootReducer=combineReducers(
    {
        category: categoryReducer
    }
)