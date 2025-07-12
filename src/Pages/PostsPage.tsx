import Layout from '../Components/Layout/Layout';
import ImagePopup from '../Components/PopUp/ImagePopup';
import PostPopup from '../Components/PopUp/PostPopup';
import PostCardList from '../Components/Posts/PostCardList';

const PostsPage = () => {
  return (
    <Layout title="Posts">
      <PostCardList />
      <PostPopup />
      <ImagePopup />
    </Layout>
  );
};

export default PostsPage;
