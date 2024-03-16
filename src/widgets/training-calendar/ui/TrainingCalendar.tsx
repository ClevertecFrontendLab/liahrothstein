import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'antd';
import locale from 'antd/es/calendar/locale/ru_RU';
import moment from 'moment';
import type { Moment } from 'moment';

import { Loader } from '@components/index';
import { CalendarCell } from '@entities/index';

import { useLazyGetTrainingListQuery } from '../api/training-calendar-api';
import { useAppSelector } from '@store/hooks';
import { onPanelChangeDay, onSelectDay } from '../model/training-calendar-model';

import './TrainingCalendar.scss';

export function TrainingCalendar() {
    const { state } = useLocation();
    const [day, setDay] = useState<Moment>(() => (moment()));
    const [selectedDay, setSelectedDay] = useState<Moment>(() => (moment()));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [getTrainingList, { data, isLoading, isSuccess, isError }] = useLazyGetTrainingListQuery();
    const token = useAppSelector((state) => (state.saveToken));

    useEffect(() => {
        getTrainingList(token);
    }, []);

    console.log(selectedDay);
    console.log(selectedDay?.format('DD.MM.YYYY'));

    function dateCellRender() {
        let listData = state;

        return (
            <CalendarCell
                trainings={listData}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedDay={selectedDay} />
        );
    };

    return (
        <>
            {isLoading && <Loader />}
            <Calendar
                locale={locale}
                value={day}
                dateCellRender={dateCellRender}
                onSelect={(newDay) => (onSelectDay(newDay, setDay, setSelectedDay))}
                onPanelChange={(newDay) => (onPanelChangeDay(newDay, setDay))} />
        </>
    )
}