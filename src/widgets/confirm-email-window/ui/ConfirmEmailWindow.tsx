import { ConfirmEmail } from "@features/index";

import warningBlue from '../../../shared/assets/icons/warning-blue-icon.svg';

import './ConfirmEmailWindow.scss';

interface ConfirmEmailWindowProps {
    email: string
}

export default function ConfirmEmailWindow({ email }: ConfirmEmailWindowProps) {

    return (
        <div className="confirmEmailWindow">
            <img src={warningBlue} alt="" className="warn" />
            <div className="description">
                <p className="title">
                    Введите код<br />
                    для восстановления аккауанта
                </p>
                <p className="subtitle">
                    Мы отправили вам на e-mail <strong>{email}</strong><br />
                    шестизначный код. Введите его в поле ниже.
                </p>
            </div>
            <ConfirmEmail />
            <p className="subtitle">
                Не пришло письмо? Проверьте папку Спам.
            </p>
        </div>
    )
}