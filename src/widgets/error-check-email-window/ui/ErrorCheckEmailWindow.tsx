import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { useUserCheckEmailMutation } from '@features/login/api/login-api';
import { setAuthStatus } from '@utils/auth-status-slice';

import error from '../../../shared/assets/images/error-image.svg';

import './ErrorCheckEmailWindow.scss';

export default function ErrorCheckEmailWindow() {
    const [retryCheckEmail, { isSuccess }] = useUserCheckEmailMutation();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAuthStatus('confirm-email'));
            navigate('/auth/confirm-email');
        }
    }, [isSuccess]);

    return (
        <div className="errorCheckEmailWindow">
            <img src={error} alt="" />
            <div className="description">
                <p className="title">Что-то пошло не так</p>
                <p className="subtitle">Произошла ошибка, попробуйте отправить форму ещё раз.</p>
            </div>
            <Button
                title='Назад'
                onClickHandler={async () => (await retryCheckEmail({ email: state }))}
                dataTestId='check-back-button' />
        </div>
    )
}