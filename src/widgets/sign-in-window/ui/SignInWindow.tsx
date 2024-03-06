import { Link } from "react-router-dom";

import { Login } from "@features/index";

import { RoutePaths } from "../../../shared/types";

import clever from '../../../shared/assets/images/clever-logo.svg';
import fit from '../../../shared/assets/images/fit-logo.svg';

import './SignInWindow.scss';

export function SignInWindow() {

    return (
        <div className="signInWindow">
            <div className="logo">
                <img src={clever} alt="" />
                <img src={fit} alt="" />
            </div>
            <div className="signInAndRegisterLinks">
                <Link to={RoutePaths.Auth}>Вход</Link>
                <Link to={RoutePaths.Registration}>Регистрация</Link>
            </div>
            <Login />
        </div>
    )
}