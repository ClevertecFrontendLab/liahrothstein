import { Card } from "@entities/index";
import { CardActions } from "@features/index";

import { cards } from "@constants/index";

export default function Cards() {

    return (
        <section className="cards">
            {cards.map((e) => (
                <Card key={e.cardTitle} cardTitle={e.cardTitle} />
            ))}
            <CardActions />
        </section>
    )
}