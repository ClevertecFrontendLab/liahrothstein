import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { loginAPI, registrationAPI, checkEmailAPI, confirmEmailAPI, changePasswordAPI } from '../../features'

const rootReducer = combineReducers({
    loginAPI,
    registrationAPI,
    checkEmailAPI,
    confirmEmailAPI,
    changePasswordAPI
});

export function setupStore() {
    return (
        configureStore({
            reducer: rootReducer
        })
    )
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];