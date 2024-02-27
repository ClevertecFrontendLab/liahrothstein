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
    SuccessPage
} from "@pages/index";

import { useAppSelector } from "../store";

export default function Routing() {
    const isAuth = useAppSelector((state) => (state.isAuth));
    const isRememberMeAuth = useAppSelector((state) => (state.isRememberMeAuth));
    const authStatus = useAppSelector((state) => (state.authStatus));

    function authStatusCheck(): JSX.Element {
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
    }

    return (
        <Routes>
            <Route path="/" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            <Route path="/main" element={(isAuth || isRememberMeAuth) ? <MainPage /> : <Navigate to='/auth' />} />
            <Route path="/auth" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <AuthPage />} />
            <Route path="/auth/registration" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <RegisterPage />} />
            <Route path="/auth/confirm-email" element={(authStatus !== 'auth') ? <ConfirmEmailPage /> : <Navigate to='/auth' />} />
            <Route path="/auth/change-password" element={(authStatus !== 'auth') ? <PasswordRecoveryPage /> : <Navigate to='/auth' />} />
            <Route path="/result/success-change-password" element={authStatusCheck()} />
            <Route path="/result/error-change-password" element={(authStatus !== 'auth') ? <ErrorChangePasswordPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-check-email" element={(authStatus !== 'auth') ? <ErrorCheckEmailPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-check-email-no-exist" element={authStatusCheck()} />
            <Route path="/result/error" element={authStatusCheck()} />
            <Route path="/result/error-user-exist" element={authStatusCheck()} />
            <Route path="/result/success" element={authStatusCheck()} />
            <Route path="/result/error-login" element={authStatusCheck()} />
        </Routes>
    )
}