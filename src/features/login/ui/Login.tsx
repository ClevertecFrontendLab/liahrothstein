import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, FormInput, Loader } from "@components/index";

import { logIn, rememberMeLogIn, switcher, validateEmail, validatePassword, setAuthStatus } from "@utils/index";
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
    const [signIn, { data: signInData, isSuccess, isLoading: isSignInLoading, isError: isSignInError }] = useUserLoginMutation();
    const [signInGoogle, { isLoading: isSignInGoogleLoading, isError: isSignInGoogleError }] = useLazyUserGoogleLoginQuery();
    const [checkEmail, { data: checkEmailData, isLoading: isCheckEmailLoading, isError: isCheckEmailError, error }] = useUserCheckEmailMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            navigate('/result/error-check-email');
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
                    disabled={emailError}
                    onClickHandler={async () => (await onClickCheckEmail(email, dispatch, checkEmail))}
                    dataTestId="login-forgot-button" />
            </div>
            <Button
                className={(emailError || passwordError) ? 'signIn disabled' : "signIn"}
                title="Войти"
                disabled={(emailError || passwordError) ? true : false}
                onClickHandler={async () => (await signIn({ email: email, password: password }))}
                dataTestId="login-submit-button" />
            <Button
                className="signIn google"
                image={googlePlus}
                title="Войти через Google"
                onClickHandler={() => (signInGoogle(undefined))} />
        </form>
    )
}