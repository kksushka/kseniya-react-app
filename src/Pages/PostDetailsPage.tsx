import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../Store';
import { fetchPostById } from '../Slices/SelectedPostSlice';

function PostDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { post, loading, error } = useSelector((state: RootState) => state.selectedPost);

    useEffect(() => {
        if (id) dispatch(fetchPostById(id));
    }, [id, dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!post) return <p>Post not found.</p>;

    return (
        <>
            <div className="post__details">
                <h2 className="post__details__title">{post.title}</h2>
                {post.image && (
                    <div className="post__details__image-wrapper">
                        <img src={post.image} alt={post.title} className="post__details__image" />
                    </div>
                )}
                <div className="post__details__content">
                    <p className="post__details__text">{post.text}</p>
                    <p className="post__details__meta">Lesson: {post.lesson_num}</p>
                    <p className="post__details__meta">Author: {post.author}</p>
                    <p className="post__details__meta">Date: {post.date}</p>
                </div>
            </div>
        </>
    );
}

export default PostDetailsPage;
