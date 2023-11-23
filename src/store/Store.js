import { configureStore } from "@reduxjs/toolkit";
import AddtoCartSlice from './AddtoCartSlice'
import ProductSlice from "./ProductSlice";
export const store = configureStore({
    reducer:{
        AddtoCartSlice:AddtoCartSlice,
        ProductSlice:ProductSlice
    }
})

