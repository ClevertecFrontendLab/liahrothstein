import { Card } from "@entities/index";
import { CardActions } from "@features/index";

import { cards } from "@constants/index";

import './Cards.scss';

export function Cards() {

    return (
        <section className="cards">
            {cards.map((e) => (
                <Card key={e.cardTitle} cardTitle={e.cardTitle} />
            ))}
            <CardActions />
        </section>
    )
}