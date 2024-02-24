import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickBackToRegister } from '../model/error-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

import './ErrorWindow.scss';

export default function ErrorWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorWindow">
            <img src={warningRed} alt="" />
            <div className="description">
                <p className="title">Данные не сохранились</p>
                <p className="subtitle">Что-то пошло не так и ваша регистрация<br />не завершилась. Попробуйте ещё раз.</p>
            </div>
            <Button
                title='Повторить'
                onClickHandler={() => (onClickBackToRegister(dispatch))} />
        </div>
    )
}