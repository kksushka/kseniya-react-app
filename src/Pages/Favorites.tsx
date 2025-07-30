
import { useSelector } from 'react-redux';
import type { RootState } from '../Store';
import PostCard from '../Components/Posts/PostCard';

const FavoritesPage = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const favoritePosts = posts.filter(post => post.isFavorite);

  return (
    <>
      {favoritePosts.length === 0 ? (
        <p className='favorites__text'>No favorite posts yet.</p>
      ) : (
        <div className="post__list">
          {favoritePosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
      </>
  );
};

export default FavoritesPage;