import { Dispatch } from "@reduxjs/toolkit";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from "@reduxjs/toolkit/query";
import { MutationTrigger } from "node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";
import { CheckEmailRequest, CheckEmailResponse } from "../api/login-api";
import { push } from "redux-first-history";

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
    dispatch(push('/auth/confirm-email', email));
}