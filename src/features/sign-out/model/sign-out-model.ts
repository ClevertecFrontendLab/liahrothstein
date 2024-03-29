import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

import { logOut, rememberMeLogOut, removeToken } from '@utils/index';
import { RoutePaths } from "../../../shared/types";

export function onClickLogOut(dispatch: Dispatch): void {
    dispatch(logOut());
    dispatch(removeToken());
    dispatch(rememberMeLogOut());
    dispatch(push(RoutePaths.Auth));
}