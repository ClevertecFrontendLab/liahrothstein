import { useEffect, useState } from "react";

import { Button, Loader } from "@components/index";

import { publishComment, retryWrite, updateComments } from "../model/write-comment-model";
import { useCreateCommentMutation } from "../api/write-comment-api";
import { switcher } from "@utils/index";
import { CommentType } from "../../../shared/types";

import filledStar from '../../../shared/assets/icons/star-icon.svg';
import emptyStar from '../../../shared/assets/icons/empty-star-icon.svg';
import close from '../../../shared/assets/icons/close-icon.svg';
import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';
import success from '../../../shared/assets/icons/success-icon.svg';

import './WriteComment.scss';

interface WriteCommentProps {
    sortComments: (comments: CommentType[], setComments: (comments: CommentType[]) => void, isAllView: boolean) => void,
    setComments: (comments: CommentType[]) => void,
    isAllView: boolean,
    state: any
}

export function WriteComment({ sortComments, setComments, isAllView, state }: WriteCommentProps) {
    const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [createComment, { isError, isSuccess: isCreateCommentSuccess, isLoading }] = useCreateCommentMutation();

    var stars: number[] = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (isError) {
            setIsErrorModalOpen(true);
        }
        if (isCreateCommentSuccess) {
            setIsSuccessModalOpen(true);
            sortComments([updateComments(rating, message), ...state], setComments, isAllView);
            setMessage('');
            setRating(0);
        }
    }, [isError, isCreateCommentSuccess])

    return (
        <>
            <Button
                className="writeComment"
                dataTestId="write-review"
                onClickHandler={() => (switcher(isWriteModalOpen, setIsWriteModalOpen))}
                title="Написать отзыв" />
            {isLoading && <Loader />}
            {(isWriteModalOpen) && <div className="blur">
                <div className="writeCommentModal">
                    <div className="titleAndCloseButton">
                        <h2 className="title">Ваш отзыв</h2>
                        <Button
                            image={close}
                            onClickHandler={() => (switcher(isWriteModalOpen, setIsWriteModalOpen))} />
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
                            dataTestId="new-review-submit-button"
                            onClickHandler={async () => (await publishComment(message, rating, createComment, setIsWriteModalOpen))} />
                    </div>
                </div>
            </div>}
            {isErrorModalOpen && <div className="blur">
                <div className="errorModal">
                    <img src={warningRed} alt="" />
                    <div className="description">
                        <p className="title">Данные не сохранились</p>
                        <p className="subtitle">Что-то пошло не так. Попробуйте ещё раз.</p>
                    </div>
                    <div className="buttons">
                        <Button
                            title='Написать отзыв'
                            dataTestId="write-review-not-saved-modal"
                            onClickHandler={() => (retryWrite(setIsErrorModalOpen, setIsWriteModalOpen))} />
                        <Button
                            title='Закрыть'
                            onClickHandler={() => (setIsErrorModalOpen(false))} />
                    </div>
                </div>
            </div>}
            {isSuccessModalOpen && <div className="blur">
                <div className="successModal">
                    <img src={success} alt="" />
                    <p className="title">Отзыв успешно опубликован</p>
                    <Button
                        title='Отлично'
                        onClickHandler={() => (setIsSuccessModalOpen(false))} />
                </div>
            </div>}
        </>
    )
}