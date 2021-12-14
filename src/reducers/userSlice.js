import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUserRequest(state, actions) {
      state.isLoading = true;
      
    },
    createUserSuccess(state, actions) {
      state.isLoading = false;
      state.users.push(actions.payload);
      
    },
    createUserError(state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});
export const { createUserRequest, createUserSuccess, createUserError } = userSlice.actions;
export default userSlice.reducer;
