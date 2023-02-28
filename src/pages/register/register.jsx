import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import arrow from './arrow.png';

import './register.css';

export function Register() {
    const [stage, setStage] = useState(1);

    return (
        <section className="register">
            <div className="logo">Cleverland</div>
            <div className="modalWindow">
                <div className="header">Регистрация</div>
                <div className="process">{stage} шаг из 3</div>
                <form action="">
                    <input type="text" className={classNames({ login: (stage === 1) })} placeholder='Придумайте логин для входа' />
                    <div className="warning loginWarning">Используйте для логина латинский алфавит и цифры</div>
                    <input type="password" className={classNames({password: (stage === 1)})} placeholder='Пароль' />
                    <div className="warning passwordWarning">Пароль не менее 8 символов, с заглавной буквой и цифрой</div>
                    <button type="button" onClick={() => (setStage((stage < 3) ? stage + 1 : stage))}>
                        {(stage === 1) ? 'следующий шаг' :
                            (stage === 2) ? 'последний шаг' : 'зарегистрироваться'}
                    </button>
                    <div className="auth">
                        <div className="text">Есть учётная запись?</div>
                        <Link to='/auth'>
                            <span>войти</span>
                            <img src={arrow} alt="" />
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}