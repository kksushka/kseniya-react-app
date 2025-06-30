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
        <div className="post-card" key={id}>
            <div className='post-card-image-wrapper'>
                {image && <img src={image} alt={title} className='post-card__image' />}
            </div>
            <div className="post-card__content">
                <h2 className="post-card__title">{title}</h2>
                <p className="post-card__text">{text}</p>
                <div className="post-card__meta">
                    <p className="post-card__lesson">Lesson: {lesson_num}</p>
                    <p className="post-card__author">Author ID: {author}</p>
                    <p className="post-card__date">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;