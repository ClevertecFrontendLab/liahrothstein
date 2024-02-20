export function updateValues(inputRefs: React.RefObject<HTMLInputElement>[], setValues: (value: string[]) => void) {
    const arr = [] as string[];
    inputRefs.forEach((ref) => {
        arr.push(ref.current ? ref.current.value : '');
    });
    setValues(arr);
};

export function onChangeHandler(inputNumber: number, inputRefs: React.RefObject<HTMLInputElement>[], setValues: (value: string[]) => void) {
    return (
        () => {
            const inputRef = inputRefs[inputNumber];
            if (!inputRef || !inputRef.current) {
                return;
            }
            inputRef.current.value = inputRef.current.value.replace(/[^0-9]/g, '');
            if (inputRef.current.value.length >= 2) {
                const position = inputRef.current.selectionStart || 0;
                inputRef.current.value = inputRef.current.value.slice(
                    position - 1,
                    position
                );
            }
            if (inputNumber < length - 1 && inputRef.current.value.length === 1) {
                inputRefs[inputNumber + 1].current?.focus();
            }
            updateValues(inputRefs, setValues);
        }
    )
} 