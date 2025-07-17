// import { useEffect, useState } from 'react';
// import PostCard from './PostCard';
// import '../Layout/Layout.css'
// import { useDispatch, useSelector } from 'react-redux';
// import type { AppDispatch, RootState } from '../../Store';
// import { fetchAllPosts } from '../../Slices/allPostsSlice';

// const PostCardList = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { posts, loading, error } = useSelector((state: RootState) => state.posts);
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     dispatch(fetchAllPosts());
//   }, [dispatch]);
//   const filteredPosts = posts.filter(post =>
//     post.title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search posts..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="search__input"
//       />
//       {loading && <p>Loading posts...</p>}
//       {error && <p>Error: {error}</p>}

//       <div className="post__list">
//         {filteredPosts.map(post => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostCardList;


import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../Store';
import { fetchAllPosts } from '../../Slices/allPostsSlice';
import '../Layout/Layout.css';


const PostCardList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);
  const [query, setQuery] = useState('');
  // ✅ 1. Чтение таба из localStorage
  const [activeTab, setActiveTab] = useState<'all' | 'liked' | 'disliked'>(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab === 'liked' || savedTab === 'disliked' || savedTab === 'all') {
      return savedTab;
    }
    return 'all';
  });

  // ✅ 2. Сохранение таба при изменении
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter(post => {
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
    if (activeTab === 'liked') return post.likes > post.dislikes && matchesQuery;
    if (activeTab === 'disliked') return post.dislikes > post.likes && matchesQuery;
    return matchesQuery;
  });

  return (
    <div>
      {/* --- добавлено: табы --- */}
      <div className="tabs">
        <button className='tabs__btn' onClick={() => setActiveTab('all')}>All</button>
        <button className='tabs__btn' onClick={() => setActiveTab('liked')}>👍 Liked</button>
        <button className='tabs__btn' onClick={() => setActiveTab('disliked')}>👎 Disliked</button>
      </div>

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