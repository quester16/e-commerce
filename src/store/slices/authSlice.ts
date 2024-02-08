import { createSlice } from "@reduxjs/toolkit";

const initialState: { isAuth: boolean } = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
