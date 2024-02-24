import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickRepeat } from '../model/error-login-window-model';

import warningYellow from '../../../shared/assets/icons/warning-yellow-icon.svg';

export default function ErrorLoginWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorLoginWindow">
            <img src={warningYellow} alt="" />
            <p className="title">Вход не выполнен</p>
            <p className="subtitle">Что-то пошло не так. Попробуйте еще раз</p>
            <Button
                title='Повторить'
                onClickHandler={() => (onClickRepeat(dispatch))} />
        </div>
    )
}