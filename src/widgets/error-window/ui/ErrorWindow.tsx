import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickBackToRegister } from '../model/error-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

export default function ErrorWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorWindow">
            <img src={warningRed} alt="" />
            <p className="title">Данные не сохранились</p>
            <p className="subtitle">Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.</p>
            <Button
                title='Повторить'
                onClickHandler={() => (onClickBackToRegister(dispatch))} />
        </div>
    )
}