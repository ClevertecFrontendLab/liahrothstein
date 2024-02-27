export function setChangePasswordDirtyInputs(event: React.FocusEvent<HTMLInputElement, Element>, dispatch: (isDirty: boolean) => void) {
    switch (event.target.name) {
        case 'firstPassword':
            dispatch(true);
            break;
        case 'secondPassword':
            dispatch(true);
            break;
        default:
            dispatch(false);
    }
}