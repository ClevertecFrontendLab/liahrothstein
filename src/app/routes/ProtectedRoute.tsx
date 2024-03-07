import { Navigate, Outlet } from "react-router-dom";

import { RoutePaths } from "../../shared/types";

interface ProtectedRouteProps {
    isAuth: boolean,
    isRememberMeAuth: boolean,
    redirectPath: RoutePaths
}

export default function ProtectedRoute({ isAuth, isRememberMeAuth, redirectPath }: ProtectedRouteProps) {
    switch (redirectPath) {
        case RoutePaths.Auth:
            if (isAuth || isRememberMeAuth) {
                return (<Outlet />)
            } else {
                return (<Navigate to={RoutePaths.Auth} />)
            }
            break;
        case RoutePaths.Main:
            if (isAuth || isRememberMeAuth) {
                return (<Navigate to={RoutePaths.Main} />)
            } else {
                return (<Outlet />)
            }
            break;
        default:
            return (<Navigate to={RoutePaths.Auth} />)
    }
}