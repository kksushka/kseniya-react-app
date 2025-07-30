import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/api";
import type { CreateUser } from "../Types/User";
import type { UseFormSetError } from "react-hook-form";
import { handleThunkErrors } from "../utils/apiUtils";

export const createUser = createAsyncThunk(
    'users/createUser',
    async (
        state: { data: Omit<CreateUser, 'confirmPassword'>, setError: UseFormSetError<CreateUser> },
        { rejectWithValue },
    ) => {
        try{
            const response = await instance.post(
                '/auth/users/',
            {...state.data} 
            );
            
            return response.data;
    } catch(error: unknown){
        return handleThunkErrors(error, rejectWithValue, state.setError);
    }
  } 
)