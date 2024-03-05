import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

import { Button } from "@components/index";
import { Comment } from "@entities/index";
import { WriteComment } from "@features/write-comment";

import { CommentType } from "../../../shared/types";
import { backToMainGetReviewsError, sortComments } from "../model/reviews-model";
import switcher from "@utils/switcher";
import { useAppDispatch, useAppSelector } from "@store/hooks";

import errorImage from '../../../shared/assets/images/error-image.svg';

import './Reviews.scss';

export function Reviews() {
    const { state } = useLocation();
    const [isAllView, setIsAllView] = useState<boolean>(false);
    const [isNoComments, setIsNoComments] = useState<boolean>(false);
    const [comments, setComments] = useState<CommentType[]>(state);
    const isError = useAppSelector((state) => (state.getReviewsError));
    const dispatch = useAppDispatch();

    useEffect(() => {
        sortComments(state, setComments, isAllView);
    }, [isAllView]);

    useEffect(() => {
        if (comments.length === 0) {
            setIsNoComments(true);
        }
    }, [comments]);

    return (
        <section className={(isNoComments) ? "reviews noComments" : "reviews"}>
            {(!isNoComments) && comments.map((comment: CommentType) => (
                <Comment
                    key={comment.id}
                    avatar={comment.imageSrc}
                    fullName={comment.fullName}
                    rating={comment.rating}
                    createdAt={comment.createdAt}
                    message={comment.message} />
            ))}
            {(isNoComments) &&
                <article className="writeFirstComment">
                    <h2 className="title">Оставьте свой отзыв первым</h2>
                    <p className="subtitle">Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.<br />Поделитесь своим мнением и опытом с другими пользователями,<br />и помогите им сделать правильный выбор.</p>
                </article>}
            {isError && <div className="blur">
                <div className="errorViewReviewsWindow">
                    <img src={errorImage} alt="" />
                    <div className="description">
                        <p className="title">Что-то пошло не так</p>
                        <p className="subtitle">Произошла ошибка, попробуйте ещё раз.</p>
                    </div>
                    <Button
                        title='Назад'
                        onClickHandler={() => (backToMainGetReviewsError(dispatch))} />
                </div>
            </div>}
            <div className="buttons">
                <WriteComment
                    sortComments={sortComments}
                    setComments={setComments}
                    isAllView={isAllView}
                    state={state} />
                {(!isNoComments) && <Button
                    className="allView"
                    title={(isAllView) ? 'Свернуть все отзывы' : "Развернуть все отзывы"}
                    dataTestId="all-reviews-button"
                    onClickHandler={() => (switcher(isAllView, setIsAllView))} />}
            </div>
        </section>
    )
}