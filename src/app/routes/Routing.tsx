import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage, ConfirmEmailPage, MainPage, PasswordRecoveryPage, RegisterPage } from "@pages/index";
import { useAppSelector } from "../store";

export default function Routing() {
    const isAuth = useAppSelector((state) => (state.isAuth));

    return (
        <Routes>
            <Route path="/" element={(isAuth) ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            <Route path="/main" element={(isAuth) ? <MainPage /> : <Navigate to='/auth' />} />
            <Route path="/auth" element={(isAuth) ? <Navigate to='/main' /> : <AuthPage />} />
            <Route path="/auth/registration" element={(isAuth) ? <Navigate to='/main' /> : <RegisterPage />} />
            <Route path="/auth/confirm-email" element={(isAuth) ? <Navigate to='/main' /> : <ConfirmEmailPage />} />
            <Route path="/auth/change-password" element={(isAuth) ? <Navigate to='/main' /> : <PasswordRecoveryPage />} />
        </Routes>
    )
}