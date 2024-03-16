import { Modal } from 'antd';

import { Button } from '@components/index';

import type { Moment } from 'moment';
import type { Training } from '../../../shared/types';

import close from '../../../shared/assets/icons/close-icon.svg';

import './CalendarCell.scss';

interface CalendarCellProps {
    trainings: Training[],
    isModalOpen: boolean,
    setIsModalOpen: (isModalOpen: boolean) => void,
    selectedDay: Moment
}

export function CalendarCell({ trainings, isModalOpen, setIsModalOpen, selectedDay }: CalendarCellProps) {
    let day: string = selectedDay?.format('DD.MM.YYYY');

    return (
        <>
            <ul className="trainigs">
                {trainings.map((item) => (
                    <li key={item.name}>
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
            <Button
                onClickHandler={() => (setIsModalOpen(true))}
                className='openModal' />
            {/* <Modal
                open={isModalOpen}
                onCancel={() => (setIsModalOpen(false))}
                title={`Тренировки на ${day}`}
                footer={<Button
                    className='createTraining'
                    title='Создать тренировку' />} >
                <p>Нет активных тренировок</p>
            </Modal> */}
            {isModalOpen && <div className="modalCreateTraining">
                <div className="titleAndCloseButton">
                    <h4 className="title">{`Тренировки на ${day}`}</h4>
                    <Button
                        image={close}
                        onClickHandler={() => (setIsModalOpen(false))} />
                </div>
                <p>Нет активных тренировок</p>
                <Button
                    className='createTraining'
                    title='Создать тренировку' />
            </div>}
        </>
    )
}