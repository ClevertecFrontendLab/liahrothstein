import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import { RoutePaths } from "../../../shared/types";

export function onClickRepeat(dispatch: Dispatch): void {
    dispatch(push(RoutePaths.Auth))
}