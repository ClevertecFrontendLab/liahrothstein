import type { FormInputProps } from '../../types';

export function FormInput({ inputType, inputValue, inputName, inputPlaceholder, dispatch, errorDispatch, onBlurHandler, setDirty, onChangeHandler, dataTestId }: FormInputProps) {

    return (
        <input
            type={inputType}
            value={inputValue}
            name={inputName}
            placeholder={inputPlaceholder}
            onBlur={(e) => (onBlurHandler(e, setDirty))}
            onChange={(e) => (onChangeHandler(e, dispatch, errorDispatch))}
            data-test-id={dataTestId} />
    )
}