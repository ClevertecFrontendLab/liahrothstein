import { useState } from 'react';

import { SidebarMenu, SignOut, SidebarSwitch } from '@features/index';

import clever from '../../../shared/assets/images/clever-logo.svg';
import fit from '../../../shared/assets/images/fit-logo.svg';

import './Sidebar.scss';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <aside className={(isOpen) ? 'sidebar opened' : 'sidebar closed'}>
            <div className="logo">
                {(isOpen) ?
                    <>
                        <img src={clever} alt="" />
                        <img src={fit} alt="" />
                    </> :
                    <img src={fit} alt="" />
                }
            </div>
            <SidebarMenu isOpen={isOpen} />
            <SignOut isOpen={isOpen} />
            <SidebarSwitch isOpen={isOpen} setIsOpen={setIsOpen} />
        </aside>
    )
}