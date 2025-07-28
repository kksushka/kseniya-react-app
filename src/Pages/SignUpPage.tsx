// import { useState } from 'react';
// import { Layout } from '../Components/Layout/Layout';
// import { RegConfirmation } from '../Components/Forms/RegConfirmation';
// import { RegistrationForm } from '../Components/Forms/RegistrationForm';


// function SignUpPage() {
//   const [registered, setRegistered] = useState(false);

//   return (
//     <Layout title={registered ? 'Registration Confirmation' : 'Sign Up'}>
//       {registered ? (
//         <RegConfirmation onClick={() => setRegistered(false)} />
//       ) : (
//         <RegistrationForm onClick={() => setRegistered(true)} />
//       )}
//     </Layout>
//   );
// }


// export default SignUpPage;
import { useNavigate } from "react-router";
import { RegConfirmation } from "../Components/Forms/RegConfirmation";
import { RegistrationForm } from "../Components/Forms/RegistrationForm";
import { useAppSelector } from "../Store";
import { isUserCreated } from "../Slices/UsersSlice";


const SignUpPage = ()=>{
    const navigate = useNavigate()
    const isRegSuccess = useAppSelector(isUserCreated);

    const handleContinue = ()=>{
        navigate('/')
    };

    return(
      <>
        <div>
            <h2>{isRegSuccess ? 'Registration Confirmation' : 'Sign Up'}</h2>
            {isRegSuccess ? 
            (<RegConfirmation onReturn={handleContinue}/>)
            :
            (<RegistrationForm/>)
        }
        </div>
      </>
    )
}

export default SignUpPage;