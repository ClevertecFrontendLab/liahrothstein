import { useEffect } from "react";
import { push } from "redux-first-history";

import { Button, Loader } from "@components/index";

import { useAppDispatch } from "@store/hooks";
import { useLazyGetReviewsQuery } from "../api/view-reviews-api";
import { isErrorForbidden } from "../model/view-reviews-model";
import { RoutePaths } from '../../../shared/types';

export function ViewReviews() {
    const [getReviews, { isError, isLoading, isSuccess, data, error }] = useLazyGetReviewsQuery();
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
    }, [isError]);

    return (
        <>
            {isLoading && <Loader />}
            <Button
                title={'Смотреть отзывы'}
                onClickHandler={() => (getReviews(undefined))} />
        </>
    )
}