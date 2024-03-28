import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComments } from "../../types";
import axios from "axios";

export interface IUser {
  email: string | null;
  token: string | null;
  id: string | null;
  comments: IComments[];
  commentLoading: boolean;
  commentError: boolean;
}

const initialState: IUser = {
  email: null,
  token: null,
  id: null,
  comments: [],
  commentLoading: false,
  commentError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.token = null;
      state.email = null;
      state.id = null;
    },
    addToComments: (state, action: PayloadAction<IComments>) => {
      state.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsThunk.pending, (state) => {
        state.commentLoading = true;
        state.commentError = false;
      })
      .addCase(fetchCommentsThunk.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.commentLoading = false;
        state.commentError = false;
      })
      .addCase(fetchCommentsThunk.rejected, (state) => {
        state.commentError = true;
        state.commentLoading = false;
      });
  },
});

export const { setUser, removeUser, addToComments } = authSlice.actions;
export default authSlice.reducer;

export const fetchCommentsThunk = createAsyncThunk(
  "auth/fetchComment",
  async function () {
    const req = await axios.get(
      "https://6418782c29e7e36438e98817.mockapi.io/comments",
    );
    return req.data;
  },
);
