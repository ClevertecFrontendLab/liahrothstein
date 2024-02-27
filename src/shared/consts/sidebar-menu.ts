import type { SidebarMenu } from "../types";

import calendar from '../assets/icons/calendar-menu-icon.svg';
import heart from '../assets/icons/heart-menu-icon.svg';
import achievements from '../assets/icons/achievements-menu-icon.svg';
import profile from '../assets/icons/profile-menu-icon.svg';

export const sidebarMenu: SidebarMenu[] = [
    {
        buttonImage: calendar,
        buttonTitle: 'Календарь'
    },
    {
        buttonImage: heart,
        buttonTitle: 'Тренировки'
    },
    {
        buttonImage: achievements,
        buttonTitle: 'Достижения'
    },
    {
        buttonImage: profile,
        buttonTitle: 'Профиль'
    }
]