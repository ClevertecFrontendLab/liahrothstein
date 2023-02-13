import classNames from "classnames";
import { useState } from "react";
import { Header } from "../../components/header";

import './error-book-page.css';
import error from './assets/icon-error.png';
import close from './assets/icon-close.png';

export function ErrorBookPage() {
    const [isClose, toggleClose] = useState(false);

    return (
        <section className="error-main-page" data-test-id='error'>
            <Header />
            <div className="bookMiniList">Бизнес книги  /  Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</div>
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