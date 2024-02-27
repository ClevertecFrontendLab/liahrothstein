import { ErrorChangePasswordWindow } from "@widgets/index";

import './ErrorChangePasswordPage.scss';

export function ErrorChangePasswordPage() {

    return (
        <div className="errorChangePasswordPage">
            <div className="blur">
                <ErrorChangePasswordWindow />
            </div>
        </div>
    )
}