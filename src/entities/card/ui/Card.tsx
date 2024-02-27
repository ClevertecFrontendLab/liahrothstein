import './Card.scss';

interface CardProps {
    cardTitle: string
}

export function Card({ cardTitle }: CardProps) {

    return (
        <article className="card">
            <h2 className="title">{cardTitle}</h2>
        </article>
    )
}