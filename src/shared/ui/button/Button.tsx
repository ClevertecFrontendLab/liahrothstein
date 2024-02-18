import './Button.scss';

interface ButtonProps {
    image: string,
    title: string,
    disabled: boolean,
    onClickHandler: (() => void) | undefined
}

export default function Button({ image, title, disabled, onClickHandler }: ButtonProps) {

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={(onClickHandler !== undefined) ? (() => (onClickHandler())) : undefined}>
            {(image) && (<img src={image} alt="" />)}
            {(title) && (<p>{title}</p>)}
        </button>
    )
}