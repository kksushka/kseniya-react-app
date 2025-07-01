
import PostCard, { type PostProps } from './PostCard';

interface PostCardListProps {
    posts: PostProps[];
}

const PostCardList = ({ posts }: PostCardListProps) => {
    return (
        <div className="post__list">
            {posts.map(post => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
};

export default PostCardList;