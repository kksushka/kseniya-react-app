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
          <h2>{isRegSuccess ? 'Registration Confirmation' : 'Sign Up'}</h2>
            {isRegSuccess ? 
            (<RegConfirmation onReturn={handleContinue}/>)
            :
            (<RegistrationForm/>)
          }
      </>
    )
}

export default SignUpPage;