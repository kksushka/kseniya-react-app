
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ActivationState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ActivationState = {
  loading: false,
  success: false,
  error: null,
};

export const activateUser = createAsyncThunk<
  void,
  { uid: string; token: string },
  { rejectValue: string }
>(
  'activation/activateUser',
  async ({ uid, token }, { rejectWithValue }) => {
    try {
      await axios.post('https://studapi.teachmeskills.by/api/users/activation', {
        uid,
        token,
      });
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.detail || 'Activation failed');
    }
  }
);

const activationSlice = createSlice({
  name: 'activation',
  initialState,
  reducers: {
    resetActivationState(state) {
      state.loading = false;
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(activateUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(activateUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(activateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Activation error';
      });
  },
});

export const { resetActivationState } = activationSlice.actions;

export default activationSlice.reducer;
