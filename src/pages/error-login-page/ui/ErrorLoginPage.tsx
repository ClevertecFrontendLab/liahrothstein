import { ErrorLoginWindow } from "@widgets/index";

import './ErrorLoginPage.scss';

export function ErrorLoginPage() {

    return (
        <div className="errorLoginPage">
            <div className="blur">
                <ErrorLoginWindow />
            </div>
        </div>
    )
}