import { Button } from "@components/index";
import switcher from "../model/switcher";

import sidebarSwitchOn from '../../../shared/assets/images/sidebar-switch-on-icon.svg';
import sidebarSwitchOff from '../../../shared/assets/images/sidebar-switch-off-icon.svg';

import './SidebarSwitch.scss';

interface SidebarSwitchProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

export default function SidebarSwitch({ isOpen, setIsOpen }: SidebarSwitchProps) {

    return (
        <div
            className="sidebarSwitch"
            data-test-id={(document.body.clientWidth > 360) ? 'sider-switch' : 'sider-switch-mobile'}>
            <Button
                image={(isOpen) ? sidebarSwitchOn : sidebarSwitchOff}
                title=""
                onClickHandler={() => (switcher(setIsOpen, isOpen))} />
        </div>
    )
}