export function validateEmail(event: React.ChangeEvent<HTMLInputElement>, dispatch: (email: string) => void, errorDispatch: (isError: boolean) => void): void {
    dispatch(event.target.value);

    var re: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(event.target.value).toLowerCase())) {
        errorDispatch(true)
    } else {
        errorDispatch(false)
    }
}

export function validatePassword(event: React.ChangeEvent<HTMLInputElement>, dispatch: (password: string) => void, errorDispatch: (isError: boolean) => void): void {
    dispatch(event.target.value);

    var re: RegExp = /^(?=.*?[0-9])(?=.*[A-Z]).{8,}$/;

    if ((!re.test(String(event.target.value).toLowerCase())) && (event.target.value.length < 8)) {
        errorDispatch(true)
    } else {
        errorDispatch(false)
    }
}

export function comparePasswords(firstPassword: string, secondPassword: string): boolean {
    if (firstPassword === secondPassword) {
        return (false)
    } else {
        return (true)
    }
}