import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../Types/PostType';

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    likePost(state, action: PayloadAction<number>) {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    dislikePost(state, action: PayloadAction<number>) {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) {
        post.dislikes += 1;
      }
    },
  },
});

export const { setPosts, likePost, dislikePost } = reactionsSlice.actions;
export default reactionsSlice.reducer;