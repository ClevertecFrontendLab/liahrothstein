export default function switcher(dispatch: (value: boolean) => void, value: boolean):void {
    dispatch(!value)
}