import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  email: string | null;
  accessToken: string | null;
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
      state.accessToken = action.payload.token;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.accessToken = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
