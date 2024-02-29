import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import { RoutePaths } from "../../../shared/types";

export function onClickBackToRegister(dispatch: Dispatch) {
    dispatch(push(RoutePaths.Registration))
}