import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import {
    AuthPage,
    ConfirmEmailPage,
    MainPage,
    PasswordRecoveryPage,
    RegisterPage,
    ErrorChangePasswordPage,
    ErrorCheckEmailNoExistPage,
    ErrorCheckEmailPage,
    ErrorLoginPage,
    ErrorPage,
    ErrorUserExistPage,
    SuccessChangePasswordPage,
    SuccessPage,
    FeedbacksPage,
    CalendarPage
} from "@pages/index";

import { useAppDispatch, useAppSelector } from "../store";
import { RoutePaths } from '../../shared/types';
import { logIn, rememberMeLogIn } from "@utils/index";
import ProtectedRoute from "./ProtectedRoute";

export default function Routing() {
    const isAuth = useAppSelector((state) => (state.isAuth));
    const isRememberMeAuth = useAppSelector((state) => (state.isRememberMeAuth));
    const authStatus = useAppSelector((state) => (state.authStatus));
    const dispatch = useAppDispatch();

    let token = new URLSearchParams(window.location.search).get('accessToken');

    function authStatusCheck() {
        switch (authStatus) {
            case 'success-change-password':
                return (<SuccessChangePasswordPage />);
                break;
            case 'error-check-email-no-exist':
                return (<ErrorCheckEmailNoExistPage />);
                break;
            case 'error':
                return (<ErrorPage />)
                break;
            case 'error-user-exist':
                return (<ErrorUserExistPage />);
                break;
            case 'success':
                return (<SuccessPage />);
                break;
            case 'error-login':
                return (<ErrorLoginPage />);
                break;
            default:
                return (<Navigate to={RoutePaths.Auth} />)
        }
    };

    function authStatusCheckPage(page: string) {
        switch (page) {
            case 'confirm-email':
                switch (authStatus) {
                    case 'auth':
                    case 'success-change-password':
                    case 'error-check-email':
                    case 'error-check-email-no-exist':
                    case 'error':
                    case 'error-user-exist':
                    case 'success':
                    case 'error-login':
                    case 'error-change-password':
                        return (<Navigate to={RoutePaths.Auth} />)
                        break;
                    default:
                        return (<ConfirmEmailPage />)
                }
                break;
            case 'change-password':
                switch (authStatus) {
                    case 'auth':
                    case 'error-check-email':
                    case 'error-check-email-no-exist':
                    case 'error':
                    case 'error-user-exist':
                    case 'success':
                    case 'error-login':
                        return (<Navigate to={RoutePaths.Auth} />)
                        break;
                    default:
                        return (<PasswordRecoveryPage />)
                }
                break;
            case 'error-change-password':
                switch (authStatus) {
                    case 'auth':
                    case 'confirm-email':
                    case 'change-password':
                    case 'error-check-email':
                    case 'error-check-email-no-exist':
                    case 'error':
                    case 'error-user-exist':
                    case 'success':
                    case 'error-login':
                        return (<Navigate to={RoutePaths.Auth} />)
                        break;
                    default:
                        return (<ErrorChangePasswordPage />)
                }
                break;
            case 'error-check-email':
                switch (authStatus) {
                    case 'auth':
                    case 'change-password':
                    case 'success-change-password':
                    case 'error-change-password':
                    case 'error-check-email-no-exist':
                    case 'error':
                    case 'error-user-exist':
                    case 'success':
                    case 'error-login':
                        return (<Navigate to={RoutePaths.Auth} />)
                        break;
                    default:
                        return (<ErrorCheckEmailPage />)
                }
                break;
        }
    };

    useEffect(() => {
        if (token) {
            dispatch(logIn());
            dispatch(rememberMeLogIn(token));
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={(isAuth || isRememberMeAuth || token) ? <Navigate to={RoutePaths.Main} /> : <Navigate to={RoutePaths.Auth} />} />
            <Route element={<ProtectedRoute isAuth={isAuth} isRememberMeAuth={isRememberMeAuth} redirectPath={RoutePaths.Auth} />}>
                <Route path={RoutePaths.Main} element={<MainPage />} />
                <Route path={RoutePaths.Feedbacks} element={<FeedbacksPage />} />
                <Route path={RoutePaths.Calendar} element={<CalendarPage />} />
            </Route>
            <Route element={<ProtectedRoute isAuth={isAuth} isRememberMeAuth={isRememberMeAuth} redirectPath={RoutePaths.Main} />}>
                <Route path={RoutePaths.Auth} element={<AuthPage />} />
                <Route path={RoutePaths.Registration} element={<RegisterPage />} />
            </Route>
            <Route path={RoutePaths.ConfirmEmail} element={authStatusCheckPage('confirm-email')} />
            <Route path={RoutePaths.ChangePassword} element={authStatusCheckPage('change-password')} />
            <Route path={RoutePaths.SuccessChangePassword} element={authStatusCheck()} />
            <Route path={RoutePaths.ErrorChangePassword} element={authStatusCheckPage('error-change-password')} />
            <Route path={RoutePaths.ErrorCheckEmail} element={authStatusCheckPage('error-check-email')} />
            <Route path={RoutePaths.ErrorCheckEmailNoExist} element={authStatusCheck()} />
            <Route path={RoutePaths.Error} element={authStatusCheck()} />
            <Route path={RoutePaths.ErrorUserExist} element={authStatusCheck()} />
            <Route path={RoutePaths.Success} element={authStatusCheck()} />
            <Route path={RoutePaths.ErrorLogin} element={authStatusCheck()} />
        </Routes>
    )
}