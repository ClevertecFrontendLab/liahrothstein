import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from "@reduxjs/toolkit/query";
import { MutationTrigger } from "node_modules/@reduxjs/toolkit/dist/query/react/buildHooks";
import type { UserDTO } from "../../../shared/types/user-dto";

interface RegistrationResponse { }

export async function onClickBackToRegister(dispatch: Dispatch, mutationTrigger: MutationTrigger<MutationDefinition<UserDTO, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, RegistrationResponse, "registrationAPI">>, email: string, password: string) {
    dispatch(push('/auth/registration'));
    await mutationTrigger({ email: email, password: password });
}