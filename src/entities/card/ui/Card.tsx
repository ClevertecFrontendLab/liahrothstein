interface CardProps {
    cardTitle: string
}

export default function CardAction({ cardTitle }: CardProps) {

    return (
        <article className="card">
            <h2 className="title">{cardTitle}</h2>
        </article>
    )
}