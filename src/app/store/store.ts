import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

import { loginAPI, registrationAPI, checkEmailAPI, confirmEmailAPI, changePasswordAPI } from '../../features';

const { routerReducer, routerMiddleware, createReduxHistory } = createReduxHistoryContext({ history: createBrowserHistory() });

const rootReducer = combineReducers({
    router: routerReducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [registrationAPI.reducerPath]: registrationAPI.reducer,
    [checkEmailAPI.reducerPath]: checkEmailAPI.reducer,
    [confirmEmailAPI.reducerPath]: confirmEmailAPI.reducer,
    [changePasswordAPI.reducerPath]: changePasswordAPI.reducer
});

export function setupStore() {
    return (
        configureStore({
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => (getDefaultMiddleware()
                .concat(routerMiddleware)
                .concat(loginAPI.middleware)
                .concat(registrationAPI.middleware)
                .concat(checkEmailAPI.middleware)
                .concat(confirmEmailAPI.middleware)
                .concat(changePasswordAPI.middleware)
            )
        })
    )
};

export const store = setupStore();
export const history = createReduxHistory(setupStore());

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];