import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:{name: null, email: null}, //додала для прикладу тільки 2 пункти, треба буде додати і інші
  token: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers:{
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  }
})

export const authUserReducer = authSlice.reducer;
