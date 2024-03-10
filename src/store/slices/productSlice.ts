import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CardProps } from "../../types";

interface productState {
  loading: boolean;
  error: boolean;
  products: CardProps[];
  toCart: [];
  favorites: CardProps[];
}

const initialState: productState = {
  loading: false,
  error: false,
  products: [],
  toCart: [],
  favorites: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
      state.favorites = state.favorites.filter(
        (item, i, arr) => arr.findIndex((p) => p.id === item.id) === i,
      );
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
export const { addFavorites, removeFavorite } = productSlice.actions;

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
