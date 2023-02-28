import { Link } from 'react-router-dom';

import arrow from './arrow.png';

import './auth.css';

export function Auth() {

    return (
        <section className="auth">
            <div className="logo">Cleverland</div>
            <div className="modalWindow">
                <div className="header">Вход в личный кабинет</div>
                <form action="">
                    <input type="text" className="login" placeholder='Логин' />
                    <input type="password" className="password" placeholder='Пароль' />
                    <Link>Забыли логин или пароль?</Link>
                    <button type="submit">вход</button>
                </form>
                <div className="register">
                    <div className="text">Нет учётной записи?</div>
                    <Link>
                        <span>Регистрация</span>
                        <img src={arrow} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    );
}