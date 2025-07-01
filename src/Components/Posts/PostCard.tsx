
import './PostCard.css'

export interface PostProps {
    id: number,
    image?: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
}

const Post = ({ id, image, text, date, lesson_num, title, author }: PostProps) => {
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

export default Post;