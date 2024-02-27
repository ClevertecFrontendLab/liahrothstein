import { Link } from "react-router-dom";

import { Login } from "@features/index";

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
                <Link to={'/auth'}>Вход</Link>
                <Link to={'/auth/registration'}>Регистрация</Link>
            </div>
            <Login />
        </div>
    )
}