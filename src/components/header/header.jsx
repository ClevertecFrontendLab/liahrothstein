import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { AllBooks } from '../all-books';
import { BurgerBooks } from '../burger-books';

import arrow from './assets/arrow-off.png';
import avatar from './assets/avatar.png';
import burger from './assets/burger.png';
import logo from './assets/logo-clevertec.png';

import './header.css';

export const Header = () => {
    const [isBurgerOpen, toggleBurger] = useState(false);
    const [isArrowOpen, toggleArrow] = useState(true);

    const btnCls = 'burgerMenu';

    function toggleBurgerMode() {
        toggleBurger(!isBurgerOpen);
    };

    return (
        <div className="header">
            <Link to='/books/all' className="cleverland">
                <div className="logo">
                    <div className="logoClevertec"><img src={logo} alt="logo" /></div>
                    <div className="logoName">Cleverland</div>
                </div>
            </Link>
            <button type="button" className={classNames(btnCls, { visible: isBurgerOpen })} onClick={toggleBurgerMode} data-test-id='button-burger'>
                <div className={btnCls}><img src={burger} alt='burger' /></div>
            </button>
            <div className={classNames('menu', { visible: isBurgerOpen })} data-test-id='burger-navigation'>
                <div className="linkAndArrow">
                    <Link to='/books/all' className="links">
                        <div className="books">Витрина книг</div>
                    </Link>
                    <button type="button" className={classNames('arrowBtn', { dropdown: isArrowOpen })} onClick={() => { toggleArrow(!isArrowOpen) }} data-test-id='burger-showcase'>
                        <div className="arrowBtn"><img src={arrow} alt="arrow" /></div>
                    </button>
                </div>
                <hr />
                <div className={classNames('categories', { dropdown: isArrowOpen })}>
                    <BurgerBooks setBurger={toggleBurger} isBurger={isBurgerOpen} />
                </div>
                <Link to='/terms' className="links">
                    <div className="terms" data-test-id='burger-terms'>Правила пользования</div>
                </Link>
                <Link to='/offer' className="links">
                    <div className="offer" data-test-id='burger-contract'>Договор оферты</div>
                </Link>
                <hr />
                <div className="profile">Профиль</div>
                <div className="exit">Выход</div>
            </div>
            <div className={classNames('backgroundOfMenu', { backgroundOn: isBurgerOpen })} onClick={toggleBurgerMode} aria-hidden="true"> </div>
            <div className="nameOfPage">Библиотека</div>
            <div className="person">
                <div className="hiName">
                    Привет, Иван!
                </div>
                <div className="avatar"><img src={avatar} alt="avatar" /></div>
            </div>
        </div>
    );
};