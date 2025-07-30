import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import instance from "../api/api";
import { setIsAuth } from "./ProfileSlice";
import { store } from "../Store";
import type { CreateJwtData, JwtResponse, RefreshJwtRequest, RefreshJwtResponse } from "../Types/auth";
import { handleThunkErrors } from "../utils/apiUtils";

export const createJwt = createAsyncThunk(
    'users/createJwt',
    async ({ data, navigate }: { data: CreateJwtData, navigate: () => void }, {rejectWithValue}) => {
        try {
            const response = await instance.post<CreateJwtData, AxiosResponse<JwtResponse>>(
                '/auth/jwt/create/',
                { ...data }
            );
            sessionStorage.setItem('access', response.data.access);
            sessionStorage.setItem('refresh', response.data.refresh);
            navigate();
            return response.data;
        } catch (error: unknown) {
            return handleThunkErrors(error, rejectWithValue)
        }
    }
)
export const refreshJwt = createAsyncThunk(
    'users/refreshJwt',
    async () => {
        try {
            const refresh = sessionStorage.getItem('refresh')
            const response = await instance.post<RefreshJwtRequest, AxiosResponse<RefreshJwtResponse>>(
                '/auth/jwt/refresh/',
                { refresh }  //refresh:refresh

            );
            sessionStorage.setItem('access', response.data.access);

            location.reload();
            store.dispatch(setIsAuth(true))
            return response.data;
        } catch (error: unknown) {
            console.log(error);
            sessionStorage.clear(); //removeItem!
            location.href='/signin';
        }
    }
)