export function setRegisterDirtyInputs(event: React.FocusEvent<HTMLInputElement, Element>, dispatch: (isDirty: boolean) => void) {
    switch (event.target.name) {
        case 'email':
            dispatch(true);
            break;
        case 'firstPassword':
            dispatch(true);
            break;
        case 'secondPassword':
            dispatch(true);
            break;
    }
}