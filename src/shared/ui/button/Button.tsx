import './Button.scss';

interface ButtonProps {
    image: string,
    title: string,
    onClickHandler: (() => void) | undefined
}

export default function Button({ image, title, onClickHandler }: ButtonProps) {

    return (
        <button
            type="button"
            onClick={(onClickHandler !== undefined) ? (() => (onClickHandler())) : undefined}>
            {(image) && (<img src={image} alt="" />)}
            {(title) && (<p>{title}</p>)}
        </button>
    )
}