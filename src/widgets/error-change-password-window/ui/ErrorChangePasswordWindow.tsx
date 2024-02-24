import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickBackToChangePassword } from '../model/error-change-password-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

export default function ErrorChangePasswordWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorChangePasswordWindow">
            <img src={warningRed} alt="" />
            <p className="title">Данные не сохранились</p>
            <p className="subtitle">Что-то пошло не так. Попробуйте ещё раз</p>
            <Button
                title='Повторить'
                onClickHandler={() => (onClickBackToChangePassword(dispatch))} />
        </div>
    )
}