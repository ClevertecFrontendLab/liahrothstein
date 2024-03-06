import { Button } from "@components/index";

import { useAppDispatch } from "@store/hooks";
import { onClickLogOut } from "../model/sign-out-model";

import signOut from '../../../shared/assets/icons/sign-out-icon.svg';

import './SignOut.scss';

interface SignOutProps {
    isOpen: boolean
}

export function SignOut({ isOpen }: SignOutProps) {
    const dispatch = useAppDispatch();

    return (
        <div className="signOut">
            <Button
                title={(isOpen) ? 'Выход' : ''}
                image={signOut}
                onClickHandler={() => (onClickLogOut(dispatch))} />
        </div>
    )
}