import { Button } from '@components/index';

import { useAppDispatch } from '@store/hooks';
import { onClickToAuth } from '../model/success-change-password-window';

import success from '../../../shared/assets/icons/success-icon.svg';

import './SuccessChangePasswordWindow.scss';

export function SuccessChangePasswordWindow() {
    const dispatch = useAppDispatch();

    return (
        <div className="successChangePasswordWindow">
            <img src={success} alt="" />
            <div className="description">
                <p className="title">Пароль успешно изменен</p>
                <p className="subtitle">Теперь можно войти в аккаунт, используя<br />свой логин и новый пароль</p>
            </div>
            <Button
                title='Вход'
                onClickHandler={() => (onClickToAuth(dispatch))}
                dataTestId='change-entry-button' />
        </div>
    )
}