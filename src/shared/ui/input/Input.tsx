interface InputProps {
    inputType: string,
    inputValue: string,
    onChangeHandler: (value: string) => void
}

export default function Input({ inputType, inputValue, onChangeHandler }: InputProps) {

    return (
        <input
            type={inputType}
            value={inputValue}
            onChange={() => (onChangeHandler)} />
    )
}