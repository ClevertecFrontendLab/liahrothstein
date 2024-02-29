export function setBreadCrumbs(location: string): string {
    switch (location) {
        case '/feedbacks':
            return ('Отзывы пользователей');
            break;
        default:
            return ('')
    }
}