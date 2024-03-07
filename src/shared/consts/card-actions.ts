import type { CardAction } from "../types";

import heart from '../assets/icons/heart-icon-card-action.svg';
import calendar from '../assets/icons/calendar-icon-card-action.svg';
import profile from '../assets/icons/profile-icon-card-action.svg';

export const cardActions: CardAction[] = [
    {
        className: 'heart',
        buttonImage: heart,
        buttonTitle: 'Тренировки',
        cardTitle: 'Расписать тренировки'
    },
    {
        className: 'calendar',
        buttonImage: calendar,
        buttonTitle: 'Календарь',
        cardTitle: 'Назначить календарь'
    },
    {
        className: 'profile',
        buttonImage: profile,
        buttonTitle: 'Профиль',
        cardTitle: 'Заполнить профиль'
    }
]