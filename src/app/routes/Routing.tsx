import { Navigate, Route, Routes } from "react-router-dom";
import { AuthPage, MainPage, PasswordRecoveryPage, RegisterPage } from "@pages/index";

interface RoutingProps {
    isAuth: boolean
}

export default function Routing({ isAuth }: RoutingProps) {

    return (
        <Routes>
            <Route path="/" element={(isAuth) ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            <Route path="/main" element={(isAuth) ? <MainPage /> : <Navigate to='/auth' />} />
            <Route path="/auth" element={(isAuth) ? <Navigate to='/main' /> : <AuthPage />} />
            <Route path="/auth/registration" element={<RegisterPage />} />
            <Route path="/auth/change-password" element={<PasswordRecoveryPage />} />
        </Routes>
    )
}