import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

export function onClickBackToChangePassword(dispatch: Dispatch) {
    dispatch(push('/auth/change-password'))
}