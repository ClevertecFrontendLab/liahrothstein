import type { SidebarMenu } from "../types";

import calendar from '../assets/images/calendar-menu-icon.svg';
import heart from '../assets/images/heart-menu-icon.svg';
import achievements from '../assets/images/achievements-menu-icon.svg';
import profile from '../assets/images/profile-menu-icon.svg';

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