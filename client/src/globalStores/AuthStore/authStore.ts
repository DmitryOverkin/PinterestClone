import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: null | {
    id: number;
    email: string;
  };
  token: string | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuth: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    loginError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  logout
} = authSlice.actions;

export default authSlice.reducer;