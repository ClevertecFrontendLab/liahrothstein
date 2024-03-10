import { useEffect } from 'react';
import { push } from 'redux-first-history';

import { Button, Loader } from '@components/index';

import { sidebarMenu } from '@constants/index';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useLazyGetTrainingsQuery } from '../api/sidebar-menu-api';
import { RoutePaths } from '../../../shared/types';

import calendar from '../../../shared/assets/icons/calendar-menu-icon.svg';

import './SidebarMenu.scss';

interface SidebarMenuProps {
    isOpen: boolean
}

export function SidebarMenu({ isOpen }: SidebarMenuProps) {
    const [getTrainings, { isLoading, isError, isSuccess, data }] = useLazyGetTrainingsQuery();
    const token = useAppSelector((state) => (state.saveToken));
    const dispatch = useAppDispatch();

    useEffect(() => {
        if ((isSuccess) && (data !== undefined)) {
            dispatch(push(RoutePaths.Calendar, data))
        }
    }, [isSuccess]);

    return (
        <div className="sidebarMenu">
            {isLoading && <Loader />}
            <Button
                className='calendar'
                title='Календарь'
                image={calendar}
                onClickHandler={async () => { await getTrainings(token) }} />
            {sidebarMenu.map((e) => (
                <Button
                    key={e.buttonTitle}
                    className={e.className}
                    title={(isOpen) ? e.buttonTitle : ''}
                    image={e.buttonImage} />
            ))}
        </div>
    )
}