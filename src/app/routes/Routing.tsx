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
    FeedbacksPage
} from "@pages/index";

import { useAppSelector } from "../store";
import { RoutePaths } from '../../shared/types';

export default function Routing() {
    const isAuth = useAppSelector((state) => (state.isAuth));
    const isRememberMeAuth = useAppSelector((state) => (state.isRememberMeAuth));
    const authStatus = useAppSelector((state) => (state.authStatus));

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
                return (<Navigate to='/auth' />)
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
                        return (<Navigate to='/auth' />)
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
                        return (<Navigate to='/auth' />)
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
                        return (<Navigate to='/auth' />)
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
                        return (<Navigate to='/auth' />)
                        break;
                    default:
                        return (<ErrorCheckEmailPage />)
                }
                break;
        }
    };

    return (
        <Routes>
            <Route path="/" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            <Route path={RoutePaths.Main} element={(isAuth || isRememberMeAuth) ? <MainPage /> : <Navigate to='/auth' />} />
            <Route path={RoutePaths.Feedbacks} element={(isAuth || isRememberMeAuth) ? <FeedbacksPage /> : <Navigate to='/auth' />} />
            <Route path={RoutePaths.Auth} element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <AuthPage />} />
            <Route path={RoutePaths.Registration} element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <RegisterPage />} />
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