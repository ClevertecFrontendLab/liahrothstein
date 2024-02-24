import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { Button, FormInput, Loader } from "@components/index";

import { logIn, rememberMeLogIn, switcher, validateEmail, validatePassword } from "@utils/index";
import { useUserLoginMutation, useLazyUserGoogleLoginQuery, useUserCheckEmailMutation } from "../api/login-api";
import { onClickCheckEmail, setAuthDirtyInputs } from "../model/login-model";

import googlePlus from '../../../shared/assets/icons/google-plus-icon.svg';
import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

import './Login.scss';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(true);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
    const [signIn, { data, isSuccess, isLoading: isSignInLoading, isError: isSignInError }] = useUserLoginMutation();
    const [signInGoogle, { isLoading: isSignInGoogleLoading, isError: isSignInGoogleError }] = useLazyUserGoogleLoginQuery();
    const [checkEmail, { isLoading: isCheckEmailLoading, isError: isCheckEmailError, error }] = useUserCheckEmailMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        if ((isSuccess && data !== undefined) && (rememberMe)) {
            dispatch(logIn());
            dispatch(rememberMeLogIn(data.accessToken));
        } else if ((isSuccess && data !== undefined) && (!rememberMe)) {
            dispatch(logIn());
        }
    }, [isSuccess]);

    return (
        <form className="login">
            {(isSignInLoading || isSignInGoogleLoading || isCheckEmailLoading) && <Loader />}
            {(isSignInError || isSignInGoogleError) && <Navigate to={'/result/error-login'} />}
            {(isCheckEmailError && error?.status === 404) && <Navigate to={'/result/error-check-email-no-exist'} />}
            {(isCheckEmailError && error?.status !== 404) && <Navigate to={'/result/error-check-email'} />}
            <div className={(emailDirty && emailError) ? "email error" : 'email'}>
                <label htmlFor="email">e-mail:</label>
                <FormInput
                    inputType={'email'}
                    inputValue={email}
                    inputName={'email'}
                    inputPlaceholder={""}
                    dispatch={setEmail}
                    errorDispatch={setEmailError}
                    setDirty={setEmailDirty}
                    onBlurHandler={setAuthDirtyInputs}
                    onChangeHandler={validateEmail} />
            </div>
            <div className={(passwordDirty && passwordError) ? 'password error' : "password"}>
                <FormInput
                    inputType={(isEyeOpen) ? 'text' : 'password'}
                    inputValue={password}
                    inputName={'password'}
                    inputPlaceholder={"Пароль"}
                    dispatch={setPassword}
                    errorDispatch={setPasswordError}
                    setDirty={setPasswordDirty}
                    onBlurHandler={setAuthDirtyInputs}
                    onChangeHandler={validatePassword} />
                <Button
                    image={(isEyeOpen) ? eyeOpened : eyeClosed}
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
                <Button
                    title="Забыли пароль?"
                    disabled={emailError}
                    onClickHandler={async () => (await onClickCheckEmail(email, dispatch, checkEmail))} />
            </div>
            <Button
                className={(emailError || passwordError) ? 'signIn disabled' : "signIn"}
                title="Войти"
                disabled={(emailError || passwordError) ? true : false}
                onClickHandler={async () => (await signIn({ email: email, password: password }))} />
            <Button
                className="signIn google"
                image={googlePlus}
                title="Войти через Google"
                onClickHandler={() => (signInGoogle(undefined))} />
        </form>
    )
}