import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickToAuth } from '../model/success-change-password-window';

import success from '../../../shared/assets/icons/success-icon.svg';

import './SuccessChangePasswordWindow.scss';

export default function SuccessChangePasswordWindow() {
    const dispatch = useDispatch();

    return (
        <div className="successChangePasswordWindow">
            <img src={success} alt="" />
            <div className="description">
                <p className="title">Пароль успешно изменен</p>
                <p className="subtitle">Теперь можно войти в аккаунт, используя<br />свой логин и новый пароль</p>
            </div>
            <Button
                title='Вход'
                onClickHandler={() => (onClickToAuth(dispatch))} />
        </div>
    )
}