import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./feature/productSlice";

export const rootReducer = combineReducers({
  products: ProductReducer,
});
