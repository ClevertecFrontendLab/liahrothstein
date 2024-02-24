import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickToAuth } from '../model/error-check-email-no-exist-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

export default function ErrorCheckEmailNoExistWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorCheckEmailNoExistWindow">
            <img src={warningRed} alt="" />
            <p className="title">Такой e-mail не зарегистрирован</p>
            <p className="subtitle">Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.</p>
            <Button
                title='Попробовать снова'
                onClickHandler={() => (onClickToAuth(dispatch))} />
        </div>
    )
}