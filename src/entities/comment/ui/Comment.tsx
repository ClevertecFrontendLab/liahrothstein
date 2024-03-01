import { CommentProps } from "../../../shared/types";
import { dateParse, ratingStars } from "../model/comment-model";

import userAvatar from '../../../shared/assets/icons/user-avatar.svg';

import './Comment.scss';

export function Comment({ avatar, fullName, rating, createdAt, message }: CommentProps) {

    return (
        <article className="comment">
            <div className="user">
                <img src={(avatar !== null) ? avatar : userAvatar} alt="" />
                <h4 className="userName">{(fullName !== null) ? fullName : 'Пользователь'}</h4>
            </div>
            <div className="ratingDateAndMessage">
                <div className="ratingAndDate">
                    <div className="rating">
                        {ratingStars(rating).map((star) => (
                            <img key={Math.random()} src={star} alt="" />
                        ))}
                    </div>
                    <p className="date">{dateParse(createdAt)}</p>
                </div>
                <p className="message">{message}</p>
            </div>
        </article>
    )
}