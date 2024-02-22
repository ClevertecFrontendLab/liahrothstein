import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { Button, FormInput, Loader } from "@components/index";

import { comparePasswords, switcher, validateEmail, validatePassword } from "@utils/index";
import { setRegisterDirtyInputs } from "../model/registration-model";
import { useUserRegistrationMutation, useLazyUserGoogleRegistrationQuery } from "../api/registration-api";

import googlePlus from '../../../shared/assets/icons/google-plus-icon.svg';
import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

export default function Registration() {
    const [email, setEmail] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(true);
    const [firstPassword, setFirstPassword] = useState<string>('');
    const [firstPasswordDirty, setFirstPasswordDirty] = useState<boolean>(false);
    const [firstPasswordError, setFirstPasswordError] = useState<boolean>(true);
    const [secondPassword, setSecondPassword] = useState<string>('');
    const [secondPasswordDirty, setSecondPasswordDirty] = useState<boolean>(false);
    const [secondPasswordError, setSecondPasswordError] = useState<boolean>(true);
    const [isFirstEyeOpen, setIsFirstEyeOpen] = useState<boolean>(false);
    const [isSecondEyeOpen, setIsSecondEyeOpen] = useState<boolean>(false);
    const [register, { isLoading: isRegisterLoading, isError: isRegisterError, error }] = useUserRegistrationMutation();
    const [registerGoogle, { isLoading: isRegisterGoogleLoading, isError: isRegisterGoogleError }] = useLazyUserGoogleRegistrationQuery();

    useEffect(() => {
        setSecondPasswordError(comparePasswords(firstPassword, secondPassword))
    }, [secondPassword]);

    useEffect(() => {
        setSecondPasswordError(true)
    }, []);

    return (
        <form className="registration">
            {(isRegisterLoading || isRegisterGoogleLoading) && <Loader />}
            {(isRegisterError && error?.status === 409) && <Navigate to={'/result/error-user-exist'} />}
            {((isRegisterError && error?.status !== 409) || isRegisterGoogleError) && <Navigate to={'/result/error'} />}
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
                    onChangeHandler={validateEmail} />
            </div>
            <div className={(firstPasswordDirty && firstPasswordError) ? "firstPassword error" : 'firstPassword'}>
                <FormInput
                    inputType={(isFirstEyeOpen) ? 'text' : 'password'}
                    inputValue={firstPassword}
                    inputName={'firstPassword'}
                    inputPlaceholder={"Пароль"}
                    dispatch={setFirstPassword}
                    errorDispatch={setFirstPasswordError}
                    setDirty={setFirstPasswordDirty}
                    onBlurHandler={setRegisterDirtyInputs}
                    onChangeHandler={validatePassword} />
                <Button
                    image={(isFirstEyeOpen) ? eyeOpened : eyeClosed}
                    title=""
                    disabled={false}
                    onClickHandler={() => (switcher(isFirstEyeOpen, setIsFirstEyeOpen))} />
            </div>
            <div className={(secondPasswordDirty && secondPasswordError) ? "secondPassword error" : 'secondPassword'}>
                <FormInput
                    inputType={(isSecondEyeOpen) ? 'text' : 'password'}
                    inputValue={secondPassword}
                    inputName={'secondPassword'}
                    inputPlaceholder={"Повторите пароль"}
                    dispatch={setSecondPassword}
                    errorDispatch={setSecondPasswordError}
                    setDirty={setSecondPasswordDirty}
                    onBlurHandler={setRegisterDirtyInputs}
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