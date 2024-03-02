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
    const [comments, setComments] = useState<CommentType[]>(state);

    useEffect(() => {
        sortComments(state, setComments, isAllView);
    }, [isAllView]);

    return (
        <section className="reviews">
            {comments.map((comment: CommentType) => (
                <Comment
                    key={comment.id}
                    avatar={comment.imageSrc}
                    fullName={comment.fullName}
                    rating={comment.rating}
                    createdAt={comment.createdAt}
                    message={comment.message} />
            ))}
            <div className="buttons">
                <WriteComment />
                <Button
                    className="allView"
                    title={(isAllView) ? 'Свернуть все отзывы' : "Развернуть все отзывы"}
                    onClickHandler={() => (switcher(isAllView, setIsAllView))} />
            </div>
        </section>
    )
}