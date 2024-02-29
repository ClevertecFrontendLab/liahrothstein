import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";

import { Loader } from "@components/index";

import { useAppDispatch } from "@store/hooks";
import { useUserConfirmEmailMutation } from "../api/confirm-email-api";
import { setAuthStatus } from "@utils/auth-status-slice";
import { RoutePaths } from "../../../shared/types";

import './ConfirmEmail.scss';

interface ConfirmEmailProps {
    setIsConfirmEmailError: (isError: boolean) => void
}

export function ConfirmEmail({ setIsConfirmEmailError }: ConfirmEmailProps) {
    const { state: email } = useLocation();
    const [confirmEmail, { isLoading: isConfirmEmailLoading, isError: isConfirmEmailError, isSuccess: isConfirmEmailSuccess }] = useUserConfirmEmailMutation();
    const [code, setCode] = useState<string>('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (code[5]) {
            confirmEmail({ email: email, code: code });
            setCode('');
        }
    }, [code]);

    useEffect(() => {
        if (isConfirmEmailError) {
            setIsConfirmEmailError(true);
        }
    }, [isConfirmEmailError]);

    useEffect(() => {
        if (isConfirmEmailSuccess) {
            dispatch(setAuthStatus('change-password'));
            navigate(RoutePaths.ChangePassword);
        }
    }, [isConfirmEmailSuccess]);

    return (
        <form className={(isConfirmEmailError) ? 'confirmEmail error' : "confirmEmail"} data-test-id='verification-input'>
            {(isConfirmEmailLoading) && <Loader />}
            <VerificationInput
                length={6}
                value={code}
                onChange={setCode} />
        </form>
    )
}