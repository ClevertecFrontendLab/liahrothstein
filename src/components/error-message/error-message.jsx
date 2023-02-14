import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetBooksQuery, useGetIdBookQuery } from "../../redux";

import './error-message.css';
import error from './assets/icon-error.png';
import close from './assets/icon-close.png';

export function ErrorMessage() {
    const { id } = useParams();
    const {isError: isBooksError} = useGetBooksQuery();
    const {isError: isIdBookError} = useGetIdBookQuery(id);
    const [isClose, toggleClose] = useState(false);

    return (
            <div className={classNames('errorMessage', {closeMessage: isClose}, {error: isBooksError}, {bookError: isIdBookError})} data-test-id='error'>
                <div className="icon"><img src={error} alt="" /></div>
                <div className="errorText">Что-то пошло не так. Обновите страницу через некоторое время.</div>
                <div className="closeError">
                    <button type='button' onClick={() => {toggleClose(!isClose)}}>
                        <img src={close} alt="" />
                    </button>
                </div>
            </div>
    );
}