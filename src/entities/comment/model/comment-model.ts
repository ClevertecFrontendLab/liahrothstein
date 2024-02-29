import star from '../../../shared/assets/icons/star-icon.svg';
import emptyStar from '../../../shared/assets/icons/empty-star-icon.svg';

export function ratingStars(rating: number): string[] {
    var array: string[] = [];

    for (var i = 0; i < rating; i++) {
        array.push(star);
    };
    for (var i = 0; i < (5 - rating); i++) {
        array.push(emptyStar)
    };

    return (array)
};

export function dateParse(createdAt: string): string {
    var date: Date = new Date(createdAt);

    return (`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`)
}