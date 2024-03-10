import { useEffect } from 'react';
import { push } from 'redux-first-history';

import { CardAction } from '@entities/index';
import { Loader } from '@components/index';

import { useLazyGetTrainingsQuery } from '../api/card-actions-api';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { RoutePaths } from '../../../shared/types';

import heart from '../../../shared/assets/icons/heart-icon-card-action.svg';
import calendar from '../../../shared/assets/icons/calendar-icon-card-action.svg';
import profile from '../../../shared/assets/icons/profile-icon-card-action.svg';

import './CardActions.scss';

export function CardActions() {
    const [getTrainings, { isLoading, isError, isSuccess, data }] = useLazyGetTrainingsQuery();
    const token = useAppSelector((state) => (state.saveToken));
    const dispatch = useAppDispatch();

    useEffect(() => {
        if ((isSuccess) && (data !== undefined)) {
            dispatch(push(RoutePaths.Calendar, data))
        }
    }, [isSuccess]);


    return (
        <div className="cardActions">
            {isLoading && <Loader />}
            <CardAction
                className='heart'
                buttonTitle='Тренировки'
                buttonImage={heart}
                cardTitle='Расписать тренировки' />
            <CardAction
                className='calendar'
                buttonTitle='Календарь'
                buttonImage={calendar}
                cardTitle='Назначить календарь'
                onClick={async () => { await getTrainings(token) }} />
            <CardAction
                className='profile'
                buttonTitle='Профиль'
                buttonImage={profile}
                cardTitle='Заполнить профиль' />
        </div>
    )
}