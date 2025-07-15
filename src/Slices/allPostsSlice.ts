import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Post } from '../Types/PostType';

interface AllPostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: AllPostsState = {
  posts: [],
  loading: false,
  error: null,
};

// Thunk
export const fetchAllPosts = createAsyncThunk<Post[], void>(
  'posts/fetchAllPosts',
  async () => {
    const res = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=50');
    const data = await res.json();
    return data.results;
  }
);

const AllPostsSlice = createSlice({
  name: 'all posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default AllPostsSlice.reducer;
