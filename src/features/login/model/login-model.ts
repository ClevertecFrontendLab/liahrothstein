import { Dispatch } from "@reduxjs/toolkit";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from "@reduxjs/toolkit/query";
import { MutationTrigger } from "node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";
import { push } from "redux-first-history";
import { setAuthStatus } from "@utils/auth-status-slice";
import { CheckEmailRequest, CheckEmailResponse } from "../api/login-api";

export function setAuthDirtyInputs(event: React.FocusEvent<HTMLInputElement, Element>, dispatch: (isDirty: boolean) => void) {
    switch (event.target.name) {
        case 'email':
            dispatch(true);
            break;
        case 'password':
            dispatch(true);
            break;
    }
}

export async function onClickCheckEmail(email: string, dispatch: Dispatch, mutationTrigger: MutationTrigger<MutationDefinition<CheckEmailRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, CheckEmailResponse, "loginAPI">>) {
    await mutationTrigger({ email: email });
    dispatch(setAuthStatus('confirm-email'));
    dispatch(push('/auth/confirm-email', email));
}