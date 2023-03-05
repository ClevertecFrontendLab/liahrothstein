import { useState } from 'react';
import { Link } from 'react-router-dom';

import arrow from './assets/arrow.png';
import eyeOpened from './assets/eye.png';
import eyeClosed from './assets/eye-closed.png';

import './auth.css';

export function Auth() {
    const [eye, setEye] = useState(false);

    return (
        <section className="auth">
            <div className="logo">Cleverland</div>
            <div className="modalWindow">
                <div className="header">Вход в личный кабинет</div>
                <form action="">
                    <input type="text" className="login" placeholder='Логин' />
                    <div className="warning loginWarning"><br /></div>
                    <input type={(eye) ? 'text' : 'password'} className="password" placeholder='Пароль' />
                    <div className="warning passwordWarning">
                        <br />
                        <button type='button' onClick={() => (setEye(!eye))}>
                            <img src={(eye) ? eyeOpened : eyeClosed} alt="" />
                        </button>
                    </div>
                    <Link to='/rec'>Забыли логин или пароль?</Link>
                    <button type="submit">вход</button>
                </form>
                <div className="register">
                    <div className="text">Нет учётной записи?</div>
                    <Link to='/reg'>
                        <span>Регистрация</span>
                        <img src={arrow} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    );
}