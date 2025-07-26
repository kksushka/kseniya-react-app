// import { useState } from 'react';
// import { Layout } from '../Components/Layout/Layout';
// import { Success } from '../Components/Forms/Success';
// import { SignInForm } from '../Components/Forms/SignInForm';


// function SignInPage() {
//   const [signedIn, setSignedIn] = useState(false);

//   return (
//     <Layout title={signedIn ? 'Success' : 'Sign In'}>
//       {signedIn ? (
//         <Success onClick={() => setSignedIn(false)} />
//       ) : (
//         <SignInForm onClick={() => setSignedIn(true)} />
//       )}
//     </Layout>
//   );
// }

// export default SignInPage;


import { useState } from "react";
import { Success } from "../Components/Forms/Success";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Store";
import { setIsAuth } from "../Slices/ProfileSlice";
import { createJwt } from "../Slices/AuthThunk";
import { SignInForm } from "../Components/Forms/SignInForm";
import { fetchProfile } from "../Slices/ProfileThunk";


const SignInPage = () => {
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);


    const dispatch = useAppDispatch();

    const handleViewPosts = () => {
        dispatch(setIsAuth(true));
        dispatch(fetchProfile()); 
        navigate('/posts');
    };

    const handleSubmit = (email: string, password: string) => {
        dispatch(createJwt({
            data: { email, password },
            navigate: () => {
                setIsSuccess(true)
            },
        }
        ))
    }

    return (
        <div>
            {isSuccess ? 'Success' : 'Sign in'}
            {isSuccess ?
                (<Success onAction={handleViewPosts} buttonText="View Posts" />)
                :
                (<SignInForm onSubmit={handleSubmit} />)
            }
        </div>
    )
}
export default SignInPage;
