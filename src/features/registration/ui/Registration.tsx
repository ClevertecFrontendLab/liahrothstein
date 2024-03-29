import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { push } from "redux-first-history";

import { Button, FormInput, Loader } from "@components/index";

import { useAppDispatch } from "@store/hooks";
import { comparePasswords, setAuthStatus, switcher, validateEmail, validatePassword } from "@utils/index";
import { setRegisterDirtyInputs, googleRegister } from "../model/registration-model";
import { useUserRegistrationMutation } from "../api/registration-api";
import { RoutePaths } from "../../../shared/types";

import googlePlus from '../../../shared/assets/icons/google-plus-icon.svg';
import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

import './Registration.scss';

export function Registration() {
    const [email, setEmail] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [firstPassword, setFirstPassword] = useState<string>('');
    const [firstPasswordDirty, setFirstPasswordDirty] = useState(false);
    const [firstPasswordError, setFirstPasswordError] = useState(true);
    const [secondPassword, setSecondPassword] = useState<string>('');
    const [secondPasswordDirty, setSecondPasswordDirty] = useState(false);
    const [secondPasswordError, setSecondPasswordError] = useState(true);
    const [isFirstEyeOpen, setIsFirstEyeOpen] = useState(false);
    const [isSecondEyeOpen, setIsSecondEyeOpen] = useState(false);
    const [register, { isLoading: isRegisterLoading, isError: isRegisterError, isSuccess: isRegisterSuccess, error }] = useUserRegistrationMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let errorStatus = error?.status;

    useEffect(() => {
        setSecondPasswordError(comparePasswords(firstPassword, secondPassword));
    }, [secondPassword]);

    useEffect(() => {
        setSecondPasswordError(true);
    }, []);

    useEffect(() => {
        if (isRegisterSuccess) {
            dispatch(setAuthStatus('success'));
            navigate(RoutePaths.Success);
        }
    }, [isRegisterSuccess]);

    useEffect(() => {
        if ((isRegisterError) && (errorStatus === 409)) {
            dispatch(setAuthStatus('error-user-exist'));
            navigate(RoutePaths.ErrorUserExist);
        } else if ((isRegisterError) && (errorStatus !== 409)) {
            dispatch(setAuthStatus('error'));
            dispatch(push(RoutePaths.Error, { email: email, password: firstPassword }));
        }
    }, [isRegisterError]);

    return (
        <form className="registration">
            {(isRegisterLoading) && <Loader />}
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
                    onBlurHandler={setRegisterDirtyInputs}
                    onChangeHandler={validateEmail}
                    dataTestId="registration-email" />
            </div>
            <div className={(firstPasswordDirty && firstPasswordError) ? "firstPassword password error" : 'firstPassword password'}>
                <FormInput
                    inputType={(isFirstEyeOpen) ? 'text' : 'password'}
                    inputValue={firstPassword}
                    inputName={'firstPassword'}
                    inputPlaceholder={"Пароль"}
                    dispatch={setFirstPassword}
                    errorDispatch={setFirstPasswordError}
                    setDirty={setFirstPasswordDirty}
                    onBlurHandler={setRegisterDirtyInputs}
                    onChangeHandler={validatePassword}
                    dataTestId="registration-password" />
                <Button
                    image={(isFirstEyeOpen) ? eyeOpened : eyeClosed}
                    onClickHandler={() => (switcher(isFirstEyeOpen, setIsFirstEyeOpen))} />
                <p className="warn">Пароль не менее 8 символов, с заглавной буквой и цифрой</p>
            </div>
            <div className={(secondPasswordDirty && secondPasswordError) ? "secondPassword password error" : 'secondPassword password'}>
                <FormInput
                    inputType={(isSecondEyeOpen) ? 'text' : 'password'}
                    inputValue={secondPassword}
                    inputName={'secondPassword'}
                    inputPlaceholder={"Повторите пароль"}
                    dispatch={setSecondPassword}
                    errorDispatch={setSecondPasswordError}
                    setDirty={setSecondPasswordDirty}
                    onBlurHandler={setRegisterDirtyInputs}
                    onChangeHandler={validatePassword}
                    dataTestId="registration-confirm-password" />
                <Button
                    image={(isSecondEyeOpen) ? eyeOpened : eyeClosed}
                    onClickHandler={() => (switcher(isSecondEyeOpen, setIsSecondEyeOpen))} />
                <p className="warn">{(secondPasswordDirty && secondPasswordError) ? 'Пароли не совпадают' : ''}</p>
            </div>
            <Button
                className={(emailError || firstPasswordError || secondPasswordError) ? 'signUp disabled' : 'signUp'}
                title="Войти"
                disabled={(emailError || firstPasswordError || secondPasswordError) ? true : false}
                onClickHandler={async () => (await register({ email: email, password: firstPassword }))}
                dataTestId="registration-submit-button" />
            <Button
                className="signUp google"
                image={googlePlus}
                title="Регистрация через Google"
                onClickHandler={() => (googleRegister())} />
        </form>
    )
}