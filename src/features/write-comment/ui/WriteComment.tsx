import { useState } from "react";

import { Button } from "@components/index";

import { useCreateCommentMutation } from "../api/write-comment-api";
import { switcher } from "@utils/index";

import filledStar from '../../../shared/assets/icons/star-icon.svg';
import emptyStar from '../../../shared/assets/icons/empty-star-icon.svg';

export function WriteComment() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [createComment, { }] = useCreateCommentMutation();

    var stars: number[] = [1, 2, 3, 4, 5];

    return (
        <>
            <Button
                onClickHandler={() => (switcher(isModalOpen, setIsModalOpen))}
                title="Написать отзыв" />
            {(isModalOpen) ?
                <div className="writeCommentModal">
                    <h2 className="title">Ваш отзыв</h2>
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
                    <Button
                        title="Опубликовать"
                        onClickHandler={async () => (await createComment({ message: message, rating: rating }))} />
                </div> : ''}
        </>
    )
}