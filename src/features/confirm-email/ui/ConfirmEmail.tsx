import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Loader } from "@components/index";
import { CodeSection } from "@entities/index";

import { useUserConfirmEmailMutation } from "../api/confirm-email-api";

import './ConfirmEmail.scss';
import { setAuthStatus } from "@utils/auth-status-slice";

interface ConfirmEmailProps {
    setIsConfirmEmailError: (isError: boolean) => void
}

export default function ConfirmEmail({ setIsConfirmEmailError }: ConfirmEmailProps) {
    const { state: email } = useLocation();
    const [confirmEmail, { isLoading, isError, isSuccess }] = useUserConfirmEmailMutation();
    const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (code[5]) {
            confirmEmail({ email: email, code: code.reduce((prv, crrnt) => (prv + crrnt)) })
        }
    }, [code]);

    useEffect(() => {
        if (isError) {
            setIsConfirmEmailError(true);
        }
    }, [isError]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAuthStatus('change-password'));
            navigate('/auth/change-password');
        }
    }, [isSuccess]);

    return (
        <form className={(isError) ? 'confirmEmail error' : "confirmEmail"}>
            {(isLoading) && <Loader />}
            {(!email) && <Navigate to='/auth' />}
            <CodeSection
                length={6}
                values={code}
                setValues={setCode} />
        </form>
    )
}