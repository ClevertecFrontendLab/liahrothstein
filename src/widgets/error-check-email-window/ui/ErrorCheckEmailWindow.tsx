import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@components/index';

import { useAppDispatch } from '@store/hooks';
import { useUserCheckEmailMutation } from '@features/login/api/login-api';
import { setAuthStatus } from '@utils/auth-status-slice';
import { RoutePaths } from "../../../shared/types";

import error from '../../../shared/assets/images/error-image.svg';

import './ErrorCheckEmailWindow.scss';

export function ErrorCheckEmailWindow() {
    const [retryCheckEmail, { isSuccess }] = useUserCheckEmailMutation();
    const { state } = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAuthStatus('confirm-email'));
            navigate(RoutePaths.ConfirmEmail);
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