import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Post } from '../Types/PostType';

interface SelectedPostState {
  post: Post | null;
  loading: boolean;
  error: string | null;
}

const initialState: SelectedPostState = {
  post: null,
  loading: false,
  error: null,
};

export const fetchPostById = createAsyncThunk<Post, string>(
  'selectedPost/fetchPostById',
  async (id) => {
    const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`);
    if (!response.ok) {
      throw new Error('Post not found');
    }
    return await response.json();
  }
);

const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default selectedPostSlice.reducer;
