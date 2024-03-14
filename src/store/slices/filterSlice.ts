import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateProps {
  loading: boolean;
  error: boolean;
  categories: [];
  selectedFilter: {
    price: string;
    category: string;
  };
}

const initialState: initialStateProps = {
  loading: false,
  error: false,
  categories: [],
  selectedFilter: {
    price: "",
    category: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    toDefault: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesThunk.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default filterSlice.reducer;
export const { getFilter, toDefault } = filterSlice.actions;

export const fetchCategoriesThunk = createAsyncThunk(
  "filter/fetchCategories",
  async () => {
    try {
      const req = await axios.get(
        "https://fakestoreapi.com/products/categories",
      );
      return req.data;
    } catch (e) {
      console.log(e);
    }
  },
);
