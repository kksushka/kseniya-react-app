import { useEffect, useRef, useState } from 'react';
import Layout from '../Layout/Layout';

interface SignInFormProps {
    onSubmit: (email:string, password:string) => void;
}

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
    // Refs для управления фокусом
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // Состояния полей формы
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Состояния ошибок
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // Автофокус при загрузке формы на email
    useEffect(() => {
        emailRef.current?.focus();
    }, [])

    // обработчики изменений для всех полей
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => (
        setEmail(event.target.value)
    )
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => (
        setPassword(event.target.value)
    )

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Сброс ошибок
        setEmailError('');
        setPasswordError('');

        // проверка формы перед отправкой
        let validated = true;
        if (!email.trim() || !email.includes('@')) {
            setEmailError('Enter correct email');
            emailRef.current?.focus();
            validated = false;
        }
        if (!password) {
            setPasswordError('Enter password');
            passwordRef.current?.focus();
            validated = false;
        }
        //    все ок -> чистим ошибки
        if (validated) {
            onSubmit(email,password);
        }
    };

    return (
        <Layout title={''}>
        <form className='form__container' onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Enter your email'
                    className="form__input"
                    ref={emailRef}
                />
                {emailError&&<div className='form__error-message'>{emailError}</div>}
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='Enter your password'
                    className="form__input"
                />
                {passwordError && <div className='form__error-message'>{passwordError}</div>}
            <button
                type='submit'
                className='form__btn'
            >
                Sign In
            </button>
        </form>
        </Layout>
    )
}