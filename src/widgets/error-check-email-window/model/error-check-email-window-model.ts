import { push } from "redux-first-history";
import { Dispatch } from "@reduxjs/toolkit";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from "@reduxjs/toolkit/query";
import { MutationTrigger } from "node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";
import { CheckEmailRequest, CheckEmailResponse } from "@features/login/api/login-api";

export async function onClickToAuth(dispatch: Dispatch, mutationTrigger: MutationTrigger<MutationDefinition<CheckEmailRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, CheckEmailResponse, "loginAPI">>, email: string) {
    dispatch(push('/auth'));
    await mutationTrigger({ email: email });
}