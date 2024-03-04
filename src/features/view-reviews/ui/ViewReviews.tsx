import { useEffect, useState } from "react";
import { push } from "redux-first-history";

import { Button, Loader } from "@components/index";

import { useAppDispatch } from "@store/hooks";
import { useLazyGetReviewsQuery } from "../api/view-reviews-api";
import { isErrorForbidden } from "../model/view-reviews-model";
import { RoutePaths } from '../../../shared/types';

import errorImage from '../../../shared/assets/images/error-image.svg';

import './ViewReviews.scss';

export function ViewReviews() {
    const [getReviews, { isError, isLoading, isSuccess, data, error }] = useLazyGetReviewsQuery();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) {
            dispatch(push(RoutePaths.Feedbacks, data))
        }
    }, [isSuccess]);

    useEffect(() => {
        if ((isError) && (error?.status === 403)) {
            isErrorForbidden(dispatch)
        }
        if ((isError) && (error?.status !== 403)) {
            setIsModalOpen(true)
        }
    }, [isError]);

    return (
        <>
            {isLoading && <Loader />}
            {isModalOpen && <div className="blur">
                <div className="errorViewReviewsWindow">
                    <img src={errorImage} alt="" />
                    <div className="description">
                        <p className="title">Что-то пошло не так</p>
                        <p className="subtitle">Произошла ошибка, попробуйте ещё раз.</p>
                    </div>
                    <Button
                        title='Назад'
                        onClickHandler={() => (setIsModalOpen(false))} />
                </div>
            </div>}
            <Button
                title={'Смотреть отзывы'}
                dataTestId="see-reviews"
                onClickHandler={() => (getReviews(undefined))} />
        </>
    )
}