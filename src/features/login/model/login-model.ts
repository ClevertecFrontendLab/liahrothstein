export function setAuthDirtyInputs(event: React.FocusEvent<HTMLInputElement, Element>, dispatch: (isDirty: boolean) => void) {
    switch (event.target.name) {
        case 'email':
            dispatch(true);
            break;
        case 'password':
            dispatch(true);
            break;
    }
}