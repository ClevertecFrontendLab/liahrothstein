import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickToAuth } from '../model/success-window-model';

import success from '../../../shared/assets/icons/success-icon.svg';

import './SuccessWindow.scss';

export function SuccessWindow() {
    const dispatch = useDispatch();

    return (
        <div className="successWindow">
            <img src={success} alt="" />
            <div className="description">
                <p className="title">Регистрация успешна</p>
                <p className="subtitle">Регистрация прошла успешно. Зайдите<br />в приложение, используя свои e-mail и пароль.</p>
            </div>
            <Button
                title='Войти'
                onClickHandler={() => (onClickToAuth(dispatch))}
                dataTestId='registration-enter-button' />
        </div>
    )
}