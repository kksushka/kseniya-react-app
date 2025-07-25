import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Slices/themeSlice';
import postReducer from './Slices/postSlice';
import allPostsReducer from './Slices/allPostsSlice';   // Для списка всех постов
import selectedPostReducer from './Slices/SelectedPostSlice'


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    post: postReducer,
    posts: allPostsReducer,
    selectedPost: selectedPostReducer,
  },
});

// Типы для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



