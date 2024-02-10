import './Button.scss';

interface ButtonProps {
    image: string,
    title: string
}

export default function Button({ image, title }: ButtonProps) {

    return (
        <button type="button">
            {(image) && (<img src={image} alt="" />)}
            {(title) && (<p>{title}</p>)}
        </button>
    )
}