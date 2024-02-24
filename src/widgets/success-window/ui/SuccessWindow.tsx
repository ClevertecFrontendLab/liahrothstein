import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickToAuth } from '../model/success-window-model';

import success from '../../../shared/assets/icons/success-icon.svg';

export default function SuccessWindow() {
    const dispatch = useDispatch();

    return (
        <div className="successWindow">
            <img src={success} alt="" />
            <p className="title">Регистрация успешна</p>
            <p className="subtitle">Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.</p>
            <Button
                title='Войти'
                onClickHandler={() => (onClickToAuth(dispatch))} />
        </div>
    )
}