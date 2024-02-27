import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Button } from '@components/index';

import { useUserRegistrationMutation } from '@features/registration/api/registration-api';
import { onClickBackToRegister } from '../model/error-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

import './ErrorWindow.scss';

export default function ErrorWindow() {
    const [retryRegister] = useUserRegistrationMutation();
    const dispatch = useDispatch();
    const { state } = useLocation();

    return (
        <div className="errorWindow">
            <img src={warningRed} alt="" />
            <div className="description">
                <p className="title">Данные не сохранились</p>
                <p className="subtitle">Что-то пошло не так и ваша регистрация<br />не завершилась. Попробуйте ещё раз.</p>
            </div>
            <Button
                title='Повторить'
                onClickHandler={async () => (await onClickBackToRegister(dispatch, retryRegister, state.email, state.password))}
                dataTestId='registration-retry-button' />
        </div>
    )
}