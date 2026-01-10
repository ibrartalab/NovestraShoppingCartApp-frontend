import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  userName: null,
  userId: null,
  loading: false,
  error: null,
  success: false, // Added this
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      // Ensure these keys match your .NET JSON response exactly
      state.accessToken = action.payload.accessToken;
      state.userName = action.payload.userName;
      state.userId = action.payload.userId;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.userName = null;
      state.userId = null;
      state.success = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
