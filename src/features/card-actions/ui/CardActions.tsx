import { CardAction } from '@entities/index'

import { cardActions } from '@constants/index'

export default function CardActions() {

    return (
        <div className="cardActions">
            {cardActions.map((e) => (
                <CardAction
                    key={e.buttonTitle}
                    buttonTitle={e.buttonTitle}
                    buttonImage={e.buttonImage}
                    cardTitle={e.cardTitle} />
            ))}
        </div>
    )
}