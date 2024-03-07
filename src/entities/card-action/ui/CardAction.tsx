import { Button } from "@components/index";

import { onClickCheckHandler } from "../model/card-action-model";
import { useAppDispatch } from "@store/hooks";

import './CardAction.scss';

interface CardActionProps {
    className: string,
    buttonImage: string,
    buttonTitle: string,
    cardTitle: string
}

export function CardAction({ buttonImage, buttonTitle, cardTitle, className }: CardActionProps) {
    const dispatch = useAppDispatch();

    return (
        <article className="cardAction">
            <h2 className="title">{cardTitle}</h2>
            <hr />
            <Button
                className={className}
                onClickHandler={onClickCheckHandler(className, dispatch)}
                image={buttonImage}
                title={buttonTitle} />
        </article>
    )
}