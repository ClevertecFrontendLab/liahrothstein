interface FormInputProps {
    inputType: string,
    inputValue: string,
    inputName: string,
    inputPlaceholder: string,
    dispatch: ((password: string) => void),
    errorDispatch: ((isError: boolean) => void),
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>, dispatch: (password: string) => void, errorDispatch: (isError: boolean) => void) => void
}

export default function FormInput({ inputType, inputValue, inputName, inputPlaceholder, dispatch, errorDispatch, onChangeHandler }: FormInputProps) {

    return (
        <input
            type={inputType}
            value={inputValue}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={(e) => (onChangeHandler(e, dispatch, errorDispatch))} />
    )
}