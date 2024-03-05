import { useEffect, useState } from "react";
import { Modal, Rate } from "antd";

import { Button, Loader } from "@components/index";

import { publishComment, retryWrite } from "../model/write-comment-model";
import { useCreateCommentMutation, useLazyUpdateCommentsQuery } from "../api/write-comment-api";
import { switcher } from "@utils/index";
import { CommentType } from "../../../shared/types";

import filledStar from '../../../shared/assets/icons/star-icon.svg';
import emptyStar from '../../../shared/assets/icons/empty-star-icon.svg';
import close from '../../../shared/assets/icons/close-icon.svg';
import warningRed from '../../../shared/assets/icons/warning-red-icon.svg';
import success from '../../../shared/assets/icons/success-icon.svg';

import './WriteComment.scss';
import { useAppSelector } from "@store/hooks";

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
    const [updateComments, { isSuccess: isUpdateCommentsSuccess, data }] = useLazyUpdateCommentsQuery();
    const token = useAppSelector((state) => (state.saveToken));

    var stars: number[] = [1, 2, 3, 4, 5];

    useEffect(() => {
        if (isError) {
            setIsErrorModalOpen(true);
        }
        if (isCreateCommentSuccess) {
            setIsSuccessModalOpen(true);
            updateComments(token);

            if (data !== undefined && isUpdateCommentsSuccess) {
                sortComments(data, setComments, isAllView);
            }

            setMessage('');
            setRating(0);
        }
    }, [isError, isCreateCommentSuccess]);

    return (
        <>
            <Button
                className="writeComment"
                dataTestId="write-review"
                onClickHandler={() => (switcher(isWriteModalOpen, setIsWriteModalOpen))}
                title="Написать отзыв" />
            {isLoading && <Loader />}
            {(isWriteModalOpen) && <div className="blur">
                <Modal className="writeCommentModal" open={isWriteModalOpen} width={539}>
                    <div className="titleAndCloseButton">
                        <h2 className="title">Ваш отзыв</h2>
                        <Button
                            image={close}
                            onClickHandler={() => (switcher(isWriteModalOpen, setIsWriteModalOpen))} />
                    </div>
                    <hr />
                    <div className="starsAndTextarea">
                        <ul className="stars">
                            {stars.map((star) => (
                                <li key={Math.random()} className={(rating >= star) ? 'ant-rate-star-full' : 'ant-rate-star'}>
                                    <Button
                                        image={(rating >= star) ? filledStar : emptyStar}
                                        onClickHandler={() => (setRating(star))} />
                                </li>
                            ))}
                            {/* <Rate /> */}
                        </ul>
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
                </Modal>
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