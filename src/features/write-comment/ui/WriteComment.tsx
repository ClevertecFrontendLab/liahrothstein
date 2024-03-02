import { useState } from "react";

import { Button } from "@components/index";

import { useCreateCommentMutation } from "../api/write-comment-api";
import { switcher } from "@utils/index";

import filledStar from '../../../shared/assets/icons/star-icon.svg';
import emptyStar from '../../../shared/assets/icons/empty-star-icon.svg';
import close from '../../../shared/assets/icons/close-icon.svg';

import './WriteComment.scss';

export function WriteComment() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [createComment, { }] = useCreateCommentMutation();

    var stars: number[] = [1, 2, 3, 4, 5];

    return (
        <>
            <Button
                className="writeComment"
                onClickHandler={() => (switcher(isModalOpen, setIsModalOpen))}
                title="Написать отзыв" />
            {(isModalOpen) &&
                <div className="blur">
                    <div className="writeCommentModal">
                        <div className="titleAndCloseButton">
                            <h2 className="title">Ваш отзыв</h2>
                            <Button
                                image={close}
                                onClickHandler={() => (switcher(isModalOpen, setIsModalOpen))} />
                        </div>
                        <hr />
                        <div className="starsAndTextarea">
                            <div className="stars">
                                {stars.map((star) => (
                                    <Button
                                        key={Math.random()}
                                        image={(rating >= star) ? filledStar : emptyStar}
                                        onClickHandler={() => (setRating(star))} />
                                ))}
                            </div>
                            <textarea
                                placeholder="Autosize height based on content lines"
                                value={message}
                                onChange={(e) => (setMessage(e.target.value))} />
                        </div>
                        <hr />
                        <div className="publishButton">
                            <Button
                                title="Опубликовать"
                                className="publish"
                                onClickHandler={async () => (await createComment({ message: message, rating: rating }))} />
                        </div>
                    </div>
                </div>}
        </>
    )
}