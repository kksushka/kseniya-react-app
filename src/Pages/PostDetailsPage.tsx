import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Post } from '../Types/PostType';
import Layout from '../Components/Layout/Layout';

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
                setLoading(false);
            });
    }, [id]);

    if (loading)
        return <p>Loading...</p>

    if (!post) return <p>Post not found.</p>

    return (
        <Layout title={'Details'}>
            <div className="post__details">
                <h2 className="post__details__title">{post.title}</h2>
                {post.image && (
                    <div className="post__details__image-wrapper">
                        <img src={post.image} alt={post.title} className="post__details__image" />
                    </div>
                )}
                <div className='post__details__content'>
                    <p className="post__details__text">{post.text}</p>
                    <p className="post__details__meta">Lesson: {post.lesson_num}</p>
                    <p className="post__details__meta">Author: {post.author}</p>
                    <p className="post__details__meta">Date: {post.date}</p>
                </div>
            </div>
            </Layout>
    );
}

export default PostPage;
