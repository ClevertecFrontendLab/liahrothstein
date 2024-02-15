import { Button } from "@components/index";

import './CardAction.scss';

interface CardActionProps {
    buttonImage: string,
    buttonTitle: string,
    cardTitle: string
}

export default function CardAction({ buttonImage, buttonTitle, cardTitle }: CardActionProps) {

    return (
        <article className="cardAction">
            <h2 className="title">{cardTitle}</h2>
            <hr />
            <Button
                image={buttonImage}
                title={buttonTitle}
                onClickHandler={undefined} />
        </article>
    )
}