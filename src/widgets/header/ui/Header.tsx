import { Link, useLocation } from "react-router-dom";

import { Settings } from "@features/index";

import { setBreadCrumbs } from "../model/header-model";
import { RoutePaths } from "../../../shared/types";

import './Header.scss';

export function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <h6 className="breadCrumbs">
                <Link to={RoutePaths.Main} >{(location.pathname !== RoutePaths.Main) ? 'Главная / ' : 'Главная'}</Link>
                {setBreadCrumbs(location.pathname)}
            </h6>
            <div className="welcomeAndSettings">
                {(location.pathname === RoutePaths.Main) ?
                    <>
                        <h1 className="welcome">Приветствуем тебя в CleverFit — приложении,<br />которое поможет тебе добиться своей мечты!</h1>
                        <Settings />
                    </> :
                    ''}
            </div>
        </header>
    )
}