import { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useGetBooksQuery } from '../../redux';
import { AllBooks } from '../all-books';
import arrow from '../header/assets/arrow-off.png';
import './menu.css';

export function Menu () {
    const [isArrowOpen, toggleArrow] = useState(true);
    const {isError} = useGetBooksQuery();

    return (
        <div className="menu">
            <div className="tab1">
                <div className="active">
                    <div className="linkAndArrow">
                        <Link to='/'>Витрина книг</Link>
                        <button type="button" className={classNames('arrowBtn', {dropdown: isArrowOpen}, {error: isError})} onClick={() => {toggleArrow(!isArrowOpen)}} data-test-id='navigation-showcase'>
                            <div className="arrowBtn"><img src={arrow} alt="arrow" /></div>
                        </button>
                    </div>
                </div>
                <hr />
                <div className={classNames('categories', {dropdown: isArrowOpen}, {error: isError})}>
                    <AllBooks />
                </div>
            </div>
            <div className="tab2">
                <Link to='/terms' data-test-id='navigation-terms'>Правила пользования</Link>
            </div>
            <div className="tab3">
                <Link to='/offer' data-test-id='navigation-contract'>Договор оферты</Link>
            </div>
        </div>
    );
}