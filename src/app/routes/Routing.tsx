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

    return (
        <Routes>
            <Route path="/" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            <Route path="/main" element={(isAuth || isRememberMeAuth) ? <MainPage /> : <Navigate to='/auth' />} />
            <Route path="/auth" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <AuthPage />} />
            <Route path="/auth/registration" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <RegisterPage />} />
            <Route path="/auth/confirm-email" element={(authStatus === 'confirm-email') ? <ConfirmEmailPage /> : <Navigate to='/auth' />} />
            <Route path="/auth/change-password" element={(authStatus === 'change-password') ? <PasswordRecoveryPage /> : <Navigate to='/auth' />} />
            <Route path="/result/success-change-password" element={(authStatus === 'success-change-password') ? <SuccessChangePasswordPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-change-password" element={(authStatus === 'error-change-password') ? <ErrorChangePasswordPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-check-email" element={(authStatus === 'error-check-email') ? <ErrorCheckEmailPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-check-email-no-exist" element={(authStatus === 'error-check-email-no-exist') ? <ErrorCheckEmailNoExistPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error" element={(authStatus === 'error') ? <ErrorPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-user-exist" element={(authStatus === 'error-user-exist') ? <ErrorUserExistPage /> : <Navigate to='/auth' />} />
            <Route path="/result/success" element={(authStatus === 'success') ? <SuccessPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-login" element={(authStatus === 'error-login') ? <ErrorLoginPage /> : <Navigate to='/auth' />} />
        </Routes>
    )
}