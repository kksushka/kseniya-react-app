import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../Store';
import { clearSelectedImage } from '../../Slices/postSlice';

const ImagePopup = () => {
  const image = useSelector((state: RootState) => state.post.selectedImage);
  const dispatch = useDispatch();

  if (!image) return null;

  return (
    <div className="popup" onClick={() => dispatch(clearSelectedImage())}>
      <div className="popup__image-wrapper" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Post" />
        <button onClick={() => dispatch(clearSelectedImage())}>Close</button>
      </div>
    </div>
  );
};

export default ImagePopup;