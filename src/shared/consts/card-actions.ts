import type { CardAction } from "../types";

import heart from '../assets/icons/heart-icon-card-action.svg';
import calendar from '../assets/icons/calendar-icon-card-action.svg';
import profile from '../assets/icons/profile-icon-card-action.svg';

export const cardActions: CardAction[] = [
    {
        buttonImage: heart,
        buttonTitle: 'Тренировки',
        cardTitle: 'Расписать тренировки'
    },
    {
        buttonImage: calendar,
        buttonTitle: 'Календарь',
        cardTitle: 'Назначить календарь'
    },
    {
        buttonImage: profile,
        buttonTitle: 'Профиль',
        cardTitle: 'Заполнить профиль'
    }
]