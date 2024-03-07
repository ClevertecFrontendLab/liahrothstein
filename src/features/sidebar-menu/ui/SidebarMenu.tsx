import { Button } from '@components/index';
import { sidebarMenu } from '@constants/index';

import { onClickCheckHandler } from '../model/sidebar-menu-model';
import { useAppDispatch } from '@store/hooks';

import './SidebarMenu.scss';

interface SidebarMenuProps {
    isOpen: boolean
}

export function SidebarMenu({ isOpen }: SidebarMenuProps) {
    const dispatch = useAppDispatch();

    return (
        <div className="sidebarMenu">
            {sidebarMenu.map((e) => (
                <Button
                    key={e.buttonTitle}
                    className={e.className}
                    onClickHandler={onClickCheckHandler(e.className, dispatch)}
                    title={(isOpen) ? e.buttonTitle : ''}
                    image={e.buttonImage} />
            ))}
        </div>
    )
}