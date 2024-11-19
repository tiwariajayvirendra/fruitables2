import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./category.reducer";
import { productReducer } from "./product.reducer"; // Make sure to import the product reducer

export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer, // Add the product reducer to the combined reducers
});
