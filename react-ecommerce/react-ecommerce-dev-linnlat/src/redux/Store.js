import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./features/products/ProductSlice";

export const store = configureStore(
    {
        //store slice
        reducer: {
            products: productsReducer,
        }
    }
)