import { Button } from "@components/index";
import { switcher } from "@utils/index";

import sidebarSwitchOn from '../../../shared/assets/icons/sidebar-switch-on-icon.svg';
import sidebarSwitchOff from '../../../shared/assets/icons/sidebar-switch-off-icon.svg';

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
                disabled={false}
                onClickHandler={() => (switcher(isOpen, setIsOpen))} />
        </div>
    )
}