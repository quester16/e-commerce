import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CardProps } from "../../types";

interface productState {
  loading: boolean;
  error: boolean;
  products: CardProps[];
}

const initialState: productState = {
  loading: false,
  error: false,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = true;
      });
  },
});

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
);
