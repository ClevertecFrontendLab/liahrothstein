import { Link } from 'react-router-dom';

import arrow from './assets/arrow.png';
import authArrow from './assets/left-arrow.png';

import './recovery.css';

export function Recovery() {

    return (
        <section className="recovery">
            <div className="logo">Cleverland</div>
            <div className="modalWindow">
                <div className="backToAuth">
                    <Link to='/auth'>
                        <img src={authArrow} alt="" />
                    </Link>
                    <div className="label">вход в личный кабинет</div>
                </div>
                <div className="header">Восстановление пароля</div>
                <form action="">
                    <input type="email" name="email" className="email" placeholder='Email' />
                    <div className="warning">На это email  будет отправлено письмо с инструкциями по восстановлению пароля</div>
                    <button type="submit">восстановить</button>
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