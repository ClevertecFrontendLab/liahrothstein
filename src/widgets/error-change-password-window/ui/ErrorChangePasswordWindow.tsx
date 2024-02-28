import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Loader } from '@components/index';

import { useAppDispatch } from '@store/hooks';
import { useUserChangePasswordMutation } from '@features/change-password/api/change-password-api';
import { setAuthStatus } from '@utils/auth-status-slice';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

import './ErrorChangePasswordWindow.scss';

export function ErrorChangePasswordWindow() {
    const { state } = useLocation();
    const [retryChangePassword, { isLoading, isSuccess }] = useUserChangePasswordMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAuthStatus('success-change-password'));
            navigate('/result/success-change-password');
        }
    }, [isSuccess]);

    return (
        <div className="errorChangePasswordWindow">
            {isLoading && <Loader />}
            <img src={warningRed} alt="" />
            <div className="description">
                <p className="title">Данные не сохранились</p>
                <p className="subtitle">Что-то пошло не так. Попробуйте ещё раз</p>
            </div>
            <Button
                title='Повторить'
                onClickHandler={() => (retryChangePassword({ password: state.password, confirmPassword: state.confirmPassword }))}
                dataTestId='change-retry-button' />
        </div>
    )
}