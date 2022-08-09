import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  username: null,
  name: null,
  phone: null,
  address: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    procAuth: (state, action) => {
      if (action.payload.type === "login") {
        state = action.payload.data;
      } else if (action.payload.type === "logout") {
        state = initialState;
      }

      return state;
    },
  },
});

export const { procAuth } = userSlice.actions;

export default userSlice.reducer;
