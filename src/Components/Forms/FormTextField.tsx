import { useFormContext, type FieldErrors, type FieldValues, type Path } from "react-hook-form"

interface TextFieldProps<T extends FieldValues> {
    label: string,
    name: Path<T>,
    type?: string,
}

export function FormTextField<T extends FieldValues>({ label, name, type = 'text' }: TextFieldProps<T>) {
    const { register, formState: { errors } } = useFormContext<T>();

    // Приведение типа к FieldErrors<T>
    const typedErrors = errors as FieldErrors<T>;
    return (
        <div className="form__text-field">
            <label className="form__label" htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                className='form__input'
                {...register(name)}
            />
            <span className='form-error'>{(typedErrors[name] as any)?.message ?? ''}</span>
        </div>
    )
}