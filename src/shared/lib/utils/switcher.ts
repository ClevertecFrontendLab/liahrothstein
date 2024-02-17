export default function switcher(value: boolean, dispatch: (value: boolean) => void): void {
    dispatch(!value)
}