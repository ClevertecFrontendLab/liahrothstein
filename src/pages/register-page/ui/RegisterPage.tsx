import { RegisterWindow } from "@widgets/index";

import './RegisterPage.scss';

export function RegisterPage() {

    return (
        <div className="registerPage">
            <div className="blur">
                <RegisterWindow />
            </div>
        </div>
    )
}