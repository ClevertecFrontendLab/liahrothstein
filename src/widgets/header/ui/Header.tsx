import { Link, useLocation } from "react-router-dom";

import { Settings } from "@features/index";

import { setBreadCrumbs } from "../model/header-model";
import { RoutePaths } from "../../../shared/types";

import './Header.scss';

export function Header() {
    const { pathname } = useLocation();

    return (
        <header className="header">
            <h6 className="breadCrumbs">
                <Link to={RoutePaths.Main} >{(pathname !== RoutePaths.Main) ? 'Главная / ' : 'Главная'}</Link>
                {setBreadCrumbs(pathname)}
            </h6>
            <div className="welcomeAndSettings">
                {(pathname === RoutePaths.Main) ?
                    <>
                        <h1 className="welcome">Приветствуем тебя в CleverFit — приложении,<br />которое поможет тебе добиться своей мечты!</h1>
                        <Settings />
                    </> :
                    ''}
            </div>
        </header>
    )
}