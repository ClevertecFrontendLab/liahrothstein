import type { CardAction } from "../types";

import heart from '../assets/images/heart-icon-card-action.svg';
import calendar from '../assets/images/calendar-icon-card-action.svg';
import profile from '../assets/images/profile-icon-card-action.svg';

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