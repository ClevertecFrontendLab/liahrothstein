import { Button } from "@components/index";

import './CardAction.scss';

interface CardActionProps {
    className: string,
    buttonImage: string,
    buttonTitle: string,
    cardTitle: string,
    onClick?: () => void
}

export function CardAction({ buttonImage, buttonTitle, cardTitle, className, onClick }: CardActionProps) {

    return (
        <article className="cardAction">
            <h2 className="title">{cardTitle}</h2>
            <hr />
            <Button
                className={className}
                onClickHandler={onClick}
                image={buttonImage}
                title={buttonTitle} />
        </article>
    )
}