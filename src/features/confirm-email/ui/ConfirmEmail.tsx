import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { Loader } from "@components/index";
import { CodeSection } from "@entities/index";

import { useUserConfirmEmailMutation } from "../api/confirm-email-api";

import './ConfirmEmail.scss';

export default function ConfirmEmail() {
    const { state: email } = useLocation();
    const [confirmEmail, { isLoading: isConfirmEmailLoading, isError: isConfirmEmailError }] = useUserConfirmEmailMutation();
    const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);

    useEffect(() => {
        if (code[5]) {
            confirmEmail({ email: email, code: code.reduce((prv, crrnt) => (prv + crrnt)) })
        }
    }, [code]);

    return (
        <>
            {(isConfirmEmailLoading) && <Loader />}
            {(!email) && <Navigate to='/auth' />}
            {<form className="confirmEmail">
                <CodeSection
                    length={6}
                    values={code}
                    setValues={setCode} />
            </form>}
        </>
    )
}