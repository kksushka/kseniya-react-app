import z from "zod"
import Layout from "../Components/Layout/Layout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import './CreatePost.css';
import axios, { AxiosError, type AxiosResponse } from 'axios';
import { useEffect } from "react";

const PostShema = z.object({
    id: z.number(),
    title: z.string().max(5, "The max value is 5 symbols"),
    body: z.string().min(1).max(200),
    userId: z.number(),
})

type Post = z.infer<typeof PostShema>;
type CreatePost = Omit<Post, 'id'>;

interface CreatePostProps {
    post?: Post,
}

export const CreatePost = ({ post }: CreatePostProps) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreatePost>({
        resolver: zodResolver(PostShema.omit({ 'id': true })),
        defaultValues: {
            title: '',
            body: '',
            userId: 1,
        },
    });

    const onSave = async (values: CreatePost) => {
        console.log(values);
        try {
            const { data } = await axios.post<CreatePost, AxiosResponse<Post>>('https://jsonplaceholder.typicode.com/posts',
                { ...values }
            );
            console.log(data);
            alert(`New post with ${data.id} and title ${data.title} has been created`)
            reset();
        } catch (err: unknown) {
            console.log(err as AxiosError);
        }
    }

    useEffect(() => {
        if (post) {
            reset(post)
        }
    }, [post, reset])

    return (
        <Layout title={"Create your post!"}>
            <form onSubmit={handleSubmit(onSave)} className="create-post__form">
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" {...register("title")} className="create-post__title" />
                    <span className="error">{errors.title?.message}</span>
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <input type="body" {...register("body")} className="create-post__input" />
                    <span className="error">{errors.title?.message}</span>
                </div>
                <button type="submit" className="create-post__btn">Submit</button>
            </form>
        </Layout>
    )
}