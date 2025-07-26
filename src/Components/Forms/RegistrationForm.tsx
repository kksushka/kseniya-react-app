import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../Store';
import { createUser } from '../../Slices/usersThunks';



export const RegistrationForm = () => {

    const dispatch = useAppDispatch();

    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    useEffect(() => {
        usernameRef.current?.focus();
    }, [])

    const [userNameError, setUserNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); 

        setUserNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('')

        let validated = true;

        if (!username.trim()) {
            setUserNameError('Enter username');
            usernameRef.current?.focus();
            validated = false;
        }
      
        if (!email.trim() || !email.includes('@')) {
            setEmailError('Enter correct email');
            if(validated) emailRef.current?.focus();  
            validated = false;
        }

        if (!password) {
            setPasswordError('Enter password');
            if(validated) passwordRef.current?.focus();
            validated = false;
        }

        if (!confirmPassword || password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            if(validated) confirmPasswordRef.current?.focus();
            validated = false;
        }

        if (validated) {
          dispatch(createUser({username,email, password,course_group:18}))
        }

    }
    return (
        <form className="form__container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter your name"
                    className='form__input'
                   ref={usernameRef}
                />
                {userNameError && <div className='form__error-message'>{userNameError}</div>}

                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className='form__input'
                    ref={emailRef}

                />{emailError && <div className='form__error-message'>{emailError}</div>}

                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Create a password"
                    className='form__input'
                    ref={passwordRef}
                />
                {passwordError && <div className='form__error-message'>{passwordError}</div>}
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Repeat your password"
                    className='form__input'
                    ref={confirmPasswordRef}
                />
                {confirmPasswordError && <div className='form__error-message'>{confirmPasswordError}</div>}

            <button
                type="submit"
                className="form__btn"
            >
                Sign up
            </button>
        </form>
    )
}
