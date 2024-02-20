import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Loader } from "@components/index";
import { CodeSection } from "@entities/index";

import { useUserCheckEmailMutation, useUserConfirmEmailMutation } from "../api/confirm-email-api";

export default function ConfirmEmail() {
    const { state: email } = useLocation();
    const [checkEmail, { isLoading: isCheckEmailLoading, isError: isCheckEmailError, error }] = useUserCheckEmailMutation();
    const [confirmEmail, { isLoading: isConfirmEmailLoading, isError: isConfirmEmailError }] = useUserConfirmEmailMutation();
    const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);

    useEffect(() => {
        checkEmail({ email: email });
    }, []);

    useEffect(() => {
        if (code[5]) {
            confirmEmail({ email: email, code: code.reduce((prv, crrnt) => (prv + crrnt)) })
        }
    }, [code]);

    return (
        <>
            {(isCheckEmailLoading || isConfirmEmailLoading) && <Loader />}
            {(isCheckEmailError && error?.status === 404) && <Navigate to={'/result/error-check-email-no-exist'} />}
            {(isCheckEmailError && error?.status !== 404) && <Navigate to={'/result/error-check-email'} />}
            {<form className="confirmEmail">
                <CodeSection
                    length={6}
                    values={code}
                    setValues={setCode} />
            </form>}
        </>
    )
}