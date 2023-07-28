import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";
const initialState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    set: (state, action: PayloadAction<UserState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.username = undefined;
      state.token = undefined;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.user };
    },
  },
});

/* Types */
export interface UserState {
  username?: string;
  token?: string;
}
