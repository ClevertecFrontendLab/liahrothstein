import { Dispatch } from "@reduxjs/toolkit";
import { CommentType } from "../../../shared/types";
import { push } from "redux-first-history";
import { setError } from "@utils/get-reviews-error-slice";

export function sortComments(comments: CommentType[], setComments: (comments: CommentType[]) => void, isAllView: boolean): void {
    function compare(a: CommentType, b: CommentType) {
        let dateA: number = Date.parse(a.createdAt);
        let dateB: number = Date.parse(b.createdAt);

        if (dateA > dateB) {
            return (-1)
        } else if (dateA === dateB) {
            return (0)
        } else {
            return (1)
        }
    };

    let sortedComments: CommentType[] = comments.sort(compare);
    let lastFourComments: CommentType[] = sortedComments.slice(0, 4);

    if (isAllView) {
        setComments(sortedComments)
    } else {
        setComments(lastFourComments)
    }
}

export function backToMainGetReviewsError(dispatch: Dispatch) {
    dispatch(setError(false));
    dispatch(push('/main'));
}