import { CreateJwtSchema, type CreateJwtData } from '../../Types/auth';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextField } from './FormTextField';

interface SignInFormProps {
    onSubmit: (values: CreateJwtData) => void,
}

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
    const form = useForm<CreateJwtData>({
        resolver: zodResolver(CreateJwtSchema),
        defaultValues: { email: '', password: '' },
    });

    const { handleSubmit } = form;

    return (
        <FormProvider {...form}>
            <form className='form__container' onSubmit={handleSubmit(onSubmit)}>
                    <FormTextField name="email" label="email" />

                    <FormTextField name="password" label="password" type="password" />
                <button
                    type='submit'
                    className='form__btn'
                >
                    Sign In
                </button>
            </form>
        </FormProvider>
    )
}