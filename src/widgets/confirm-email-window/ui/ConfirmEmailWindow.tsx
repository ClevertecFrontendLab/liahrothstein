import { useState } from "react";

import { ConfirmEmail } from "@features/index";

import warningBlue from '../../../shared/assets/icons/warning-blue-icon.svg';
import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';

import './ConfirmEmailWindow.scss';

interface ConfirmEmailWindowProps {
    email: string
}

export default function ConfirmEmailWindow({ email }: ConfirmEmailWindowProps) {
    const [isError, setIsError] = useState<boolean>(false);

    return (
        <div className={(isError) ? "confirmEmailWindow error" : "confirmEmailWindow"}>
            <img src={(isError) ? warningRed : warningBlue} alt="" className="warn" />
            <div className="description">
                {(isError) ?
                    <p className="title">
                        Неверный код. Введите код
                        для восстановления аккауанта
                    </p> :
                    <p className="title">
                        Введите код<br />
                        для восстановления аккауанта
                    </p>}
                <p className="subtitle">
                    Мы отправили вам на e-mail <strong>{email}</strong><br />
                    шестизначный код. Введите его в поле ниже.
                </p>
            </div>
            <ConfirmEmail setIsConfirmEmailError={setIsError} />
            <p className="subtitle">
                Не пришло письмо? Проверьте папку Спам.
            </p>
        </div>
    )
}