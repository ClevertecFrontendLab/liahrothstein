interface InputProps {
    inputType: string,
    inputValue: string,
    inputName: string,
    inputPlaceholder: string,
    onChangeHandler: (inputValue: string) => void
}

export default function Input({ inputType, inputValue, inputName, inputPlaceholder, onChangeHandler }: InputProps) {

    return (
        <input
            type={inputType}
            value={inputValue}
            name={inputName}
            placeholder={inputPlaceholder}
            onChange={(e) => (onChangeHandler(e.target.value))} />
    )
}