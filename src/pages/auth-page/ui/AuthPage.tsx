import { SignInWindow } from "@widgets/index";

import './AuthPage.scss';

export function AuthPage() {

    return (
        <div className="authPage">
            <div className="blur">
                <SignInWindow />
            </div>
        </div>
    )
}