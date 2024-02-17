import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { Button, Input, Loader } from "@components/index";

import { switcher } from "@utils/index";
import { loginAPI } from "..";

import googlePlus from '../../../shared/assets/icons/google-plus-icon.svg';
import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
    const [signUp, { isLoading, isError }] = loginAPI.useUserLoginMutation();

    if (isError) {
        return (<Navigate to={'/result/error-login'} />)
    }

    return (
        <form className="login">
            {isLoading && <Loader />}
            <div className="email">
                <label htmlFor="email">e-mail:</label>
                <Input
                    inputType={'email'}
                    inputValue={email}
                    inputName={'email'}
                    inputPlaceholder={""}
                    onChangeHandler={setEmail} />
            </div>
            <div className="password">
                <Input
                    inputType={'password'}
                    inputValue={password}
                    inputName={'password'}
                    inputPlaceholder={"Пароль"}
                    onChangeHandler={setPassword} />
                <Button
                    image={(isEyeOpen) ? eyeOpened : eyeClosed}
                    title=""
                    onClickHandler={() => (switcher(isEyeOpen, setIsEyeOpen))} />
            </div>
            <div className="rememberMeAndPasswordForgot">
                <div className="rememberMe">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => (switcher(rememberMe, setRememberMe))}
                        name="rememberMe" />
                    <label htmlFor="rememberMe">Запомнить меня</label>
                </div>
                <button type="button">
                    <Link to={'/auth/confirm-email'}>Забыли пароль?</Link>
                </button>
            </div>
            <Button
                image=""
                title="Войти"
                onClickHandler={async () => (await signUp({ email: email, password: password }))} />
            <Button
                image={googlePlus}
                title="Войти через Google"
                onClickHandler={undefined} />
        </form>
    )
}