import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

import { loginAPI, registrationAPI, confirmEmailAPI, changePasswordAPI, viewReviewsAPI, writeCommentAPI, sidebarMenuAPI, cardActionsAPI } from '../../features';
import { authStatusSlice, isAuthSlice, isRememberMeAuthSlice, getReviewsErrorSlice, saveTokenSlice } from "@utils/index";
import { trainingCalendarAPI } from "@widgets/index";

const { routerReducer, routerMiddleware, createReduxHistory } = createReduxHistoryContext({ history: createBrowserHistory(), savePreviousLocations: 1 });

const rootReducer = combineReducers({
    router: routerReducer,
    isAuth: isAuthSlice.reducer,
    isRememberMeAuth: isRememberMeAuthSlice.reducer,
    authStatus: authStatusSlice.reducer,
    getReviewsError: getReviewsErrorSlice.reducer,
    saveToken: saveTokenSlice.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [registrationAPI.reducerPath]: registrationAPI.reducer,
    [confirmEmailAPI.reducerPath]: confirmEmailAPI.reducer,
    [changePasswordAPI.reducerPath]: changePasswordAPI.reducer,
    [viewReviewsAPI.reducerPath]: viewReviewsAPI.reducer,
    [writeCommentAPI.reducerPath]: writeCommentAPI.reducer,
    [sidebarMenuAPI.reducerPath]: sidebarMenuAPI.reducer,
    [cardActionsAPI.reducerPath]: cardActionsAPI.reducer,
    [trainingCalendarAPI.reducerPath]: trainingCalendarAPI.reducer
});

export function setupStore() {
    return (
        configureStore({
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => (getDefaultMiddleware()
                .concat(routerMiddleware)
                .concat(loginAPI.middleware)
                .concat(registrationAPI.middleware)
                .concat(confirmEmailAPI.middleware)
                .concat(changePasswordAPI.middleware)
                .concat(viewReviewsAPI.middleware)
                .concat(writeCommentAPI.middleware)
                .concat(sidebarMenuAPI.middleware)
                .concat(cardActionsAPI.middleware)
                .concat(trainingCalendarAPI.middleware)
            )
        })
    )
};

export const store = setupStore();
export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;