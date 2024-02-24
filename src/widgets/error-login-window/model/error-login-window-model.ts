import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

export function onClickRepeat(dispatch: Dispatch): void {
    dispatch(push('/auth'))
}