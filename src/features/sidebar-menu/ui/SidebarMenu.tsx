import { Button } from '@components/index';
import { sidebarMenu } from '@constants/index';

import './SidebarMenu.scss';

interface SidebarMenuProps {
    isOpen: boolean
}

export default function SidebarMenu({ isOpen }: SidebarMenuProps) {

    return (
        <div className="sidebarMenu">
            {sidebarMenu.map((e) => (
                <Button
                    key={e.buttonTitle}
                    title={(isOpen) ? e.buttonTitle : ''}
                    image={e.buttonImage}
                    disabled={false}
                    onClickHandler={undefined} />
            ))}
        </div>
    )
}