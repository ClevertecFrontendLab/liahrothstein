import { useDispatch } from "react-redux";

import { Button } from "@components/index";

import { logOut } from "@utils/index";

import signOut from '../../../shared/assets/icons/sign-out-icon.svg';

import './SignOut.scss';

interface SignOutProps {
    isOpen: boolean
}

export default function SignOut({ isOpen }: SignOutProps) {
    const dispatch = useDispatch();

    return (
        <div className="signOut">
            <Button
                title={(isOpen) ? 'Выход' : ''}
                image={signOut}
                disabled={false}
                onClickHandler={() => (dispatch(logOut()))} />
        </div>
    )
}