import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickBackToRegister } from '../model/error-user-exist-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

import './ErrorUserExistWindow.scss';

export default function ErrorUserExistWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorUserExistWindow">
            <img src={warningRed} alt="" />
            <div className="description">
                <p className="title">Данные не сохранились</p>
                <p className="subtitle">Такой e-mail уже записан в системе. Попробуйте<br />зарегистрироваться по другому e-mail.</p>
            </div>
            <Button
                title='Назад к регистрации'
                onClickHandler={() => (onClickBackToRegister(dispatch))}
                dataTestId='registration-back-button' />
        </div>
    )
}