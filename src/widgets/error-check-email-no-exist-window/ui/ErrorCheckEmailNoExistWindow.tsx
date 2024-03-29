import { Button } from '@components/index';

import { useAppDispatch } from '@store/hooks';
import { onClickToAuth } from '../model/error-check-email-no-exist-window-model';

import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

import './ErrorCheckEmailNoExistWindow.scss';

export function ErrorCheckEmailNoExistWindow() {
    const dispatch = useAppDispatch();

    return (
        <div className="errorCheckEmailNoExistWindow">
            <img src={warningRed} alt="" />
            <div className="description">
                <p className="title">Такой e-mail не зарегистрирован</p>
                <p className="subtitle">Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.</p>
            </div>
            <Button
                title='Попробовать снова'
                onClickHandler={() => (onClickToAuth(dispatch))}
                dataTestId='check-retry-button' />
        </div>
    )
}