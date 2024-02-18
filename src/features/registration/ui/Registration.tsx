import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { Button, FormInput, Loader } from "@components/index";

import { comparePasswords, switcher, validateEmail, validatePassword } from "@utils/index";
import { useUserRegistrationMutation, useLazyUserGoogleRegistrationQuery } from "../api/registration-api";

import googlePlus from '../../../shared/assets/icons/google-plus-icon.svg';
import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

export default function Registration() {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(true);
    const [firstPassword, setFirstPassword] = useState<string>('');
    const [firstPasswordError, setFirstPasswordError] = useState<boolean>(true);
    const [secondPassword, setSecondPassword] = useState<string>('');
    const [secondPasswordError, setSecondPasswordError] = useState<boolean>(true);
    const [isFirstEyeOpen, setIsFirstEyeOpen] = useState<boolean>(false);
    const [isSecondEyeOpen, setIsSecondEyeOpen] = useState<boolean>(false);
    const [register, { isLoading: isRegisterLoading, isError: isRegisterError }] = useUserRegistrationMutation();
    const [registerGoogle, { isLoading: isRegisterGoogleLoading, isError: isRegisterGoogleError }] = useLazyUserGoogleRegistrationQuery();

    if (isRegisterError || isRegisterGoogleError) {
        return (<Navigate to={'/result/error'} />)
    };

    useEffect(() => {
        setSecondPasswordError(comparePasswords(firstPassword, secondPassword))
    }, [secondPassword]);

    useEffect(() => {
        setSecondPasswordError(true)
    }, []);

    return (
        <form className="registration">
            {isRegisterLoading && <Loader />}
            {isRegisterGoogleLoading && <Loader />}
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
                    inputType={(isFirstEyeOpen) ? 'text' : 'password'}
                    inputValue={firstPassword}
                    inputName={'password'}
                    inputPlaceholder={"Пароль"}
                    dispatch={setFirstPassword}
                    errorDispatch={setFirstPasswordError}
                    onChangeHandler={validatePassword} />
                <Button
                    image={(isFirstEyeOpen) ? eyeOpened : eyeClosed}
                    title=""
                    disabled={false}
                    onClickHandler={() => (switcher(isFirstEyeOpen, setIsFirstEyeOpen))} />
            </div>
            <div className="repeatPassword">
                <FormInput
                    inputType={(isSecondEyeOpen) ? 'text' : 'password'}
                    inputValue={secondPassword}
                    inputName={'password'}
                    inputPlaceholder={"Пароль"}
                    dispatch={setSecondPassword}
                    errorDispatch={setSecondPasswordError}
                    onChangeHandler={validatePassword} />
                <Button
                    image={(isSecondEyeOpen) ? eyeOpened : eyeClosed}
                    title=""
                    disabled={false}
                    onClickHandler={() => (switcher(isSecondEyeOpen, setIsSecondEyeOpen))} />
            </div>
            <Button
                image=""
                title="Войти"
                disabled={(emailError || firstPasswordError || secondPasswordError) ? true : false}
                onClickHandler={async () => (await register({ email: email, password: firstPassword }))} />
            <Button
                image={googlePlus}
                title="Регистрация через Google"
                disabled={false}
                onClickHandler={() => (registerGoogle(undefined))} />
        </form>
    )
}