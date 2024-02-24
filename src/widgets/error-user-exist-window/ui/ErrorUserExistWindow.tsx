import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickBackToRegister } from '../model/error-user-exist-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

export default function ErrorUserExistWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorUserExistWindow">
            <img src={warningRed} alt="" />
            <p className="title">Данные не сохранились</p>
            <p className="subtitle">Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.</p>
            <Button
                title='Назад к регистрации'
                onClickHandler={() => (onClickBackToRegister(dispatch))} />
        </div>
    )
}