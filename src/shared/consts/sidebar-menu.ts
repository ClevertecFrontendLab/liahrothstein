import type { SidebarMenu } from "../types";

import heart from '../assets/icons/heart-menu-icon.svg';
import achievements from '../assets/icons/achievements-menu-icon.svg';
import profile from '../assets/icons/profile-menu-icon.svg';

export const sidebarMenu: SidebarMenu[] = [
    {
        className: 'heart',
        buttonImage: heart,
        buttonTitle: 'Тренировки'
    },
    {
        className: 'achievements',
        buttonImage: achievements,
        buttonTitle: 'Достижения'
    },
    {
        className: 'profile',
        buttonImage: profile,
        buttonTitle: 'Профиль'
    }
]