import { Link } from 'react-router-dom';
import type { Post } from '../../Types/PostType';
import '../Layout/Layout.css';

interface PostProps {
    post: Post;
}

const PostCard = ({ post }: PostProps) => {
    return (
        <Link to={`/posts/${post.id}`} className="post-link">
            <div className="post">
                {post.image && (
                    <div className="post__image-wrapper">
                        <img src={post.image} alt={post.title} className="post__image" />
                    </div>
                )}
                <div className="post__content">
                    <h2 className="post__title">{post.title}</h2>
                    <p className="post__text">{post.text.substring(0, 100)}...</p>
                    <div className="post__meta">
                        <span>Lesson № {post.lesson_num}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;