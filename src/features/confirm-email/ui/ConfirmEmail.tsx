import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Loader } from "@components/index";
import { CodeSection } from "@entities/index";

import { useUserCheckEmailMutation, useUserConfirmEmailMutation } from "../api/confirm-email-api";

export default function ConfirmEmail() {
    const { state: email } = useLocation();
    const [checkEmail, { isLoading: isCheckEmailLoading, isError: isCheckEmailError, isSuccess: isCheckEmailSuccess, error }] = useUserCheckEmailMutation();
    const [confirmEmail, { isLoading: isConfirmEmailLoading, isError: isConfirmEmailError }] = useUserConfirmEmailMutation();
    const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);

    // useEffect(() => {
    //     checkEmail({ email: email });
    // }, [])

    return (
        <>
            {(isCheckEmailLoading || isConfirmEmailLoading) && <Loader />}
            {(isCheckEmailError && error?.status === 404) && <Navigate to={'/result/error-check-email-no-exist'} />}
            {(isCheckEmailError && error?.status !== 404) && <Navigate to={'/result/error-check-email'} />}
            {<form className="confirmEmail">
                <img src="" alt="" className="warn" />
                <div className="description">
                    <p className="title">
                        Введите код<br /> для восстановления аккауанта
                    </p>
                    <p className="subtitle">
                        Мы отправили вам на e-mail {email}<br />
                        шестизначный код. Введите его в поле ниже.
                    </p>
                </div>
                <CodeSection
                    length={6}
                    values={code}
                    setValues={setCode} />
                <p className="subtitle">
                    Не пришло письмо? Проверьте папку Спам.
                </p>
            </form>}
        </>
    )
}