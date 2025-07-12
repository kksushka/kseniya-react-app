import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Slices/themeSlice';
import postReducer from './Slices/postSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    post: postReducer,
  },
});

// Типы для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
