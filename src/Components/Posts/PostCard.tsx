import type { Post } from '../Types/PostType';
import '../Layout/Layout.css'

export interface PostProps {
    post: Post;
}

const PostCard = ({ post:{ id, image, text, date, lesson_num, title, author }}: PostProps) => {
    return (
        <div className="post" key={id}>
            <div className='post__image-wrapper'>
                {image && <img src={image} alt={title} className='post__image' />}
            </div>
            <div className="post__content">
                <h2 className="post__title">{title}</h2>
                <p className="post__text">{text}</p>
                <div className="post__meta">
                    <p className="post__lesson">Lesson: {lesson_num}</p>
                    <p className="post__author">Author ID: {author}</p>
                    <p className="post__date">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard;