import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { push } from "redux-first-history";

import { Button, FormInput, Loader } from "@components/index";

import { useAppDispatch } from "@store/hooks";
import { setAuthStatus, switcher, validatePassword } from "@utils/index";
import { useUserChangePasswordMutation } from "../api/change-password-api";
import { setChangePasswordDirtyInputs } from "../model/change-password-model";
import { RoutePaths } from "../../../shared/types";

import eyeClosed from '../../../shared/assets/icons/eye-closed-icon.svg';
import eyeOpened from '../../../shared/assets/icons/eye-opened-icon.svg';

import './ChangePassword.scss';

export function ChangePassword() {
    const [firstPassword, setFirstPassword] = useState<string>('');
    const [firstPasswordDirty, setFirstPasswordDirty] = useState(false);
    const [firstPasswordError, setFirstPasswordError] = useState(true);
    const [secondPassword, setSecondPassword] = useState<string>('');
    const [secondPasswordDirty, setSecondPasswordDirty] = useState(false);
    const [secondPasswordError, setSecondPasswordError] = useState(true);
    const [isFirstEyeOpen, setIsFirstEyeOpen] = useState(false);
    const [isSecondEyeOpen, setIsSecondEyeOpen] = useState(false);
    const [changePassword, { isLoading: isChangePasswordLoading, isError: isChangePasswordError, isSuccess: isChangePasswordSuccess }] = useUserChangePasswordMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isChangePasswordError) {
            dispatch(setAuthStatus('error-change-password'));
            dispatch(push(RoutePaths.ErrorChangePassword, { password: firstPassword, confirmPassword: secondPassword }))
        }
    }, [isChangePasswordError]);

    useEffect(() => {
        if (isChangePasswordSuccess) {
            dispatch(setAuthStatus('success-change-password'));
            navigate(RoutePaths.SuccessChangePassword);
        }
    }, [isChangePasswordSuccess]);

    return (
        <form className="changePassword">
            {isChangePasswordLoading && <Loader />}
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
                    onChangeHandler={validatePassword}
                    dataTestId="change-password" />
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
                    onChangeHandler={validatePassword}
                    dataTestId="change-confirm-password" />
                <Button
                    image={(isSecondEyeOpen) ? eyeOpened : eyeClosed}
                    onClickHandler={() => (switcher(isSecondEyeOpen, setIsSecondEyeOpen))} />
                <p className="warn">{(secondPasswordDirty && secondPasswordError) ? 'Пароли не совпадают' : ''}</p>
            </div>
            <Button
                className={(firstPasswordError || secondPasswordError) ? 'changePassword disabled' : 'changePassword'}
                title="Сохранить"
                disabled={(firstPasswordError || secondPasswordError) ? true : false}
                onClickHandler={async () => (await changePassword({ password: firstPassword, confirmPassword: secondPassword }))}
                dataTestId="change-submit-button" />
        </form>
    )
}