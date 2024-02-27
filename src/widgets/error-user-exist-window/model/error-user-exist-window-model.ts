import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

export function onClickBackToRegister(dispatch: Dispatch) {
    dispatch(push('/auth/registration'))
}