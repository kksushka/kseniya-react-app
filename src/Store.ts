import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Slices/themeSlice'; 
import postReducer from './Slices/postSlice'; 
import allPostsReducer from './Slices/allPostsSlice';   // Для списка всех постов
import selectedPostReducer from './Slices/SelectedPostSlice'
import profileReducer from './Slices/ProfileSlice'
import { useDispatch, useSelector } from 'react-redux';
import usersReducer from './Slices/UsersSlice'
import authReducer from './Slices/authSlice'
import { usersApi } from './Slices/query/usersApi';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    post: postReducer,
    posts: allPostsReducer,
    selectedPost: selectedPostReducer,
    profile: profileReducer,
    users: usersReducer,

    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>   //возвращаем массив middleware
    getDefaultMiddleware().concat(usersApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

