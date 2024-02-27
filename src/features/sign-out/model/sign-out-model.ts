import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

import { logOut, rememberMeLogOut } from '@utils/index';

export function onClickLogOut(dispatch: Dispatch): void {
    dispatch(logOut());
    dispatch(rememberMeLogOut());
    dispatch(push('/auth'));
}