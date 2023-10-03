import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../components/product-list/productsSlice.js";
import filterSlice from "../components/adCarusel/filterSlice.js";

const store = configureStore({
    reducer: { productSlice, filterSlice }
})

export default store;