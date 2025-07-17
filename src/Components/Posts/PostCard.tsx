import { useDispatch } from 'react-redux';
import { setSelectedPost, setSelectedImage } from '../../Slices/postSlice';
import type { Post } from '../../Types/PostType';
import '../Layout/Layout.css';
import { dislikePost, likePost } from '../../Slices/allPostsSlice';

export interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
  const dispatch = useDispatch();

  return (
    <div className="post">
      <div
        className="post__image-wrapper"
        onClick={() => post.image && dispatch(setSelectedImage(post.image))}
        style={{ cursor: post.image ? 'pointer' : 'default' }}
      >
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="post__image"
          />
        )}
      </div>

      <div className="post__content">
        <h2 className="post__title">{post.title}</h2>
        <p className="post__text">{post.text}</p>

        <div className="post__meta">
          <p className="post__lesson">Lesson: {post.lesson_num}</p>
          <p className="post__author">Author ID: {post.author}</p>
          <p className="post__date">{post.date}</p>
        </div>
        <button
          onClick={() => dispatch(setSelectedPost(post))}
          className="post__preview-btn"
        >
          Preview
        </button>
          <div className="post__reactions">
          <button onClick={() => dispatch(likePost(post.id))}>👍 {post.likes}</button>
          <button onClick={() => dispatch(dislikePost(post.id))}>👎 {post.dislikes}</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

