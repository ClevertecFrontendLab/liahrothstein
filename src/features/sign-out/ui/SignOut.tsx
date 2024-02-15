import { Button } from "@components/index";

import signOut from '../../../shared/assets/images/sign-out-icon.svg';

import './SignOut.scss';

interface SignOutProps {
    isOpen: boolean
}

export default function SignOut({ isOpen }: SignOutProps) {

    return (
        <div className="signOut">
            <Button
                title={(isOpen) ? 'Выход' : ''}
                image={signOut}
                onClickHandler={undefined} />
        </div>
    )
}