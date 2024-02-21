export interface ButtonProps {
    className?: string,
    image: string,
    title: string,
    disabled: boolean,
    onClickHandler: (() => void) | undefined
}