import { Dispatch } from "@reduxjs/toolkit";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from "@reduxjs/toolkit/query";
import { MutationTrigger } from "node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";
import { push } from "redux-first-history";
import { setAuthStatus } from "@utils/auth-status-slice";
import { CheckEmailRequest, CheckEmailResponse } from "../api/login-api";
import type { UserDTO } from "../../../shared/types/user-dto";
import { RoutePaths } from "../../../shared/types";

interface LoginResponse {
    accessToken: string
}

export function setAuthDirtyInputs(event: React.FocusEvent<HTMLInputElement, Element>, dispatch: (isDirty: boolean) => void) {
    switch (event.target.name) {
        case 'email':
            dispatch(true);
            break;
        case 'password':
            dispatch(true);
            break;
        default:
            dispatch(false);
    }
}

export async function onClickCheckEmail(email: string, dispatch: Dispatch, mutationTrigger: MutationTrigger<MutationDefinition<CheckEmailRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, CheckEmailResponse, "loginAPI">>, isActivePasswordForgot: boolean, emailError: boolean, setIsActivePasswordForgot: (value: boolean) => void) {
    if (!isActivePasswordForgot && emailError) {
        setIsActivePasswordForgot(true);
    } else if (!isActivePasswordForgot && !emailError) {
        await mutationTrigger({ email: email });
        dispatch(setAuthStatus('confirm-email'));
        dispatch(push(RoutePaths.ConfirmEmail, email));
    }
}

export async function onClickSignIn(emailError: boolean, passwordError: boolean, email: string, password: string, mutationTrigger: MutationTrigger<MutationDefinition<UserDTO, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, LoginResponse, "loginAPI">>) {
    if (!emailError && !passwordError) {
        await mutationTrigger({ email: email, password: password })
    }
}