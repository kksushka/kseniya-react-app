import ImagePopup from '../Components/PopUp/ImagePopup';
import PostPopup from '../Components/PopUp/PostPopup';
import PostCardList from '../Components/Posts/PostCardList';

const PostsPage = () => {
  return (
    <>
      <PostCardList />
      <PostPopup />
      <ImagePopup />
    </>
  );
};

export default PostsPage;
