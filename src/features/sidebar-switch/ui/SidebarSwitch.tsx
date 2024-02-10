import { Button } from "@components/index";
import switcher from "../model/switcher";

import sidebarSwitchOn from '../../../shared/assets/images/sidebar-switch-on-icon.svg';
import sidebarSwitchOff from '../../../shared/assets/images/sidebar-switch-off-icon.svg';

interface SidebarSwitchProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

export default function SidebarSwitch({ isOpen, setIsOpen }: SidebarSwitchProps) {

    return (
        <button
            className="sidebarSwitch"
            type="button"
            data-test-id={(document.body.clientWidth > 360) ? 'sider-switch' : 'sider-switch-mobile'}
            onClick={() => switcher(setIsOpen, isOpen)}>
            <Button image={(isOpen) ? sidebarSwitchOn : sidebarSwitchOff} title="" />
        </button>
    )
}