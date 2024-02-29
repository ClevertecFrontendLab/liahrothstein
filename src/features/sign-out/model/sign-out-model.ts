import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

import { logOut, rememberMeLogOut } from '@utils/index';
import { RoutePaths } from "../../../shared/types";

export function onClickLogOut(dispatch: Dispatch): void {
    dispatch(logOut());
    dispatch(rememberMeLogOut());
    dispatch(push(RoutePaths.Auth));
}