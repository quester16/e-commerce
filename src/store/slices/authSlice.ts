import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IUser = {
  email: null,
  token: null,
  id: null,
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
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
