var windowWidth: number = document.body.clientWidth;

export function imageConditionalRendering(image: string): string {
    if ((windowWidth >= 1024) || (windowWidth <= 815)) {
        return (image)
    } else {
        return ('')
    }
}

export function titleConditionalRendering(): string {
    if (windowWidth >= 815) {
        return ('Настройки')
    } else {
        return ('')
    }
}