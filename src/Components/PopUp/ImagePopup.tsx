import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../Store';
import { clearSelectedImage } from '../../Slices/postSlice';

const ImagePopup = () => {
  const image = useSelector((state: RootState) => state.post.selectedImage);
  const dispatch = useDispatch();

  if (!image) return null;

  return (
    <div className="image-popup" onClick={() => dispatch(clearSelectedImage())}>
      <div className="image-popup__container">
        <button
          className="image-popup__close-btn"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(clearSelectedImage());
          }}
        >
          ×
        </button>
        <div className="image-popup__content">
          <img src={image} alt="Post" />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;