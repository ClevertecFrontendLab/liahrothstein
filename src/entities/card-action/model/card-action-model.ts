import { Dispatch } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import { RoutePaths } from "../../../shared/types";

export function onClickCheckHandler(className: string, dispatch: Dispatch) {
    switch (className) {
        case 'calendar':
            return (() => {
                dispatch(push(RoutePaths.Calendar));
            });
            break;
        default:
            return (undefined);
    }
}