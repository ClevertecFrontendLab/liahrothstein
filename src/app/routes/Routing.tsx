import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import {
    AuthPage,
    ConfirmEmailPage,
    MainPage,
    PasswordRecoveryPage,
    RegisterPage,
    ResultErrorChangePasswordPage,
    ResultErrorCheckEmailNoExistPage,
    ResultErrorCheckEmailPage,
    ResultErrorLoginPage,
    ResultErrorPage,
    ResultErrorUserExistPage,
    ResultSuccessChangePasswordPage,
    ResultSuccessPage
} from "@pages/index";

import { useAppSelector } from "../store";

export default function Routing() {
    const isAuth = useAppSelector((state) => (state.isAuth));
    const isRememberMeAuth = useAppSelector((state) => (state.isRememberMeAuth));
    const location = useLocation();

    return (
        <Routes>
            <Route path="/" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            <Route path="/main" element={(isAuth || isRememberMeAuth) ? <MainPage /> : <Navigate to='/auth' />} />
            <Route path="/auth" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <AuthPage />} />
            <Route path="/auth/registration" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <RegisterPage />} />
            <Route path="/auth/confirm-email" element={<ConfirmEmailPage />} />
            <Route path="/auth/change-password" element={<PasswordRecoveryPage />} />
            <Route path="/result/success-change-password" element={<ResultSuccessChangePasswordPage />} />
            <Route path="/result/error-change-password" element={<ResultErrorChangePasswordPage />} />
            <Route path="/result/error-check-email" element={<ResultErrorCheckEmailPage />} />
            <Route path="/result/error-check-email-no-exist" element={<ResultErrorCheckEmailNoExistPage />} />
            <Route path="/result/error" element={<ResultErrorPage />} />
            <Route path="/result/error-user-exist" element={<ResultErrorUserExistPage />} />
            <Route path="/result/success" element={<ResultSuccessPage />} />
            <Route path="/result/error-login" element={<ResultErrorLoginPage />} />
        </Routes>
    )
}