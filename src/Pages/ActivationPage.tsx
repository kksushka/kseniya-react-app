import { useNavigate, useParams } from "react-router"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Store";
import { isUserActivated, selectActivationError, selectActivationLoading } from "../Slices/ActivationSlice";
import { activateUser } from "../Slices/activationThunk";

export const ActivationPage = () => {
    const { uid, token } = useParams();
    const dispatch = useAppDispatch();
    const isActivated = useAppSelector(isUserActivated);
    const error = useAppSelector(selectActivationError);
    const loading = useAppSelector(selectActivationLoading);

    const navigate = useNavigate();

    useEffect(() => {
        if (uid && token && !isActivated) {
            dispatch(activateUser({ uid, token }))
        }
    }, [uid, token, isActivated, dispatch])

    useEffect(() => {
        if (isActivated) {
            navigate('/signin')
        }
    }, [isActivated, navigate])

    return (
        <div>
            {loading && !isActivated && (
                <p>Проверка ссылки активации...</p>
            )}
            {error && (
                <div>
                    <h2>Ошибка</h2>
                    <p>
                    {error.includes('Stale token') ?'Ссылка активации устарела'
                    : error.includes('Invalid Token') ?  'Неверная ссылка активации'
                    :'Произошла ошибка активации'}
                    </p>
                    {error.includes('Stale token') && <button className='form__btn' onClick={() => navigate('/')}>
                        Go home
                    </button>}
                
                </div>
            )}
        </div>
    )
}