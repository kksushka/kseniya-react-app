import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./usersThunks";
import type { RootState } from "../Store";

type UsersState = {
    isSuccess: boolean,
    isActivated: boolean,
    error: string | null,
    loading: boolean,
}

const initialState: UsersState = {
    isSuccess: false,
    isActivated: false,
    error: null,
    loading: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // createUser cases
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state) => {
                state.loading = false;
                state.isSuccess = true;
            })
            .addCase(createUser.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string || "Registration failed"
            })
    }
})
export const {clearError} = usersSlice.actions;

export const isUserCreated = (state: RootState) => state.users.isSuccess;
export const isUserActivated = (state: RootState) => state.users.isActivated;
export const selectActivationError = (state:RootState) =>state.users.error;
export const selectUsersLoading = (state:RootState) =>state.users.loading;

export default usersSlice.reducer;