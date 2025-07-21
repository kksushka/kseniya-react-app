import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import '../Layout/Layout.css'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../Store';
import { fetchAllPosts } from '../../Slices/allPostsSlice';

const PostCardList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search__input"
      />
      {loading && <p>Loading posts...</p>}
      {error && <p>Error: {error}</p>}

      <div className="post__list">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostCardList;

