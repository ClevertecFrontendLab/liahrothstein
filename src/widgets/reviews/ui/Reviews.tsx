import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

import { Button } from "@components/index";
import { Comment } from "@entities/index";
import { WriteComment } from "@features/write-comment";

import { CommentType } from "../../../shared/types";
import { sortComments } from "../model/reviews-model";
import switcher from "@utils/switcher";

import './Reviews.scss';

export function Reviews() {
    const { state } = useLocation();
    const [isAllView, setIsAllView] = useState<boolean>(false);
    const [isNoComments, setIsNoComments] = useState<boolean>(false);
    const [comments, setComments] = useState<CommentType[]>(state);

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