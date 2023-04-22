import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
