import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../Types/PostType';

interface PostState {
  selectedPost: Post | null;
  selectedImage: string | null;
}

const initialState: PostState = {
  selectedPost: null,
  selectedImage: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setSelectedPost(state, action: PayloadAction<Post>) {
      state.selectedPost = action.payload;
    },
    clearSelectedPost(state) {
      state.selectedPost = null;
    },
    setSelectedImage(state, action: PayloadAction<string>) {
      state.selectedImage = action.payload;
    },
    clearSelectedImage(state) {
      state.selectedImage = null;
    },
  },
});

export const {
  setSelectedPost,
  clearSelectedPost,
  setSelectedImage,
  clearSelectedImage,
} = postSlice.actions;

export default postSlice.reducer;