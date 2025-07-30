import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Store";
import { setIsAuth } from "../Slices/ProfileSlice";
import { createJwt } from "../Slices/AuthThunk";
import { SignInForm } from "../Components/Forms/SignInForm";
import type { CreateJwtData } from "../Types/auth";

const SignInPage = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleViewPosts = () => {
        dispatch(setIsAuth(true));
        navigate('/posts');
    };

    const onSubmit = ({ email, password }: CreateJwtData) => {
        dispatch(createJwt({
            data: { email, password },
            navigate: handleViewPosts,
        }
        ))
    }

    return (
        <SignInForm onSubmit={onSubmit} />
    )
}
export default SignInPage;
