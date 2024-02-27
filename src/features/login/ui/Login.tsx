import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { push } from "redux-first-history";

import { Button, FormInput, Loader } from "@components/index";

import { logIn, rememberMeLogIn, switcher, validateEmail, validatePassword, setAuthStatus } from "@utils/index";
import { useUserLoginMutation, useLazyUserGoogleLoginQuery, useUserCheckEmailMutation } from "../api/login-api";
import { onClickCheckEmail, onClickSignIn, setAuthDirtyInputs } from "../model/login-model";

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
    const [isActivePasswordForgot, setIsActivePasswordForgot] = useState<boolean>(false);
    const [signIn, { data: signInData, isSuccess, isLoading: isSignInLoading, isError: isSignInError }] = useUserLoginMutation();
    const [signInGoogle, { isLoading: isSignInGoogleLoading, isError: isSignInGoogleError }] = useLazyUserGoogleLoginQuery();
    const [checkEmail, { data: checkEmailData, isLoading: isCheckEmailLoading, isError: isCheckEmailError, error }] = useUserCheckEmailMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (emailError) {
            setIsActivePasswordForgot(true);
        } else if (!emailError) {
            setIsActivePasswordForgot(false);
        }
    }, [emailError]);

    useEffect(() => {
        setIsActivePasswordForgot(false);
    }, []);

    useEffect(() => {
        if ((isSuccess && signInData !== undefined) && (rememberMe)) {
            dispatch(logIn());
            dispatch(rememberMeLogIn(signInData.accessToken));
        } else if ((isSuccess) && (!rememberMe)) {
            dispatch(logIn());
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isSignInError || isSignInGoogleError) {
            dispatch(setAuthStatus('error-login'));
            navigate('/result/error-login');
        }
    }, [isSignInError, isSignInGoogleError]);

    useEffect(() => {
        if ((isCheckEmailError) && (error?.status === 404)) {
            dispatch(setAuthStatus('error-check-email-no-exist'));
            navigate('/result/error-check-email-no-exist');
        } else if ((isCheckEmailError) && ((error?.status !== 404) || ((error?.status === 404) && (checkEmailData?.message !== 'Email не найден')))) {
            dispatch(setAuthStatus('error-check-email'));
            dispatch(push('/result/error-check-email', email));
        }
    }, [isCheckEmailError]);

    return (
        <form className="login">
            {(isSignInLoading || isSignInGoogleLoading || isCheckEmailLoading) && <Loader />}
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
                    onChangeHandler={validateEmail}
                    dataTestId='login-email' />
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
                    onChangeHandler={validatePassword}
                    dataTestId="login-password" />
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
                        name="rememberMe"
                        data-test-id='login-remember' />
                    <label htmlFor="rememberMe">Запомнить меня</label>
                </div>
                <Button
                    title="Забыли пароль?"
                    disabled={isActivePasswordForgot}
                    onClickHandler={async () => (await onClickCheckEmail(email, dispatch, checkEmail, isActivePasswordForgot, emailError, setIsActivePasswordForgot))}
                    dataTestId="login-forgot-button" />
            </div>
            <Button
                className={(emailError || passwordError) ? 'signIn disabled' : "signIn"}
                title="Войти"
                onClickHandler={async () => (await onClickSignIn(emailError, passwordError, email, password, signIn))}
                dataTestId="login-submit-button" />
            <Button
                className="signIn google"
                image={googlePlus}
                title="Войти через Google"
                onClickHandler={() => (signInGoogle(undefined))} />
        </form>
    )
}