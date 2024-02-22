import { useLocation } from "react-router-dom";

import { ConfirmEmailWindow } from "@widgets/index";

import './ConfirmEmailPage.scss';

export default function ConfirmEmailPage() {
    const { state: email } = useLocation();

    return (
        <div className="confirmEmailPage">
            <div className="blur">
                <ConfirmEmailWindow email={email} />
            </div>
        </div>
    )
}