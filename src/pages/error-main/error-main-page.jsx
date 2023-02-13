import { useState } from 'react';
import classNames from 'classnames';

import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import './error-main-page.css';
import error from './assets/icon-error.png';
import close from './assets/icon-close.png';

export function ErrorMainPage() {
    const [isClose, toggleClose] = useState(false);

    return (
        <section className="error-main-page" data-test-id='error'>
            <Header />
            <div className="container">
                <Menu />
            </div>
            <div className={classNames('errorMessage', {closeMessage: isClose})}>
                <div className="icon"><img src={error} alt="" /></div>
                <div className="errorText">Что-то пошло не так. Обновите страницу через некоторое время.</div>
                <div className="closeError">
                    <button type='button' onClick={() => {toggleClose(!isClose)}}>
                        <img src={close} alt="" />
                    </button>
                </div>
            </div>
        </section>
    );
}