import { useDispatch } from 'react-redux';

import { Button } from '@components/index';

import { onClickToAuth } from '../model/error-check-email-window-model';

import error from '../../../shared/assets/images/error-image.svg';

import './ErrorCheckEmailWindow.scss';

export default function ErrorCheckEmailWindow() {
    const dispatch = useDispatch();

    return (
        <div className="errorCheckEmailWindow">
            <img src={error} alt="" />
            <div className="description">
                <p className="title">Что-то пошло не так</p>
                <p className="subtitle">Произошла ошибка, попробуйте отправить форму ещё раз.</p>
            </div>
            <Button
                title='Назад'
                onClickHandler={() => (onClickToAuth(dispatch))}
                dataTestId='check-back-button' />
        </div>
    )
}