import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CardProps } from "../../types";

interface productState {
  loading: boolean;
  error: boolean;
  products: CardProps[];
  toCart: [];
  favorites: number[];
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
        (item, i, arr) => i === arr.indexOf(item),
      );
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload,
      );
    },
  },
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
