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
    const router = useAppSelector((state) => (state.router));
    var currentLocation = router.previousLocations[0].location?.pathname;

    return (
        <Routes>
            <Route path="/" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            <Route path="/main" element={(isAuth || isRememberMeAuth) ? <MainPage /> : <Navigate to='/auth' />} />
            <Route path="/auth" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <AuthPage />} />
            <Route path="/auth/registration" element={(isAuth || isRememberMeAuth) ? <Navigate to='/main' /> : <RegisterPage />} />
            <Route path="/auth/confirm-email" element={(currentLocation === '/auth/confirm-email') ? <ConfirmEmailPage /> : <Navigate to='/auth' />} />
            <Route path="/auth/change-password" element={(currentLocation === '/auth/confirm-email') ? <PasswordRecoveryPage /> : <Navigate to='/auth' />} />
            <Route path="/result/success-change-password" element={(currentLocation === '/auth/change-password') ? <SuccessChangePasswordPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-change-password" element={(currentLocation === '/auth/change-password') ? <ErrorChangePasswordPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-check-email" element={(currentLocation === '/auth') ? <ErrorCheckEmailPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-check-email-no-exist" element={(currentLocation === '/auth') ? <ErrorCheckEmailNoExistPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error" element={(currentLocation === '/auth/registration') ? <ErrorPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-user-exist" element={(currentLocation === '/auth/registration') ? <ErrorUserExistPage /> : <Navigate to='/auth' />} />
            <Route path="/result/success" element={(currentLocation === '/auth/registration') ? <SuccessPage /> : <Navigate to='/auth' />} />
            <Route path="/result/error-login" element={(currentLocation === '/auth') ? <ErrorLoginPage /> : <Navigate to='/auth' />} />
        </Routes>
    )
}