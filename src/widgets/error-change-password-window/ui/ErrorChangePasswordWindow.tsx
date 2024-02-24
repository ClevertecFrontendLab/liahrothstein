import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickBackToChangePassword } from '../model/error-change-password-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

import './ErrorChangePasswordWindow.scss';

export default function ErrorChangePasswordWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorChangePasswordWindow">
            <img src={warningRed} alt="" />
            <div className="description">
                <p className="title">Данные не сохранились</p>
                <p className="subtitle">Что-то пошло не так. Попробуйте ещё раз</p>
            </div>
            <Button
                title='Повторить'
                onClickHandler={() => (onClickBackToChangePassword(dispatch))} />
        </div>
    )
}