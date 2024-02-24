import { useState } from "react";
import { Navigate } from "react-router-dom";

import { Button, FormInput, Loader } from "@components/index";

import { switcher, validatePassword } from "@utils/index";
import { useUserChangePasswordMutation } from "../api/change-password-api";
import { setChangePasswordDirtyInputs } from "../model/change-password-model";

import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

export default function ChangePassword() {
    const [firstPassword, setFirstPassword] = useState<string>('');
    const [firstPasswordDirty, setFirstPasswordDirty] = useState<boolean>(false);
    const [firstPasswordError, setFirstPasswordError] = useState<boolean>(true);
    const [secondPassword, setSecondPassword] = useState<string>('');
    const [secondPasswordDirty, setSecondPasswordDirty] = useState<boolean>(false);
    const [secondPasswordError, setSecondPasswordError] = useState<boolean>(true);
    const [isFirstEyeOpen, setIsFirstEyeOpen] = useState<boolean>(false);
    const [isSecondEyeOpen, setIsSecondEyeOpen] = useState<boolean>(false);
    const [changePassword, { isLoading, isError, isSuccess }] = useUserChangePasswordMutation();

    return (
        <form className="changePassword">
            {isLoading && <Loader />}
            {isError && <Navigate to='/result/error-change-password' />}
            {isSuccess && <Navigate to='/result/success-change-password' />}
            <div className={(firstPasswordDirty && firstPasswordError) ? "firstPassword password error" : 'firstPassword password'}>
                <FormInput
                    inputType={(isFirstEyeOpen) ? 'text' : 'password'}
                    inputValue={firstPassword}
                    inputName={'firstPassword'}
                    inputPlaceholder={"Пароль"}
                    dispatch={setFirstPassword}
                    errorDispatch={setFirstPasswordError}
                    setDirty={setFirstPasswordDirty}
                    onBlurHandler={setChangePasswordDirtyInputs}
                    onChangeHandler={validatePassword} />
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
                    onBlurHandler={setChangePasswordDirtyInputs}
                    onChangeHandler={validatePassword} />
                <Button
                    image={(isSecondEyeOpen) ? eyeOpened : eyeClosed}
                    onClickHandler={() => (switcher(isSecondEyeOpen, setIsSecondEyeOpen))} />
                <p className="warn">{(secondPasswordDirty && secondPasswordError) ? 'Пароли не совпадают' : ''}</p>
            </div>
            <Button
                className={(firstPasswordError || secondPasswordError) ? 'signUp disabled' : 'signUp'}
                title="Сохранить"
                disabled={(firstPasswordError || secondPasswordError) ? true : false}
                onClickHandler={async () => (await changePassword({ password: firstPassword, confirmPassword: secondPassword }))} />
        </form>
    )
}