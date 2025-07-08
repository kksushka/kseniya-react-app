import { useEffect, useState } from 'react';
import type { Post } from '../../Types/PostType';
import PostCard from '../Posts/PostCard';

const SearchPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=9')
      .then(res => res.json())
      .then(data => setPosts(data.results));
  }, []);

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
      <div className="post__list">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
