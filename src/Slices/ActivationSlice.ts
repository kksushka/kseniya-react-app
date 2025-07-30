
import { createSlice } from '@reduxjs/toolkit';
import { activateUser } from './activationThunk';
import type { RootState } from '../Store';

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
        state.error = action.payload as string || 'Activation error';
      })
  },
});

export const { resetActivationState } = activationSlice.actions;

export const isUserActivated = (state: RootState) => state.activation.success;
export const selectActivationError = (state:RootState) =>state.activation.error;
export const selectActivationLoading = (state:RootState) => state.activation.loading;

export default activationSlice.reducer;
