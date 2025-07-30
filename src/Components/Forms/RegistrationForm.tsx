import { useAppDispatch } from '../../Store';
import { createUser } from '../../Slices/usersThunks';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserSchema, type CreateUser } from '../../Types/User';
import { FormTextField } from './FormTextField';

export const RegistrationForm = () => {
    const dispatch = useAppDispatch();
    const form = useForm({
        resolver: zodResolver(CreateUserSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            course_group: 18,
        }
    });
    const { handleSubmit, setError } = form;

    const onSubmit = (values: CreateUser) => {
        const {confirmPassword, ...rest} = values;

        dispatch(createUser({ data: rest, setError }));
    }
    return (
        <FormProvider {...form}>
            <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
                <FormTextField label='Name' name='username' />

                <FormTextField label='Email' name='email' />

                <FormTextField label='Password' name='password' type="password" />

                <FormTextField label='Confirm password' name='confirmPassword' type="password" />

                <button
                    type="submit"
                    className="form__btn"
                >
                    Sign up
                </button>
            </form>
        </FormProvider>
    )
}
