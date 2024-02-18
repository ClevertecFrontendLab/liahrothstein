import { Link } from "react-router-dom";

import { Registration } from "@features/index";

import clever from '../../../shared/assets/images/clever-logo.svg';
import fit from '../../../shared/assets/images/fit-logo.svg';

export default function RegisterWindow() {

    return (
        <div className="registerWindow">
            <div className="logo">
                <img src={clever} alt="" />
                <img src={fit} alt="" />
            </div>
            <div className="signUpAndRegisterLinks">
                <Link to={'/auth'}>Вход</Link>
                <Link to={'/auth/registration'}>Регистрация</Link>
            </div>
            <Registration />
        </div>
    )
}