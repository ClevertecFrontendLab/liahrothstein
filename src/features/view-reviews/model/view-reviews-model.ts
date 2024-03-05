import { Dispatch } from "@reduxjs/toolkit";
import { logOut, rememberMeLogOut, removeToken } from "@utils/index";
import { push } from "redux-first-history";
import { RoutePaths } from "../../../shared/types";

export function isErrorForbidden(dispatch: Dispatch) {
    dispatch(logOut());
    dispatch(removeToken());
    dispatch(rememberMeLogOut());
    dispatch(push(RoutePaths.Auth));
}