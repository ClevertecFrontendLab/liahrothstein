import { Dispatch } from "@reduxjs/toolkit";
import { logOut, rememberMeLogOut } from "@utils/index";
import { push } from "redux-first-history";

export function isErrorForbidden(dispatch: Dispatch) {
    dispatch(logOut());
    dispatch(rememberMeLogOut());
    dispatch(push('/auth'));
}