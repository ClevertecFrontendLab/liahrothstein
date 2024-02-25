import { ChangePassword } from "@features/index";

import './PasswordRecoveryWindow.scss';

export default function PasswordRecoveryWindow() {

    return (
        <div className="passwordRecoveryWindow">
            <h1 className="title">Восстановление аккауанта</h1>
            <ChangePassword />
        </div>
    )
}