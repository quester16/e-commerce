import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { elements } from "../../types";

interface initialStateProps {
  loading: boolean;
  error: boolean;
  categories: [];
  selectedFilters: elements;
}

const initialState: initialStateProps = {
  loading: false,
  error: false,
  categories: [],
  selectedFilters: {},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilter: (state, action) => {
      state.selectedFilters = action.payload;
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
export const { getFilter } = filterSlice.actions;

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
