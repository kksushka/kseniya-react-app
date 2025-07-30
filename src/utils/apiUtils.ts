import { AxiosError } from "axios";
import type { FieldError, FieldValues, Path, UseFormSetError } from "react-hook-form";

export function handleThunkErrors<T extends FieldValues, > (
    error: unknown,
    rejectWithValue: (value: unknown) => unknown,
    setError?: UseFormSetError<T>,
) {
    if (error instanceof AxiosError) {
        const status = error.response?.status;
        const data = error.response?.data;

        if (status === 400 && data) {
            const errorsData: FieldError = data;
            const errorEntries = Object.entries(errorsData);
            if (setError && errorEntries.length) {
                errorEntries.forEach(([field, message]) => setError(
                    field as Path<T>,
                    { message: message as string },
                ));
            }
            return rejectWithValue(data);
        }
        if (status === 403 && data) {
            return rejectWithValue(data.detail);
        }
        return rejectWithValue(error.message);
    }
    return rejectWithValue('Unknown error');
}