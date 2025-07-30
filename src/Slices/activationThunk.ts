import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ActivateUserData } from "../Types/User";
import { handleThunkErrors } from "../utils/apiUtils";
import instance from "../api/api";

export const activateUser = createAsyncThunk(
    'users/activateUser',
    async (data: ActivateUserData, { rejectWithValue }) => {
     
        try{
        const response = await instance.post(
            '/auth/users/activation/',
           {...data}
           
        );
        return response.data;
    } catch(error: unknown){
        return handleThunkErrors(error, rejectWithValue);
    }
  } 
)