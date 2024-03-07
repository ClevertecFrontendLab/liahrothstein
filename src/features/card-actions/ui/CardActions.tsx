import { CardAction } from '@entities/index';

import { cardActions } from '@constants/index';

import './CardActions.scss';

export function CardActions() {

    return (
        <div className="cardActions">
            {cardActions.map((e) => (
                <CardAction
                    key={e.buttonTitle}
                    className={e.className}
                    buttonTitle={e.buttonTitle}
                    buttonImage={e.buttonImage}
                    cardTitle={e.cardTitle} />
            ))}
        </div>
    )
}