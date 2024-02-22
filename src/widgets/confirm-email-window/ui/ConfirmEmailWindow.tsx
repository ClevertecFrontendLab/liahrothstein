import { ConfirmEmail } from "@features/index";

import suggestedIcon from '../../../shared/assets/icons/suggested-icon.svg';

interface ConfirmEmailWindowProps {
    email: string
}

export default function ConfirmEmailWindow({ email }: ConfirmEmailWindowProps) {

    return (
        <div className="confirmEmailWindow">
            <img src={suggestedIcon} alt="" className="warn" />
            <div className="description">
                <p className="title">
                    Введите код<br /> для восстановления аккауанта
                </p>
                <p className="subtitle">
                    Мы отправили вам на e-mail {email}<br />
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