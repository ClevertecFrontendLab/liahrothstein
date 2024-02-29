import { CommentProps } from "../../../shared/types";
import { dateParse, ratingStars } from "../model/comment-model";

import userAvatar from '../../../shared/assets/icons/user-avatar.svg'

export function Comment({ avatar, fullName, rating, createdAt, message }: CommentProps) {

    return (
        <article className="comment">
            <div className="user">
                <img src={(avatar !== null) ? avatar : userAvatar} alt="" />
                <h4 className="userName">{fullName}</h4>
            </div>
            <div className="ratingDateAndMessage">
                <div className="ratingAndDate">
                    {ratingStars(rating).map((star) => (
                        <img key={star} src={star} alt="" />
                    ))}
                    <p className="date">{dateParse(createdAt)}</p>
                </div>
                <p className="message">{message}</p>
            </div>
        </article>
    )
}