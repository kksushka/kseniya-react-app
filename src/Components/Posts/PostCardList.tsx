import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import '../Layout/Layout.css'
import type { Post } from '../../Types/PostType';

const PostCardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=9')
      .then(res => res.json())
      .then(data => setPosts(data.results)); 
  }, []);

  return (
    <div className="post__list">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCardList;