import { useLocation } from "react-router-dom";

import { ConfirmEmailWindow } from "@widgets/index";

export default function ConfirmEmailPage() {
    const { state: email } = useLocation();

    return (
        <div className="confirmEmailPage">
            <ConfirmEmailWindow email={email} />
        </div>
    )
}