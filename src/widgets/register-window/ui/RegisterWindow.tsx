import { Link } from "react-router-dom";

import { Registration } from "@features/index";

import { RoutePaths } from "../../../shared/types";

import clever from '../../../shared/assets/images/clever-logo.svg';
import fit from '../../../shared/assets/images/fit-logo.svg';

import './RegisterWindow.scss';

export function RegisterWindow() {

    return (
        <div className="registerWindow">
            <div className="logo">
                <img src={clever} alt="" />
                <img src={fit} alt="" />
            </div>
            <div className="signUpAndRegisterLinks">
                <Link to={RoutePaths.Auth}>Вход</Link>
                <Link to={RoutePaths.Registration}>Регистрация</Link>
            </div>
            <Registration />
        </div>
    )
}