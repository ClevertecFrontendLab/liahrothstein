import { Settings } from "@features/index";

export default function Header() {

    return (
        <header className="header">
            <h6 className="breadCrumbs">Главная</h6>
            <div className="welcomeAndSettings">
                <h1 className="welcome">Приветствуем тебя в CleverFit — приложении,<br />которое поможет тебе добиться своей мечты!</h1>
                <Settings />
            </div>
        </header>
    )
}