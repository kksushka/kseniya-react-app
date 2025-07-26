// src/Store/Slices/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  loading: boolean;
  error: string | null;
  registered: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  registered: false,
};

// thunk регистрации
export const registerUser = createAsyncThunk<
  void,
  UserData,
  { rejectValue: string }
>(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://studapi.teachmeskills.by/api/users/register', userData);
       console.log('Registration response:', response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.detail || 'Registration failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetRegistration(state) {
      state.registered = false;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.registered = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error occurred';
      });
  },
});

export const { resetRegistration } = authSlice.actions;
export default authSlice.reducer;
