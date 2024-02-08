import { Button } from "@components/index";

import signOut from '../../../shared/assets/images/sign-out-icon.svg'

interface SignOutProps {
    isOpen: boolean
}

export default function SignOut({ isOpen }: SignOutProps) {

    return (
        <Button title={(isOpen) ? 'Выход' : ''} image={signOut} />
    )
}