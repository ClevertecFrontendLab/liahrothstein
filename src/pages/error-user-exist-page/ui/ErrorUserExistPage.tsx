import { ErrorUserExistWindow } from "@widgets/index";

import './ErrorUserExistPage.scss';

export function ErrorUserExistPage() {

    return (
        <div className="errorUserExistPage">
            <div className="blur">
                <ErrorUserExistWindow />
            </div>
        </div>
    )
}