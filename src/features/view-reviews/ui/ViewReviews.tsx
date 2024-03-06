import { useEffect } from "react";
import { push } from "redux-first-history";

import { Button, Loader } from "@components/index";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useLazyGetReviewsQuery } from "../api/view-reviews-api";
import { isErrorForbidden } from "../model/view-reviews-model";
import { RoutePaths } from '../../../shared/types';
import { setError } from "@utils/get-reviews-error-slice";

import './ViewReviews.scss';

export function ViewReviews() {
    const [getReviews, { isError, isLoading, isSuccess, data, error }] = useLazyGetReviewsQuery();
    const token = useAppSelector((state) => (state.saveToken));
    const dispatch = useAppDispatch();

    let errorStatus = error?.status;

    useEffect(() => {
        if (isSuccess) {
            dispatch(push(RoutePaths.Feedbacks, data))
        }
    }, [isSuccess]);

    useEffect(() => {
        if ((isError) && (errorStatus === 403)) {
            isErrorForbidden(dispatch)
        }
        if ((isError) && (errorStatus !== 403)) {
            dispatch(push(RoutePaths.Feedbacks, []))
            dispatch(setError(true))
        }
    }, [isError]);

    return (
        <>
            {isLoading && <Loader />}
            <Button
                title={'Смотреть отзывы'}
                dataTestId="see-reviews"
                onClickHandler={() => (getReviews(token))} />
        </>
    )
}