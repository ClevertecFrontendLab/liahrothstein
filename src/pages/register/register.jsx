import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import arrow from './assets/arrow.png';
import eyeOpened from './assets/eye.png';
import eyeClosed from './assets/eye-closed.png';

import './register.css';

export function Register() {
    const [stage, setStage] = useState(1);
    const [eye, setEye] = useState(false);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const [loginDirty, setLoginDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [telDirty, setTelDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);

    const [loginError, setLoginError] = useState('Поле не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
    const [firstNameError, setFirstNameError] = useState('Поле не может быть пустым');
    const [lastNameError, setLastNameError] = useState('Поле не может быть пустым');
    const [telError, setTelError] = useState('Поле не может быть пустым');
    const [emailError, setEmailError] = useState('Поле не может быть пустым');

    function blurHandler(e) {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
            case 'firstName':
                setFirstNameDirty(true)
                break;
            case 'lastName':
                setLastNameDirty(true)
                break;
            case 'tel':
                setTelDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
        }
    }

    function loginHandler(e) {
        setLogin(e.target.value);
        const re = /^[a-z0-9_-]{3,16}$/;

        if (!re.test(e.target.value)) {
            setLoginError('Используйте для логина латинский алфавит и цифры')
        } else {
            setLoginError('')
        }
    }
    function passwordHandler(e) {
        setPassword(e.target.value);
        const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

        if (!re.test(e.target.value)) {
            setPasswordError('Пароль не менее 8 символов, с заглавной буквой и цифрой')
        } else {
            setPasswordError('')
        }
    }
    function telHandler(e) {
        setTel(e.target.value);
        const re = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

        if (!re.test(e.target.value)) {
            setTelError('В формате +375 (xx) xxx-xx-xx')
        } else {
            setTelError('')
        }
    }
    function emailHandler(e) {
        setEmail(e.target.value);
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

        if (!re.test(e.target.value)) {
            setEmailError('Введите корректный e-mail')
        } else {
            setEmailError('')
        }
    }
    function firstNameHandler(e) {
        setFirstName(e.target.value);
        if (!e.target.value) {
            setFirstNameError('Поле не может быть пустым')
        } else {
            setFirstNameError('')
        }
    }
    function lastNameHandler(e) {
        setLastName(e.target.value);
        if (!e.target.value) {
            setLastNameError('Поле не может быть пустым')
        } else {
            setLastNameError('')
        }
    }

    return (
        <section className="register">
            <div className="logo">Cleverland</div>
            <div className="modalWindow">
                <div className="header">Регистрация</div>
                <div className="process">{stage} шаг из 3</div>
                <form action="">
                    <input
                        onBlur={e => blurHandler(e)}
                        onChange={e => loginHandler(e)}
                        name='login'
                        value={login}
                        type="text"
                        className={classNames({ login: (stage === 1) })}
                        placeholder='Придумайте логин для входа' />
                    <div
                        className={classNames('warning', { loginWarning: stage === 1 })}
                        style={(loginDirty && loginError) ? { color: '#F42C4F', borderColor: '#F42C4F' } : { color: '#A7A7A7' }}>
                        {(loginDirty && loginError) ? loginError : 'Используйте для логина латинский алфавит и цифры'}
                    </div>

                    <input
                        onBlur={e => blurHandler(e)}
                        onChange={e => passwordHandler(e)}
                        name='password'
                        value={password}
                        type={(eye) ? 'text' : 'password'}
                        className={classNames({ password: (stage === 1) })}
                        placeholder='Пароль' />
                    <div
                        className={classNames('warning', { passwordWarning: stage === 1 })}
                        style={(passwordDirty && passwordError) ? { color: '#F42C4F', borderColor: '#F42C4F' } : { color: '#A7A7A7' }}>
                        {(passwordDirty && passwordError) ? passwordError : 'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
                        <button type='button' onClick={() => (setEye(!eye))}>
                            <img src={(eye) ? eyeOpened : eyeClosed} alt="" />
                        </button>
                    </div>


                    <input
                        onBlur={e => blurHandler(e)}
                        onChange={e => firstNameHandler(e)}
                        name='firstName'
                        value={firstName}
                        type="text"
                        className={classNames({ firstName: (stage === 2) })}
                        placeholder='Имя' />
                    <div
                        className={classNames('warning', { firstNameWarning: stage === 2 })}
                        style={(firstNameDirty && firstNameError) ? { color: '#F42C4F', borderColor: '#F42C4F' } : { color: '#A7A7A7' }}>
                        {(firstNameDirty && firstNameError) ? firstNameError : <br />}
                    </div>

                    <input
                        onBlur={e => blurHandler(e)}
                        onChange={e => lastNameHandler(e)}
                        name='lastName'
                        value={lastName}
                        type="text"
                        className={classNames({ lastName: (stage === 2) })}
                        placeholder='Фамилия' />
                    <div
                        className={classNames('warning', { lastNameWarning: stage === 2 })}
                        style={(lastNameDirty && lastNameError) ? { color: '#F42C4F', borderColor: '#F42C4F' } : { color: '#A7A7A7' }}>
                        {(lastNameDirty && lastNameError) ? lastNameError : <br />}
                    </div>


                    <input
                        onBlur={e => blurHandler(e)}
                        onChange={e => telHandler(e)}
                        name='tel'
                        value={tel}
                        type="tel"
                        className={classNames({ tel: (stage === 3) })}
                        placeholder='Номер телефона' />
                    <div
                        className={classNames('warning', { telWarning: stage === 3 })}
                        style={(telDirty && telError) ? { color: '#F42C4F', borderColor: '#F42C4F' } : { color: '#A7A7A7' }}>
                        {(telDirty && telError) ? telError : <br />}
                    </div>

                    <input
                        onBlur={e => blurHandler(e)}
                        onChange={e => emailHandler(e)}
                        name='email'
                        value={email}
                        type="email"
                        className={classNames({ email: (stage === 3) })}
                        placeholder='E-mail' />
                    <div
                        className={classNames('warning', { emailWarning: stage === 3 })}
                        style={(emailDirty && emailError) ? { color: '#F42C4F', borderColor: '#F42C4F' } : { color: '#A7A7A7' }}>
                        {(emailDirty && emailError) ? emailError : <br />}
                    </div>

                    <button type={(stage < 3) ? 'button' : 'submit'} onClick={() => (setStage((stage < 3) ? stage + 1 : stage))}>
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