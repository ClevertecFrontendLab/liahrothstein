import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

export function onClickToAuth(dispatch: Dispatch) {
    dispatch(push('/auth'))
}