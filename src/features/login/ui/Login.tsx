import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { Button, FormInput, Loader } from "@components/index";

import { logIn, switcher, validateEmail, validatePassword } from "@utils/index";
import { useUserLoginMutation, useLazyUserGoogleLoginQuery } from "../api/login-api";

import googlePlus from '../../../shared/assets/icons/google-plus-icon.svg';
import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<boolean>(true);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
    const [signUp, { data, isSuccess, isLoading: isSignUpLoading, isError: isSignUpError }] = useUserLoginMutation();
    const [signUpGoogle, { isLoading: isSignUpGoogleLoading, isError: isSignUpGoogleError }] = useLazyUserGoogleLoginQuery();
    const dispatch = useDispatch();

    if (isSignUpError || isSignUpGoogleError) {
        return (<Navigate to={'/result/error-login'} />)
    };

    useEffect(() => {
        if (isSuccess && data !== undefined) {
            dispatch(logIn(data.accessToken));
        }
    }, [isSuccess]);

    return (
        <form className="login">
            {isSignUpLoading && <Loader />}
            {isSignUpGoogleLoading && <Loader />}
            <div className="email">
                <label htmlFor="email">e-mail:</label>
                <FormInput
                    inputType={'email'}
                    inputValue={email}
                    inputName={'email'}
                    inputPlaceholder={""}
                    dispatch={setEmail}
                    errorDispatch={setEmailError}
                    onChangeHandler={validateEmail} />
            </div>
            <div className="password">
                <FormInput
                    inputType={(isEyeOpen) ? 'text' : 'password'}
                    inputValue={password}
                    inputName={'password'}
                    inputPlaceholder={"Пароль"}
                    dispatch={setPassword}
                    errorDispatch={setPasswordError}
                    onChangeHandler={validatePassword} />
                <Button
                    image={(isEyeOpen) ? eyeOpened : eyeClosed}
                    title=""
                    disabled={false}
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
                <button type="button" disabled={(!emailError)}>
                    <Link to={'/auth/confirm-email'}>Забыли пароль?</Link>
                </button>
            </div>
            <Button
                image=""
                title="Войти"
                disabled={(emailError || passwordError) ? true : false}
                onClickHandler={async () => (await signUp({ email: email, password: password }))} />
            <Button
                image={googlePlus}
                title="Войти через Google"
                disabled={false}
                onClickHandler={() => (signUpGoogle(undefined))} />
        </form>
    )
}