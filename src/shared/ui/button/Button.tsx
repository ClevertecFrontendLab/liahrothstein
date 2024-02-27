import type { ButtonProps } from '../../types';

import './Button.scss';

export function Button({ className, image, title, disabled, onClickHandler, dataTestId }: ButtonProps) {

    return (
        <button
            type="button"
            className={className}
            disabled={disabled}
            onClick={onClickHandler}
            data-test-id={dataTestId}>
            {(image) && (<img src={image} alt="" />)}
            {(title) && (<p>{title}</p>)}
        </button>
    )
}