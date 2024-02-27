import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickRepeat } from '../model/error-login-window-model';

import warningYellow from '../../../shared/assets/icons/warning-yellow-icon.svg';

import './ErrorLoginWindow.scss';

export function ErrorLoginWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorLoginWindow">
            <img src={warningYellow} alt="" />
            <div className="description">
                <p className="title">Вход не выполнен</p>
                <p className="subtitle">Что-то пошло не так. Попробуйте еще раз</p>
            </div>
            <Button
                title='Повторить'
                onClickHandler={() => (onClickRepeat(dispatch))}
                dataTestId='login-retry-button' />
        </div>
    )
}