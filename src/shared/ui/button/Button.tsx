interface ButtonProps {
    image: string,
    title: string
}

export default function Button({ image, title }: ButtonProps) {

    return (
        <button type="button">
            <img src={image} alt="" />
            <p>{title}</p>
        </button>
    )
}