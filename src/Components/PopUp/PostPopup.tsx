
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../Store';
import { clearSelectedPost } from '../../Slices/postSlice';

const PostPopup = () => {
  const post = useSelector((state: RootState) => state.post.selectedPost);
  const dispatch = useDispatch();

  if (!post) return null;

  return (
    <div className="popup" onClick={() => dispatch(clearSelectedPost())}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="popup__close-btn"
          onClick={() => dispatch(clearSelectedPost())}
        >
          ×
        </button>

        <div className="popup__content">
          <div className="popup__info">
            <h2 className="popup__title">{post.title}</h2>
            <p className="popup__text">{post.text}</p>
            
            <div className="popup__meta">
              <p><strong>Lesson:</strong> {post.lesson_num}</p>
              <p><strong>Author ID:</strong> {post.author}</p>
              <p><strong>Date:</strong> {post.date}</p>
            </div>
          </div>

          {post.image && (
            <div className="popup__image-wrapper">
              <img src={post.image} alt={post.title} className="popup__image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPopup;