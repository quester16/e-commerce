import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productSlice.ts";
import auth from "./slices/authSlice.ts";

const store = configureStore({
  reducer: { products, auth },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
