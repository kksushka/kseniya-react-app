import { Layout } from "../Components/Layout/Layout";
import PostCardList from "../Components/Posts/PostCardList";


function PostsPage() {
  return (
    <Layout title="Posts">
      <PostCardList />
    </Layout>
  );
}

export default PostsPage;
