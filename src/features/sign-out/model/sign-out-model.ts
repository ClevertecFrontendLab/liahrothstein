import { Dispatch } from "@reduxjs/toolkit";

import { logOut, rememberMeLogOut, setAuth } from '@utils/index';

export function onClickLogOut(dispatch: Dispatch): void {
    dispatch(logOut());
    dispatch(rememberMeLogOut());
    dispatch(setAuth());
}