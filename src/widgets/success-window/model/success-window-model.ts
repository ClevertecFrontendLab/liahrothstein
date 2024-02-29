import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";

import { RoutePaths } from "../../../shared/types";

export function onClickToAuth(dispatch: Dispatch) {
    dispatch(push(RoutePaths.Auth))
}