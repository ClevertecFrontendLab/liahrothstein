import { ErrorWindow } from "@widgets/index";

import './ErrorPage.scss';

export default function ErrorPage() {

    return (
        <div className="errorPage">
            <div className="blur">
                <ErrorWindow />
            </div>
        </div>
    )
}