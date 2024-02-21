export interface FormInputProps {
    inputType: string,
    inputValue: string,
    inputName: string,
    inputPlaceholder: string,
    dispatch: (password: string) => void,
    errorDispatch: (isError: boolean) => void,
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>, dispatch: (password: string) => void, errorDispatch: (isError: boolean) => void) => void,
    setDirty: (isDirty: boolean) => void,
    onBlurHandler: (event: React.FocusEvent<HTMLInputElement, Element>, dispatch: (isDirty: boolean) => void) => void
}