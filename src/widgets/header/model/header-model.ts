import { RoutePaths } from '../../../shared/types';

export function setBreadCrumbs(location: string): string {
    switch (location) {
        case RoutePaths.Feedbacks:
            return ('Отзывы пользователей');
            break;
        default:
            return ('')
    }
}