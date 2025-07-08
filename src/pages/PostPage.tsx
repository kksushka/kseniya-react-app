import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Post } from '../Types/PostType';

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (!post) return <div>Пост не найден</div>;

  return (
    <article className="post__page">
      <h1>{post.title}</h1>
      {post.image && <img src={post.image} alt={post.title} className="post__page__image" />}
      <p>{post.text}</p>
      <div className="post__page__meta">
        <span>Автор: {post.author}</span>
        <span>Дата: {new Date(post.date).toLocaleDateString()}</span>
      </div>
    </article>
  );
}