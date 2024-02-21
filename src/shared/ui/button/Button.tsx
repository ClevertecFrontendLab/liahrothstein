import './Button.scss';

interface ButtonProps {
    className?: string,
    image: string,
    title: string,
    disabled: boolean,
    onClickHandler: (() => void) | undefined
}

export default function Button({ className, image, title, disabled, onClickHandler }: ButtonProps) {

    return (
        <button
            type="button"
            className={className}
            disabled={disabled}
            onClick={(onClickHandler !== undefined) ? (() => (onClickHandler())) : undefined}>
            {(image) && (<img src={image} alt="" />)}
            {(title) && (<p>{title}</p>)}
        </button>
    )
}